import {
  type CallHandler,
  type ExecutionContext,
  Injectable,
  Logger,
  type NestInterceptor,
} from "@nestjs/common";
import type { Observable } from "rxjs";
import { tap } from "rxjs/operators";

const logger = new Logger("LoggingInterceptor");

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(
    _context: ExecutionContext,
    next: CallHandler
  ): Observable<unknown> {
    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() => logger.log(`Request completed in ${Date.now() - now}ms`))
      );
  }
}
