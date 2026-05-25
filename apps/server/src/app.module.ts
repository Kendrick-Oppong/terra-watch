import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { ConfigModule } from './config/config.module';
import { CommonModule } from './common/common.module';
import { StudyAreasModule } from './study-areas/study-areas.module';
import { SitesModule } from './sites/sites.module';
import { DetectionsModule } from './detections/detections.module';
import { RiskModule } from './risk/risk.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { ReportsModule } from './reports/reports.module';
import { ImageryModule } from './imagery/imagery.module';
import { PipelineModule } from './pipeline/pipeline.module';
import { AlertsModule } from './alerts/alerts.module';
import { SchedulerModule } from './scheduler/scheduler.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    DbModule,
    ConfigModule,
    CommonModule,
    StudyAreasModule,
    SitesModule,
    DetectionsModule,
    RiskModule,
    AnalyticsModule,
    ReportsModule,
    ImageryModule,
    PipelineModule,
    AlertsModule,
    SchedulerModule,
    HealthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
