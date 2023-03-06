import { useParams } from "react-router-dom";

const Article = () => {
  //useParams 파라미터가 가진 id
  const { id } = useParams();

  return (
    <div>
      <h2>게시글 {id}</h2>
    </div>
  );
};

export default Article;
