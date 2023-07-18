import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThingModule } from './thing/thing.module';

@Module({
  imports: [ThingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
