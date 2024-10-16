import logo from './logo.svg';
import './App.css';
import Image  from './image';

function App() {
  return (
    <div className="App" style={{}}>

   <Image src = "https://imgd.aeplcdn.com/370x208/n/cw/ec/39015/punch-exterior-right-front-three-quarter-55.jpeg?isig=0&q=80"  height= {300} width = {500} title={"Tata Punch"}>

   </Image>


   
  
   <Image src = "https://imgd.aeplcdn.com/370x208/n/cw/ec/162929/e-class-exterior-right-front-three-quarter.jpeg?isig=0&q=80" height= {300} width = {500} title={"Mercedes-Benz"}></Image>
   
   <Image src = "https://imgd.aeplcdn.com/370x208/n/cw/ec/106815/creta-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80" height= {300} width = {500} title={"Creta"}></Image>
   
   <Image src = "https://imgd.aeplcdn.com/370x208/n/cw/ec/42355/xuv700-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80" height= {300} width = {500} title={"Mahindra XUV700"}></Image>
  
   

    </div>
  );
}

export default App;