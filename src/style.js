import './style.css';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import { Home } from './home';
import { Students } from './student';
import { Contact } from './contact';
import { StudentContextProvider } from './studentOne';

function App() {
  return (
    <StudentContextProvider>
    <BrowserRouter>
    <Routes>
     <Route path={'/'} element={<Home/>} />
      <Route path={'/Pages/Students'} element={<Students/>} />
      <Route path={'/Pages/Contact'} element={<Contact/>} />
    </Routes>
    </BrowserRouter>
    </StudentContextProvider>
  );
}

export default App;