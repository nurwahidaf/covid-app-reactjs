import Hero from "../components/Hero";
import RegionSituation from "../components/RegionSituation";
import { useState } from "react";
import dataIndonesia from "../utils/constants/indonesia";
import GlobalSituation from "../components/GlobalSituation";

function Home() {
  const [globals, setGlobals] = useState(dataIndonesia.indonesia);
  const [regions, setRegions] = useState([]);

  return (
    <>
      <Hero />
      <GlobalSituation globals={globals} setGlobals={setGlobals} />
      <RegionSituation regions={regions} setRegions={setRegions} />
    </>
  );
}

export default Home;