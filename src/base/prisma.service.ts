import { Injectable, OnModuleInit } from "@nestjs/common";

import { PrismaClient } from "@prisma/client";
import { modelIsSoftDelete } from "./constant";
export class softdelete {
  deleted: boolean;
  deleted_date: Date;
}
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$use(async (params, next) => {
      if (modelIsSoftDelete.find((m) => m === params.model) === params.model) {
        if (params.action === "delete") {
          params.action = "update";
          params.args["data"] = {
            deleted: true,
            deleted_date: new Date(),
          } as softdelete;
        }
        if (params.action === "findMany") {
          if (params.args["where"]) {
            params.args["where"]["deleted"] = false;
          } else {
            params.args = {};
            params.args["where"] = { deleted: false };
          }
        } else if (params.action === "findFirst") {
          params.args["where"]["deleted"] = false;
        }
        return next(params);
      } else {
        return next(params);
      }
    });
    await this.$connect();
  }
}
