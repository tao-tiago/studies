import { useMyContext } from "@/context/Context";

const Comments = () => {
  const { comments, setComments } = useMyContext()

  return (
    <>
      <p>
        Comments : {comments}
      </p>

      <button onClick={() => setComments(comments + 1)}>
        Add comments
      </button>
    </>
  )
}

export default Comments;