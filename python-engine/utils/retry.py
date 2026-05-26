"""Retry helper for HTTP and network operations."""

import time
from functools import wraps


def retry(times: int = 3, delay: float = 1.0):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            last_exception = None
            for attempt in range(times):
                try:
                    return func(*args, **kwargs)
                except Exception as exc:
                    last_exception = exc
                    time.sleep(delay)
            raise last_exception

        return wrapper

    return decorator
