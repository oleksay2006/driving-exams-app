import type { RouteDefinition } from "@solidjs/router";
import { lazy } from "solid-js";

const routes: RouteDefinition[] = [
  {
    path: "/",
    component: lazy(() => import("./views/Home"))
  },
  {
    path: "/practice-questions",
    component: lazy(() => import("./views/PracticeQuestions"))
  },
  {
    path: "/road-signs",
    children: [
      {
        path: "/",
        component: lazy(() => import("./views/RoadSigns")),
      },
      {
        path: "/warning-signs",
        component: lazy(() => import("./views/RoadSigns/WarningSigns")),
      },
      {
        path: "/priority-signs",
        component: lazy(() => import("./views/RoadSigns/PrioritySigns")),
      },
    ],
  },
  {
    path: "/test",
    component: lazy(() => import("./views/Test"))
  },
  {
    path: "/study",
    component: lazy(() => import("./views/Study"))
  },
  {
    path: "/test-history",
    component: lazy(() => import("./views/TestHistory"))
  },
  {
    path: "*404",
    component: lazy(() => import("./views/NotFound"))
  }
];

export default routes;
