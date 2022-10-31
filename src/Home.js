import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const { data: blogs, isPending, error} = useFetch('http://localhost:8222/blogs');

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