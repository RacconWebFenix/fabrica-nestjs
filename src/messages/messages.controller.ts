import { Controller, Get, Param } from '@nestjs/common';
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
}
