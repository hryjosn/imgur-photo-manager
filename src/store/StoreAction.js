import { makeObservable } from "mobx";

/** 共用的 store action */
export default class storeAction {
  constructor() {
    makeObservable(this, {
      // inherited
    });
  }

  /** action - 單項改變  */
  updateData(dataKey, value) {
    this[dataKey] = value;
  }

  /** action - 多項改變  */
  assignData(obj) {
    Object.assign(this, obj);
  }

  /** action - params 單項改變 */
  paramsUpdat(dataKey, value) {
    const params = { ...this.params, [dataKey]: value };
    this.assignData({ params });
  }

  /** action - params 多項改變 */
  paramsAssign(obj) {
    const params = { ...this.params, ...obj };
    this.assignData({ params });
  }

  /** reset 狀態 */
  reset() {
    Object.assign(this, this.initState);
  }

  /** 關閉 modal */
  closeModal() {
    this.reset();
  }

  openModal() {
    this.updateData("visible", true);
  }
}
