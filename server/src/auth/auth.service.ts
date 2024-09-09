import { BadRequestException, Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { User } from 'src/users/schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AuthService
{

  constructor(@InjectModel(User.name) private readonly UserModel: Model<User>) { }

  async register(registerDto: RegisterDto): Promise<User>
  {
    const { email } = registerDto;

    const checkEmail = await this.UserModel.findOne({ email });

    if (checkEmail)
    {
      throw new BadRequestException('User already exist with this email!');
    }

    const user = await this.UserModel.create(registerDto)

    return user;
  }

  findAll()
  {
    return `This action returns all auth`;
  }

  findOne(id: number)
  {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto)
  {
    return `This action updates a #${id} auth`;
  }

  remove(id: number)
  {
    return `This action removes a #${id} auth`;
  }
}
