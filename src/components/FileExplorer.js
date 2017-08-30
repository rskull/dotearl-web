import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FileExplorerWrapper = styled.div`
  border: 0 dashed #414344;
  border-width: 0 1px 0 0;
  width: 180px;
  height: 627px;
  padding: 5px;

  p {
    font-size: 12px;
    margin: 0;

    &:nth-child(1) {
      margin-bottom: 20px;
      color: #E8D1B2;
    }
    &:nth-child(2) {
      margin-bottom: 5px;
      color: #D5C448;
    }
    &:nth-child(3) {
      margin-bottom: 5px;
      color: #63C5CC;
    }
  }
  
  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  a {
    display: block;
    padding: 2px 0;
    color: #5FAEFE;
    font-size: 12px;
    text-decoration: none;

    &:hover {
      background: #303030;
    }

    &:before {
      display: inline-block;
      color: #d65d1a;
      content: '▲'; 
      margin-right: 5px;
      transition: transform .1s linear;
      transform: scale(0.5) rotate(90deg);
    }

    &.active {
      background: #303030;

      &:before {
        transition: transform .1s linear;
        transform: scale(0.5) rotate(180deg);
      }
    }
  }
`

class FileExplorer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      index: 0
    }

    this.files = ['home', 'works', 'skill', 'contact']
  }

  handleClick(i) {
    this.setState({ index: i })
  }

  render() {
    const { index } = this.state
    return (
      <FileExplorerWrapper>
        <p>" Press ? for help</p>
        <p>{'.. (up a dir)'}</p>
        <p>{'</rskull/com/dotelar-web'}</p>
        <ul>
          {this.files.map((v, i) => (
            <li key={v}>
              <Link
                to={v === 'home' ? '/' : `/${v}`}
                onClick={() => this.handleClick(i)}
                className={index === i ? 'active' : ''}
              >{v}.md</Link>
            </li>
          ))}
        </ul>
      </FileExplorerWrapper>
    )
  }
}

export default FileExplorer
