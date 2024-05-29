// import axios from "axios";
// import { useEffect, useState } from "react";
import RepoItem from "./RepoItem";

const Repos = (props) => {
 const {repos} = props;
//  console.log(repos)
  return (
    <>
      {repos.map((repo)=> (
        <RepoItem  key={repo.id} repo={repo} />
      ))}
    </>
  )
  
}

export default Repos