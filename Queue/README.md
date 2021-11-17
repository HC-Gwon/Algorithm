# queue
Studying 'queue'

1. 순서가 있는 선형적인 list이다.
2. 'front'과 'rear' 두 곳의 끝이 존재한다.
   새로 입력된 것은 기존의 'rear'위에 쌓이고 삭제는 'front'에서부터 삭제된다 (First In First Out)
3. 기본 동작들 
   ㄱ. IsEmpty : queue가 비었는지 확인 
   ㄴ. IsFull : queue가 가득차있는지 확인 
   ㄷ. AddQ : queue의 'rear'에 새로운 원소 추가
   ㄹ. DeleteQ : queue의 'front'의 원소 삭제
4. 스택과 같은 방식으로 동적할당을 수행
5. 구현 - 배열 혹은 연결리스트 활용
6. circular queue
   공간을 더 늘릴 때 원소를 양 끝으로 보내줘야한다.
   그렇지 않으면 중간에 원소가 들어가는 경우가 발생
   (https://claude-u.tistory.com/78 참고)
