import React from 'react'
import VimContents from '../components/VimContents'
import LineNumbers from '../components/LineNumbers'

const Works = () => (
  <div className="flex">
    <LineNumbers numberLines={19} />
    <VimContents>
      <p></p>
      <h2># Works</h2>
      <p></p>
      <h3>## Imshell</h3>
      <p></p>
      <p><a href="http://rskull.github.io/Imshell-php/" target="_blank">http://rskull.github.io/Imshell-php/</a></p>
      <p></p>
      <h3>## Browsync</h3>
      <p></p>
      <p><a href="http://qiita.com/R-sk/items/2e5b245c3017ccdb13d9" target="_blank">http://qiita.com/R-sk/items/2e5b245c3017ccdb13d9</a></p>
      <p></p>
      <h3>## ルビ振り君</h3>
      <p></p>
      <p><a href="http://rskull.com/ruby/home/" target="_blank">http://rskull.com/ruby/home/</a></p>
      <p></p>
      <h3>## その他</h3>
      <p></p>
      <p><a href="https://github.com/rskull" target="_blank">https://github.com/rskull</a></p>
    </VimContents>
  </div>
)

export default Works
