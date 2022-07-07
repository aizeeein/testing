import useFetch from "../../useFetch";
import BlogList from "./blog-list";

const HomePage = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All title" key={blogs.id} />}
    </div>
  );
};

export default HomePage;
