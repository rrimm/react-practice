import BoardList from "./BoardList";
import BoardWrite from "./BoardWrite";
import BoardDetail from "./BoardDetail";
import BoardUpdateForm from "./BoardUpdateForm";
import { useState } from "react";
import axios from "axios";

function App() {
  const [boardlist, setBoardlist] = useState({
    // boardlist.boardList로 접근
    boardList: [],
  });

  // 항목이 하나인 경우
  //const [boardlist, setBoardlist] = useState([]);
  // 이 경우 boardlist로 바로 접근 가능

  // DB와 동일하게 이름 부여
  const [article, setArticle] = useState({
    board_num: 0,
    board_writer: "",
    board_title: "",
    board_content: "",
    board_date: "",
  });

  // 0:글쓰기, 1:상세보기, 2:글수정
  const [actionMode, setActionMode] = useState({ mode: 0 }); // actionMode.mode로 접근
  // const [actionMode, setActionMode]=useState(0);  //actionMode로 접근 가능

  //글목록
  const getList = () => {
    // alert("getList(actionMode)=>" + actionMode.mode);
    axios
      .get("http://localhost:8008/list", {})
      // res: 서버의 응답 결과 저장
      .then((res) => {
        console.log("res ==>", res);
        const { data } = res; // data = res.data
        console.log("data ==>", data);
        setBoardlist({
          boardList: data,
        });
        setActionMode({
          // ...actionMode,
          mode: 0, // 상세보기
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
  //상세보기
  const handleDetail = (e) => {
    // alert("handleDetail(actionMode)=>" + actionMode.mode);
    axios
      .post("http://localhost:8008/detail", { num: e.target.id })
      .then((res) => {
        const { data } = res;
        console.log("detail =>", data);
        if (res.data.length > 0) {
          setArticle({
            ...article, // 전체 객체 내용 수정이므로 ...article 생략 가능
            board_num: data[0].BOARD_NUM,
            board_writer: data[0].BOARD_WRITER,
            board_title: data[0].BOARD_TITLE,
            board_content: data[0].BOARD_CONTENT,
            board_date: data[0].BOARD_DATE,
          });

          setActionMode({
            ...actionMode, // 생략 가능
            mode: 1, //상세보기
          });
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleUpdateForm = (e) => {
    // alert(
    //   "handleUpdateForm(actionMode) =>"+ actionMode.mode +", "+e.target.id
    // );
    axios
      .post("http://localhost:8008/detail", { num: e.target.id })
      .then((res) => {
        const { data } = res;
        console.log("handleUpdateForm =>", data);
        if (res.data.length > 0) {
          setArticle({
            ...article, // 전체 객체 내용 수정이므로 ...article 생략 가능
            board_num: data[0].BOARD_NUM,
            board_writer: data[0].BOARD_WRITER,
            board_title: data[0].BOARD_TITLE,
            board_content: data[0].BOARD_CONTENT,
            board_date: data[0].BOARD_DATE,
          });

          setActionMode({
            ...actionMode, // 생략 가능
            mode: 2, //글수정하기
          });
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleUpdate = () => {
    console.log("handleUpdate =>", article);
    axios
      .post("http://localhost:8008/update", {
        article: article, // 수정할 데이터 정보 저장됨
      })
      .then((res) => {
        console.log("handleUpdate( changedRows) =>", res.data.changedRows);
        getList(); // 수정 후 리스트 재호출
      })
      .catch((e) => {
        console.error(e);
      });
  };

  if (actionMode.mode === 0) {
    // alert("글쓰기");
    //글쓰기
    return (
      <div>
        <BoardWrite handlelist={getList}></BoardWrite>
        <br />
        <BoardList
          boardlist={boardlist}
          actionmode={actionMode}
          handlelist={getList}
          handledetail={handleDetail}
          handleupdateform={handleUpdateForm}
        ></BoardList>
      </div>
    );
  } else if (actionMode.mode === 1) {
    //alert("상세정보");
    //상세보기
    return (
      <div>
        <BoardDetail article={article} handlelist={getList}></BoardDetail>
        <br />
        <BoardList
          boardlist={boardlist}
          handlelist={getList}
          handledetail={handleDetail}
          handleupdateform={handleUpdateForm}
        ></BoardList>
      </div>
    );
  } else if (actionMode.mode === 2) {
    //alert("글수정");
    //글수정
    return (
      <div>
        <BoardUpdateForm
          article={article}
          setarticle={setArticle}
          handleupdate={handleUpdate}
        ></BoardUpdateForm>
        <br />
        <BoardList
          boardlist={boardlist}
          handlelist={getList}
          handledetail={handleDetail}
          handleupdateform={handleUpdateForm}
        ></BoardList>
      </div>
    );
  }
}

export default App;
