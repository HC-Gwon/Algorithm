const findLongestPalindrome = (s, i, j) => {
    while (i >= 0 && j < s.length && s[i] === s[j]) {
        i -= 1;
        j += 1;
    }

    return s.slice(i + 1, j);
}

var longestPalindrome = function(s) {
    let answer = '';

    for (let i = 0; i < s.length; i += 1) {
        const oddPalindrome = findLongestPalindrome(s, i, i);
        const evenPalindrome = findLongestPalindrome(s, i, i + 1);

        const ithLongestPalindrome = oddPalindrome.length > evenPalindrome.length ? oddPalindrome : evenPalindrome;

        answer = ithLongestPalindrome.length > answer.length ? ithLongestPalindrome : answer;
    }

    return answer;
};