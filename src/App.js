import './App.css'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

const App = () => (
  <BrowserRouter>
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/team-matches/:id"   element={<TeamMatches/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes>

  </BrowserRouter>
)
 
export default App
