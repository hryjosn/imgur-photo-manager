import { useLocalObservable } from "mobx-react-lite";
import StoreAction from "../../../store/StoreAction";
import { runInAction } from "mobx";
import { callUploadPhoto } from "../../../api/api";

const initialState = {
  // 1
  phone: "",
  password: "",
  email: "test@gmail.com",
  number: 10,
  params: {},
  list: [],
};
const SignUpStore = () => {
  // 2
  const store = useLocalObservable(() => ({
    /* observables */
    ...initialState,
    ...StoreAction(),
    async getList() {
      const res = await callUploadPhoto();
      this.list = res.data;
    },
  })); // 3
  return store; // 4
};

export default SignUpStore; // 2
