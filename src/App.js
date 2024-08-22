import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Landing from "./components/pages/Landing"
import RespondeeView from "./components/pages/RespondeeView"
import SurveyorView from "./components/pages/SurveyorView"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Landing/>}/>
        <Route path = "/respondee" element = {<RespondeeView/>}/>
        <Route path = "/surveyor" element = {<SurveyorView/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
