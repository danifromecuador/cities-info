import HomePage from './pages/HomePage'
import DetailsPage from './pages/DetailsPage'
import NavBar from './components/NavBar'

import './App.css'

function App() {  
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <DetailsPage />
    </div>
  )
}

export default App
