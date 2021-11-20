import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/login';
import PageRender from './PageRender';

function App() {
  return (
    <Router>
    
      <input type="checkbox" id="theme"/>
     <div className="App">
      <div class="main">
        <Route path="/:page" component={PageRender} />
     </div>
    </div>
    
    </Router>
    
  );
}

export default App;
