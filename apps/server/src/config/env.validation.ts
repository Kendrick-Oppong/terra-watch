import { plainToInstance } from 'class-transformer';
import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  Max,
  Min,
  validateSync,
} from 'class-validator';

export enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
}

class EnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV!: Environment;

  @IsNumber()
  @Min(1)
  @Max(65535)
  PORT!: number;

  @IsUrl()
  DATABASE_URL!: string;

  @IsOptional()
  @Matches(/^(true|false)$/)
  DB_SSL?: string;

  @IsOptional()
  @IsUrl()
  FRONTEND_URL?: string;

  @IsOptional()
  @IsString()
  PYTHON_ENGINE_URL?: string;

  @IsOptional()
  @Matches(/^(true|false)$/)
  ENABLE_SWAGGER?: string;
}

export function validateEnv(
  config: Record<string, unknown>,
): EnvironmentVariables {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    const errorMessages = errors
      .map((error) => Object.values(error.constraints ?? {}).join(', '))
      .join('\n');

    throw new Error(`Environment validation failed:\n${errorMessages}`);
  }

  return validatedConfig;
}
