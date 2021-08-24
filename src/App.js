import logo from './logo.svg';
import './App.css';
import Header from "./components/header"
import Navbar from "./components/navbar"
import Mainhead from "./components/mainhead"
import Design from "./components/design"
import Circle from "./components/circle"
import Happy from "./components/happy"
import Mission from "./components/mission"
import Bar from "./components/bar"
import Latest from "./components/latest"
import Card2 from "./components/card2"
import Family from "./components/family"
import Transperant from "./components/transperant"
import Slider from "./components/slider"
import Deals from "./components/deals"
import Footer from "./components/footer"
function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Mainhead/> 
      <Design/>
      <Circle/>
      <Happy/>
      <Mission/>
      <Bar/>
      <Latest/>
      <Card2/>
      <Family/>
      <Transperant/>
      <Slider/>
      <Deals/>
      <Footer/>
    </div>
  );
}

export default App;
