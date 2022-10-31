import { useState  } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'Web Baru ku', body: 'Lorem Ipsum', author: 'mario', id: 1 },
        { title: 'Selamat Datang', body: 'Lorem Ipsum', author: 'toni', id: 2 },
        { title: 'Tips dan trik', body: 'Lorem Ipsum', author: 'komang', id: 3 }
    ])

    return (
        <div className="home">
            <BlogList blogs={blogs} title="Semua Judul" />
        </div>
    );
}
 
export default Home;