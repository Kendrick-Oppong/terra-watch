"""HTTP client for posting pipeline results back to NestJS."""

import os


def post_results(url: str, payload: dict) -> dict:
    """Post change detection results to the backend."""
    # TODO: Implement secure HTTP posting with shared secret.
    return {"status": "sent"}
