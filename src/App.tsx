import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addLanguages, useLanguage, toFavoret } from "./redux/sliceLeguages"

function App() {
  const languages = useSelector(useLanguage)
  const [value, setValue] = useState("")
  
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(addLanguages(value))
    setValue('')
  }

  return (
    <div className="App">
      <ul>
        {
          languages.map(iten => (
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
              <li style={{ color: iten.favorite ? 'green' : 'black' }}>{iten.name}</li>
              <button onClick={() => dispatch(toFavoret(iten.name))}>{iten.favorite ? 'desfavoritar': 'favoritar'}</button>
            </div>
          ))
        }
      </ul>
      <div style={{ display: "flex", gap: "1rem" }}>
        <input 
          type="text" 
          placeholder="Adicionar uma nova linguagem"
          value={value}
          onChange={({ target }) => setValue(target.value)}
        />
        <button onClick={handleClick}>Adicionar</button>
      </div>
    </div>
  )
}

export default App
