import React, { useState } from 'react'
import * as d3 from 'd3'
import Layer from './Layer'
import '../App.css'

function NeuralNetwork({ network, handleAddLayer, handleRemoveLayer, handleAddNode, handleRemoveNode }) {
  const svgRef = React.useRef()

  React.useEffect(() => {
    const svg = d3.select(svgRef.current)

    // Create a group for each layer
    const layerGroups = svg.selectAll('g.layer')
      .data(network.layers)
      .enter()
      .append('g')
      .classed('layer', true)
      .attr('transform', (d, i) => `translate(${i * 100}, 0)`)

    // Create a group for each node
    const nodeGroups = layerGroups.selectAll('g.node')
      .data((d) => d.nodes)
      .enter()
      .append('g')
      .classed('node', true)
      .attr('transform', (d, i) => `translate(0, ${i * 30})`)

    // Create a circle for each node
    nodeGroups.append('circle')
      .attr('r', 10)
      .attr('fill', 'green')
      .attr('stroke', 'black')

    // Create a line for each connection between nodes
    const lines = []
    network.layers.forEach((layer, i) => {
      layer.nodes.forEach((node, j) => {
        if (i < network.layers.length - 1) {
          const nextLayer = network.layers[i + 1]
          nextLayer.nodes.forEach((nextNode, k) => {
            lines.push({
              x1: i * 100 + 10,
              y1: j * 30 + 10,
              x2: (i + 1) * 100 + 10,
              y2: k * 30 + 10
            })
          })
        }
      })
    })

    // Add the lines to the SVG
    svg.selectAll('line')
      .data(lines)
      .enter()
      .append('line')
      .attr('x1', (d) => d.x1)
      .attr('y1', (d) => d.y1)
      .attr('x2', (d) => d.x2)
      .attr('y2', (d) => d.y2)
      .attr('stroke', 'black')
  }, [network])

  return (
    <div>
      <div>
        <button onClick={handleAddLayer}>Add Layer</button>
      </div>
      <svg ref={svgRef} width={network.layers.length * 100} height={network.layers.reduce((acc, curr) => Math.max(acc, curr.nodes.length * 30), 0)} />
    </div>
  )
}

export default NeuralNetwork