import axios from "axios";
import { useEffect, useState } from "react";
import Regions from "../Regions";
import ENDPOINTS from "../../utils/constants/endpoints";

const Indonesia = () => {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    getRegional();
  }, [])

  async function getRegional() {
    const response = await axios(ENDPOINTS.GLOBAL);
    setRegions(response.data.regions);
  }

  return (
    <>
      <Regions regions={regions} title="Situation by Region" subtitle="Bacaan Pilihan Covid" />
    </>
  )
}

export default Indonesia;