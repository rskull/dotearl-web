import React, { Component } from 'react'
import styled from 'styled-components'
import keycode from 'keycode'

const CommandLineWrapper = styled.div`
  width: 100%;
  height: 10px;
  padding: 2px;
  font-size: 12px;
  color: #d0d0d0;
`

export default class CommandLine extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  handleKeyDown(e) {
    console.log('xxx', keycode(e))
    if (keycode(e) === 'j') {
      console.log('up')
    }
  }

  render() {
    return (
      <CommandLineWrapper
        onKeyDown={this.handleKeyDown}
      >
        {this.state.text}
      </CommandLineWrapper>
    )
  }
}
