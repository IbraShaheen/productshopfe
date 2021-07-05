import { useState } from "react";
import { signup } from "../store/action/authActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [sign, setSign] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  });

  const resetForm = () => {
    setSign({
      username: "",
      password: "",
      email: "",
      firstName: "",
      lastName: "",
    });
  };

  const handleSubmit = (event) => {

    event.preventDefault();
    dispatch(signup(sign, history));
    // history.push("/");
    history.push("/signup");
    resetForm();
  };

  const handleChange = (event) => {
    setSign({ ...sign, [event.target.name]: event.target.value });
  };

  return (
    <center>
      <form style={{ width: "40%" }} onSubmit={handleSubmit}>
        <div className="form-group">
          <label> <span style={{color:"red"}}>*</span>Username: </label>
          <input
            type="text"
            className="form-control"
            placeholder="enter your username"
            onChange={handleChange}
            name="username"
            value={sign.username}
            required
          />
        </div>
        <div className="form-group">
          <label><span style={{color:"red"}}>*</span>Password:</label>
          <input
            type="password"
            className="form-control"
            placeholder="enter your password"
            onChange={handleChange}
            name="password"
            value={sign.password}
            required
          />
        </div>
        <div className="form-group">
          <label><span style={{color:"red"}}>*</span>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="enter your email"
            onChange={handleChange}
            name="email"
            value={sign.email}
            required
          />
        </div>

        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="enter your first name"
            onChange={handleChange}
            name="firstName"
            value={sign.firstName}
          />
        </div>
        <div className="form-group">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            placeholder="enter your last name"
            onChange={handleChange}
            name="lastName"
            value={sign.lastName}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Add
        </button>
      </form>
    </center>
  );
};

export default Signup;
