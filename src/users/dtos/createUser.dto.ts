import { IsEmail, IsNotEmpty, isNotEmpty, IsNumber, IsString } from "class-validator";

export class createUser {

    @IsNotEmpty()
    @IsNumber()
    _id: number;

    @IsNotEmpty()
    @IsString()
    name: String;

    @IsNotEmpty()
    @IsEmail()
    email: String;
}