"use strict";
/**
 * pnpm hook to modify the dependency graph before installation
 * This is useful for patching dependencies or adding hooks
 */
module.exports = {
  hooks: {
    // Called after the resolution of dependencies
    afterAllResolved: (lockfile, _opts) => lockfile,
  },
};
