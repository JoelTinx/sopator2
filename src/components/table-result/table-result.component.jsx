import React from 'react'

import './table-result.styles.scss'

const TableResult = ({ matrix }) => {
  return (
    <>
      <table>
        <tbody>
          {
            matrix.map((row, i) => (
              <tr key={`td-${i}`}>
                {
                  row.map((item, j) => (
                    <td 
                      key={`tr-${j}`}
                      className="w-20"
                    >{ item }</td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default TableResult
