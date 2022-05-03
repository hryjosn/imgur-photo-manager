import { Form } from "./Home.style";
import axios from "axios";
import { useStore } from "../../store";
import { observer } from "mobx-react-lite"; // 1
const Index = () => {
  const {
    SignUpStore: { email, phone, password, updateData },
  } = useStore();
  // const store = useStore().SignUpStore;
  // const myEmail = store.email;
  console.log("test Email>", email);
  const onSubmit = (e) => {
    e.preventDefault();
    const postData = { email, password, phone };

    (async () => {
      try {
        const signUpResult = await axios({
          method: "POST",
          url: "https://evening-cliffs-38545.herokuapp.com/api/user",
          data: postData, // Data
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        });

        if (signUpResult.status === 200 && signUpResult.data.id) {
          alert("註冊成功");
        }
      } catch (e) {
        console.error(e);
        if (e.response.data) {
          console.log("Sever error:", e.response.data);
        }
      }
    })();
  };
  return (
    <Form onSubmit={onSubmit}>
      <label>phone</label>
      <input
        type="text"
        value={phone}
        onChange={(e) => {
          updateData("phone", e.target.value);
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
      <button type="submit">Sign Up</button>
    </Form>
  );
};

export default observer(Index); // High Order Component HOC
