import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    // Submit Event
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        // Is pending true
        setIsPending(true);

        // Second argument define request
        fetch('http://localhost:8222/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('Blog Baru');
            setIsPending(false);
    
            // Go back to history
            // history.go(-1);

            // Ridrect back user
            history.push('/');
        })
    }

    return (
        <div className="create">
            <h2>Tambah Blog Baru</h2>
            <form onSubmit={handleSubmit}>
                <label>Judul Blog</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Konten Blog</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Penulis Blog</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>Tambah Blog</button>}
                {isPending && <button disabled>Sedang Menambah Blog ... </button>}
            </form>
        </div>
    );
}
 
export default Create;