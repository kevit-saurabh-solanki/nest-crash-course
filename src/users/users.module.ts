import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from '../users/user-controller/users.controller';
import { UserService } from './user-service/user.service';
import { UserMiddleware } from './middleware/user.middleware';
import { AnotherMiddleware } from './middleware/another.middleware';

@Module({
  controllers: [UsersController],
  providers: [UserService]
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserMiddleware).forRoutes(
      {
        path: "users",
        method: RequestMethod.GET
      },
      {
        path: 'users/:userId',
        method: RequestMethod.GET
      })
      .apply(AnotherMiddleware).forRoutes(UsersController);
  }
}
