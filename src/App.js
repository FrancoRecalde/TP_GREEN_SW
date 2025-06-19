import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Video1 from './pages/Video1';
import Video2 from './pages/Video2';
import Video3 from './pages/Video3';
import Video4 from './pages/Video4';

const App = () => {
    return (
        <Router>
            <div className="d-flex flex-column min-vh-100">
                <Header />
                <Navigation />
                <main className="flex-grow-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/video1" element={<Video1 />} />
                        <Route path="/video2" element={<Video2 />} />
                        <Route path="/video3" element={<Video3 />} />
                        <Route path="/video4" element={<Video4 />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;