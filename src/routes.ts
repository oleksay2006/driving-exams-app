import type { RouteDefinition } from "@solidjs/router";
import { lazy } from "solid-js";

const routes: RouteDefinition[] = [
  {
    path: "/",
    component: lazy(() => import("./views/Home/home"))
  },
  {
    path: "*404",
    component: lazy(() => import("./views/NotFound/not-found"))
  }
];

export default routes;
