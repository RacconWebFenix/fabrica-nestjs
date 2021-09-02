import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Message } from './Message';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private messageServices: MessagesService) {}
  @Get()
  findAll() {
    return this.messageServices.findAll();
  }

  @Get(':id')
  findById(@Param() params) {
    return this.messageServices.findById(+params.id);
  }
  @Post()
  create(@Body() message: Message) {
    return this.messageServices.create(message);
  }
}
