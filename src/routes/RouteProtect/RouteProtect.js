import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RouteProtect = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userPET"));
    if (!user) {
      navigate("/Login");
    }
  }, []);

  return children;
};

export default RouteProtect;
