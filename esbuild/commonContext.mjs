import dotenv from "dotenv";

dotenv.config();

export default {
  format: "iife",
  platform: "browser",
  bundle: true,
  logLevel: "info",
  preserveSymlinks: true,
  minify: process.env.NODE_ENV !== "development",
  mainFields: ["browser", "module", "main"],
  define: {
    global: "globalThis",
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    EXTENSION_NAME: JSON.stringify(process.env.EXTENSION_NAME),
  },
};
