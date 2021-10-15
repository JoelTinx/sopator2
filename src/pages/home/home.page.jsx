import React, { useState } from 'react'
import Counter from '../../components/counter/counter.component'
import Modal from '../../components/modal/modal.component'
import TableResult from '../../components/table-result/table-result.component'
import WordList from '../../components/word-list/word-list.component'

import { matrixToString, Sopator } from '../../libs/sopator'

import './home.styles.scss'

const HomePage = () => {
  const initialSize = 15;
  const [words, setWords] = useState([])
  const [word, setWord] = useState('')
  const [matrix, setMatrix] = useState([]);
  const [ready, setReady] = useState(false);
  const [width, setWidth] = useState(initialSize);
  const [height, setHeight] = useState(initialSize);
  const [textSolution, setTextSolution] = useState('');
  const [modalVisible, setModalVisible] = useState(false);


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

  const updateWord = (index, value) => {
    const arr = words.map((w, i) => (i === index ? setWordFormat(value) : w));
    setWords(arr);
  };

  const handleClickGenerateButton = () => {
    const sopator = new Sopator(words, height, width);
    sopator.generate();
    // console.log(sopator.matrix, sopator.height, sopator.width);
    // console.log(sopator.log);
    setMatrix(sopator.matrix);
    setReady(true)
    setTextSolution('');
    const res = `${matrixToString(sopator.matrix)}\n
PALABRAS:

${words.join('\n')}
    
Si haz generado tu sopa de letras con este aplicativo, no olvides recomendarlo a tus amigos y mencionarnos. Gracias`;
    setTextSolution(res)
  }

  const handleClickCleanWords = () => {
    setWord('')
    setWords([])
    setReady(false)
  }

  const onWithChange = (_width) => {
    setWidth(_width)
  }

  const onHeightChange = (_height) => {
    setHeight(_height);
  }

  const showModal = () => {
    setModalVisible(true);

  }

  const closeModal = () => {
    setModalVisible(false);
  }

  return (
    <div className="main">
      <div className="left-side p-16 flex2">
        <div>
          <div className="card">
            <p className="title center mb-16">Dimensiones</p>
            <div className="flex">
              <div className="flex">
                <label htmlFor="height" className="label mr-4">Height</label>
                <Counter
                  min={15}
                  max={50}
                  initial={initialSize}
                  onValueChange={onHeightChange}
                />
              </div>
              <div className="flex">
                <label htmlFor="width" className="label mr-4">Width</label>
                <Counter
                  min={15}
                  max={50}
                  initial={initialSize}
                  onValueChange={onWithChange}
                />
              </div>
            </div>
          </div>
          <hr className="divider"/>
          <input
            type="text"
            name="word"
            value={word}
            autoComplete="false"
            placeholder="palabra + (↵ enter)"
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="input-word my-4"
          />
          <button
            type="button"
            className={`btn btn-primary btn-block my-4 ${ word.length === 0 ? 'btn-disbled' : '' }`}
            onClick={handleAppendWord}
            disabled={word.length === 0}
          >
            Agregar
          </button>
          <hr className="divider"/>
          {
            words.length >= 1 &&
            <WordList
              words={words}
              updateWord={updateWord}
              removeWord={removeWord}
            />
          }
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
      <div className="right-side p-16">
        <div className="mb-8">
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
          {/* <button
            className={`btn btn-info mx-4 ${!ready ? 'btn-disbled' : ''}`}
            disabled={!ready}
          >
            Limpiar
          </button> */}
          <button
            className={`btn btn-secondary ml-4 ${!ready ? 'btn-disbled' : ''}`}
            disabled={!ready}
            onClick={() => showModal()}
          >
            Guardar
          </button>
        </div>
        <div>
          { matrix.length > 0 && <TableResult matrix={matrix} /> }
        </div>
      </div>
        {
          modalVisible &&
          <Modal
            children={<ModalResult content={textSolution} />}
            onClick={closeModal}
          />
        }
    </div>
  )
}

const ModalResult = ({ content = '' }) => {
  return (
    <div className="w-full">
      <textarea 
        className="w-full h-full p-16"
        defaultValue={content}
      >
      </textarea>
    </div>
  )
}

export default HomePage
