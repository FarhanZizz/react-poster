/* eslint-disable react/prop-types */
const Post = ({ post }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{post.name}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  )
}

export default Post
