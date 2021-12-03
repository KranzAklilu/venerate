import { Controller, Get } from '@nestjs/common';
import { OwnerService } from './owner.service';

@Controller('owner')
export class OwnerController {
  constructor(private readonly service: OwnerService) {}
  @Get()
  owner(): string {
    return this.service.ownerHello();
  }
}
