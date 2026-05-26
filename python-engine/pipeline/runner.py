"""Pipeline runner orchestration for the TerraWatch Python engine."""

from typing import Dict


def run_pipeline(request: Dict[str, str]) -> Dict[str, str]:
    """Placeholder runner that will orchestrate ingestion and detection."""
    return {
        "status": "queued",
        "study_area_id": request.get("study_area_id", ""),
    }
