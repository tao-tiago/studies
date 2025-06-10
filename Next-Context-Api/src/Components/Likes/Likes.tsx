import { useMyContext } from "@/context/Context";
import { useRef } from "react";

const Header = () => {
  const { likes, setLikes } = useMyContext()
  const renders = useRef(0)

  return (
    <>
      <div className="text-center">
        <p>Likes : {likes}</p>
      </div>
      <button onClick={() => setLikes(likes + 1)}>
        Add likes
      </button>
      <br />
      <div className="text-4xl text-red-400 ">Renders: {renders.current++}</div>
    </>
  );
}

export default Header;