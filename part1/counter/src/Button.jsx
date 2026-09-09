// Cette logique était correcte : les noms déstructurés correspondent aux props
// reçues depuis App, puis onClick est transmis au véritable bouton HTML.
const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)

export default Button
