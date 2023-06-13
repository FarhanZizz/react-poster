import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Post from "./components/Post"

function App() {
  const storedPosts = localStorage.getItem("posts")
  const [posts, setPosts] = useState(storedPosts ? JSON.parse(storedPosts) : [])

  useEffect(() => {
    // Store posts in local storage whenever it changes
    localStorage.setItem("posts", JSON.stringify(posts))
  }, [posts])

  return (
    <div className="p-6 md:p-10">
      <Navbar setPosts={setPosts} />
      {posts.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-5 justify-items-center">
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
      ) : (
        <>
          <h1 className="text-center mt-10 font-semibold text-lg">
            No Posts Posted!
          </h1>
          <p className="text-center text-xs">Try Adding a Post Now!</p>
        </>
      )}
    </div>
  )
}

export default App
