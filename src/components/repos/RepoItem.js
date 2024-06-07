const RepoItem = (props) => {
  const { full_name, html_url} = props.repo;
  return (
      <div className="card">
          <a href={html_url} target="_blank" rel="noopener noreferrer" className="repoName">
           {full_name}
          </a>
          <div className="card-body">
            <i className="fa-solid fa-star" style={{ fontSize:"20px", color:"yellow" }}></i>
          </div>
          <div className="card-body">
            <i className="fa-solid fa-code-branch" style={{ fontSize:"20px" }} ></i>
          </div>
     </div>
  
  );
};


export default RepoItem;
