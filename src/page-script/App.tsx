import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import queryClient from "./queryClient";
import SuperNote from "./SuperNote";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ height: "100vh" }}>
        <SuperNote />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
