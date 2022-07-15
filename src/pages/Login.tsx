import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/Store";

const Login = () => {
  const navigate = useNavigate();
  const loggedIn = useAuthStore((state: { loggedIn: any }) => state.loggedIn);

  const userRef: any = useRef();
  const passwordRef: any = useRef();

  const submitHandler = () => {
    if (userRef.current.value && passwordRef.current.value) {
      loggedIn({ loggedIn: true });
      navigate("/");
    }
  };

  return (
    <div>
      <input placeholder="username" type="username" ref={userRef} />
      <input placeholder="password" type="password" ref={passwordRef} />
      <button onClick={submitHandler}>Login</button>
    </div>
  );
};

export default Login;
