import { useState, useEffect  } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true);

    // Run Every time the data change
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8222/blogs')
            // Getting response
            .then(res => {
                return res.json()
            })
            // Getting data
            .then((data) => {
               setBlogs(data);
               setIsPending(false);
            })
        }, 1000)
    }, []);

    return (
        <div className="home">
            { isPending && <div> Loading ... </div>}
            {/* If blogs is not null then it will render */}
            {blogs && <BlogList blogs={blogs} title="Semua Judul" />}
        </div>
    );
}
 
export default Home;