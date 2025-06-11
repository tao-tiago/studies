/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ConfigType, registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig({ path: '.env' });

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  schema: process.env.DB_SCHEMA,
  ssl: false,
  synchronize: true, // Set to true only in development
  autoLoadEntities: true,
  entities: [__dirname + '/../database/entities/entities.ts'],
  migrations: [__dirname + '/../database/migrations/*.ts'],
};

export const configTypeOrm = registerAs<TypeOrmModuleOptions>(
  'typeorm',
  (): TypeOrmModuleOptions => config,
);

export const CONFIG_TYPE_ORM_KEY = configTypeOrm.KEY;

export type ConfigTypeOrm = ConfigType<typeof configTypeOrm>;

export const connectionSource = new DataSource(config as DataSourceOptions);

export default configTypeOrm;
