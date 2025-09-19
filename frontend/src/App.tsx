import './App.css'
import Header from './components/header'
import SearchBar from './components/searchbar'
import RandomImageGrid from './components/imagesection'
import HeroSection from './components/hero'
import Footer from './components/footer'
function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <SearchBar />
      <RandomImageGrid />
      <Footer />
      {/* <h1>working</h1> */}
    </>
  )
}

export default App
