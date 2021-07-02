import { Controller, Get } from '@nestjs/common';
import { createConnection } from 'typeorm';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    createConnection();
    return this.appService.getHello();
  }
}
