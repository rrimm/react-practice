import PropTypes from "prop-types";
import React, { Component } from "react";

// Component 반드시 상속받아서 정의
class MyComponent extends Component {
  static defaultProps = {
    name: "홍길동",
    name2: "honggildong",
  };

  static propTypes = {
    // 타입지정
    name: PropTypes.string,
    name2: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  render() {
    const { name, favoriteNumber, children } = this.props; // 비구조화 할당
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다. <br />
        children 값은 {children}
        입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}

// // 화살표 함수 정의(앞에 함수 이름 없음. () 내에 파라미터 들어감)
// const MyComponent = ({ name, name2, favoriteNumber, children }) => {
//   return (
//     <div>
//       안녕하세요, 제 이름은 {name}, {name2}입니다. children 값은 {children}{" "}
//       입니다.
//       <br />
//       제가 좋아하는 숫자는 {favoriteNumber}입니다.
//     </div>
//   );
// };

// 객체 구조
// MyComponent.defaultProps = {
//   name: "홍길동",
//   name2: "honggildong",
// };

// MyComponent.propTypes = {
//   // 타입지정
//   name: PropTypes.string,
//   name2: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired,
// };

// // 실전 방식(비구조화 할당)
// const MyComponent = ({ name, name2 }) => {
//   return (
//     <div>
//       안녕하세요, 제 이름은 {name}, {name2}입니다.
//     </div>
//   );
// };

// // 선언적 함수 정의
// function MyComponent() {
//   return <div>나의 새롭고 멋진 컴포넌트!!</div>;
// }
export default MyComponent; // 모듈을 내보내야 외부에서 import 가능
