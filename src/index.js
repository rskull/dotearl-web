import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import styled from 'styled-components'

import TitleBar from './components/TitleBar'
import VimContainer from './components/VimContainer'
import FileExplorer from './components/FileExplorer'
import CommandLine from './components/CommandLine'
import StatusBar from './components/StatusBar'

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
  background: rgba(38, 38, 38, 0.92);
  border: 1px solid #555;
  border-radius: 5px;
  overflow: hidden;
`

class App extends Component {
  constructor(props) {
    super(props)
    this.files = ['home', 'works', 'skill', 'contact']
  }

  render() {
    return (
      <Router>
        <MainContainer>
          <TitleBar />
          <VimContainer>
            <FileExplorer files={this.files} />
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
                {'1:188 [markdown] xxxx.md [utf-8][unix]'}
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
