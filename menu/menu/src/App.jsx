import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import{Home} from ".components/pages/Home";



function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>       
      </Routes>
    </div>
  );
}

export default App
