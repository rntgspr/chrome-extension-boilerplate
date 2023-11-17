import { registerQueriesMap } from "query-to-extension";

import { QUERY_COUNTER, QUERY_DATA } from "../queryIds";

import serviceData from "./serviceData";
import serviceCounter from "./serviceCounter";
import mutationFn from "./mutationFn";

const queriesMap = [
  {
    queryKey: QUERY_DATA,
    listenerFn: serviceData,
    broadcast: true,
  },
  {
    queryKey: QUERY_COUNTER,
    listenerFn: serviceCounter,
    broadcast: true,
  },
] as Parameters<typeof registerQueriesMap>[0];

registerQueriesMap(queriesMap, mutationFn);
