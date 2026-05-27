import { ConfigService } from "@nestjs/config";
import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import { ENV_CONSTANTS } from "../config/env.constants";
import { imageryScenes, pipelineRuns } from "./schema/imagery.schema";
import { alerts, auditLog, reports } from "./schema/reports.schema";
import {
  communities,
  contaminationEvents,
  riskZones,
  riverNetwork,
} from "./schema/risk.schema";
import { detections, miningSites } from "./schema/sites.schema";
import { studyAreas } from "./schema/study-areas.schema";

const schema = {
  imageryScenes,
  pipelineRuns,
  alerts,
  auditLog,
  reports,
  communities,
  contaminationEvents,
  riskZones,
  riverNetwork,
  detections,
  miningSites,
  studyAreas,
};

export const DRIZZLE = Symbol("DRIZZLE_CLIENT");

export const drizzleProvider = [
  {
    provide: DRIZZLE,
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => {
      const connectionString = configService.get<string>(
        ENV_CONSTANTS.DATABASE_URL
      );

      if (!connectionString) {
        throw new Error(`${ENV_CONSTANTS.DATABASE_URL} is required`);
      }

      const pool = new Pool({
        connectionString,
        ssl:
          configService.get<string>(ENV_CONSTANTS.DB_SSL) === "true"
            ? { rejectUnauthorized: false }
            : undefined,
      });

      return drizzle(pool, { schema }) as NodePgDatabase<typeof schema>;
    },
  },
];
