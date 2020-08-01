import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class ButtonService {
    constructor(private http:HttpService)
    {}
    
    async push()
    {

        await this.http.get(process.env.BUTTON).toPromise();
        return "Pushed Button";
    }
}
