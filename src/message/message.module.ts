import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { ButtonModule } from 'src/button/button.module';

@Module({
  imports:[ButtonModule],
  providers: [MessageService],
  controllers: [MessageController]
})
export class MessageModule {}
