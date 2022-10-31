const Home = () => {

    const handleclick = (e) => {
        console.log('Halo Bone', e)
    }

    const handleclickAgain = (nama, e) => {
        console.log('Halo ' + nama, e.target)
    }

    return (
        <div className="home">
            <h2>Home</h2>
            <button onClick={handleclick}>Klik</button>
            <button onClick={(e) => { 
                handleclickAgain('mario', e) 
            }}>Klik Aku lagi</button>
        </div>
    );
}
 
export default Home;