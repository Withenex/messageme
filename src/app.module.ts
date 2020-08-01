import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import {ConfigModule} from '@nestjs/config'
import { ButtonModule } from './button/button.module';
import { MessageModule } from './message/message.module';


@Module({
  imports: [ConfigModule.forRoot(), ButtonModule, MessageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
