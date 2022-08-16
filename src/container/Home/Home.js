import { Form } from "./Home.style";

import { useStore } from "../../store/index";
import { observer } from "mobx-react-lite"; // 1
import Container from "./Container"; // 1
const Index = () => {
  const {
    // SignUpStore: { updateData, number },
    TestStore,
  } = useStore();
  console.log("useStore>", useStore());

  return (
    <Form style={{ textAlign: "center" }}>
      {/* <label>phone</label>
      <input
        type="text"
        value={phone}
        onChange={(e) => {
          assignData({ phone: e.target.value });
        }}
      />
      <label>Email</label>
      <input
        type="text"
        value={email}
        onChange={(e) => {
          updateData("email", e.target.value);
        }}
      />
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => {
          updateData("password", e.target.value);
        }}
      />
      <button type="submit">Sign Up</button> */}
      <Container value={1}>
        {/* <span style={{ color: "red" }}>{number}</span> */}
        <span style={{ color: "red" }}>{TestStore.num}</span>
      </Container>

      <button
        type="button"
        onClick={() => {
          TestStore.add();
          // updateData("number", number + 1);
        }}
      >
        +1
      </button>
      <button
        type="button"
        onClick={() => {
          TestStore.add();
        }}
      >
        Add
      </button>
      <button
        type="button"
        onClick={() => {
          TestStore.getNum();
        }}
      >
        Show
      </button>
    </Form>
  );
};

export default observer(Index); // High Order Component HOC
