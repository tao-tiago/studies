import { Module } from '@nestjs/common';
import { CoreModule } from './core/modules/core.module';

@Module({
  imports: [CoreModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
