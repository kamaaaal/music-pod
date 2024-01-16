import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { createResponse, StatusCode } from "src/utils/Responses";
import { Repository, TypeORMError } from "typeorm";
import { CreateUserDto } from "./dto/createUser.dto";
import { UserEntity } from "./users.entity";
import { hash, compare } from "bcrypt";
import { LoginDto } from "./dto/login.dto";
import { JwtService } from "@nestjs/jwt";
import { CustomValidationException } from "src/common/exceptions/cutom-validation-exception";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
    private jwtService: JwtService,
  ) {}

  public async createUser(createUser: CreateUserDto) {
    try {
      const userObj = this.userRepo.create(createUser);
      // encrypt user password
      userObj.password = await hash(userObj.password, 8);
      await this.userRepo.save(userObj);
      return createResponse(StatusCode.created, "user created successfully");
    } catch (err) {
      if (err instanceof TypeORMError) {
        // if duplicate entry
        if ((err as unknown as { errno: number })?.errno === 19) {
          throw new CustomValidationException(
            { userName: "Username already Exists" },
            401,
          );
        }
      }
    }
  }

  public async getAllUsers() {
    const users = await this.userRepo.find();
    return createResponse(StatusCode.ok, "users fetched successfully", users);
  }

  public async login(loginBody: LoginDto) {
    const { userName, password } = loginBody;
    console.log({ userName, password });

    const userFromDb = await this.userRepo.findOne({
      where: { userName: userName },
    });

    // if now user Found throw err
    if (!userFromDb) {
      throw new UnauthorizedException("No user Found with this name");
    }

    const checkPassword = await compare(password, userFromDb.password);

    // if password doesnt match throw err
    if (!checkPassword) {
      throw new UnauthorizedException("Incorrect Password");
    }

    // if username and password are correct create a jwt and return
    const token = await this.jwtService.signAsync({
      userId: userFromDb.userId,
      userName,
    });

    return createResponse(200, "logged in successfully", { token: token });
  }

  // util functions
  public async getUserByID(userId: string) {
    return await this.userRepo.findOne({ where: { userId } });
  }
}
