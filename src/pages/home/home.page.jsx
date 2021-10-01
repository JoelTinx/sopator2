import React, { useState } from 'react'

import { Sopator } from '../../libs/sopator'

import './home.styles.scss'

const HomePage = () => {
  const [words, setWords] = useState([])
  const [word, setWord] = useState('')
  const [wordEdit, setWordEdit] = useState('')
  const [indexSelected, setIndexSelected] = useState(null);
  const [indexEdit, setIndexEdit] = useState(null)
  const [matrix, setMatrix] = useState([]);

  const handleAppendWord = () => {
    setWords([...words, validateAndFixWord(word)]);
    setWord('');
  }

  const handleInputChange = (event) => {
    setWord(event.target.value)
  }

  const handleInputEditChange = (event) => {
    setWordEdit(event.target.value)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAppendWord();
    }
  }

  const handleTableRowDoubleClick = (currentValue, index) => {
    setWordEdit(currentValue)
    setIndexEdit(index)
  }

  const handleTableRowClick = (index) => {
    setIndexSelected(index)
    indexEdit !== index && setIndexEdit(null)
  }

  const validateAndFixWord = (x_word = '') => {
    return x_word.trim().replace(' ', '').toUpperCase();
  }

  const removeWord = (index) => {
    setWords(words.filter((_, i) => (i !== index)))
  };

  const updateItem = (index, value) => {
    const arr = words.map((w, i) => (i === index ? validateAndFixWord(value) : w));
    console.log({index, value, arr});
    setWords(arr);
    setWordEdit('')
    setIndexEdit(null)
  };

  const handleInputEditKeyDown = (event, index, value) => {
    if (event.key === 'Enter') {
      updateItem(index, value)
    }
  }

  const handleClickGenerateButton = () => {
    const sopator = new Sopator(words);
    sopator.generate();
    console.log(sopator.toString())
    setMatrix(sopator.matrix);
  }

  return (
    <div className="main">
      <div className="left-side">
        <div>
          <div>
            <label htmlFor="width">Width:</label>
            <input type="number" name="width" />
          </div>
          <div>
            <label htmlFor="height">Height:</label>
            <input type="number" name="height" />
          </div>
        </div>
        <div>
          <label htmlFor="word">Palabra</label>
          <input type="text" name="word" value={word} onChange={handleInputChange} onKeyDown={handleKeyDown} />
        </div>
        <button type="button" onClick={handleAppendWord}>
          Agregar
        </button>
        <div>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Palabra</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                words.map((w, index) => (
                  <tr
                    className={ `table-row ${ indexSelected === index ? 'selected' : '' }` }
                    key={index + 1}
                    onClick={() => handleTableRowClick(index)}
                    onDoubleClick={() => handleTableRowDoubleClick(w, index)}
                  >
                    <td>{index + 1}</td>
                    <td>
                      {
                        (indexEdit !== null && indexEdit === index) ?
                        <input value={wordEdit} onChange={handleInputEditChange} onKeyDown={(e) => handleInputEditKeyDown(e, index, wordEdit)} /> :
                        <span>{ w }</span>
                      }
                    </td>
                    <td>
                      {
                        (indexEdit !== null && indexEdit === index) ?
                        <button onClick={() => updateItem(index, wordEdit)}>V</button> :
                        <button onClick={() => removeWord(index)}>X</button>
                      }
                      
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
      <div className="right-side">
        <div>
          <button
            onClick={handleClickGenerateButton}
          >
            Generar
          </button>
        </div>
        <div>
          {
            matrix.length > 0
            ?
            <table>
              <tbody>
                {
                  matrix.map((row, i) => (
                    <td key={`td-${i}`}>
                      {
                        row.map((item, j) => (
                          <tr key={`tr-${j}`}>{ item }</tr>
                        ))
                      }
                    </td>
                  ))
                }
                <tr>
                  <td></td>
                </tr>
              </tbody>
            </table>
            :
            <span>...</span>
          }
        </div>
      </div>
    </div>
  )
}

export default HomePage
