var reverse = function (x) {
  const min = "2147483648";
  const max = "2147483647";

  let strX = "";
  let isMinus = false;
  if (x >= 0) strX = String(x);
  else {
    strX = String(x).slice(1);
    isMinus = true;
  }

  let reversedX = "";
  for (let i = strX.length - 1; i >= 0; i -= 1) {
    if (reversedX.length === 0 && strX[i] === "0") continue;
    reversedX += strX[i];
  }

  if (isMinus) {
    if (min.length < reversedX.length) return 0;
    else if (min.length > reversedX.length) return -reversedX;
    else {
      for (let i = 0; i < reversedX.length; i += 1) {
        if (min[i] < reversedX[i]) return 0;
        else if (min[i] === reversedX[i]) continue;
        else break;
      }

      return -reversedX;
    }
  } else {
    if (max.length < reversedX.length) return 0;
    else if (max.length > reversedX.length) return reversedX;
    else {
      for (let i = 0; i < reversedX.length; i += 1) {
        if (max[i] < reversedX[i]) return 0;
        else if (max[i] === reversedX[i]) continue;
        else break;
      }

      return reversedX;
    }
  }
};
