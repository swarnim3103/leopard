import type { Route } from "./+types/home";
import {Game} from "../componets/game";
import {Hero} from "../componets/hero";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Leopard" },
    { name: "description", content: "Meet the Leopard!" },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />
      <Game />
    </>
  );
}
