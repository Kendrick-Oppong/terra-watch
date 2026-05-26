from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Any, Dict, List, Optional

app = FastAPI(title="TerraWatch Python Engine")

class RunRequest(BaseModel):
    study_area_id: str
    start_date: str
    end_date: str
    callback_url: Optional[str] = None

class ReportRequest(BaseModel):
    report_id: str
    site_ids: List[str]
    date_from: str
    date_to: str

@app.get("/health")
async def health() -> Dict[str, Any]:
    return {"status": "ok", "service": "python-engine"}

@app.post("/run")
async def run_pipeline(request: RunRequest) -> Dict[str, Any]:
    # Placeholder endpoint. Implement the pipeline orchestration in pipeline/runner.py.
    return {
        "status": "accepted",
        "study_area_id": request.study_area_id,
        "start_date": request.start_date,
        "end_date": request.end_date,
    }

@app.post("/report")
async def generate_report(request: ReportRequest) -> Dict[str, Any]:
    # Placeholder endpoint. Implement report generation in reports/generator.py.
    return {
        "status": "accepted",
        "report_id": request.report_id,
        "site_ids": request.site_ids,
    }
