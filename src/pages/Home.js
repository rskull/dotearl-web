import React from 'react'
import VimContents from '../components/VimContents'
import LineNumbers from '../components/LineNumbers'

const Home = () => (
  <div className="flex">
    <LineNumbers numberLines={20} />
    <VimContents>
      <p className="syntax-comment">/**</p>
      <p className="syntax-comment"> * Home</p>
      <p className="syntax-comment"> * @author dotearl</p>
      <p className="syntax-comment"> */</p>
      <p></p>
      <h2>## Home</h2>
      <p></p>
      <h3>### Profile</h3>
      <p></p>
      <p>Name: @DotEarl</p>
      <p>Birth: 1992/12/21</p>
      <p>Desc: Web Application Engineer</p>
      <p></p>
      <h3>### History</h3>
      <p></p>
      <p>高校の頃にWeb開発に興味を持つ</p>
      <p>ネット上の開発コミュニティで活動を始める</p>
      <p>新卒でソシャゲ業界に入信 → ブラックすぎて脱会</p>
      <p>その後Togetter社に改宗する</p>
    </VimContents>
  </div>
)

export default Home
