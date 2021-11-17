# dynamic_programming
Studying dynamic_programming

1. 어떤 문제가 반복적으로 행해지고, 반복들이 항상 최적으로 행해질 때
   하위 구조에 있는 부분 문제의 답을 기반으로 답을 구하는 방식
   -> ㄱ. 문제를 작은 부분 문제로 나눈다.
      ㄴ. 가장 작은 부분 문제의 정답부터 저장한다.
      ㄷ. 저장된 부분 문제들의 답을 통해서 원하는 답을 구한다.
2. Overlapping Sub-problems & Optimal Sub-problem 을 만족한다.
   ㄱ. Overlapping Sub-problems
       : 문제를 부분 문제로 나눌 때, 항상 중복되는 문제가 있다.
   ㄴ. Optimal Sub-problem
       : 부분 문제들을 해결하면 원래 문제를 해결할 수 있는 구조
3. 재귀함수를 이용하는 경우가 있어 greedy에 비해 느리다.
