import axios from "axios";
import { useEffect, useState } from "react";
import Globals from "../Globals";
import ENDPOINTS from "../../utils/constants/endpoints";

const Indonesia = () => {
  const [globals, setGlobals] = useState([]);

  useEffect(() => {
    getGlobal();
  }, [])

  async function getGlobal() {
    const response = await axios(ENDPOINTS.GLOBAL);
    setGlobals(response.data.global);
  }

  return (
    <>
      <Globals globals={globals} title="Global Situation" subtitle="Data Covid Berdasarkan Global" />
    </>
  )
}

export default Indonesia;