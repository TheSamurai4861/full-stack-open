import { useState } from 'react'

const App = () => {
  // Correction : `let` était inutile ici. On ne réassigne jamais directement
  // `counter` ou `setCounter` ; React fournit la nouvelle valeur au rendu suivant.
  const [counter, setCounter] = useState(0)

  // Cette partie était correcte : on passe cette fonction à onClick au lieu
  // d'appeler setCounter immédiatement pendant le rendu du composant.
  const increaseByOne = () => setCounter(counter + 1)

  // Correct : pour remettre le compteur à zéro, le setter reçoit directement 0.
  const setToZero = () => setCounter(0)

  // Correct : on calcule la nouvelle valeur à partir de la valeur actuelle.
  const decreaseByOne = () => setCounter(counter - 1)

  return (
    <div>
      {/* Correction : l'énoncé présente le compteur séparément du bouton. */}
      <div>{counter}</div>

      {/* Correction : le texte demandé par l'énoncé est « plus » en minuscules. */}
      <button onClick={increaseByOne}>plus</button>

      {/* Correct : on transmet la fonction sans l'appeler avec des parenthèses. */}
      <button onClick={setToZero}>zero</button>

      {/* Correct : ce bouton reçoit le gestionnaire qui décrémente le compteur. */}
      <button onClick={decreaseByOne}>minus</button>
    </div>
  )
}

export default App
