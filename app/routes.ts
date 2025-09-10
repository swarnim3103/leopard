import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/game", "pages/game.tsx"),
  route("/leo","pages/leo.tsx"),
] satisfies RouteConfig;
