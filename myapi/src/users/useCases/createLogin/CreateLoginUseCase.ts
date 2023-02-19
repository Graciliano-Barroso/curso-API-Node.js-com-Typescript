import { inject, injectable } from "tsyringe";
import { compare } from "bcryptjs";
import jwtConfig from "@config/auth";
import { AppError } from "@shared/errors/AppError";
import { User } from "@users/entities/User";
import { IUsersRepository } from "@users/repositories/IUsersRepository";
import { sign } from "jsonwebtoken";

type CreateLoginDTO = {
  email: string;
  password: string;
};

type IResponse = {
  user: User;
  token: string;
};

@injectable()
export class CreateLoginUseCase {
  constructor(
    @inject("UsersRepository") private usersRespository: IUsersRepository,
  ) {}

  async execute({ email, password }: CreateLoginDTO): Promise<IResponse> {
    const user = await this.usersRespository.findByEmail(email);
    if (!user) {
      throw new AppError("Incorrect email ou password combination", 401);
    }
    const passwordConfirmed = await compare(password, user.password);
    if (!passwordConfirmed) {
      throw new AppError("Incorrect email ou password combination", 401);
    }
    const token = sign({}, jwtConfig.jwt.secret, {
      subject: user.id,
      expiresIn: jwtConfig.jwt.expiresIn,
    });
    return {
      user,
      token,
    };
  }
}
