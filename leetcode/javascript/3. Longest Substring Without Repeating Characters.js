// 한칸씩 오른쪽으로 옮기면서 확인하는 방식
// 이미 가장 긴 리스트에 포함된 적이 있는 문자가 나오면
// st부터 동일한 문자까지 전부 삭제하는 식으로
// 문자열 끝까지 확인해서 최대 길이를 찾음

var lengthOfLongestSubstring = function (s) {
  const substringList = {};
  let answer = 0;
  let st = 0;
  let end = 0;

  while (s.length > 0) {
    if (substringList[s[end]] !== undefined) {
      const tmp = substringList[s[end]] + 1;

      for (let i = st; i < substringList[s[end]]; i += 1) {
        delete substringList[s[i]];
      }

      st = tmp;
    }

    substringList[s[end]] = end;
    end += 1;

    if (answer < end - st) answer = end - st;
    if (end === s.length) break;
  }

  return answer;
};
