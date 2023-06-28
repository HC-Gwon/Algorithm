var findMedianSortedArrays = function(nums1, nums2) {
    const mergedList = [];

    const cycleLength = nums1.length + nums2.length;
    let nums1pos = 0;
    let nums2pos = 0;

    for (let i = 0; i < cycleLength; i += 1) {
        if (nums1pos === nums1.length) {
            for (let j = nums2pos; j < nums2.length; j += 1) {
                mergedList.push(nums2[j]);
            }
            break;
        } else if (nums2pos === nums2.length) {
            for (let j = nums1pos; j < nums1.length; j += 1) {
                mergedList.push(nums1[j]);
            }
            break;
        }

        if (nums1[nums1pos] <= nums2[nums2pos]) {
            mergedList.push(nums1[nums1pos]);
            nums1pos += 1;
        } else {
            mergedList.push(nums2[nums2pos]);
            nums2pos += 1;
        }
    }

    if (cycleLength % 2 === 0) {
        return (mergedList[cycleLength / 2] + mergedList[cycleLength / 2 - 1]) / 2;
    } else {
        return mergedList[(cycleLength - 1) / 2]
    }
};