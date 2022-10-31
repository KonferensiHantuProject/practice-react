import { useState  } from "react";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'Web Baru ku', body: 'Lorem Ipsum', author: 'mario', id: 1 },
        { title: 'Selamat Datang', body: 'Lorem Ipsum', author: 'toni', id: 2 },
        { title: 'Tips dan trik', body: 'Lorem Ipsum', author: 'komang', id: 3 }
    ])

    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.author}</p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;