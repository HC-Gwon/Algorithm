# binary_search
Studying binary_search

1. 탐색 범위를 계속 절반씩 줄여가며 찾는 방법
2. binary_search를 수행하기 전에 반드시 정렬이 되어 있어야 한다.
3. 순서
   ㄱ. 시작 시 left = 0, right = len(arr) - 1, mid = (left + right) / 2로 설정
   ㄴ. mid값과 left, right 값을 비교하여
       찾는 값보다 mid의 값이 더 큰 경우, mid + 1에 left 대입
       찾는 값보다 mid의 값이 더 작은 경우, mid - 1에 right 대입
   ㄷ. ㄴ 과정을 left > right가 되거나 원하는 값을 찾을 때까지 반복한다.
4. 범위를 계속 반씩 줄여가므로 시간복잡도는 O(logN)이다.
