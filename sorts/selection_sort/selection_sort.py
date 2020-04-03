def selection_sort(arr):
    for i in range(len(arr)):
        min_pos = i

        for j in range(i + 1, len(arr)):
            if arr[j] < arr[min_pos]:
                min_pos = j

        if min_pos != i:
            arr[i], arr[min_pos] = arr[min_pos], arr[i]
