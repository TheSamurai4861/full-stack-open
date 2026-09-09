# Notes de correction — Partie 1, chapitre 3

Cette note récapitule les erreurs rencontrées pendant les exercices sur l'état des
composants et les gestionnaires d'événements.

## Exercice A — Compteur simple

### Déclarer le résultat de `useState` avec `const`

La première version utilisait :

```jsx
let [counter, setCounter] = useState(0)
```

Il faut préférer :

```jsx
const [counter, setCounter] = useState(0)
```

Même si la valeur affichée évolue, le composant ne réassigne jamais directement
`counter` ou `setCounter`. Le setter demande à React un nouveau rendu, pendant
lequel React fournit la nouvelle valeur de `counter`.

### Respecter la structure et le libellé demandés

Le compteur doit être placé dans son propre élément afin d'être séparé du bouton.
Le texte attendu par l'énoncé est également `plus`, en minuscules.

## Exercice B — `plus`, `zero` et `minus`

Aucune erreur fonctionnelle n'a été relevée. Les deux gestionnaires ajoutés étaient
corrects :

```jsx
const setToZero = () => setCounter(0)
const decreaseByOne = () => setCounter(counter - 1)
```

Les fonctions étaient aussi correctement transmises à `onClick` sans être appelées
pendant le rendu.

## Exercice C — Extraction de `Display`

Aucune erreur React n'a été relevée. L'état est bien resté dans `App` et sa valeur a
été transmise à `Display` avec une prop. Seules la mise en forme et l'espacement de
la déstructuration ont été harmonisés :

```jsx
const Display = ({ counter }) => <div>{counter}</div>
```

## Exercice D — Extraction de `Button`

### Importer le composant avant de l'utiliser

`Button` était utilisé dans le JSX de `App` sans avoir été importé. Un composant
placé dans un autre fichier doit être importé :

```jsx
import Button from './Button.jsx'
```

### Distinguer texte littéral et expression JavaScript

La première version contenait :

```jsx
<Button onClick={increaseByOne} text={plus} />
```

Les accolades indiquent que `plus` est une variable JavaScript. Comme cette
variable n'existait pas, l'application aurait produit une erreur. Pour transmettre
du texte littéral, il faut utiliser des guillemets :

```jsx
<Button onClick={increaseByOne} text='plus' />
```

La même correction s'applique à `zero` et `minus`.
