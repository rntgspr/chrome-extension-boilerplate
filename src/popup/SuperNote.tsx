import React, { useRef, useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { QUERY_COUNTER, QUERY_DATA } from "../queryIds";
import { context } from "esbuild";

const SuperNote = () => {
  const ref = useRef<NodeJS.Timeout>();
  const [tick, setTick] = useState(0);

  const client = useQueryClient();

  const queryData = useQuery({
    queryKey: [...QUERY_DATA, { from: "popup" }],
    initialData: -1,
  });
  const queryCounter = useQuery({
    queryKey: [...QUERY_COUNTER, { from: "popup" }],
    initialData: -1,
  });

  const mutation = useMutation<any, any, any>({
    onSuccess(data) {
      console.log("useMutation", data);
    },
  });

  useEffect(() => {
    if (!ref.current) {
      ref.current = setInterval(() => {
        setTick(Math.random());
      }, 1000);
    }
    return () => {
      if (ref.current !== undefined) {
        // clearInterval(ref.current);
      }
    };
  }, [ref.current]);

  useEffect(() => {
    console.log("fetching...");
    queryData.refetch();
    mutation.mutate({ dex: 22 });
  }, [tick]);

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
      SuperNote
      {queryData?.data}
      counter: {queryCounter.data as number}
    </h1>
  );
};

export default SuperNote;
