import { Injectable } from '@nestjs/common';
import { createUser } from '../dtos/createUser.dto';

@Injectable()
export class UserService {
    private fakeUsers: createUser[] = [
        { _id: 123, name: "will", email: "will@email.com", age: 23 },
        { _id: 124, name: "john", email: "john@email.com", age: 23  },
        { _id: 125, name: "smith", email: "smith@email.com", age: 23  },
        { _id: 126, name: "root", email: "root@email.com", age: 23  },
    ]

    fetchUsers() {
        return this.fakeUsers;
    }

    fetchUserById(id: number) {
        return this.fakeUsers.filter(user => {
            return user._id === id;
        })
    }

    addUser(user: createUser) {
        return this.fakeUsers.push(user)
    }
}
