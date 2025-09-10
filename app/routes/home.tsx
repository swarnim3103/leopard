import { useState, useEffect, use } from "react";
import type { Route } from "./+types/home";
import { Loading } from "../componets/loading";
import { Hero } from "../componets/hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Leopard" },
    { name: "description", content: "Meet the Leopard!" },
  ];
}

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Hero />
      )}
    </div>
  );
}
