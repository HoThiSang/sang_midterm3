import axios from "axios";
import React, { useState, useEffect } from "react";
import Users from "./Users";

const Search = () => {
  const [text, setText] = useState('');
  const [users, setUsers] = useState([]);

useEffect(() => {
  const storedSearchDetails = JSON.parse(localStorage.getItem("searchDetails"));
  if (storedSearchDetails) {
    setUsers(storedSearchDetails.searchDetails);
    setText(storedSearchDetails.searchQuery);
  }
}, []);
  const searchUser = async (text) => {
    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${text}`
      );
      setUsers(response.data.items);     
      localStorage.setItem('searchDetails', JSON.stringify({searchQuery:text,searchDetails:response.data.items}));
    } catch (error) {
      console.log("Error fetching data :", error);
    }
  };

  const clearUser = () =>{
    setUsers([]);
    localStorage.removeItem("searchDetails");
  }

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter something");
    } else {
      searchUser(text);
      setText("");
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search user"
          value={text}
          onChange={onChange}
        />

        <input
          type="submit"
          value="Search"
          className="btn btn-success btn-block"
        />
      </form>
      {users.length>0 && (
        <button className="btn btn-danger btn-block" onClick={clearUser}>
            Clear
        </button>
      )}
      <Users users={users} />
    </div>
  );
};

export default Search