import { useEffect } from "react";
import BoardArticle from "./BoardArticle";

const BoardList = ({
  boardlist, // 글 리스트 저장
  handlelist,
  handledetail,
  handleupdateform,
}) => {
  useEffect(() => {
    handlelist();
  }, []);

  if (boardlist.boardList.length === 0) {
    // 글 리스트가 비어있으면 타이틀만 출력
    return (
      <div>
        <table width="700px" border="1" align="center">
          <thead>
            <tr>
              <th width="60">번호</th>
              <th width="240">제목</th>
              <th width="100">작성자</th>
              <th width="100">작성일</th>
              <th width="200">수정/삭제</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <table width="700px" border="1" align="center">
          <thead>
            <tr>
              <th width="60">번호</th>
              <th width="240">제목</th>
              <th width="100">작성자</th>
              <th width="100">작성일</th>
              <th width="200">수정/삭제</th>
            </tr>
          </thead>
          <tbody>
            {boardlist.boardList.map((article) => {
              return (
                <BoardArticle
                  article={article}
                  key={article.BOARD_NUM}
                  handlelist={handlelist}
                  handledetail={handledetail}
                  handleupdateform={handleupdateform}
                />
              );
            })}
            ;
          </tbody>
        </table>
      </div>
    );
  }
};

export default BoardList;
