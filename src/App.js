import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Graph721 from './graphs/erc721/Graph721'
import Graph1155 from './graphs/erc1155/Graph1155'
import Graph20 from './graphs/erc20/Graph20'
import Navigation from './routes/Routes';


const App = () => {

  return (
    <div className="App">
      <Router>
      <Navigation/>
        <Routes>
          <Route path='/' element={<Navigation />} />
          <Route path='/Graph20' element={<Graph20 />} />
          <Route path='/Graph721' element={<Graph721 />} />
          <Route path='/Graph1155' element={<Graph1155 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
