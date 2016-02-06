import React from 'react'
import ReactDOM from 'react-dom'
import Modal from './Modal'
import { quizData } from './api'

ReactDOM.render(
  <Modal quizData={quizData()} />,
  document.getElementById('app')
)
