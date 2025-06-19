

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' // Librairie qui permet de lier React au DOM 
import App from './App.jsx'

// méthode createRoot prend un premier paramètre qui permet de savoir à quel élément HTML on va brancher le noeud REACT
// fonction render prend en paramètres des noeuds react et dit "il faut rendre l'application"
createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <App />
  </StrictMode>,
)

