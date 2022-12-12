import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetail = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8222/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8222/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            // Ridrect back user
            history.push('/');
        })
    }

    return (
        <div className="blog-detail">
            { isPending && <div> Loading ... </div>}
            { error && <div>{ error }</div>}
            {blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Ditulis Oleh {blog.author}</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleClick}>Hapus</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetail;