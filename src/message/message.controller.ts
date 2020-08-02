import { Controller, Get, Body, Post,Req } from '@nestjs/common';
import {MessageDTO} from './message.dto'
import { MessageService } from './message.service';
@Controller('message')
export class MessageController {

    constructor(private messages:MessageService)
    {}

    @Post()
    sendMessage(@Body() message:MessageDTO){
       return this.messages.newMessage(message);
    }

    @Get()
    getMessage(@Req() request:any){
        //console.log(request);
        return this.messages.getLatestMessage();
    }
}
