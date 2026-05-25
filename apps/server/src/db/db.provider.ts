import { Pool } from 'pg';
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import { ConfigService } from '@nestjs/config';

import { ENV_CONSTANTS } from '../config';
import * as schema from './';

export const DRIZZLE = Symbol('DRIZZLE_CLIENT');

export const drizzleProvider = [
  {
    provide: DRIZZLE,
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => {
      const connectionString = configService.get<string>(
        ENV_CONSTANTS.DATABASE_URL,
      );

      if (!connectionString) {
        throw new Error(`${ENV_CONSTANTS.DATABASE_URL} is required`);
      }

      const pool = new Pool({
        connectionString,
        ssl:
          configService.get<string>(ENV_CONSTANTS.DB_SSL) === 'true'
            ? { rejectUnauthorized: false }
            : undefined,
      });

      return drizzle(pool, { schema }) as NodePgDatabase<typeof schema>;
    },
  },
];
