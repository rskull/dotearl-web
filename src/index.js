import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import styled from 'styled-components'

import TitleBar from './components/TitleBar'
import FileExplorer from './components/FileExplorer'
import CommandLine from './components/CommandLine'

import Home from './pages/Home'
import Works from './pages/Works'
import Skill from './pages/Skill'
import Contact from './pages/Contact'

const MainContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 1200px;
  height: 700px;
  background: rgba(38, 38, 38, 0.88);
  border: 1px solid #555;
  border-radius: 5px;
  overflow: hidden;
`

const VimContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 3px solid #000;
  overflow: hidden;
`

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

class App extends Component {
  render() {
    const pathname = location.pathname.replace('/', '')
    return (
      <Router>
        <MainContainer>
          <TitleBar />
          <VimContainer>
            <FileExplorer />
            <Route exact path="/" component={Home} />
            <Route path="/works" component={Works} />
            <Route path="/skill" component={Skill} />
            <Route path="/contact" component={Contact} />
            <StatusBar width='186' active>
              {'command < [][unix]'}
            </StatusBar>
            <StatusBar width='1000'>
              <div>
                {'command  7,13,1=5D'}
              </div>
              <div>
                {'1:188 [markdown] home.md [utf-8][unix]'}
              </div>
            </StatusBar>
            <CommandLine />
          </VimContainer>
        </MainContainer>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
