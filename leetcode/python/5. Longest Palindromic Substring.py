def findLongestPalindrome(s: str, i: int, j: int):
    while i >= 0 and j < len(s) and s[i] == s[j]:
        i -= 1
        j += 1

    return s[i + 1:j]

class Solution:
    def longestPalindrome(self, s: str) -> str:
        answer = ''

        for i in range(len(s)):
            oddPalindrome = findLongestPalindrome(s, i, i)
            evenPalindrome = findLongestPalindrome(s, i, i + 1)

            ithLongestPalindrome = oddPalindrome if len(oddPalindrome) > len(evenPalindrome) else evenPalindrome

            answer = ithLongestPalindrome if len(ithLongestPalindrome) > len(answer) else answer

        return answer