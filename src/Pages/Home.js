import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  
  useEffect(() => {
    const _user = JSON.parse(localStorage.getItem("user"));
    if (typeof _user !== "undefined" || _user !== null) {
      setUser(_user);
    }


    if(_user === null) {
        navigate("/login");
    }
    
  }, [navigate]);
  return <div className="App">
    <h1>Home</h1>
    <h3> Welcome {user?.email} </h3>
    
    
  </div>;
};

export default Home;
