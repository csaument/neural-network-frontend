import React from 'react'
import Node from './Node'
import '../App.css'

function Layer({ layer, index, onRemoveLayer, onAddNode, onRemoveNode }) {
  const handleAddNode = () => {
    onAddNode(index)
  }

  const handleRemoveLayer = () => {
    onRemoveLayer(index)
  }

  return (
    <div className='layer'>
      <div>
        <button onClick={handleAddNode}>+</button>
        <button onClick={handleRemoveLayer}>-</button>
      </div>
      {layer.nodes.map((node, index) => (
        <Node key={index} node={node} layerIndex={index} index={index} onRemoveNode={onRemoveNode} />
      ))}
    </div>
  )
}

export default Layer