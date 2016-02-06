import React from 'react'

class DetailsForm extends React.Component {

  handleClick (e) {
    e.preventDefault()

    const data = Object.keys(this.refs).reduce((memo, key) => {
      memo[key] = this.refs[key].value
      return memo
    }, {})

    this.props.onSubmit(data)
  }

  render () {
    return (
      <section className='modal-slide details-form'>

        <section className='text-container modal-child'>
          <p>{this.props.text} <span className='highlight-text'>{this.props.question}</span></p>
        </section>

        <form className='form-container' onSubmit={this.handleClick.bind(this)}>
          <input type="text" ref="firstname" placeholder="First Name" />
          <input type="text" ref="lastname" placeholder="Last Name" />
          <input type="email" ref="email" placeholder="Email Address" />
          <input type="tel" ref="phone" placeholder="Phone Number" /><br />
          <input type="submit" className="submit" />
        </form>

      </section>
    )
  }

}

export default DetailsForm
