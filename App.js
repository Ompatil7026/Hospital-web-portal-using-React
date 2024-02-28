
//import ReactDOM from 'react-dom';

import './App.css';
import Blog from './Components/Blog.jsx';
import Footer from './Components/Footer.jsx';
//import Login from './Components/Login.jsx';
import Navbar from './Components/Navbar.jsx';
import Pannal from './Components/Pannal.jsx';
import Section from './Components/Section.jsx';
import Slider from './Components/Slider.jsx';
const App = () => {
  return (
    <div >
      <Navbar />
      <Pannal/>
      <Blog/>
      <Section/>
      
      <Footer/>
     
     <Slider/>
     
    </div>
  );
}
export default App;
