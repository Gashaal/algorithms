def bubble_sort(a):
    is_sorted = False
    len_a = len(a)

    while not is_sorted:
        is_sorted = True

        for i in range(len_a):
            current = a[i]

            if i != len_a - 1 and current > a[i + 1]:
                a[i] = a[i + 1]
                a[i + 1] = current
                is_sorted = False
