import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { MessageDTO } from './message.dto';
import { ButtonService } from '../button/button.service';
@Injectable()
export class MessageService {
  constructor(private button: ButtonService) {}

  latestMessage: MessageDTO;

  async newMessage(message: MessageDTO) {
    this.latestMessage = message;
    if(await this.button.push()){
      console.log(this.latestMessage);
      return 'Message Updated';
    } else {
      throw new HttpException(
        'Service unavailable',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
      
    }
  }

  getLatestMessage() {
    if (this.latestMessage) {
      let parsedMessage = `${this.latestMessage.sender} Says: ${this.latestMessage.content}`;
      return parsedMessage;
    } else {
      return 'There is currently no message to read';
    }
  }
}
