import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  {
    path: "",
    file: "layouts/app-shell.tsx",
    children: [
      index("routes/home.tsx"),
      route("other", "routes/other.tsx"),
    ],
  },
] satisfies RouteConfig;
