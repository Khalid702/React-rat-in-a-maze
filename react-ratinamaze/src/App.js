import Maze from './components/Maze';

import './App.css';

const App = () => {
 let matrix = [[0,0,0,0], [0,1,1,0], [0,1,1,1], [1,1,1,1]];


  

  return (
      <div>
      <Maze matrix={matrix} />
    </div>
  );
};

export default App;
