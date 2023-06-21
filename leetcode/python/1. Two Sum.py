class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        answer = []
        diff = dict()

        for i in range(len(nums)):
            if nums[i] not in diff:
                diff[nums[i]] = [i, target - nums[i]]
            

        for i in range(len(nums)):
            checkDiffValue = target - nums[i]

            if checkDiffValue in diff and diff[checkDiffValue][0] != i:
                answer.append(i)
                answer.append(diff[checkDiffValue][0])
                break

        return answer