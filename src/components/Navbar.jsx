/* eslint-disable react/prop-types */
import { useRef } from "react"

const Navbar = ({ setPosts }) => {
  const nameInputRef = useRef(null)
  const bodyInputRef = useRef(null)
  const handleAddPost = (e) => {
    e.preventDefault()

    const name = nameInputRef.current.value
    const body = bodyInputRef.current.value
    const post = { name, body }

    setPosts((prevPosts) => [...prevPosts, post])
    nameInputRef.current.value = ""
    bodyInputRef.current.value = ""
    window.add_post.close()
  }
  return (
    <div className="navbar border-b-2 border-primary">
      <div className="flex-1">
        <a className=" text-2xl font-bold">
          React<span className="text-primary">Poster</span>
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <button
            onClick={() => window.add_post.showModal()}
            className="btn btn-primary text-white"
          >
            Add Post
          </button>
          <dialog id="add_post" className="modal modal-bottom sm:modal-middle">
            <form className="modal-box">
              <h3 className="font-bold text-lg text-center">Adding Post!</h3>
              <div className="flex flex-col justify-center items-center gap-5 my-6">
                <input
                  type="text"
                  ref={nameInputRef}
                  placeholder="Your Name"
                  className="input input-bordered input-primary w-full bg-[#e9e2e2] focus:outline-none"
                />
                <textarea
                  ref={bodyInputRef}
                  className="textarea textarea-primary w-full h-28 bg-[#e9e2e2] focus:outline-none"
                  placeholder="Your Post"
                ></textarea>
              </div>
              <div className="modal-action">
                {/* if there is a button in form, it will close the modal */}
                <button
                  className="btn"
                  onClick={() => {
                    event.preventDefault()
                    window.add_post.close()
                  }}
                >
                  Close
                </button>
                <button className="btn btn-primary" onClick={handleAddPost}>
                  Submit
                </button>
              </div>
            </form>
          </dialog>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
