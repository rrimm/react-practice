import React, { useState } from "react";
import axios from "axios";
import BlogItem from "./BlogItem";

const App = () => {
  const [items, setItems] = useState(null);

  const NAVER_CLIENT_ID = "6IohVr_Cn9Rx0pbEyZ7c";
  const NAVER_CLIENT_SECRET = "_pYsSeR1SL";

  const onClick = () => {
    axios
      .get("/v1/search/blog.json", {
        // key: value
        params: {
          query: "react", // 이미지 검색 텍스트
          start: 1, // 검색 시작 위치
          display: 6, // 가져올 이미지 개수
          sort: "sim", // 정렬 유형(sim:유사도)
        },
        headers: {
          "X-Naver-Client-Id": NAVER_CLIENT_ID,
          "X-Naver-Client-Secret": NAVER_CLIENT_SECRET,
        },
      })
      .then((response) => {
        setItems(response.data.items);
      })
      .catch((e) => {
        console.log("ERROR:" + e);
      });
  };

  return (
    <div>
      {items === null ? (
        <div>
          <button onClick={onClick}>불러오기</button>
        </div>
      ) : (
        <div>
          <div>
            <button onClick={onClick}>불러오기</button>
          </div>
          {items.map((item, index) => (
            <BlogItem key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

// 다른 방법
// if (items === null) {
//   return (
//     <div>
//       <button onClick={onClick}>불러오기</button>
//     </div>
//   );
// } else {
//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {items.map((item, index) => (
//         <BlogItem key={index} item={item} />
//       ))}
//     </div>
//   );
// }

export default App;
