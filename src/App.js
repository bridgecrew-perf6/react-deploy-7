import './App.css';
import Create from './components/CRUD/Create'
import Update from './components/CRUD/Update'
import Comments from './components/Task2/Comments';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  return (
    <Router>
     <Routes>
     <Route path='/*' element={<Create />} />
     <Route path='/create' element={<Create/>} />
        <Route path='/update' element={<Update />} />
        <Route path='/task2' element={<Comments />}/>
        </Routes>
   </Router>
  );
}

export default App;
