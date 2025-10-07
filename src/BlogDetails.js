import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isLoading } = useFetch('http://localhost:8000/blogs/' + id);
  const nevigate = useNavigate();

   const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      nevigate("/");
    })
  }

  return (
    <div className="blog-details">
      { isLoading && <div>資料載入中...</div> }
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
