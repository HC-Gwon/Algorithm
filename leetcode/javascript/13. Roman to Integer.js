var romanToInt = function (s) {
  let answer = 0;

  const romanNumber = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const subtractionNumber = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  for (let i = 0; i < s.length; i += 1) {
    if (i < s.length - 1 && subtractionNumber[s[i] + s[i + 1]]) {
      answer += subtractionNumber[s[i] + s[i + 1]];
      i += 1;
    } else {
      answer += romanNumber[s[i]];
    }
  }

  return answer;
};
