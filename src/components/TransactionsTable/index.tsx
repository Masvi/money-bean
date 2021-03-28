import { useEffect, useState } from 'react'
import { api } from '../../services/api';
import { Container } from './styles'



export function TransactionTable() {

  let [transactions, setTransactions ] = useState([])

  useEffect(() => {
    api.get('transactions')
    .then(response => setTransactions(response.data))
  }, []);


  return (
    <Container> 
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>teste</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>14/01/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">-R$800.00</td>
            <td>Casa</td>
            <td>10/01/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}