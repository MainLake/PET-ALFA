import { useEffect } from "react";

import { authUserStore, loaderData } from "../../context/globalContext";

import { getDataLocalStorage } from "../../localstorage/sesionLocalStorage";

const Initializer = ({ children }) => {
  const { login } = authUserStore();
  const { loadingData, loadingDataComplete } = loaderData();

  useEffect(() => {

    const initializerData = async () => {
      const dataSesion = await getDataLocalStorage();
      console.log(dataSesion);
      if (dataSesion !== null) {
        await login(dataSesion);
      }
      loadingDataComplete();
    }

    initializerData();

  }, [loadingData]);



  return children;
};

export default Initializer;
