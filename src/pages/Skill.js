import React from 'react'
import VimContents from '../components/VimContents'
import LineNumbers from '../components/LineNumbers'

const Skill = () => (
  <div className="flex">
    <LineNumbers numberLines={31} />
    <VimContents>
      <p className="syntax-comment">/**</p>
      <p className="syntax-comment"> * Skill</p>
      <p className="syntax-comment"> */</p>
      <p></p>
      <h2># Skill</h2>
      <p></p>
      <h3>## HTML5</h3>
      <p></p>
      <p>難しいね</p>
      <p></p>
      <h3>## CSS3</h3>
      <p></p>
      <p>命名規則めんどくさい</p>
      <p></p>
      <h3>## JavaScript</h3>
      <p></p>
      <p>書くことは多い</p>
      <p></p>
      <h3>## PHP</h3>
      <p></p>
      <p>バックエンドでは一番慣れてる</p>
      <p></p>
      <h3>## Golang</h3>
      <p></p>
      <p>勉強中</p>
      <p></p>
      <h3>## ReactNative</h3>
      <p></p>
      <p>仕事で使ってる</p>
      <p></p>
    </VimContents>
  </div>
)

export default Skill
