import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';

import { ENV_CONSTANTS } from './config';
import { AppModule } from './app.module';

const bootstrapLogger = new Logger('Bootstrap');

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log', 'debug', 'verbose'],
  });
  const configService = app.get(ConfigService);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.setGlobalPrefix('api');
  app.use(helmet());
  app.enableCors();

  const port = Number(configService.get<number>(ENV_CONSTANTS.PORT) ?? 3000);
  const enableSwagger =
    configService.get<string>(ENV_CONSTANTS.ENABLE_SWAGGER) !== 'false';

  if (enableSwagger) {
    const config = new DocumentBuilder()
      .setTitle('TerraWatch API')
      .setDescription('TerraWatch API documentation')
      .setVersion('1.0')
      .addServer(`http://localhost:${port}`, 'Local development')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document);
    bootstrapLogger.log('Swagger documentation enabled at /api/docs');
  } else {
    bootstrapLogger.log('Swagger documentation disabled');
  }

  await app.listen(port);
  bootstrapLogger.log(`Application is running on: http://localhost:${port}`);
}

void bootstrap().catch((error) => {
  bootstrapLogger.error(
    error instanceof Error ? error.message : 'Unexpected bootstrap error',
    error instanceof Error ? error.stack : undefined,
  );
  process.exitCode = 1;
});
