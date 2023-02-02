import { useSelector } from "react-redux";
import { selectUsers } from "../users/usersSlice";

interface PostAuthorProps {
  userId: string;
}

export const PostAuthor = ({ userId }: PostAuthorProps) => {
  const users = useSelector(selectUsers);
  const author = users.find((user) => user.id === userId);

  return <span>{author ? author.name : "unknown user"}</span>;
};
