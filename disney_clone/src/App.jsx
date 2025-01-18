import '../src/index.css'
import Header from './components/Header'
import Slider from './components/Slider'
import ProductHouse from './components/ProductHouse'


function App() {
  

  return (
      <div className='bg-[#040714e8] min-h-screen'>
        <Header/>
        <Slider/>
        <ProductHouse/>
      </div>
       
      )
}

export default App
