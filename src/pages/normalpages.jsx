import { useState } from "react";
import "./normalPage.css";
const Normalpage = () => {
  const [data, setData] = useState({
    name: "",
    password: "",
    eMail: "",
  });
  const [name, setName] = useState();
  console.log(name);
  const [password, setPassword] = useState();
  console.log(password);
  const [email, setEmail] = useState();
  console.log(email);

  const Handelsubmit = () => {
   localStorage.setItem("name",name)
   localStorage.setItem("password",password)
   localStorage.setItem("email",email)
  }
  return (
    <div>
      <form onSubmit={Handelsubmit} >
        <div>
          <h1>registration form</h1>
        </div>

        <div className="m_b">
          <label className="p_l_r">name :</label>
          <input type="text" placeholder="enter your name" onChange={(e)=>setName(e.target.value)} />
        </div>
        <div className="m_b">
          <label className="p_l_r">password :</label>
          <input type="password" placeholder="enter your name" onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div className="m_b">
          <label className="p_l_r">email :</label>
          <input type="email" placeholder="enter your email" onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
            <button type="submit" >submit</button>
        </div>
      </form>
    </div>
  );
};
export default Normalpage;
