import { useLocalObservable } from "mobx-react-lite";
import StoreAction from "../../../store/StoreAction";

const initialState = {
  // 1
  phone: "",
  password: "",
  email: "test@gmail.com",
};
const SignUpStore = () => {
  // 2
  const store = useLocalObservable(() => ({
    /* observables */
    ...initialState,
    ...StoreAction,
  })); // 3
  return store; // 4
};

export default SignUpStore; // 2
