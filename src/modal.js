import React from 'react'
import ThreeChoice from './ThreeChoice'
import FourChoice from './FourChoice'
import DetailsForm from './DetailsForm'

const layouts = {
  1: ThreeChoice,
  2: FourChoice,
  3: DetailsForm
}

class Modal extends React.Component {

  constructor(props) {
    super(props)
    this.response = {
      questions: {}
    }
    this.state = {
      step: 0
    }
  }

  onNext(option) {
    this.response.questions[`q${this.state.step + 1}`] = option
    this.setState({
      step: this.state.step + 1
    })
  }

  onSubmit(details) {
    Object.assign(this.response, details)
    this.props.onSubmit(this.response)
  }

  render () {
    var slide= this.props.quizData[this.state.step]
    var Layout = layouts[slide.layout]
    return (
      <section className='modal'>

        <span className='step'><span className='highlight-text'>Step {this.state.step + 1}</span> of 5</span>
        <div className='close-button'>&times;</div>
        <Layout text={slide.text} question={slide.question} options={slide.options} onNext={this.onNext.bind(this)} onSubmit={this.onSubmit.bind(this)} />

      </section>
    )
  }

}

export default Modal
