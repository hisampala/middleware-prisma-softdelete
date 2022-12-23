import { Injectable } from "@nestjs/common";
import { Users } from "@prisma/client";
import { PrismaService } from "src/base";
import { excludeSelect } from "src/base/function";

import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersService {
  constructor(private context: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    return excludeSelect(
      await this.context.users.create({ data: createUserDto }),
      ["deleted", "deleted_date"],
    );
  }

  async findAll() {
    return await (
      await this.context.users.findMany({
        select: {
          deleted: false,
        },
      })
    ).map((item: Users) => excludeSelect(item, ["deleted", "deleted_date"]));
  }

  async findOne(id: string) {
    const user = await this.context.users.findFirst({ where: { id: id } });
    if (!user) return null;
    return excludeSelect(user, ["deleted", "deleted_date"]);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return excludeSelect(
      await this.context.users.update({
        where: { id: id },
        data: updateUserDto,
      }),
      ["deleted", "deleted_date"],
    );
  }
  async remove(id: string) {
    return excludeSelect(
      await this.context.users.delete({
        where: { id: id },
      }),
      ["deleted", "deleted_date"],
    );
  }
}
