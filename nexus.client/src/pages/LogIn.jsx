import { useState } from "react";
import { setSystem } from "@/redux/actions/systemAction.js";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  const handleRedux = () => {
    setCount((prevState) => prevState + 1);
    dispatch(setSystem(count));
  };

  return (
    <>
      <div>
        <button onClick={() => handleRedux((count) => count + 1)}>
          count is {count}
        </button>
        <div>sample login page, use '/dashboard' to visit dashboard</div>
      </div>
    </>
  );
}

export default Login;
