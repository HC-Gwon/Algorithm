# stack
Strudying 'stack'

1. 순서가 있는 선형적인 list이다.
2. 'top'과 'bottom' 두 곳의 끝이 존재한다.
3. 새로 입력된 것은 기존의 'top'위에 쌓이고
   삭제는 'top'에서부터 삭제된다 (Last In First Out)
4. 기본 동작들
   ㄱ. IsEmpty : stack이 비었는지 확인
   ㄴ. IsFull : stack이 가득차있는지 확인
   ㄷ. Top : stack의 'top'의 원소를 반환
   ㄹ. Push : 'top'에 새로운 원소를 추가
   ㅁ. Pull : 'top'에 위치한 원소를 제거
5. 동적으로 크기설정 (heap 영역)
   - C언어 (with stdlib.h)
     ㄱ. void* malloc(size_t size)
     ㄴ. void* calloc(size_t n, size_t size)
     ㄷ. void* realloc(void* p, size_t size) / void* p : 이미 선언해둔 포인터
     ㄹ. void free(void* p)
   - 자바
     : 실제로 동적할당은 불가능
       ArrayList를 이용하여 기존의 배열에 추가하고자 하는 배열을 
       더한 새로운 배열을 return 해준다(add 사용).
   - 파이썬
     : array_name.append() / array_name.insert() 를 통해서 계속적으로 추가 가능
