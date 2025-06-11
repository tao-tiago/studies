import { Module } from '@nestjs/common';

import { ConfigCoreModule } from '@/core/config/config.module';
import { ConfigOrmModule } from './typeorm/typeorm.module';

@Module({
  imports: [ConfigCoreModule, ConfigOrmModule],
})
export class CoreModule {
  async setup() {}
}
