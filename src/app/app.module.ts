import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VenomController } from '../venom/venom.controller'

@Module({
  imports: [],
  controllers: [AppController, VenomController],
  providers: [AppService],
})
export class AppModule {}
