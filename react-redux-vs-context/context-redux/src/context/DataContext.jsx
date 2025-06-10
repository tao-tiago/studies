import { useState, useCallback } from "react";
import { createContext } from "use-context-selector";

export const DataContext = createContext({})

export function GlobalProvider({ children }) {
  const [likes, setLikes] = useState(0)
  const [comments, setComments] = useState(0)

  const incrementLikes = useCallback((i) => {
    setLikes(i)
  }, []);

  const incrementComments = useCallback((i) => {
    setComments(i)
  }, []);

  return (
    <DataContext.Provider
      value={{
        likes,
        comments,
        incrementLikes,
        incrementComments
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

