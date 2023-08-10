const isSet = (leftBracket, rightBracket) => {
  if (leftBracket === "(" && rightBracket === ")") return true;
  else if (leftBracket === "{" && rightBracket === "}") return true;
  else if (leftBracket === "[" && rightBracket === "]") return true;
  return false;
};

var isValid = function (s) {
  let answer = true;
  const bracketStack = [];

  if (s.length % 2 !== 0) return false;

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      bracketStack.push(s[i]);
    } else {
      if (isSet(bracketStack[bracketStack.length - 1], s[i]))
        bracketStack.pop();
      else {
        answer = false;
        break;
      }
    }
  }

  if (bracketStack.length > 0) return false;

  return answer;
};
