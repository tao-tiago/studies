import { ConfigType, registerAs } from '@nestjs/config';

export const configApp = registerAs('app', () => ({
  port: Number(process.env.PORT || 3001),
  api: {
    prefix: process.env.GLOBAL_PREFIX || 'api',
  },
  cors: {
    isEnabled: true,
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  },
}));

export const APP_CONFIG_KEY = configApp.KEY;
export type ConfigApp = ConfigType<typeof configApp>;
