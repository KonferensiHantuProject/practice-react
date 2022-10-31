import { useState, useEffect  } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // Run Every time the data change
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8222/blogs')
            // Getting response
            .then(res => {
                if(!res.ok){
                    throw Error('Tidak bisa mendapatkan data')
                }
                return res.json()
            })
            // Getting data
            .then((data) => {
               setBlogs(data);
               setIsPending(false);
               setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setIsPending(false);
            })
        }, 1000)
    }, []);

    return (
        <div className="home">
            { error && <div>{ error }</div>}
            { isPending && <div> Loading ... </div>}
            {/* If blogs is not null then it will render */}
            {blogs && <BlogList blogs={blogs} title="Semua Judul" />}
        </div>
    );
}
 
export default Home;