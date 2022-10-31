import { useState  } from "react";

const Home = () => {
    // let name = 'Anto';
    const [name, setName] = useState('mario')
    const [age, setAge] = useState(22)

    const handleclick = () => {
        setName('Luigi');
        setAge(35);
    }

    return (
        <div className="home">
            <h2>Home</h2>
            <p>umur {name} adalah {age} tahun</p>
            <button onClick={handleclick}>Klik</button>
        </div>
    );
}
 
export default Home;