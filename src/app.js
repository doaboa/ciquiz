import React from 'react'
import ReactDOM from 'react-dom'
import Modal from './Modal'
import 'fetch-polyfill'
import { quizData, submitQuiz } from './api'

ReactDOM.render(
  <Modal quizData={quizData()} onSubmit={submitQuiz} />,
  document.getElementById('app')
)
