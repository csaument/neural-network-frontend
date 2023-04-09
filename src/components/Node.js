import React from 'react'
import '../App.css'

const Node = ({ onRemoveNode }) => {
  const handleRemoveNode = () => {
    onRemoveNode()
  }

  return (
    <div className="node">
      <button className="remove-node-button" onClick={handleRemoveNode}>-</button>
    </div>
  )
}

export default Node