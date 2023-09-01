import React from 'react' // Importa o React para usar JSX
import ReactDOM from 'react-dom/client' // Importa o ReactDOM para renderizar o App
import App from './App.jsx' // Importa o componente App
import './index.css' // Importa o CSS global

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
