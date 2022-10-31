import { useState, useEffect  } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null)

    // Handling delete blog
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)

        setBlogs(newBlogs);
    }

    // Run Every time the data change
    useEffect(() => {
      fetch('http://localhost:8222/blogs')
        // Getting response
        .then(res => {
            return res.json()
        })
        // Getting data
        .then((data) => {
           setBlogs(data);
        })
    }, []);

    return (
        <div className="home">
            {/* If blogs is not null then it will render */}
            {blogs && <BlogList blogs={blogs} title="Semua Judul" handleDelete={handleDelete} />}
        </div>
    );
}
 
export default Home;