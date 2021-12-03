import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { OwnerModule } from './owner/owner.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    OwnerModule,
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
