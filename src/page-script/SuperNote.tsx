import React, { useRef, useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { QUERY_COUNTER, QUERY_DATA } from "../queryIds";

const SuperNote = () => {
  const client = useQueryClient();

  const queryData = useQuery({
    queryKey: [...QUERY_DATA, { from: "script" }],
    initialData: 0,
  });
  const queryCounter = useQuery({
    queryKey: [...QUERY_COUNTER, { from: "script" }],
    initialData: 0,
  });

  return (
    <h1
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        background: "#fff",
        padding: "10px",
      }}
    >
      {`SuperNote --//-- ${queryCounter.data} --//-- ${
        queryData?.data
          ? new Date(queryData?.data as number).toISOString()
          : null
      }`}
    </h1>
  );
};

export default SuperNote;
