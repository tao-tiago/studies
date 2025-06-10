import { useContextSelector } from "use-context-selector";
import { DataContext } from "../context/DataContext";

export function useLikes() {
  const likes = useContextSelector(DataContext, (context) => context.likes);
  const incrementLikes = useContextSelector(DataContext, (context) => context.incrementLikes);

  return {
    likes,
    incrementLikes
  };
}
