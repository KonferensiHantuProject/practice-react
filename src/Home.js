import { useState  } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'Web Baru ku', body: 'Lorem Ipsum', author: 'bone', id: 1 },
        { title: 'Selamat Datang', body: 'Lorem Ipsum', author: 'toni', id: 2 },
        { title: 'Tips dan trik', body: 'Lorem Ipsum', author: 'bone', id: 3 }
    ])

    // Handling delete blog
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)

        setBlogs(newBlogs);
    }

    return (
        <div className="home">
            <BlogList blogs={blogs} title="Semua Judul" handleDelete={handleDelete} />
        </div>
    );
}
 
export default Home;