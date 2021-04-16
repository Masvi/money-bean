import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import App from './App';


createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Criação de site",
          type: 'deposit',
          category: 'Dev',
          amount: 3000,
          createdAt: new Date('2021-02-14 15:00:00'),
        },
        {
          id: 2,
          title: "Compras mercado",
          type: 'withdraw',
          category: 'Food',
          amount: 800,
          createdAt: new Date('2021-02-23 09:00:00'),
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);