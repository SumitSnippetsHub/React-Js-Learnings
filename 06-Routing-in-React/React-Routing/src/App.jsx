import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllenHome from './components/RoutePages/AllenHome';
import Allen11 from './components/RoutePages/Allen11';
import Allen12 from './components/RoutePages/Allen12';
import NavBar from './components/NavBar';
import Layout from './components/Layout';
import './App.css'

function App() {

  return (
    <BrowserRouter>
        <Routes>
              <Route path="/" element={<Layout />}>
                  <Route path="/allenHome" element={<AllenHome />} />
                  <Route path="/allen11" element={<Allen11 />} />
                  <Route path="/allen12" element={<Allen12 />} />
                  {/* <Route path="/allen11" element={<AllenHome />} /> */}
              </Route>
          </Routes>
    </BrowserRouter>
  )
}

export default App
