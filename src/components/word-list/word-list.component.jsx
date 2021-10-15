import React, { useState } from 'react'

import './word-list.styles.scss'

const WordList = ({ words = [], updateWord, removeWord }) => {
  const [wordEdit, setWordEdit] = useState('')
  const [indexSelected, setIndexSelected] = useState(null);
  const [indexEdit, setIndexEdit] = useState(null)

  const handleTableRowClick = (index) => {
    setIndexSelected(index)
    indexEdit !== index && setIndexEdit(null)
  }

  const handleTableRowDoubleClick = (currentValue, index) => {
    setWordEdit(currentValue)
    setIndexEdit(index)
  }

  const handleInputEditKeyDown = (event, index, value) => {
    if (event.key === 'Enter') {
      updateWord(index, value)
      setWordEdit('')
      setIndexEdit(null)
    }
  }

  const handleInputEditChange = (event) => {
    setWordEdit(event.target.value)
  }

  const handleClickUpdateWord = (index) => {
    updateWord(index, wordEdit)
    setWordEdit('')
    setIndexEdit(null)
  }

  const handleClickRemoveWord = (index) => {
    removeWord(index)
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="th-10">#</th>
          <th>Palabra</th>
          <th className="th-10"></th>
        </tr>
      </thead>
      <tbody>
        {
          words.map((w, index) => (
            <tr
              className={ `table-row ${ indexSelected === index ? 'tr-selected' : '' }` }
              key={`wl-tr-${index}`}
              onClick={() => handleTableRowClick(index)}
              onDoubleClick={() => handleTableRowDoubleClick(w, index)}
            >
              <td>{index + 1}</td>
              <td>
                {
                  (indexEdit !== null && indexEdit === index)
                  ?
                  <input
                    value={wordEdit}
                    onChange={handleInputEditChange}
                    onKeyDown={(e) => handleInputEditKeyDown(e, index, wordEdit)}
                    className="input-table"
                  />
                  :
                  <span>{ w }</span>
                }
              </td>
              <td>
                {
                  (indexEdit !== null && indexEdit === index) ?
                  <button className="btn btn-success" onClick={() => handleClickUpdateWord(index)}>√</button> :
                  <button className="btn btn-warning" onClick={() => handleClickRemoveWord(index)}>x</button>
                }
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default WordList
