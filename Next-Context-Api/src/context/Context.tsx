import { useState, createContext, useContext, Dispatch, SetStateAction } from "react";

type ContextType = {
  likes: number
  setLikes: Dispatch<SetStateAction<number>>
  comments: number
  setComments: Dispatch<SetStateAction<number>>
}

const DataContext = createContext({} as ContextType)
export const useMyContext = () => useContext(DataContext)

export function GlobalProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [likes, setLikes] = useState(0)
  const [comments, setComments] = useState(0)

  return (
    <DataContext.Provider
      value={{
        likes,
        setLikes,
        comments,
        setComments
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

