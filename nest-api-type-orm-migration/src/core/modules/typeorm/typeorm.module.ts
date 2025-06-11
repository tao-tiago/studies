/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { TypeOrmModule } from '@nestjs/typeorm';
import { configTypeOrm } from '@/core/config/config.typeorm';

export const ConfigOrmModule = TypeOrmModule.forRootAsync(
  configTypeOrm.asProvider(),
);
