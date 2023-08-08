import HomePage from './pages/HomePage'
import DetailsPage from './pages/DetailsPage'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

import './App.css'

function App() {  
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <DetailsPage />
      <Footer />
    </div>
  )
}

export default App
