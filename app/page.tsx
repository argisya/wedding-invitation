"use client";
import { useState } from "react";
import { LandingIntro } from "./landing";
import { LandingGate } from "./landing";
import { LandingMain } from "./landing";

export default function Home() {
  const [page, setPage] = useState<"intro" | "gate" | "main">("intro");
  return (
    <>
    {page === "intro" && <LandingIntro onOpen={() => setPage("gate")} />} 
      {page === "gate" && <LandingGate onFinish={() => setPage("main")} />}
      {page === "main" && <LandingMain onOpen={() => console.log("dibuka")} />} </>
  );
}
