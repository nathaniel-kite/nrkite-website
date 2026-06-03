import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  {
    path: "",
    file: "layouts/app-shell.tsx",
    children: [
      index("routes/home.tsx"),
      route("tech", "routes/tech.tsx"),
      route("language", "routes/language.tsx"),
      route("music", "routes/music.tsx"),
      route("writing", "routes/writing.tsx")
    ],
  },
] satisfies RouteConfig;
