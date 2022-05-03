import { createContext, useContext } from "react"; // 1
import SignUpContext from "../container/Home/store/SignUpStore"; // 6

export const RootStoreContext = createContext(); // 2
const RootStore = ({ children }) => {
  // 3
  const SignUpStore = SignUpContext(); // 7

  return (
    <RootStoreContext.Provider
      value={{
        SignUpStore, // 8
      }}
    >
      {children}
    </RootStoreContext.Provider>
  );
};
export const useStore = () => useContext(RootStoreContext); // 5

export default RootStore; // 4
