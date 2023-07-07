import { useState } from "react";
import dataProvinces from "../../utils/constants/provinces";
import Hero from "../../components/Hero";
import ProvinceTable from "../../components/ProvinceTable";
import CovidForm from "../../components/CovidForm";

const Province = () => {
  const [provinces, setProvinces] = useState(dataProvinces.provinces);

  return (
    <>
      <Hero />
      <ProvinceTable provinces={provinces} title="Province" subtitle="Data Covid Berdasarkan Provinsi" />
      <CovidForm provinces={provinces} setProvinces={setProvinces} />
    </>
  )
}

export default Province;