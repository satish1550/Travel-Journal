import './App.css';
import Header from './components/header';
import Cards from './components/cards';
import data from './data';

function App() {
  const Card = data.map(items=>{
    return (
      <Cards 
        key= {items.id}
        title= {items.title}
        imageUrl= {items.imageUrl}
        location= {items.location}
        description= {items.description}
        googleMapsUrl= {items.googleMapsUrl}
        startDate= {items.startDate}
      />
    )
  })
  return (
    <div className='container'>
      <Header />
      {/* <img src= {logo} alt="logo" /> */}
      {/* <img src="../images/MountFuji.jpg" alt="" /> */}
      <section>
        {Card}
      </section>
    </div>

    // <h1 className="App-header">satish</h1>
    // <div className="App">
    //   <header >
    //     {/* <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
    // </div>
  );
}

export default App;
