import {useState, useRef, useEffect} from 'react'


export function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFistInput = useRef(true)

  useEffect(() => {
    if (isFistInput.current) {
      isFistInput.current = search === ''
      return
    }

    if (search === '') {
      setError('No puedes buscar una película vacía')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }

    if(search.length < 3){
      setError('La búsqueda debe tener más de 3 letras')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}
