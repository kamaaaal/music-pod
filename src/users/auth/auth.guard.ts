import { CanActivate, ExecutionContext, Inject, Injectable } from "@nestjs/common";
import { UsersService } from "../users.service";
import { Observable } from "rxjs";
import { JwtService } from "@nestjs/jwt";

let index = 0;
@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private userService : UsersService,private jwtService : JwtService){}

    async canActivate(context: ExecutionContext):  Promise<boolean> {
        const httpRequest = context.switchToHttp().getRequest();
        const authToken = httpRequest.headers?.authorization?.split(' ')?.[1];
        // return false when there no auth token 
        if (!authToken) return false;
        const verified = await this.jwtService.verifyAsync(authToken);
        const userId = verified.userId;
        // get user from database
        const userFromDb = await this.userService.getUserByID(userId);
        // return false when there is no user with the details given
        if(!userFromDb) return false;

        if (userFromDb){
            // dont need password
            httpRequest.user = {...userFromDb,password: undefined};
        }
        
        return true;    
    }

}