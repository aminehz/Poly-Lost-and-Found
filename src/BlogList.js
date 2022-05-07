import { Link } from 'react-router-dom';
import lunette from './lunette.jpg';
import montre from './montre.jpg';
import ecouteurs from './ecouteurs.jpg';
import portefeuille from './portefeuille.jpg';

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      
     <img src={lunette} className="lunette"/>
      <img src={montre} className="montre"/>
      <img src={ecouteurs} className="ecouteurs"/>
      <img src={portefeuille} className="portefeuille"/>
    
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <article>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
          </Link>
          </article>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;