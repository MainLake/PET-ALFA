import { useEffect } from "react";
import { useUserContext } from "../../context/contextUser/ContextUser";

const Initializer = ({ children }) => {
  const [user, setUser] = useUserContext();

  console.log("Dentro de inicializador");

  useEffect(() => {
    const userObject = JSON.parse(window.localStorage.getItem("userPET"));

    if (userObject !== null || userObject !== undefined) {
      setUser(userObject);
    }
  }, [setUser]);

  return children;
};

export default Initializer;
