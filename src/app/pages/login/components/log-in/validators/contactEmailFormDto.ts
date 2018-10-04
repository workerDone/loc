import {IsEmail, IsNotEmpty, IsNumberString, IsOptional, IsString, MaxLength} from 'class-validator';

export class ContactEmailFormDto  {
  @IsNotEmpty({ message: '1 The company name must be longer than 15'})
  @MaxLength(6, { message: '2 The company name must be longer than 15'})
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsNumberString()
  phone_number: string;

  @IsOptional()
  @MaxLength(6)
  phone_ext: string;

  @IsNotEmpty()
  @IsString()
  subject: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}