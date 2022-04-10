import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Create_lost = () => {
  const [title,setTitle]=useState('');
  const [body,setBody]=useState('');
  const [author,setAuthor]=useState('');
  const [isPending,setIsPending]=useState('false');
  const history=useHistory();

  const handleSubmit=(e)=> {
    e.preventDefault();
    const blog ={title,body,author};
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
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)} /> 
        <br></br>
        <label>Blog Body:</label>
        <textarea required  value={body} onChange={(e)=>setBody(e.target.value)} ></textarea>
        <br></br>
        <label>Blog author:</label>
        <select onChange={(e)=> setAuthor(e.target.value)}>
        <option value="Student">Student</option>
          <option value="Professor">professor</option>
          <option value="other">other</option>
        </select><br></br>
        {isPending && <button type="submit">Add blog</button>}
        
      </form>
    </div>
  );
}
 
export default Create_lost;