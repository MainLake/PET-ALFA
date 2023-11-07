import { createContext, useContext, useReducer } from "react";
import { reducerGlobalState } from "../../reducers/globalReducer";

const UserContext = createContext();

const globalStateInitial = {
  usuario: {
    token: null,
    autenticado: false
  }
}

export const UserContextProvider = ({ children }) => {
  const [ globalContext, dispatch ] = useReducer( reducerGlobalState, globalStateInitial );

  return (
    <UserContext.Provider value={{globalContext, dispatch}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
    return useContext(UserContext);
}