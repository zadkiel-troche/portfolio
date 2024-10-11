import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Politicas from './components/Politicas'

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Header />
                            <About />
                            <Projects />
                            <Experience />
                            <Contact />
                            <Footer />
                        </>
                    }
                />
                <Route path="/politicas-privacidad" element={<Politicas />} />
            </Routes>
        </Router>
    )
}

export default App
