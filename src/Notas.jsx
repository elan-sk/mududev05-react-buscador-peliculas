  const handleSubmit = (event) => {
    event.preventDefault()
    const inputEl = inputRef.current
    const value = inputEl.value
    console.log(value)
  }

  //Forma con javascript
  //forma1
  const handleSubmit = (event) => {
    event.preventDefault()
    const fields = new window.FormData(event.target)
    const query = fields.get('query')
    console.log(query)
    alert(query)
  }
  //Forma con objetos
  const handleSubmit = (event) => {
    const fields = Object.fromEntries(
    new window.FormData(event.target)
  )
    const {query} = fields
    console.log(fields)
    console.log(query)
  }


  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return //Evitar espacios al principio del input
    setQuery(newQuery)
  }
