import { useState } from 'react'
// Correction : un composant défini dans un autre fichier doit être importé
// avant de pouvoir être utilisé dans le JSX de App.
import Button from './Button.jsx'
import Display from './Display.jsx'

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
      {/* Correct : App garde l'état et transmet seulement sa valeur à Display. */}
      <Display counter={counter} />

      {/*
        Correction : `plus` est un texte littéral, donc il faut l'écrire entre
        guillemets. Avec text={plus}, React chercherait une variable nommée plus.
      */}
      <Button onClick={increaseByOne} text='plus' />

      {/* Même correction : zero est la valeur de la prop, pas une variable. */}
      <Button onClick={setToZero} text='zero' />

      {/* Même correction pour le texte du bouton de décrémentation. */}
      <Button onClick={decreaseByOne} text='minus' />
    </div>
  )
}

export default App
