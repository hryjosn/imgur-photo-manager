import { createContext, useContext } from "react"; // 1
import SignUpStore from "../container/Home/store/SignUpStore"; // 6
import TestStore from "../container/Home/store/TestStore"; // 6

export const store = {
  SignUpStore,
  TestStore,
};
export const RootStoreContext = createContext(store); // 2

export const useStore = () => useContext(RootStoreContext); // 5

const RootStore = ({ children }) => {
  // 3

  return (
    <RootStoreContext.Provider value={store}>
      {children}
    </RootStoreContext.Provider>
  );
};

export default RootStore; // 4
