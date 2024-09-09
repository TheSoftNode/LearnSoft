import { IsEmail, IsNotEmpty, IsString, MinLength, ValidateIf } from "class-validator";

export class RegisterDto {
    @IsNotEmpty({ message: 'Name is required.' })
    @IsString({ message: 'Name must need to be one string.' })
    readonly name: string;

    @IsNotEmpty({ message: 'Email is required.' })
    @IsEmail({}, { message: 'Email is invalid.' })
    readonly email: string;
  
    @IsNotEmpty({ message: 'Password is required.' })
    @MinLength(8, { message: 'Password must be at least 8 characters.' })
    readonly password: string;
  
    @IsNotEmpty({ message: 'Password is required.' })
    @ValidateIf((o) => o.password === o.confirmPassword)
    @MinLength(8, { message: 'Password must be at least 8 characters.' })
    readonly confirmPassword: string;
}