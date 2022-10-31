import { useState, useEffect  } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null)

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
            {blogs && <BlogList blogs={blogs} title="Semua Judul" />}
        </div>
    );
}
 
export default Home;