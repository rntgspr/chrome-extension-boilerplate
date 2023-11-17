import dotenv from "dotenv";

dotenv.config();

export default {
  name: process.env.EXTENSION_NAME,
  version: "0.0.1",
  description: "Extension description",
  manifest_version: 3,
  background: {
    service_worker: "service-worker.bundle.js",
    type: "module",
  },
  action: {
    default_title: "Toggle Popup",
    default_popup: "popup.html",
  },
  content_scripts: [
    {
      matches: ["*://*/*"],
      js: ["page-script.bundle.js"],
    },
  ],
  content_security_policy: {
    // "object-src": "self",
    "script-src":
      "self, unsafe-eval; font-src 'self' https://fonts.gstatic.com/; style-src 'self';",
    // extension_pages: "script-src 'self' 'wasm-unsafe-eval'; object-src 'self';",
    // style-src 'unsafe-inline';
    extension_pages:
      "script-src 'self' 'wasm-unsafe-eval'; object-src 'self'; font-src 'self' https://fonts.gstatic.com/;",
  },
  icons: {
    // 16: "icon-16x16.png",
    // 24: "icon-24x24.png",
    // 32: "icon-32x32.png",
    // 64: "icon-64x64.png",
    // 128: "icon-128x128.png",
  },
  permissions: ["tabs", "storage", "identity"],
  host_permissions: ["*://localost/"],
  externally_connectable: {
    matches: ["*://*/*"],
  },
  web_accessible_resources: [
    {
      resources: ["assets/*"],
      matches: ["*://*/*"],
      use_dynamic_url: true,
    },
    // {
    //   resources: ["*.woff"],
    //   matches: [
    //     "https://fonts.gstatic.com/*",
    //     "https://github.githubassets.com/*",
    //   ],
    //   use_dynamic_url: true,
    // },
  ],
  key: process.env.KEY ? process.env.KEY : undefined,
};
