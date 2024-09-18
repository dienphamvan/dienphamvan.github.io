import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/posts`)
      .then((response) => response.json())
      .then((json) => setPosts(json))
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </header>
    </div>
  )
}

export default App
