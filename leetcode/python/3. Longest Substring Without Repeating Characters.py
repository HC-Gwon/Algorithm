class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        substringList = dict()
        answer = 0
        st = 0
        end = 0

        while len(s) > 0:
            if s[end] in substringList:
                tmp = substringList[s[end]] + 1;

                for i in range(st, substringList[s[end]]):
                    del substringList[s[i]]

                st = tmp;

            substringList[s[end]] = end
            end += 1

            if answer < end - st:
                answer = end - st
            if end == len(s):
                break

        return answer