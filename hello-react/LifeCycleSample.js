import React, { Component } from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null; // ref를 설정할 부분

  // props: 부모컴포넌트로부터 속성값을 전달받을 때 활용
  constructor(props) {
    // 생성자
    super(props);
    console.log("constructor");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    // 숫자의 마지막 자리가 4면 리렌더링하지 않음. number의 끝자리가 4가 아니면 렌더링 수행
    return nextState.number % 10 !== 4;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  // 업데이트 발생 시 호출
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    //color가 다른 경우 다시 전달하도록 설계
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState);

    //snapshot이 null이면 수행되지 않음.
    if (snapshot) {
      console.log("업데이트되기 직전 색상: ", snapshot);
    }
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  // 클릭 이벤트 발생 시 number의 상태값 1 증가
  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  render() {
    console.log("render");

    const style = {
      color: this.props.color,
    };

    return (
      <div>
        {this.props.missing.value}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
