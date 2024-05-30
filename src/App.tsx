import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage from './pages/Home/'
import LoginPage from './pages/Login/'
import OrderPage from './pages/order/'
// import Header from './pages/common/Header'
// import Footer from './pages/common/Footer'


function App() {
    return (
        <>
            {/* <Header /> */}
            <Router>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/order' element={<OrderPage />} />
                </Routes>
            </Router>
            {/* <Footer /> */}
        </>

    )
}

export default App
