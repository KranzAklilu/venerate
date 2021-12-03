import { Controller, Get } from '@nestjs/common';
import { OwnerService } from 'src/owner/owner.service';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(
    private readonly service: CatsService,
    private readonly service2: OwnerService,
  ) {}
  @Get()
  findAll(): any {
    return this.service.createCats('ksjdf');
  }
}
