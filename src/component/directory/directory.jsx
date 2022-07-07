import { useState, useEffect } from "react";
import BlogList from "./blog-list";

const Directory = () => {
  const [blogs, setBlogs] = useState([
    { title: "Internet", body: "lorem ipsum", author: "zein", id: 1 },
    { title: "Download", body: "lorem ipsum", author: "steven", id: 2 },
    { title: "Manager", body: "lorem ipsum", author: "zein", id: 3 },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("use effect ran");
    console.log(blogs);
  });

  return (
    <div className="home">
      <BlogList
        blogs={blogs}
        title="All Title"
        handleDelete={handleDelete}
        key={blogs.id}
      />
    </div>
  );
};

export default Directory;
