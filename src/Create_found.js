import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Create_found = () => {
  const [title,setTitle]=useState('');
  const [body,setBody]=useState('');
  const [author,setAuthor]=useState('');
  const [isPending,setIsPending]=useState('false');
  const [isFound,setFound]=useState('found');
  const history=useHistory();

  const handleSubmit=(e)=> {
    e.preventDefault();
    const blog ={title,body,author,isFound};
    /*console.log(blog);*/

    setIsPending(true);

    fetch('http://localhost:8000/blogs',
    {
      method:'POST',
      headers: {"Content-Type":"application/json"},
      body:JSON.stringify(blog)
    }
    ).then(()=>{
      console.log("new blog added");
      setIsPending(false);
     // history.go(-1);
     history.push("/");
    })
  }
  return (
    <div className="create">
      
    <h2>Add a Found Thing:</h2>
    <p>Hello you have to submit the following form in order to share the found object:</p>
    <form onSubmit={handleSubmit}>

      <label className="blog-T">Blog Title:</label>
       
      <input placeholder="Please enter what you found" className="blog-B" type="text" required value={title} onChange={(e)=>setTitle(e.target.value)} /> 
      
      
      <br></br>
      <label className="blog-T">Blog Body:</label>
      <textarea className="blog-BB" placeholder="Please enter your found thing." required  value={body} onChange={(e)=>setBody(e.target.value)} ></textarea>
      <br></br>
      <label className="blog-T">Blog author:</label>
      <input className="blog-B" type="text" required placeholder="enter your name please" value={author} onChange={(e)=> setAuthor(e.target.value)}/>
     <br></br>
      {isPending && <button type="submit" className="Submit-B">Add blog</button>}
      
    </form>
  </div>
  );
}
 
export default Create_found;