import { Module } from '@nestjs/common';
import { StudyAreasController } from './study-areas.controller';
import { StudyAreasService } from './study-areas.service';

@Module({
  controllers: [StudyAreasController],
  providers: [StudyAreasService]
})
export class StudyAreasModule {}
