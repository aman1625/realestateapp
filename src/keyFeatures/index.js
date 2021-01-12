import React from 'react';
import styles from './styles.module.css'

class KeyFeatures extends React.Component {
  render() {
    const { features } = this.props

    return (
      <><div className='bg-white dib br3 pa3 ma2 grow bw2 shadow-5  '>
        <p>Key Features</p>
        <ul className='i b black'>
          {features.map(feature => (
            <li key={feature}>
              <small>{feature}</small>
            </li>
          ))}
        </ul>
        </div>
      </>
    )
  }
}

export default KeyFeatures 