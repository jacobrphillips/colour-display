import { useState } from 'react'
import Square from './Square';
import SearchColor from './SearchColor'

function App() {

  const [currentColor, setCurrentColor] = useState('');



  const colorInputHandler = (e) => {
   setCurrentColor(e);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!currentColor){
      return; 
    }
    setCurrentColor('');
  }

  return (
    <div>
      <div className='color-container'>
       <Square 
       currentColor={currentColor}
       />
       <SearchColor 
       currentColor={currentColor} 
       setCurrentColor={setCurrentColor} 
       handleSubmit={handleSubmit} 
       colorInputHandler={colorInputHandler} 
       />
      </div>
    </div>
  )
}

export default App
