"""Temporary storage management for TerraWatch Python engine."""

import os


def cleanup_scene(target_path: str) -> None:
    """Remove temporary scene files after processing."""
    if os.path.exists(target_path):
        if os.path.isdir(target_path):
            for root, dirs, files in os.walk(target_path, topdown=False):
                for name in files:
                    os.remove(os.path.join(root, name))
                for name in dirs:
                    os.rmdir(os.path.join(root, name))
            os.rmdir(target_path)
        else:
            os.remove(target_path)
