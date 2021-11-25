import React from 'react'

import './solution.styles.scss'

const Solution = ({ words = [], columnSize = 5 }) => {
  const numberOfColumns = Math.ceil(words.length / columnSize);
  let columns = Array.from({ length: numberOfColumns }, () => []);
  columns.forEach((_, index) => {
    columns[index] = words.slice(index * columnSize, (index + 1) * columnSize)
  });

  return (
    <div className="solution">
      {
        columns.map((list, index) => <WordList key={`col-${index}`} words={list} column={index} />)
      }
    </div>
  )
}

function WordList({ words, column }) {
  return <div className="item-col">{ words.map((word, index) => <p key={`item-${column}-${index}`}>{word}</p>) }</div>
}

export default Solution
