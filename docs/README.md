## ✅ 기능구현목록
  - 필수사항
    - [ ] App.js의 play메서드로 프로그램을 실행시켜야한다.
    - [ ] indent depth가 3이 넘지말아야한다.
    - [ ] MissionUtils라이브러리에서 제공하는 Random, Console API를 사용해 구현해라
    - [ ] Airbnb JS 컨벤션을 지킨다
      - [ ] 소스의 변수명, 클래스명 등에는 영문만 쓴다.
      - [ ] 클래스, 메서드에는 특수문자를 사용하지 않는다.
      - [ ] 상수명은 SNAKE_CASE로 사용한다.
    - [ ] Jest를 이용해서 기능목록이 정상 동작하는지 확인한다.

  - 기능 구현 목록
 - [x] 컴퓨터넘버를 랜덤으로 생성한다.
   - [x] MissionUtils.Random.pickNumberInRange(1, 9) 를 이용한다.

 - [x] 사용자 번호를 받는다. 

 - [] 입력한 사용자 번호가 맞는지 판별한다.
   - [] 1~9 사이의 번호여야한다.
   - [] 숫자가 중복되면 안된다.
   - [] 입력한 번호가 3자리 이하여야한다.
   - [] 0이 포함된 숫자면 안된다. 

 - [ ] 사용자 값이 틀린 경우 throw문을 이용하고 애플리케이션은 종료된다. (마지막 조건으로 이동)

 - [ ] 사용자 값과 컴퓨터의 값을 비교한다.
   - [] 같은 수, 같은 자리에 있을 경우 : 스트라이크
   - [] 다른자리, 같은 수가 있을 경우 : 볼
   - [] 같은 수가 없는 경우 : 낫싱

 - [] 3스트라이크라면 승리

 - [ ] 게임이 종료되었다면 게임을 다시시작하거나 완전히 종료하게 만든다.


- 에러사항
  - Jest did not exit one second after the test run has completed. 라는 에러가 테스트가 끝날때마다 출력되었다.
      - 해결방안 : package.json에 "test": "jest --runInBand --detectOpenHandles" 로 바꿔주었다