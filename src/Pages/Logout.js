import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/authService";


const Logout = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: "",
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
    const user = await authService.logoutUser(formData);
    if(user) {
      navigate("/");
    }
  }

 
  

  return (
    <div className="logout">
      <form onSubmit={handleSubmit}>
        <label htmlFor="password">password</label>
        <input
          name="password"
          type="password"
          required
          value={formData.password}
          onChange={handleChange}
          placeholder="enter your password"
        />
        <button type="submit">Logout</button>
      </form>
    </div>
  );
};

export default Logout;
