import React from "react"
import Node from "./Node"
import '../App.css'

function Layer({ layer, index, onRemoveLayer, onAddNode, onRemoveNode }) {
  const handleAddNode = () => {
    onAddNode(index)
  }

  const handleRemoveLayer = () => {
    onRemoveLayer(index)
  }

  return (
    <div>
      <div>
        <button onClick={handleAddNode}>Add Node</button>
        <button onClick={handleRemoveLayer}>Remove Layer</button>
      </div>
      {layer.nodes.map((node, index) => (
        <Node key={index} node={node} layerIndex={index} index={index} onRemoveNode={onRemoveNode} />
      ))}
    </div>
  )
}

export default Layer