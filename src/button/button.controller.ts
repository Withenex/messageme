import { Controller, Get } from '@nestjs/common';
import { ButtonService } from './button.service';

@Controller('button')
export class ButtonController {

    constructor(private button:ButtonService)
    {}

    @Get()
    async pushButton(){
        console.log("Button")
        return await this.button.push();
        
    }
}
