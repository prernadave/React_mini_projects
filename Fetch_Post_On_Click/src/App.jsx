import { useState } from "react"


function App() {
  const [data, setData] = useState([])
  const handleUrl = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setData(data))

  }
  return (
    <>
      <div className="app-container">
        <button className="get-data-button" onClick={handleUrl}>Get Data</button>
      </div>
      <div>
        {
          data.map((data) => <div className="post-container" key={data.id}>
            <h3 className="post-title">{data.title}</h3>
            <p className="post-body">{data.body}</p>
          </div>)
        }
      </div>
    </>
  )
}

export default App
