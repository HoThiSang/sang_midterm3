import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import RepoItem from "./RepoItem";

const Repos = () => {
 

  const {name } = useParams();

  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  const getUser = async (username) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      const data = response.data;
      setUser(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };
  const getUserRepos = async (name) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${name}/repos`);
      const data = response.data;
      setRepos(data);
    } catch (error) {
      console.error("Error fetching repositories:", error.message);
    }
    
  };
  
  useEffect(() => {
    getUser(name);
    getUserRepos(name);
  }, [name]);


   return (
  <div>
    {repos.map((item) => (
      <RepoItem item={item} />
    ))}
  </div>
);
}

export default Repos