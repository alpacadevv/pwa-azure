import React from 'react'
import ReactDOM from 'react-dom'


const App = () => <div>Hello PWA+Azure!!</div>

ReactDOM.render(<App />, document.getElementById('app'))

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // make service-worker.js by GenerateSW
    navigator.serviceWorker.register('/service-worker.js')
  })
}
