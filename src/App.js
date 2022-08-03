import './App.css';
import Header from './components/header';
import Cards from './components/cards';
import data from './data';

function App() {
  const Card = data.map(items=>{
    return (
      <Cards 
        key= {items.id}
        {...items}
      />
    )
  })
  return (
    <div className='container'>
      <Header />
      <section>
        {Card}
      </section>
    </div>
  );
}

export default App;
