import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/authService";


const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "", 
    first_name : "", 
    last_name : "", 
    password: "", 
    phone : "",
    address : "", 
    username : ""

  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const user = await authService.registerUser(formData);
    if(user) {
      navigate("/");
    }
  }

 
  

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="enter your email"
        />
        <label htmlFor="password">password</label>
        <input
          name="password"
          type="password"
          required
          value={formData.password}
          onChange={handleChange}
          placeholder="enter your password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Signup;
