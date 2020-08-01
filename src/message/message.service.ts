import { Injectable } from '@nestjs/common';
import {MessageDTO} from './message.dto';
import {ButtonService} from '../button/button.service';
@Injectable()
export class MessageService {

    constructor(private button:ButtonService)
    {}

    latestMessage:MessageDTO;

    newMessage(message:MessageDTO)
    {
        this.latestMessage = message;
        this.button.push();
        return "Message Updated"
    }

    getLatestMessage()
    {
        if(this.latestMessage)
        {
        let parsedMessage = `${this.latestMessage.sender} Says: ${this.latestMessage.content}`;
        return parsedMessage;
        }
        else
        {
            return "There is currently no message to read"
        }
    }
}
