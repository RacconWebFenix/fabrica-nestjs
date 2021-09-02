import { Delete, NotFoundException, Put } from '@nestjs/common';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Message } from './Message';
import { MessageDto } from './MessageDto';
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
  create(@Body() messageDto: MessageDto) {
    return this.messageServices.create(messageDto);
  }
  @Put(':id')
  update(@Param() params, @Body() messageDto: MessageDto) {
    return this.messageServices.update(+params.id, messageDto).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }
  @Delete(':id')
  delete(@Param() params) {
    return this.messageServices.delete(+params.id).catch((e) => {
      throw new NotFoundException(e.message);
    });;
  }
}
