
import numpy as np

def get_products_of_all_ints_except_at_index(integers):
    """
    Takes in a list of integers and returns a list of products.

    We will greedily go thorugh the list twice. Once to get the product
    of all the numbers before a certain numbers and second time to get
    product of all the numbers after a certain number.

    We are able to do this in O(n) time because we traverse the list once
    each time. Space is also O(n) because we return a list with n items.
    """

    products = [None] * len(integers)

    # Get products before certain number
    product_so_far = 1
    for i, num in enumerate(integers):
        products[i] = product_so_far
        product_so_far *= num

    # Multiply by product after certain number
    product_so_far = 1
    i = len(integers) - 1
    while i >= 0:
        products[i] *= product_so_far
        product_so_far *= integers[i]
        i -= 1

    return products

if __name__ == '__main__':

    assert (get_products_of_all_ints_except_at_index([1, 7, 3, 4]) ==
          [84, 12, 28, 21])