import React, { Component } from 'react'
import styled from 'styled-components'

const StatusBar = styled.div`
  display: flex;
  flex-direction: row;
  background: ${props => props.active ? '#444' : '#6C6C6C'};
  width: ${props => props.width}px;
  height: 13px;
  padding: 2px;
  font-size: 12px;

  div {
    flex: 1;

    &:nth-child(2) {
      text-align: right;
      padding-right: 5px;
    }
  }
`

export default StatusBar
