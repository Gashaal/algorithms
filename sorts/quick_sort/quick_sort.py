import random


def quick_sort(arr):
    if len(arr) < 2:
        return arr

    left = []
    right = []
    pivot = random.choice(arr)
    for item in arr:
        if item < pivot:
            left.append(item)
        else:
            right.append(item)

    return quick_sort(left) + quick_sort(right)
