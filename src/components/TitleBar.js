import React from 'react'
import styled from 'styled-components'

const TitleBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #282828;
  border: 0 solid #9e9a9a;
  border-width: 0 0 1px 0;
  height: 25px;

  &:after {
    display: block;
    content: '';
  }

  h1 {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: normal;
    color: #eeeeee;
  }
`

const TitleButtonWrapper = styled.div`
  margin-left: 10px;
`

const TitleButton = styled.button`
  background: ${props => props.color};
  border: 1px solid #292929;
  border-radius: 15px;
  width: 14px;
  height: 14px;
  margin: 0 4px;
`

const TitleBar = () => (
  <TitleBarWrapper>
    <TitleButtonWrapper>
      <TitleButton color='#FF6259' />
      <TitleButton color='#FFC12E' />
      <TitleButton color='#2ACD42' />
    </TitleButtonWrapper>
    <h1>rskull.com - DotEarl official? web site.</h1>
  </TitleBarWrapper>
)

export default TitleBar
