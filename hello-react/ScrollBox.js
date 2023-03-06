import React, { Component } from "react";

//특정 컴포넌트를 외부에서 ref를 통해 접근하는 방법
class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    /* 앞 코드에는 비구조화 할당 문법을 사용했습니다.
           다음 코드와 같은 의미입니다.
           const scrollHeight = this.box.scrollHeight;
           const clientHeight = this.box.cliengHeight;
        */
    this.box.scrollTop = scrollHeight - clientHeight;
  };
  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };

    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white, black)",
    };

    return (
      <div
        // inline style
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle} />
      </div>
    );
  }
}

export default ScrollBox;
