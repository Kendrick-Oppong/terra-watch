import { Module } from '@nestjs/common';
import { ImageryController } from './imagery.controller';
import { ImageryService } from './imagery.service';

@Module({
  controllers: [ImageryController],
  providers: [ImageryService]
})
export class ImageryModule {}
