import './App.css';
import Header from './components/Header'
import ProductHeader from './components/ProductHeader';
import BackInfo from './components/BackInfo';
import ProductInfo from './components/ProductInfo';

function App() {
  return (
    <div className="App">
      <section className="hero">
        <Header />
      </section>
      <main>
        <ProductHeader />
        <BackInfo />
        <ProductInfo />
      </main>
    </div>
  );
}

export default App;
