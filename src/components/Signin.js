import { signin } from "../store/action/authActions";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const Signin = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [sign, setSign] = useState({
    username: "",
    password: "",
  });
  const handleChange = (event) => {
    setSign({ ...sign, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signin(sign, history));
  };
  return (
    <center>
      <form onSubmit={handleSubmit}>
        <div style={{ width: "350px" }} className="form-group">
          <label for="exampleFormControlInput1">username : </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="enter username"
            onChange={handleChange}
            name="username"
            value={sign.username}
          />
        </div>
        <div style={{ width: "350px" }} className="form-group">
          <label for="exampleFormControlInput1">password :</label>
          <input
            type="password"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="enter your password"
            onChange={handleChange}
            name="password"
            value={sign.password}
          />
        </div>
        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </form>
    </center>
  );
};

export default Signin;