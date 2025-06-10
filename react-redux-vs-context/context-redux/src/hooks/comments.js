import { useContextSelector } from "use-context-selector";
import { DataContext } from "../context/DataContext";

export function useComments() {
  const comments = useContextSelector(DataContext, (context) => context.comments);
  const incrementComments = useContextSelector(DataContext, (context) => context.incrementComments);

  return {
    comments,
    incrementComments
  };
}
