const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.computerNumber();
    this.userNumber();
  }
  // 컴퓨터 랜덤 숫자 함수
  computerNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    console.log(computer);
    return computer;
  }
  // 사용자번호를 입력받는 함수
  userNumber() {
    MissionUtils.Console.readLine("숫자를 입력해 주세요", (answer) => {
      const [a, b, c] = answer;
      MissionUtils.Console.print([a, b, c]);
      return [a, b, c];
    });
  }
  // 사용자 번호가 맞는지 판별
  // userException(message) {
  //   this.messaage = message;
  // }
  // validNumber() {
  //   const userNumber = this.userNumber.forEach((num) => {
  //     num;
  //   });
  //   try {
  //     if (userNumber < 1 || userNumber > 9) {
  //       throw new this.userException("isCorrectRange", "1~9사이의 숫자를 입력해주세요")();
  //     }
  //   } catch (error) {
  //     if (e instanceof isCorrectRange) {
  //       console.log(e.messaage);
  //     }
  //   }
  // }

  play() {}
}

const app = new App();

module.exports = App;
