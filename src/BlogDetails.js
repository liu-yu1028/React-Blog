import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const BlogDetails = () => {
  const { id } = useParams();

  const apiUrl = id 
        ? `https://json-server-m143.onrender.com/blogs/${id}` 
        : null; 

  const { data: blog, error, isLoading } = useFetch('https://json-server-m143.onrender.com/blogs/${id}');
  const nevigate = useNavigate();

   const handleClick = () => {
    fetch('https://json-server-m143.onrender.com/blogs/${blog.id}', {
      method: 'DELETE'
    }).then(() => {
      nevigate("/");
    })
  }

  return (
    <div className="blog-details">
      { isLoading || !apiUrl && <div>資料載入中...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div className="blog-body">{ blog.body }</div>
       <button onClick={handleClick}> <MdDelete size={20} style={{ fill: "red" }} /></button>

        </article>
      )}
    </div>
  );
 }

export default BlogDetails;
