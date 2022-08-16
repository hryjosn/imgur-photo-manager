// import StoreAction from "../../../store/StoreAction";
import { makeAutoObservable } from "mobx";

const initialState = {
  // 1
  num: 1,
};
class TestStore {
  constructor() {
    makeAutoObservable(this);
  }

  add() {
    this.num++;
  }

  getNum() {
    // console.log(SignUpStore.number);
  }
}

export default new TestStore(); // 2
