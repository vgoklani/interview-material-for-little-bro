
def condense_meeting_times(times):
    """
    Condenses all the meeting times.

    Complexity is O(nlogn) because we sort (O(nlogn)) and then
    we do one pass (O(n)), therefore, the overall complexity is the more
    complex operation: O(nlogn).

    Space is O(n) because the worst case scenario is that none of the
    meeting overlap and our output is same as the input.
    """

    # Sort by start time (complexity: O(nlogn))
    sorted_times = sorted(times)

    # One pass through the list (complexity: O(n))
    merged_times = [sorted_times[0]]

    for time in sorted_times[1:]:

        if merged_times[-1][1] >= time[0]:
            merged_times[-1] = (merged_times[-1][0],
                max(merged_times[-1][1], time[1]))
        else:
            merged_times.append(time)

    return merged_times

if __name__ == '__main__':
    times =   [(0, 1), (3, 5), (4, 8), (10, 12), (9, 10)]
    print condense_meeting_times(times)
    assert (condense_meeting_times(times) ==  [(0, 1), (3, 8), (9, 12)])
