import React, { Component } from "react";
import "./App.css";
import Box from "./components/Box.jsx";

const choice = {
  rock: {
    name: "Rock",
    img: "https://previews.123rf.com/images/8dda/8dda1605/8dda160500010/56822337-%ED%9D%B0-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD-%EB%90%9C-%EB%B0%94%EC%9C%84-%EB%8F%8C.jpg",
  },
  scissor: {
    name: "Scissors",
    img: "https://cafe24.poxo.com/ec01/he201820/HOvhRhvOk+Cp2KY4JuusAjlMOEtjc5iq9hbF1jVsI4i4c1HRH2R0N1Y2D2oUph8wRO0XgG+DjO5jhi4yYCXKnA==/_/web/product/big/201808/95f07cfda34c528acd09d6379051189e.jpg",
  },
  paper: {
    name: "Paper",
    img: "https://www.collinsdictionary.com/images/full/paper_111691001.jpg",
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: "",
      comResult: "",
    };
  }

  /** 클릭이벤트 : 가위바위보 승부 */
  play = (userChoice) => {
    this.setState({
      userSelect: choice[userChoice],
    });

    let computerChoice = this.randomChoice();
    this.setState({
      computerSelect: choice[computerChoice],
      result: this.judgement(userChoice, computerChoice), // 유저 결과
      comResult: this.judgement(computerChoice, userChoice), // computer 결과
    });
  };

  /** 승패 여부를 가리는 메소드 */
  judgement = (user, com) => {
    console.log("user", user, "com", com);

    // 승패 로직
    if (user === com) return "tie";

    if (user === "rock") {
      return com === "paper" ? "lose" : "win";
    }
    if (user === "scissor") {
      return com === "rock" ? "lose" : "win";
    }
    if (user === "paper") {
      return com === "scissor" ? "lose" : "win";
    }
  };

  /** 컴퓨터 랜덤 선택 메소드 */
  randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체의 키값만 배열로 변환
    console.log("itemArray", itemArray); // ['rock', 'scissor', 'paper']
    console.log("itemArray의 길이", itemArray.length); // 3
    let randomItem = Math.floor(Math.random() * itemArray.length); // 0~2까지 랜덤한 정수를 뽑는 로직
    console.log("randomItem", randomItem);
    let final = itemArray[randomItem];
    return final;
  };

  render() {
    return (
      <div>
        <div className="main">
          <Box
            title="You"
            item={this.state.userSelect}
            result={this.state.result}
          />
          <Box
            title="Computer"
            item={this.state.computerSelect}
            result={this.state.comResult}
          />
        </div>
        <div className="main">
          <button onClick={() => this.play("scissor")}>가위</button>
          <button onClick={() => this.play("rock")}>바위</button>
          <button onClick={() => this.play("paper")}>보</button>
        </div>
      </div>
    );
  }
}

export default App;
