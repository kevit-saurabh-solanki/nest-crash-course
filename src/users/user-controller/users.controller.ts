import { Body, Controller, Get, Param, ParseIntPipe, Post, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import type { Request, Response } from 'express';
import { createUser } from '../dtos/createUser.dto';
import { UserService } from '../user-service/user.service';

@Controller('users')
export class UsersController {
    constructor(private userServicve: UserService) {};

    @Get()
    getUsers() {
        return this.userServicve.fetchUsers();
    }

    // @Post('/addUser')
    // addUser(@Req() request: Request, @Res() response: Response) {
    //     console.log(request.body);
    //     response.send("Created");
    // }

    @Post('/addUser')
    @UsePipes(new ValidationPipe)
    addUser(@Body() createdUser: createUser) {
        return this.userServicve.addUser(createdUser);
    }

    @Get('/:userId')
    getUserById(@Param('userId', ParseIntPipe) userId: number) {
        return this.userServicve.fetchUserById(userId);
    }
}
