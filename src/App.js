import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import NavBar from './components/navBar';
import Title from './components/title';
import DashBoard from './pages/DashBoard';
import Registration from './pages/Registration';
import UserDetails from './pages/UserDetails';
// import Footer from './components/footer';


function App() {


  return (
    <div className="App">
     <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<UserDetails />} />
        <Route path="/DashBoard" element={<DashBoard/>} /> 
        <Route path="/Registration" element={<Registration />} />
        <Route path="/title" element={<Title />} />
        <Route path="/footer" element={<Footer />} />
        {/* <Route path='/navBar' element={<NavBar/>} /> */}
      </Routes>
      <Footer/>
     </Router>
    </div>
  );
}

export default App;
