import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' // Asegúrate de importar BrowserRouter
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Politicas from './components/Politicas'

export default function App() {
    return (
        <Router>
            {' '}
            {/* Asegúrate de envolver todo dentro de BrowserRouter */}
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
