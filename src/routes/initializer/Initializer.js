import { useEffect } from "react";
import { useUserContext } from "../../context/contextUser/ContextUser";

const Initializer = ({ children }) => {
  const { dispatch } = useUserContext();

  console.log("Dentro de inicializador");

  useEffect(() => {
    const usuario = JSON.parse(window.localStorage.getItem("userPET"));
    if(usuario !== null) {
      dispatch({type: "LOGIN", payload: usuario.token});
    }
  }, []);



  return children;
};

export default Initializer;
