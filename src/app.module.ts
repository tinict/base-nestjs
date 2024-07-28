import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  DatabaseModule,
  IdentityModule,
} from './app';
import { FistoreModule } from './app/fistore/fistore.module';

@Module({
  imports: [
    IdentityModule,
    DatabaseModule,
    FistoreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
