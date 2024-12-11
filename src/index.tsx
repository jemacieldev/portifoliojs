import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' // Importa o componente App
import reportWebVitals from './reportWebVitals' // Importa a função reportWebVitals

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Medir o desempenho e logar as métricas no console
reportWebVitals(console.log)
