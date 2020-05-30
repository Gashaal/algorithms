def merge_sort(arr):
    if len(arr) < 2:
        return arr

    divide_pos = int(len(arr) / 2)
    left = arr[:divide_pos]
    right = arr[divide_pos:]

    left = merge_sort(left)
    right = merge_sort(right)

    return merge(left, right)


def merge(nums1, nums2):
    merged_arr = []

    while nums1 and nums2:
        if nums1[0] < nums2[0]:
            merged_arr.append(nums1.pop(0))
        else:
            merged_arr.append(nums2.pop(0))

    if nums1:
        merged_arr.extend(nums1)
    if nums2:
        merged_arr.extend(nums2)

    return merged_arr
