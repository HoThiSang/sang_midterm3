const RepoItem = (props) => {
  const { full_name, html_url} = props.repo;
  return (
      <div className="card">
          <a href={html_url} target="_blank" rel="noopener noreferrer" >
           {full_name}
          </a>
          <div className="card-body">
            <i class="fa-solid fa-star"></i>
          </div>
          <div className="card-body">
            <i class="fa-solid fa-code-branch"></i>
          </div>
     </div>
  
  );
};

export default RepoItem;
