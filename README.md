# React-study
리액트 공부내용 정리

* usestate_3_level 3레벨을 가진 useState, Prop drilling 샘플
  

* context_api context api를 사용하여 Prop drilling 문제 처리 연습
  리액트는 상위컴포넌트에서 하위 컴포넌트로 단방향 데이터 흐름을 가진다.  
  ![image](https://user-images.githubusercontent.com/37682970/167879952-32b1a03a-a9f7-4e11-bc87-07f760666181.png)  
  노란색 컴포넌트 안에 버튼과 카운트를 배치하고 버튼을 누를때 카운트의 숫자를 올린다고 가정해보면,  
  버튼의 상태를 노란색 컴포넌트에 전달하려면 단방향 데이터 흐름을 깨게 되므로, isClicked와 같은 callback를 통해 구현하게 되는데
  Context API를 사용하면 상위 컴포넌트와 하위 컴포넌트의 상태를 일종의 지역변수처럼 사용할 수 있다.
  


* react-reducer reducer 연습 
