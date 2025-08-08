import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { createUser } from '../dtos/createUser.dto';

@Injectable()
export class UserPipe implements PipeTransform {
  transform(value: createUser, metadata: ArgumentMetadata) {
    console.log("User pipe executed");
    console.log(value);
    console.log(metadata);

    const parseStringAge = Number(value.age);
    if(isNaN(parseStringAge)) {
      console.log(`age must be anumber`);
      throw new HttpException("the given age is not a number, expected datatype number", HttpStatus.BAD_REQUEST);
    }
    else {
      return { ...value, age: parseStringAge };
    }
  }
}
