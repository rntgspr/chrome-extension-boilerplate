import { QueryClient } from "@tanstack/react-query";
import { connectContextToExtension } from "query-to-extension";

const queryClient = new QueryClient();

connectContextToExtension(queryClient, {
  connectionName: "chrome-extension-boilerplate-script",
});

export default queryClient;
