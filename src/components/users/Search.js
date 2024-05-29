import axios from "axios";
import React, { useState } from "react";
import Users from "./Users";

const Search = () => {
  const [text, setText] = useState("");
  const [users, setUsers] = useState([]);

  const searchUser = async (text) => {
    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${text}`
      );
      setUsers(response.data.items);
    } catch (error) {
      console.log("Error fetching data :", error);
    }
  };

  const clearUser = () =>{
    setUsers([]);
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