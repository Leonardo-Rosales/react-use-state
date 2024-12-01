import { useState } from "react"
import Button from "./Button/Button"
import Card from "./Card/Card"
import languages from "./languages"


function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  return (
    <>
      <main>
        <h1>Learn Web Development</h1>
        <section className="container">
          <ul className="button_list">
            {languages.map((language) => (
              <li key={language.id}>
                <Button
                  language={language}
                  isSelected={selectedLanguage && selectedLanguage.id === language.id}
                  onClick={setSelectedLanguage}
                />
              </li>
            ))}
          </ul>

          <Card selectedLanguage={selectedLanguage} />
        </section>
      </main>
    </>
  );
}

export default App;