class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        mergedList = []

        cycleLength = len(nums1) + len(nums2)
        nums1pos = 0
        nums2pos = 0
        
        for i in range(cycleLength):
            if nums1pos == len(nums1):
                for j in range(nums2pos, len(nums2)):
                    mergedList.append(nums2[j])
                break
            elif nums2pos == len(nums2):
                for j in range(nums1pos, len(nums1)):
                    mergedList.append(nums1[j])
                break

            if nums1[nums1pos] <= nums2[nums2pos]:
                mergedList.append(nums1[nums1pos])
                nums1pos += 1
            else:
                mergedList.append(nums2[nums2pos])
                nums2pos += 1
        
        if cycleLength % 2 == 0:
            return (mergedList[int(cycleLength / 2)] + mergedList[int(cycleLength / 2 - 1)]) / 2
        else:
            return mergedList[int((cycleLength - 1) / 2)]