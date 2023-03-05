import { Navigate } from "react-router-dom";

const MyPage = () => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    //페이지를 리다이렉트할 때 사용
    // 컴포넌트를 화면에 보여주는 순간 다른 페이지로 이동(history에 기록하지 않음)
    return <Navigate to="/login" replace={true} />;
  }
  return <div>마이 페이지</div>;
};

export default MyPage;
