import React, { useState } from 'react'

import DimensionSelector from '../../components/dimension-selector/dimension-selector.component'
import Modal from '../../components/modal/modal.component'
import TableResult from '../../components/table-result/table-result.component'
import WordList from '../../components/word-list/word-list.component'

import { Sopator } from '../../libs/sopator'
import {matrixToString, onlyLetters} from '../../libs/utils'

import './home.styles.scss'
import './home.styles.css';
import {useDimensions} from "../../hooks/useDimensions";

const HomePage = () => {
	const { height, width, setHeight, setWidth, min, max, initialValue } = useDimensions();
  const [words, setWords] = useState([])
  const [word, setWord] = useState('')
  const [matrix, setMatrix] = useState([]);
  const [ready, setReady] = useState(false);
  const [textSolution, setTextSolution] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [backup, setBackup] = useState([]);
  const [viewSolution, setViewSolution] = useState(false);
  const message = 'Si has generado tu sopa de letras con este aplicativo, no olvides recomendarlo a quien le pueda ser de utilidad.\n\nGracias';

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

  const isValidWord = (inputWord) => {
    if (inputWord.length <= 2) return false;
		if (!onlyLetters(inputWord)) return false;
    return true;
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAppendWord();
    }
  }

  const setWordFormat = (inputWord = '') => {
    return inputWord.trim().replace(' ', '').toUpperCase();
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
    setMatrix(sopator.matrix)
    setBackup(sopator.solution)
    setReady(true)
    setTextSolution('')
    const res = `${matrixToString(sopator.matrix, ' ')}\n\nPALABRAS:\n${words.join('\n')}\n\n${message}`;
    setTextSolution(res)
  }

  const handleClickCleanWords = () => {
    setWord('')
    setWords([])
    setReady(false)
  }

  const showModal = () => {
    setModalVisible(true);
  }

  const closeModal = () => {
    setModalVisible(false);
  }

  const handleClickOkAndClose = () => {
    navigator.clipboard.writeText(textSolution)
      .then(() => {
        setModalVisible(false);
      })
      .catch((err) => {
        console.error(err);
        alert('No se pudo copiar el texto al portapapeles. Por favor, copia manualmente.');
      });
  }

  const handleClickSolution = () => {
    setViewSolution(!viewSolution)
  }

	const WordsList = () => {
		if (words.length === 0 )return null;
		return <div className="card mt-16">
			<WordList
				words={words}
				updateWord={updateWord}
				removeWord={removeWord}
			/>
		</div>
	}

  return (
    <>
			<div className="main__header">
				<h3>GENERADOR DE SOPAS DE LETRAS</h3>
			</div>
      <div className="main">
        <div className="left-side p-16 flex-column">
          <div>
            <DimensionSelector
              min={min}
              max={max}
              initialValue={initialValue}
              onHeightChange={setHeight}
              onWidthChange={setWidth}
            />
            <div className="card mt-16">
              <p className="title center mb-8">Ingresar palabras</p>
              <input
                type="text"
                name="word"
                tabIndex="0"
                value={word}
                autoComplete="off"
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
            </div>
						<WordsList />
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
              className={`btn btn-success mr-4 ${ words.length === 0 ? 'btn-disbled' : '' }`}
              onClick={handleClickGenerateButton}
              disabled={(words.length === 0)}
            >
              Generar
            </button>
            <button
              className={`btn ${ viewSolution ? 'btn-secondary' : 'btn-info'  } mx-4 ${!ready ? 'btn-disbled' : ''}`}
              disabled={!ready}
              onClick={() => handleClickSolution()}
            >
              { !viewSolution ? 'Ver' : 'Ocultar' } solución
            </button>
            <button
              className={`btn btn-primary ml-4 ${!ready ? 'btn-disbled' : ''}`}
              disabled={!ready}
              onClick={() => showModal()}
            >
              Guardar
            </button>
          </div>
          <div>
            { matrix.length > 0 && <TableResult matrix={matrix} solution={viewSolution} backup={backup} words={words} /> }
          </div>
        </div>
				<Modal
					children={<ModalBody content={textSolution} />}
					backdropdismiss={false}
					onCloseClick={closeModal}
					onOkClick={handleClickOkAndClose}
					isOpen={modalVisible}
				/>
      </div>
    </>
  )
}

const ModalBody = ({ content = '' }) => {
  return (
    <div className="w-full">
      <textarea
        id='txtSolution'
        className="w-full h-full p-16"
        defaultValue={content}
      >
      </textarea>
    </div>
  )
}

export default HomePage
