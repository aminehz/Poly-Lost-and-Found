import BlogList from "./BlogList";

import useFetch from "./useFetch";
const FoundItems = () => {
  const { error, isPending,data: blogs } = useFetch('http://localhost:8000/blogs');
  
  

  return (  
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> } 
    {blogs &&<BlogList blogs={blogs} /> }
    </div>
  );
}

export default FoundItems;
