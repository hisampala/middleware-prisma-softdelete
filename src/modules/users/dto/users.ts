import { ApiProperty } from "@nestjs/swagger";
import { Users } from "@prisma/client";

export class User implements Omit<Users, "deleted" | "deleted_date"> {
  @ApiProperty({ type: String })
  id: string;
  @ApiProperty({ type: String })
  first_name: string;
  @ApiProperty({ type: String })
  last_name: string;
  @ApiProperty({ type: String })
  email: string;
}
