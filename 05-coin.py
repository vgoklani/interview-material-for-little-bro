

def breakdown(value, denominations, index):
    """
    Get all the possibilities to create <value>
    using the denominations.
    """

    # base cases
    if value == 0: return 1
    if value < 0: return 0
    if index == len(denominations): return 0

    denom = denominations[index]
    num_possibilities = 0
    while value >= 0:
        num_possibilities += breakdown(value, denominations, index+1)
        value -= denom

    return num_possibilities


if __name__ == '__main__':
    print breakdown(4, [1,2,3], 0)