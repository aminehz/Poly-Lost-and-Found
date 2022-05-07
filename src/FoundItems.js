import BlogList from "./BlogList";

import useFetch from "./useFetch";
const FoundItems = () => {
  const { error, isPending,data: blogs } = useFetch('http://localhost:8000/blogs');
  const filter=useFetch('http://localhost:8000/blogs');

console.log(filter.data);


  return (  
    <div className="home">
          { blogs && (
        <article>
          <h2>{ blogs.title }</h2>
          <p>Written by { blogs.author }</p>
          <div>{ blogs.body }</div>
          <p>the object is {blogs.isFound}</p>
        </article>
      )}
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> } 
    {blogs &&<BlogList blogs={blogs} /> }
    </div>
  );
}

export default FoundItems;
