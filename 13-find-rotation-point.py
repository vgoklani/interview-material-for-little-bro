def find_rotation(words):
    """
    Find rotation points. Here are the facts:
    1.) For the rotation point, the value at the index before it will
        be greater than it.
    2.) If we do not find the rotation point as our middle of the list,
        we need to decide which half to keep for search. If the middle value
        is greater than the very first value, then the rotation is still in
        the bottom half. If the middle value is less than the very first value
        then we keep searching in the top half.

    Space will be O(1) since we store the very first value.
    Complexity will be O(log n) since we are doing binary search.
    """

    first_value = words[0]

    floor = 0
    ceil = len(words) - 1

    while floor < ceil:

        distance = (ceil - floor) // 2
        middle = floor + distance
        value = words[middle]

        # check if middle value is the rotation point
        if words[middle-1] > value:
            return middle
        else:
            # keep bottom half
            if value > first_value:
                floor = middle
            elif value < first_value:
                ceil = middle

        if floor + 1 == ceil:
            return ceil

    return None

if __name__ == '__main__':

    words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote', # <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
    ]
    print words[find_rotation(words)]

    words = [
    'zebra',
    'zuchini',
    'apple'
    ]
    print words[find_rotation(words)]







