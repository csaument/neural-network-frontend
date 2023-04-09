import React, { useState } from 'react'
import Layer from './Layer'
import '../App.css'

function NeuralNetwork() {
  const [network, setNetwork] = useState({
    layers: [
      { nodes: [{}, {}, {}] },
      { nodes: [{}, {}, {}] },
      { nodes: [{}, {}, {}] },
    ],
  });

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
    <div>
      <div>
        <button onClick={handleAddLayer}>Add Layer</button>
      </div>
      {network.layers.map((layer, index) => (
        <Layer key={index} layer={layer} index={index} onRemoveLayer={handleRemoveLayer} onAddNode={handleAddNode} onRemoveNode={handleRemoveNode} />
      ))}
    </div>
  )
}

export default NeuralNetwork