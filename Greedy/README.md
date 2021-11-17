# greedy
Studying greedy

1. 최적해를 구하기 위해 사용되는 근사적인 방식
   -> 결정해야되는 '순간(local)'에 최적이라고 생각되는 것을 선택해나가는 방식
   1-1. 전체(global)로 봤을 때 항상 최적인 것은 아니다.
        그러므로 최적해가 맞는지 증명해야 한다.
2. Greedy Choice Property & Optimal Substructure 만
   ㄱ. Greedy Choice Property
       : sub-problem의 해답이 다음 sub-problem에 영향을 주지 않는다.
   ㄴ. Optimal Substructure
       : 문제 전체(global)의 최적해가 sub-problem의 최적해도 된다.
3. 순간순간 최적을 골라감으로 속도가 빠르다.
   -> 실용적으로 사용 가능
4. 알고리즘의 이용
   ㄱ. 거스름돈 문제 / 분할 가능한 배낭 채우기 문제
       - 큰 값부터 값을 대입하여 결과를 추출
   ㄴ. MST(Minimum Spanning Tree)
       - Spanning Tree의 한 종류
         * Spanning Tree
           : N개의 정점에 대하여 N-1개의 간선으로 모두 연결시키는 것
             단, cycle은 존재하지 않는다.
       - 모든 Spanning Tree 중 간선의 가중치의 합이 가장 작은 Spanning Tree
       - 종류
         ㄱ. Kruskal Algorithm
             - 각 간선들의 가중치를 오름차순으로 정렬하여 가장 작은 가중치의 간선부터 선택
               단, cycle을 생성하는 간선은 선택하지 않는다.
             - 간선의 개수를 E라고 할 때, 정렬하는데 걸리는 시간인 O(ElogE)의 시간복잡도를 가진다.
             - 간선의 개수가 적은 경우 사용하기에 용이
         ㄴ. Prim Algorithm
             - 시작 정점을 기반으로 하여 연결된 정점 중 간선의 가중치가 가장 작은 것은 선택하는 방식
               단, cycle을 생성하는 간선은 선택하지 않는다.
             - 정점의 개수 V, 간선의 개수 E라고 할 때
               인접행렬 사용 시 O(V^2), 연결 리스트 및 최소 힙 사용 시 O(ElogV)의 사간복잡도를 가진다.
             - 간선의 개수가 많은 경우 사용하기에 용이
   ㄷ. Dijkstra Algorithm(다익스트라 알고리즘)
       - 시작 정점에서 도착 정점까지의 최단거리를 구하는 알고리즘
       - 현재 위치한 정점에서 연결된 모든 정점까지의 거리(가중치)를 구하고
         방문하지 않은 정점에서 동일한 과정을 반복하여
         도착 정점까지의 최단 거리를 구한다.
       - 인접행렬 - O(N^2), 연결 리스트 및 최소 힙 - O(NlogN)
   
