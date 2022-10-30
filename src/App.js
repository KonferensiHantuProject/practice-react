import './App.css';

function App() {

  const title = 'Komponen App';
  const likes = 200;
  // const person = { nama: 'Toni', umur: 21};
  const url = 'http://www.google.com';

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Jumlah Suka { likes }</p>

        {/* <p>{ person }</p> */}

        <p>{ 10 }</p>
        <p>{ 'Test' }</p>
        <p>{ [1,2,3,4,5,6] }</p>
        <p>{ Math.random() * 10 }</p>

        <a href={ url }>Google</a>
      </div>
    </div>
  );
}

export default App;
