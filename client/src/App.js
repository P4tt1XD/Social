import {  BrowserRouter as Router, Route} from "react-router-dom";
import PageRender from "./PageRender";

function App() {
  return (
    <Router>
      <input type="checkbox" id="theme"/>
      <div className="App" >
      <div className="main">
        <Route path="/" element={PageRender} />
        <Route path="/:page/:id" element={PageRender} />
       </div>
    </div>
    </Router>
   
    
  );
}

export default App;
 