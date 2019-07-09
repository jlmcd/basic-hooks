import React, { useState } from 'react'
import './index.scss'

const InputElement = () => {
  const [inputText, setInputText] = useState('')
  const [historyList, setHistoryList] = useState([])

  return (
    <div>
      <input
        onChange={e => {
          setInputText(e.target.value)
          setHistoryList([...historyList, e.target.value])
        }}
        placeholder="Enter Some Text"
      />
      <br />
      {inputText}
      <hr/>
      <br/>
      {historyList.map(rec => (
        <div>{rec}</div>
      ))}
    </div>
  )
}

export default InputElement
