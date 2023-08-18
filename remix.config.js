/** @type {import('@remix-run/dev').AppConfig} */
const { createRoutesFromFolders } = require("@remix-run/v1-route-convention");

module.exports = {
  cacheDirectory: "./node_modules/.cache/remix",
  future: {
    v2_dev: true,
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    // v2_routeConvention: true,
  },
  ignoredRouteFiles: ["**/.*", "**/*.test.{js,jsx,ts,tsx}"],
  postcss: true,
  serverModuleFormat: "cjs",
  tailwind: true,
  routes(defineRoutes) {
    // uses the v1 convention, works in v1.15+ and v2
    return createRoutesFromFolders(defineRoutes);
  },
};
