import { useState } from "react";
import "../pages/normalPage.css";
const Firstcomponent = () => {
  const initialState = {
    name: "",
    password: "",
    email: "",
  };

  const [userDetails, setUserDetails] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };
  console.log(userDetails, "");
  const { name, password, email } = userDetails;
  const handelsubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
  };
  return (
    <div>
      <form onSubmit={handelsubmit}>
        <h1>registration form 2</h1>
        <div className="m_b">
          <input
            value={name}
            name="name"
            type="name"
            placeholder="enter your name"
            onChange={handleChange}
          />
        </div>

        <div className="m_b">
          <input
            value={password}
            type="password"
            name="password"
            placeholder="enter your password"
            onChange={handleChange}
          />
        </div>
        <div className="m_b">
          <input
            value={email}
            type="email"
            name="email"
            placeholder="enter your email"
            onChange={handleChange}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
export default Firstcomponent;
