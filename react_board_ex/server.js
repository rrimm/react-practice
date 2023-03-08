const express = require("express"); // Express.js를 사용하기 위해 include하는 과정
const app = express(); // 앱 생성
const mysql = require("mysql"); // mysql include
const bodyParser = require("body-parser"); // body-parser include
const PORT = process.env.port || 8008; // 사용할 포트번호 설정
const cors = require("cors"); // cors include

// 미들웨어 사용을 위한 설정
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

let corsOptions = {
  origin: "*", // 출처 허용 옵션: 모든 출처 허용
  credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근: 허용
};

app.use(cors(corsOptions)); // 교차출처 정책 설정

//mysql 연결을 위한 설정
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "jpa",
});
console.log("db : " + db);

// req: request(요청객체), res: response(응답객체)
app.get("/list", (req, res) => {
  // 글 목록
  console.log("list!!!");
  // 쿼리문 작성
  const sqlQuery =
    "SELECT BOARD_NUM, BOARD_WRITER, BOARD_TITLE, BOARD_CONTENT, DATE_FORMAT(BOARD_DATE, '%Y-%m-%d') AS BOARD_DATE FROM BOARD_TBL;";
  db.query(sqlQuery, (err, result) => {
    // db.query(실행할 sqlQuery, (err: sql문을 실패했을 때, result: 정상적으로 실행되면 결과값 저장)
    if (err) {
      console.log(err);
    } else {
      res.send(result); // 오류가 없어서 err가 null이면 send함수를 통해 서버쪽에서 클라이언트로 result를 전송(json형식)
    }
  });
});

// insert: 글쓰기 기능
app.post("/insert", (req, res) => {
  // req.body: 클라이언트에서 서버로 전송하는 데이터 저장되어있음
  console.log("/insert", req.body);
  var writer = req.body.writer;
  var title = req.body.title;
  var content = req.body.content;

  const sqlQuery =
    "INSERT INTO BOARD_TBL (BOARD_WRITER, BOARD_TITLE, BOARD_CONTENT) values (?,?,?);";
  db.query(sqlQuery, [writer, title, content], (err, result) => {
    // [writer, title, content]: 위의 (?,?,?)에 매칭될 데이터
    res.send(result);
  });
});

// 상세보기(글 내용 보기)
app.post("/detail", (req, res) => {
  console.log("/detail", req.body);
  var num = parseInt(req.body.num);

  const sqlQuery =
    "SELECT BOARD_NUM, BOARD_WRITER, BOARD_TITLE, BOARD_CONTENT, DATE_FORMAT(BOARD_DATE, '%Y-%m-%d') AS BOARD_DATE FROM BOARD_TBL where BOARD_NUM = ?;"; // num을 ?에 저장
  db.query(sqlQuery, [num], (err, result) => {
    res.send(result);
  });
});

// 글 수정(글 제목, 내용, 날짜 수정)
app.post("/update", (req, res) => {
  console.log("/update", req.body);
  var title = req.body.article.board_title;
  var content = req.body.article.board_content;
  var num = req.body.article.board_num;

  const sqlQuery =
    "update BOARD_TBL set BOARD_TITLE=?, BOARD_CONTENT=?, BOARD_DATE=now() where board_num=?;";
  db.query(sqlQuery, [title, content, num], (err, result) => {
    res.send(result);
    console.log("result=", result);
  });
});

// 글 삭제
app.post("/delete", (req, res) => {
  const num = req.body.num;
  console.log("/delete(id) => ", num);

  const sqlQuery = "DELETE FROM BOARD_TBL WHERE BOARD_NUM = ?;";
  db.query(sqlQuery, [num], (err, result) => {
    console.log(err);
    res.send(result);
  });
});

// 클라이언트 요청이 들어오길 스탠바이
app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
