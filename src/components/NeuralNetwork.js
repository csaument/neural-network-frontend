import React, { useState } from 'react'
import Layer from './Layer'

const NeuralNetwork = () => {
  const [network, setNetwork] = useState([
    { nodes: [{}, {}, {}] },
    { nodes: [{}, {}, {}] },
    { nodes: [{}, {}, {}] }
  ])

  const handleAddLayer = () => {
    setNetwork([...network, { nodes: [{}, {}, {}] }])
  }

  const handleRemoveLayer = (layerIndex) => {
    const newNetwork = [...network]
    newNetwork.splice(layerIndex, 1)
    setNetwork(newNetwork)
  }

  const handleAddNode = (layerIndex) => {
    const newNetwork = [...network]
    newNetwork[layerIndex].nodes.push({})
    setNetwork(newNetwork)
  }

  const handleRemoveNode = (layerIndex, nodeIndex) => {
    const newNetwork = [...network]
    newNetwork[layerIndex].nodes.splice(nodeIndex, 1)
    setNetwork(newNetwork)
  }

  return (
    <div className="neural-network">
      <div className="network-controls">
        <button className="add-layer-button" onClick={handleAddLayer}>Add Layer</button>
      </div>
      {network.map((layer, layerIndex) => (
        <Layer
          key={layerIndex}
          nodes={layer.nodes}
          onRemoveLayer={() => handleRemoveLayer(layerIndex)}
          onAddNode={() => handleAddNode(layerIndex)}
          onRemoveNode={(nodeIndex) => handleRemoveNode(layerIndex, nodeIndex)}
        />
      ))}
    </div>
  )
}

export default NeuralNetwork