import { Module } from '@nestjs/common';
import { HiiragiModule } from './modules/hiiragi.module';

@Module({
  imports: [
    HiiragiModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
