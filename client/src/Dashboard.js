import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("Unauthorized");
      return;
    }

    axios
      .get("http://localhost:5000/api/protected-route", { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => setMessage(response.data.message))
      .catch(() => setMessage("Unauthorized"));
  }, []);

  return <h2>{message}</h2>;
};

export default Dashboard;
