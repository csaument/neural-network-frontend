import React from 'react'
import '../App.css'

const Node = ({ node, layerIndex, index, onRemoveNode }) => {
  const handleRemoveNode = () => {
    onRemoveNode(layerIndex, index);
  };

  return (
    <div>
      <button onClick={handleRemoveNode}>Remove Node</button>
      <div>
        <svg height='20' width='20'>
          <circle cx='10' cy='10' r='10' fill='green' />
          <circle cx='10' cy='10' r='8' fill='red' />
        </svg>
      </div>
    </div>
  )
}

export default Node