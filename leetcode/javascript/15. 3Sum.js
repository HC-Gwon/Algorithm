var threeSum = function (nums) {
  const sortedList = nums.sort(function (a, b) {
    return a - b;
  });
  const answer = [];

  for (let i = 0; i < sortedList.length - 1; i += 1) {
    const comp = sortedList[i];
    let leftIndex = i + 1;
    let rightIndex = sortedList.length - 1;

    if (comp === sortedList[i - 1]) continue;

    while (leftIndex < rightIndex) {
      if (comp + sortedList[leftIndex] + sortedList[rightIndex] === 0) {
        answer.push([comp, sortedList[leftIndex], sortedList[rightIndex]]);
        leftIndex += 1;
        rightIndex -= 1;

        while (
          sortedList[leftIndex] === sortedList[leftIndex - 1] &&
          sortedList[rightIndex] === sortedList[rightIndex + 1] &&
          leftIndex < rightIndex
        ) {
          leftIndex += 1;
          rightIndex -= 1;
        }
      } else if (comp + sortedList[leftIndex] + sortedList[rightIndex] < 0) {
        leftIndex += 1;
      } else {
        rightIndex -= 1;
      }
    }
  }

  return answer;
};
