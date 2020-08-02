import { Injectable, HttpService, HttpException, HttpStatus } from '@nestjs/common';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';

@Injectable()
export class ButtonService {
    constructor(private http:HttpService)
    {}
    
    async push()
    {

        try{
        await this.http.get(process.env.BUTTON).toPromise().then((request)=>{
            console.log(Object.keys(request));
            console.log(request.status)
        });
        return "Pushed Button";
    }catch(err)
    {
        return false;
    }
    }
}
