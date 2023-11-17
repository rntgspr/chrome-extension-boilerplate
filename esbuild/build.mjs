import esbuild from "esbuild";
import dotenv from "dotenv";
import inlineWorkerPlugin from "esbuild-plugin-inline-worker";
import copy from "esbuild-plugin-copy";

import watcher from "./watcher.mjs";
import commonContext from "./commonContext.mjs";
import manifest from "./manifest.mjs";
import esbuildPluginManifest from "./esbuildPluginManifest.mjs";

dotenv.config();

(async () => {
  const staticContext = await esbuild.context({
    ...commonContext,
    outdir: "./dist",
    plugins: [
      copy({
        resolveFrom: "cwd",
        assets: {
          from: ["./src/static/*"],
          to: ["./dist"],
        },
        watch: true,
      }),
      esbuildPluginManifest(manifest),
    ],
  });

  const popupContext = await esbuild.context({
    ...commonContext,
    entryPoints: ["./src/popup/index.tsx"],
    outfile: "./dist/popup.bundle.js",
  });

  const pageScriptContext = await esbuild.context({
    ...commonContext,
    entryPoints: ["./src/page-script/index.tsx"],
    outfile: "./dist/page-script.bundle.js",
  });

  const serviceWorkerContext = await esbuild.context({
    ...commonContext,
    entryPoints: ["./src/service-worker/index.ts"],
    outfile: "./dist/service-worker.bundle.js",
    plugins: [inlineWorkerPlugin(), copy({})],
  });

  await watcher(pageScriptContext);
  await watcher(serviceWorkerContext);
  await watcher(popupContext);
  await watcher(staticContext);
})();
