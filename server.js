const express = require('express')
const app = express()
const PORT = 3000

app.use(express.urlencoded({ extended: false }))

let users = 
{
  "Test Account": {
    Repos: []
  },
  "TSL": {
    Repos: []
  }
}

app.set('view engine', 'ejs')
app.use(express.static('static'))

app.get('/', (req, res) => {
  res.redirect('/TSL')
})

app.get('/:name', (req, res) => {
  const name = req.params.name.replace('%20', ' ')
  const user = users[name]
  if (user) {
    res.render('profile', { name: name })
  } else {
    res.render('error', {error: {Type: "User Error", Name: `Could not find '${name}'`, message: `Uh Oh! Could not find '${name}'! Check your spelling or try again!`}})
  }
})

app.listen(PORT, () => {
    console.log(`Server listing on port ${PORT}`)
})