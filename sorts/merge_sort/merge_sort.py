def merge_sort(arr):
    if len(arr) < 2:
        return arr

    divide_pos = int(len(arr) / 2)
    left = arr[:divide_pos]
    right = arr[divide_pos:]

    left = merge_sort(left)
    right = merge_sort(right)

    return merge(left, right)


def merge(left, right):
    merged_arr = []

    while left and right:
        if left[0] < right[0]:
            merged_arr.append(left.pop(0))
        else:
            merged_arr.append(right.pop(0))

    if left:
        merged_arr.extend(left)
    if right:
        merged_arr.extend(right)

    return merged_arr
