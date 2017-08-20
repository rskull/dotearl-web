import React, { Component } from 'react'
import styled from 'styled-components'

const LineNumbersWrapper = styled.ul`
  margin: 0;
  padding: 5px;
  text-align: right;
  color: #434444;
  font-size: 12px;
  line-height: 1.5;
  
  li {
    list-style: none;
  }
`

class LineNumbers extends Component {
  render() {
    const { numberLines } = this.props
    return (
      <LineNumbersWrapper>
        {[...Array(numberLines).keys()].map( i => (<li key={`line-${i}`}>{i+1}</li>) )}
      </LineNumbersWrapper>
    )
  }
}

export default LineNumbers
