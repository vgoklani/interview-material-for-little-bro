def binary_search(target, nums):
    """
    Determine is target is in nums
    using binary search.

    Complexity: O(log n)
    Space: O(1)

    """

    floor = 0
    ceil = len(nums)-1

    while floor+1 <= ceil:

        if floor+1 == ceil:
            middle = ceil
        else:
            dist = (ceil-floor)//2
            middle = floor + dist

        mid_value = nums[middle]

        if target == mid_value:
            return True
        elif mid_value > target:
            ceil = middle
        elif mid_value < target:
            floor = middle

    # Not in list
    return False
