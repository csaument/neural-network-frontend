import React from 'react'
import Node from './Node'
import '../App.css'

function Layer({ layer, index, onRemoveLayer, onAddNode, onRemoveNode, nextLayer }) {
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
      <div className="node-container">
        {layer.nodes.map((node, nodeIndex) => {
          const lines = nextLayer && nextLayer.nodes.map((nextNode, nextNodeIndex) => {
            return (
              <svg key={nextNodeIndex}>
                <line x1={nodeIndex * 50 + 25} y1={node.y} x2={(nextNodeIndex) * 50 + 25} y2={nextNode.y} stroke="black" strokeWidth="2" />
              </svg>
            )
          })

          return (
            <div key={nodeIndex} className="node">
              <Node node={node} layerIndex={index} index={nodeIndex} onRemoveNode={onRemoveNode} />
              {lines}
            </div>
          )
        })}
      </div>
    </div>
  )
}


// function Layer({ layer, index, onRemoveLayer, onAddNode, onRemoveNode, nextLayer }) {
//   const handleAddNode = () => {
//     onAddNode(index)
//   }

//   const handleRemoveLayer = () => {
//     onRemoveLayer(index)
//   }

//   return (
//     <div className='layer'>
//       <div>
//         <button onClick={handleAddNode}>+</button>
//         <button onClick={handleRemoveLayer}>-</button>
//       </div>
//       <div className='node-container'>
//         {layer.nodes.map((node, index) => (
//           <Node key={index} node={node} layerIndex={index} index={index} onRemoveNode={onRemoveNode} />
//         ))}
//       </div>
//       {nextLayer && (
//         <svg className='line-container'>
//           {layer.nodes.map((node) =>
//             nextLayer.nodes.map((nextNode) => (
//               <line
//                 key={`${node}-${nextNode}`}
//                 x1={node.position.x}
//                 y1={node.position.y}
//                 x2={nextNode.position.x}
//                 y2={nextNode.position.y}
//                 stroke='black'
//                 strokeWidth='0.5'
//               />
//             ))
//           )}
//         </svg>
//       )}
//     </div>
//   )
// }

export default Layer