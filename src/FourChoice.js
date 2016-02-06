import React from 'react'

class FourChoice extends React.Component {

  handleClick (option) {
    this.props.onNext(option)
  }

  render () {
    return (
      <section className='modal-slide four-choice'>

        <section className='text-container modal-child'>
          <p>{this.props.text} <span className='highlight-text'>{this.props.question}</span></p>
        </section>

        <section className='image-container modal-child'>
          {
            this.props.options.map((option, i) => {
              return(
                <div key={i} className='option' style={{backgroundImage:'url(' + option.image + ')'}} onClick={this.handleClick.bind(this, option.text)}>
                  <span>{option.text}</span>
                  <div className='photo-cover'></div>
                </div>
              )
            })
          }
        </section>

      </section>
    )
  }

}

export default FourChoice
