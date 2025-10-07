import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isLoading, data: blogs } = useFetch('https://json-server-m143.onrender.com/')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isLoading && <div>資料讀取中...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}
 
export default Home;