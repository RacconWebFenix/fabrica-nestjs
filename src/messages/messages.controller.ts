import { Delete, NotFoundException, Put } from '@nestjs/common';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
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
    return this.messageServices.findById(+params.id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }
  @Post()
  create(@Body() message: Message) {
    return this.messageServices.create(message);
  }
  @Put(':id')
  update(@Param() params, @Body() message: Message) {
    return this.messageServices.update(+params.id, message);
  }
  @Delete(':id')
  delete(@Param() params) {
    return this.messageServices.delete(+params.id);
  }
}
