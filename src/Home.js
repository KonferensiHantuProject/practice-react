import { useState, useEffect  } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'Web Baru ku', body: 'Lorem Ipsum', author: 'bone', id: 1 },
        { title: 'Selamat Datang', body: 'Lorem Ipsum', author: 'toni', id: 2 },
        { title: 'Tips dan trik', body: 'Lorem Ipsum', author: 'bone', id: 3 }
    ])

    const [name, setName] = useState('anton');

    // Handling delete blog
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)

        setBlogs(newBlogs);
    }

    // Run Every time the data change, give [] as second argument to run useEffect after first render
    useEffect(() => {
        console.log('Use Effect Jalan')
        console.log(name)
    }, [name]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="Semua Judul" handleDelete={handleDelete} />
            <button onClick={() => setName('noni')}>Ubah nama</button>
            <p>{name}</p>
        </div>
    );
}
 
export default Home;