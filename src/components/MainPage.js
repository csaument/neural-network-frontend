import React from 'react'
import '../App.css'
import NeuralNetwork from './NeuralNetwork'

function MainPage() {
  return (
    <div className='main-page-container'>
      <div className='neural-network-container'>
      <div>
      <NeuralNetwork />
    </div>
      </div>
      <div className='button-container'>
        <button>Train Neural Network</button>
        <button>Run Neural Network</button>
      </div>
    </div>
  )
}

export default MainPage