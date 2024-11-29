import { useState } from 'react'
import languages from './languages'

function App() {
  const [currentId, setCurrentId] = useState(null)

  return (
    <>
      <main>
        <section>
          <h1>Learn Web Development</h1>
          <ul>
            <li>
              {languages.map((language) => (
                <button key={language.id}>
                  {language.title}
                </button>
              ))}
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}

export default App
