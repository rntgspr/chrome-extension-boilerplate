import fs from "fs/promises";

export default function (manifest, ...params) {
  return {
    name: "plugin:manifest",
    setup(build) {
      build.onEnd(() => {
        const start = performance.now();
        console.log("Starting building manifest.json");

        const filename = `${build.initialOptions.outdir}/manifest.json`;
        console.log("Creating manifest: ", filename);
        fs.writeFile(filename, JSON.stringify(manifest, null, 2));

        console.log("Build finished in", performance.now() - start, "ms");
      });
    },
  };
}
