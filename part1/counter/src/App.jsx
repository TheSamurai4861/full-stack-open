import { useState } from 'react'

const App = () => {
  // Correction : `let` était inutile ici. On ne réassigne jamais directement
  // `counter` ou `setCounter` ; React fournit la nouvelle valeur au rendu suivant.
  const [counter, setCounter] = useState(0)

  // Cette partie était correcte : on passe cette fonction à onClick au lieu
  // d'appeler setCounter immédiatement pendant le rendu du composant.
  const increaseByOne = () => setCounter(counter + 1)

  return (
    <div>
      {/* Correction : l'énoncé présente le compteur séparément du bouton. */}
      <div>{counter}</div>

      {/* Correction : le texte demandé par l'énoncé est « plus » en minuscules. */}
      <button onClick={increaseByOne}>plus</button>
    </div>
  )
}

export default App
