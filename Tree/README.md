# tree
Studying tree

1. 컴퓨터의 폴더 같은 계층적인 구조
2. 기본 용어
   ㄱ. Node - 각 트리 구성 요소
   ㄴ. Root - 트리 구조의 최상위 노드
   ㄷ. Edge - 노드들 간의 연결선
   ㄹ. 부모/자식/형제 - 위에서 연결된 노드를 부모, 아래에서 연결된 노드를 자식, 같은 높이에 있는 노드를 형제
   ㅁ. Leaf Node(Terminal Node) - 자식 노드가 없는 노드
   ㅂ. Level - 각 층 (Root가 Level 0)
   ㅅ. Height - 가장 높은 Level
   ㅇ. Degree - 연결한 자식 노드의 수
   ㅈ. Sub-Tree - 전체 트리에 속하는 작은 트리
3. 종류
   ㄱ. Binary Tree - 자식 노드의 개수가 전부 2개 이하인 트리
   ㄴ. Complete Binary Tree - 모든 노드가 2개의 자식 노드를 가지며 같은 레벨의 왼쪽에서 오른쪽으로 채워지는 트리
   ㄷ. Full Binary Tree - 모든 레벨에 노드가 꽉 찬 트리
   ㄹ. Binary Search Tree - 왼쪽 자식노드 < 부모노드 < 오른쪽 자식노드의 크기 순서를 가지는 트리
4. 힙
   - 최대/최소값 연산을 빠르게 하기 위해 Complete Binary Tree를 기반으로 고안된 자료구조
   - priority queue 참고 (https://github.com/HC-Gwon/priority_queue)
