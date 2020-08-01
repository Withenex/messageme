import { Module, HttpModule } from '@nestjs/common';
import { ButtonController } from './button.controller';
import { ButtonService } from './button.service';

@Module({
  imports:[HttpModule],
  controllers: [ButtonController],
  providers: [ButtonService],
  exports: [ButtonService]
})
export class ButtonModule {}
