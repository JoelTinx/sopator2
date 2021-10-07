import React, { useState } from 'react'
import Counter from '../../components/counter/counter.component'
import TableResult from '../../components/table-result/table-result.component'

import { Sopator } from '../../libs/sopator'

import './home.styles.scss'

const HomePage = () => {
  const [words, setWords] = useState([])
  const [word, setWord] = useState('')
  const [wordEdit, setWordEdit] = useState('')
  const [indexSelected, setIndexSelected] = useState(null);
  const [indexEdit, setIndexEdit] = useState(null)
  const [matrix, setMatrix] = useState([]);
  const [ready, setReady] = useState(false);

  const handleAppendWord = () => {
    if (!isValidWord(word)) {
      setWord('')
      return;
    }
    setWords([...words, setWordFormat(word)]);
    setWord('');
  }

  const handleInputChange = (event) => {
    setWord(event.target.value)
  }

  const isValidWord = (x_word) => {
    if (x_word.length <= 2) return false;
    return true;
  }

  const handleInputEditChange = (event) => {
    setWordEdit(event.target.value)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAppendWord();
    }
  }

  const setWordFormat = (x_word = '') => {
    return x_word.trim().replace(' ', '').toUpperCase();
  }

  const removeWord = (index) => {
    setWords(words.filter((_, i) => (i !== index)))
  };

  const updateItem = (index, value) => {
    const arr = words.map((w, i) => (i === index ? setWordFormat(value) : w));
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
    setReady(true)
  }

  const handleClickCleanWords = () => {
    setWord('')
    setWords([])
    setReady(false)
  }

  return (
    <div className="main">
      <div className="left-side">
        <div className="flex">
          <div className="flex">
            <label htmlFor="height" className="label mr-4">Height</label>
            <Counter />
          </div>
          <div className="flex">
            <label htmlFor="width" className="label mr-4">Width</label>
            <Counter />
          </div>
        </div>
        <div>
          <hr className="divider"/>
        </div>
        <div className="my-4">
          {/* <label htmlFor="word" className="input-label">Palabra</label> */}
          <input
            type="text"
            name="word"
            value={word}
            placeholder="palabra + (↵ enter)"
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="input-word"
          />
        </div>
        <button type="button" className="btn btn-primary btn-block my-4" onClick={handleAppendWord}>
          Agregar
        </button>
        <div>
          <hr className="divider"/>
        </div>
        <div>
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
                    key={index + 1}
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
                        <button className="btn btn-success" onClick={() => updateItem(index, wordEdit)}>√</button> :
                        <button className="btn btn-danger" onClick={() => removeWord(index)}>x</button>
                      }
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <div>
          <hr className="divider"/>
        </div>
        <div>
          {
            words.length >= 2 &&
            <button 
              className="btn btn-block btn-danger"
              onClick={handleClickCleanWords}
            >
              limpiar lista
            </button>
          }
        </div>
      </div>
      <div className="right-side">
        <div>
          <button
            className={`btn btn-danger mr-4 ${ words.length === 0 ? 'btn-disbled' : '' }`}
            onClick={handleClickGenerateButton}
            disabled={(words.length === 0)}
          >
            Generar
          </button>
          <button
            className={`btn btn-success mx-4 ${!ready ? 'btn-disbled' : ''}`}
            disabled={!ready}
          >
            Resolver
          </button>
          <button
            className={`btn btn-info mx-4 ${!ready ? 'btn-disbled' : ''}`}
            disabled={!ready}
          >
            Limpiar
          </button>
          <button
            className={`btn btn-secondary ml-4 ${!ready ? 'btn-disbled' : ''}`}
            disabled={!ready}
          >
            Guardar
          </button>
        </div>
        <div>
          {
            matrix.length > 0
            ?
            <TableResult matrix={matrix} />
            :
            <span>...</span>
          }
        </div>
      </div>
    </div>
  )
}

export default HomePage
