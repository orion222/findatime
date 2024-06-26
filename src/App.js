import logo from './logo.svg';
import "./styles/Landing.css"

import Calendar from "./components/Calendar"
function App() {
  return (
    <div className = "center container">
      <Calendar month = {1} year = {2024}/>
    </div>
    
  );
}

export default App;
