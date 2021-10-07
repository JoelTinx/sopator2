import React from 'react'

const TableResult = ({ words = [], updateItem, removeWord }) => {
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

  return (
    <>
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
    </>
  )
}

export default TableResult
