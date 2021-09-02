import { Controller, Get } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private messageServices: MessagesService) {}
  @Get()
  findAll() {
    return this.messageServices.findAll();
  }
}
