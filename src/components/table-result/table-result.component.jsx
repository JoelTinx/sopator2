import React from 'react'

import './table-result.styles.scss'

const TableResult = ({ matrix, solution, backup }) => {
  return (
    <div className="table-result border br-8">
      <table>
        <tbody>
          {
            matrix.map((row, i) => (
              <tr key={`res-td-${i}`}>
                {
                  row.map((item, j) => (
                    <td 
                      key={`res-tr-${j}`}
                      className={`w-28 ${ solution && backup[i][j] !== '*' ? 'td-solution' : '' }`}
                    >{ item }</td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default TableResult
