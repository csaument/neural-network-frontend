import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import MainPage from './components/MainPage'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

function App() {
  const [network, setNetwork] = useState({
    layers: [
      { nodes: [{}, {}, {}] },
      { nodes: [{}, {}, {}] },
      { nodes: [{}, {}, {}] },
    ],
  })

  const handleAddLayer = () => {
    const newLayer = { nodes: [{}, {}, {}] }
    setNetwork(prevState => ({ layers: [...prevState.layers, newLayer] }))
  }

  const handleRemoveLayer = (index) => {
    setNetwork(prevState => ({ layers: prevState.layers.filter((layer, i) => i !== index) }))
  }

  const handleAddNode = (index) => {
    setNetwork(prevState => ({
      layers: prevState.layers.map((layer, i) =>
        i === index ? { ...layer, nodes: [...layer.nodes, {}] } : layer
      ),
    }))
  }

  const handleRemoveNode = (layerIndex, nodeIndex) => {
    setNetwork(prevState => ({
      layers: prevState.layers.map((layer, i) =>
        i === layerIndex ? { ...layer, nodes: layer.nodes.filter((node, j) => j !== nodeIndex) } : layer
      ),
    }))
  }

  return (
    <Router>
      <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage network={network} handleAddLayer={handleAddLayer} handleRemoveLayer={handleRemoveLayer} handleAddNode={handleAddNode} handleRemoveNode={handleRemoveNode}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App