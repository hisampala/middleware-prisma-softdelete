import { Test, TestingModule } from "@nestjs/testing";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";

describe("UsersService", () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersService],
      providers: [],
    }).compile();

    service = module.get(UsersService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
  let users = new CreateUserDto();
  users.first_name = "Joey";
  users.last_name = "backbool";
  users.email = "Joey@gmail.com";
  describe("create Users", () => {
    it("should onCreate Users", async () => {
      const isCreate = await service.create(users);
      users = isCreate;
    });
  });

  // describe('findAll', () => {
  //   it('should', () => {});
  // });

  // describe('findOne', () => {
  //   it('should', () => {});
  // });

  // describe('update', () => {
  //   it('should', () => {});
  // });

  describe("remove Users", () => {
    it("should onRemove Users", async () => {
      await service.remove(users.id);
    });
  });
});
