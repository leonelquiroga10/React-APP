
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from './Components/public/Footer';
import Navbar from './Components/public/Navbar';
import { Main } from './Components/public/Main';
import Detail from './Components/public/Detail';
import UserForm from './Components/public/UserForm';

function App() {
  return (
    <div>
      <Navbar />
    
      <Routes>


      <Route exact path={"/"} Component={Main} />
      <Route path={"/detail/:id"} Component={Detail} />
      <Route path={"/user-form"} Component={UserForm} />

      </Routes>
   


      <Footer />





    </div>
  );
}
export default App;

