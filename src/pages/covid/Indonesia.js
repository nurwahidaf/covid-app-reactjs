import axios from "axios";
import { useEffect, useState } from "react";
import Globals from "../../components/Globals";
import Hero from "../../components/Hero";
import ProvinceTable from "../../components/ProvinceTable";
import ENDPOINTS from "../../utils/constants/endpoints";

const Indonesia = () => {
  const [globals, setGlobals] = useState([]);
  const [provinces, setProvinces] = useState([]);

  useEffect(() => {
    getIndonesia();
    getProvince()
  }, [])

  async function getIndonesia() {
    const response = await axios(ENDPOINTS.INDONESIA);
    setGlobals(response.data.indonesia);
  }

  async function getProvince() {
    const response = await axios(ENDPOINTS.INDONESIA);
    setProvinces(response.data.regions);
  }

  return (
    <>
      <Hero />
      <Globals globals={globals} title="Indonesia Situation" subtitle="Data Covid Berdasarkan Indonesia" />
      <ProvinceTable provinces={provinces} title="Situation by Province" subtitle="Data Covid Berdasarkan Provinsi" />
    </>
  )
}

export default Indonesia;