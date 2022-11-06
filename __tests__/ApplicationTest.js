const App = require("../src/App.js");
const { userNumber } = require("../src/App.js");
const MissionUtils = require("@woowacourse/mission-utils");

describe("test", () => {
  test("split 메서드로 주어진 값을 구분", () => {
    const input = "1,2,3";
    const result = input.split(",");

    expect(result).toContain("2", "1");
    expect(result).toContainEqual("1", "2");
  });
});
// const mockQuestions = (answers) => {
//   MissionUtils.Console.readLine = jest.fn();
//   answers.reduce((acc, input) => {
//     return acc.mockImplementationOnce((question, callback) => {
//       callback(input);
//     });
//   }, MissionUtils.Console.readLine);
// };

// const getLogSpy = () => {
//   const logSpy = jest.spyOn(MissionUtils.Console, "print");
//   logSpy.mockClear();
//   return logSpy;
// };

// describe("숫자 야구 게임", () => {
//   test("게임 종료 후 재시작", () => {
//     const randoms = [1, 3, 5, 5, 8, 9];
//     const answers = ["246", "135", "1", "597", "589", "2"];
//     const logSpy = getLogSpy();
//     const messages = [
//       "낫싱",
//       "3스트라이크",
//       "1볼 1스트라이크",
//       "3스트라이크",
//       "게임 종료",
//     ];

// mockRandoms(randoms);
//     mockQuestions(answers);

//     const app = new App();
//     app.play();

//     messages.forEach((output) => {
//       expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
//     });
//   });

//   test("예외 테스트", () => {
//     const randoms = [1, 3, 5];
//     const answers = ["1234"];

// mockRandoms(randoms);
//     mockQuestions(answers);

//     expect(() => {
//       const app = new App();
//       app.play();
//     }).toThrow();
//   });
// });
