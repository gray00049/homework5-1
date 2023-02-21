import Card from './components/Card/Card';
import './App.css';

function App() {

  return (
    <div className="App">
      <Card
        srcImg='https://img.freepik.com/premium-photo/fried-pancakes-on-a-dark-background-with-honey-sour-cream-and-nuts-pancake-day-top-view-copy-space_166116-4717.jpg?w=1380'
        altImg='Some img'
        title='Card title'
        descr="Some quick example text to build on the card title and make up the bulk of the card's content."
        btnText='Go somewhere'
      />
    </div>
  )
}

export default App
