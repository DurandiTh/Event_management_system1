
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from "react-router-dom";
import Event from './components/Event';
import Home1 from './components/Home1';
import Addevent from './components/Addevent';
import Updateevent from './components/Updateevent';


function App() {
  return (
    <main>
    <BrowserRouter>
     <Routes>
      {/* <Route
        exact
        path="/"
        element={<Home></Home>}>
      </Route> */}

      <Route
      exact
      path="/fill-event"
      element={<Event></Event>}>
     </Route>

     <Route
      exact
      path="/"
      element={<Home1></Home1>}>
     </Route>

     <Route
      exact
      path="/add-event"
      element={<Addevent></Addevent>}>
     </Route>

     
     <Route
      exact
      path="/update-event/:id"
      element={<Updateevent></Updateevent>}>
     </Route>


     </Routes>
     </BrowserRouter>
     </main>
  );
}

export default App;
