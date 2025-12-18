import { Injectable } from '@nestjs/common';

export type UserRole = 'admin' | 'user';

export interface Users{
    userid:number;
    name:string;
    email:string;
    passwordHash:string;
    role:UserRole;
}

@Injectable()
export class UsersService {
    private users:Users[]=[
        {userid:1, name:'John Doe', email:'',role:'admin', passwordHash:'hash1'},
        {userid:2, name:'Jane Smith', email:'',role:'user', passwordHash:'hash2'},
        {userid:3, name:'Alice Johnson', email:'',role:'user', passwordHash:'hash3'},
    ]

    findAll():Users[]{
        return this.users;
    }

    findOne(idOrname:number|string):Users | undefined{
        return this.users.find(
            u => u.userid ===idOrname || u.name ===idOrname
        );
    }


}
