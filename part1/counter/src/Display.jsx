// Correct : la déstructuration récupère directement la prop `counter`.
const Display = ({ counter }) => {
  // Display reste un composant d'affichage : il ne possède ni état ni setter.
  return <div>{counter}</div>
}

export default Display
