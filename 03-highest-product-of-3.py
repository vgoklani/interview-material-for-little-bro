import numpy as np

def highest_product(numbers):
    """
    Given a list (with at least 3 numbers),
    find the highest product of three numbers.
    """

    highest_product_of_3 = numbers[0] * numbers[1] * numbers[2]
    highest_product_of_2 = numbers[0] * numbers[1]
    lowest_product_of_2 = numbers[0] * numbers[1]
    highest = max(numbers[0], numbers[1])
    lowest = min(numbers[0], numbers[1])

    for number in numbers[2:]:
        highest_product_of_3 = max(highest_product_of_3,
            number*highest_product_of_2,
            number*lowest_product_of_2)
        highest_product_of_2 = max(
            highest_product_of_2, number*highest, number*lowest)
        lowest_product_of_2 = min(
            lowest_product_of_2, number*highest, number*lowest)
        highest = max(highest, number)
        lower = min(lowest, number)

    return highest_product_of_3


if __name__ == '__main__':

    assert highest_product([3,2,3,4,5]) == 60
    assert highest_product([1,2,-3]) == -6
    assert highest_product([-1, -2, -3, 4]) == 24
    assert highest_product([-1, -2, -3, 0]) == 0
