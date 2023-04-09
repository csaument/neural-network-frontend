import React from "react"
import Node from "./Node"
import '../App.css'

const Layer = ({ nodes, onRemoveLayer, onAddNode, onRemoveNode }) => {
  const handleAddNode = () => {
    onAddNode()
  }

  const handleRemoveLayer = () => {
    onRemoveLayer()
  }

  return (
    <div className="layer">
      <div className="layer-controls">
        <button className="remove-layer-button" onClick={handleRemoveLayer}>Remove Layer</button>
        <button className="add-node-button" onClick={handleAddNode}>Add Node</button>
      </div>
      <div className="nodes">
        {nodes.map((node, nodeIndex) => (
          <Node
            key={nodeIndex}
            onRemoveNode={() => onRemoveNode(nodeIndex)}
          />
        ))}
      </div>
    </div>
  )
}

export default Layer