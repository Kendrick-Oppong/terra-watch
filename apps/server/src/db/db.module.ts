import { Module, Global } from '@nestjs/common';
import { drizzleProvider, DRIZZLE } from './db.provider';

@Global()
@Module({
  providers: [...drizzleProvider],
  exports: [DRIZZLE],
})
export class DbModule {}
