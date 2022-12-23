import { ApiProperty } from "@nestjs/swagger";
import { Users } from "@prisma/client";

export class CreateUserDto implements Users {
  id: string;
  @ApiProperty({ type: String })
  first_name: string;
  @ApiProperty({ type: String })
  last_name: string;
  @ApiProperty({ type: String })
  email: string;
  deleted: boolean;
  deleted_date: Date;
}
