import { useEffect } from "react";

import { authUserStore, loaderData } from "../../context/globalContext";

import { getDataLocalStorage } from "../../localstorage/sesionLocalStorage";

import { axiosInstance } from "../../utilities/axiosInstance";

const Initializer = ({ children }) => {
  const { login } = authUserStore();
  const { loadingData, loadingDataComplete } = loaderData();

  useEffect(() => {
    const initializerData = async () => {
      const dataSesion = await getDataLocalStorage();
      if (dataSesion !== null) {

        const token = dataSesion.dataToken.token;

        const config = {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
        // Obtener si el token es valido aun
        try {
          await axiosInstance.get('/api/v2/auth/credentials/', config);
          await login(dataSesion);
        } catch (error) {
          if (error.response.status === 401) {
            loadingDataComplete();
            return;
          }
        }

      }
      loadingDataComplete();
    }
    initializerData();
  }, [loadingData]);



  return children;
};

export default Initializer;
