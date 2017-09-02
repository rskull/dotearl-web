import React from 'react'
import VimContents from '../components/VimContents'
import LineNumbers from '../components/LineNumbers'

const Contact = () => (
  <div className="flex">
    <LineNumbers numberLines={19} />
    <VimContents>
      <p></p>
      <h2># Contact</h2>
      <p></p>
      <h3>## Github</h3>
      <p></p>
      <p><a href="https://github.com/rskull" target="_blank">https://github.com/rskull</a></p>
      <p></p>
      <h3>## Twitter</h3>
      <p></p>
      <p><a href="https://twitter.com/DotEarl" target="_blank">https://twitter.com/DotEarl</a></p>
      <p></p>
      <h3>## Blog</h3>
      <p></p>
      <p><a href="http://rskull.hateblo.jp/" target="_blank">http://rskull.hateblo.jp/</a></p>
      <p></p>
      <h3>## Mail</h3>
      <p></p>
      <p><a href="mailto:info@rskull.com">info@rskull.com</a></p>
    </VimContents>
  </div>
)

export default Contact
