import { useState  } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'Web Baru ku', body: 'Lorem Ipsum', author: 'bone', id: 1 },
        { title: 'Selamat Datang', body: 'Lorem Ipsum', author: 'toni', id: 2 },
        { title: 'Tips dan trik', body: 'Lorem Ipsum', author: 'bone', id: 3 }
    ])

    return (
        <div className="home">
            <BlogList blogs={blogs} title="Semua Judul" />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'bone')} title="Blog Bone" />
        </div>
    );
}
 
export default Home;