import { ConfigModule } from '@nestjs/config';

import { configApp } from './config.app';
import { configTypeOrm } from './config.typeorm';

export const ConfigCoreModule = ConfigModule.forRoot({
  isGlobal: true,
  envFilePath: ['.env'],
  load: [configApp, configTypeOrm],
});
