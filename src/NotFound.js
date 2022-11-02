import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Maaf</h2>
            <p>Halaman tersebut Tidak ada</p>
            <Link to="/">Kembali ke Home...</Link>
        </div>
    );
}
 
export default NotFound;