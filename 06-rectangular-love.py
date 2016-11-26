
def find_intersection(x11, x12, x21, x22):
    """
    x11 and x12 are points on first rectangle.
    x21 and x22 are pointson second rectangle.
    """

    highest_start_point = max(x11, x21)
    lowest_end_point = min(x12, x22)

    if highest_start_point >= lowest_end_point:
        return None
    else:
        return (highest_start_point, lowest_end_point)

def intersection_rectangle(rect1, rect2):
    """
    Find the intersection rectangle between two rectangles.
    None is no intersection.

    Complexity and space are both O(1).
    """

    # For an intersection, we need x and y intersection changes
    # We will check if bot exist

    # See if x intersection exists:
    x_intersection_points = find_intersection(
        rect1['left_x'], rect1['left_x']+rect1['width'],
        rect2['left_x'], rect2['left_x']+rect2['width'])
    if x_intersection_points is None:
        return None

    # See if y intersection exists:
    y_intersection_points = find_intersection(
        rect1['bottom_y'], rect1['bottom_y']+rect1['height'],
        rect2['bottom_y'], rect2['bottom_y']+rect2['height'])
    if y_intersection_points is None:
        return None

    return {

    'left_x': x_intersection_points[0],
    'bottom_y': y_intersection_points[0],

    'width': x_intersection_points[1] - x_intersection_points[0],
    'height': y_intersection_points[1] - y_intersection_points[0],

    }




if __name__ == '__main__':

    rectangle_1 = {

    # coordinates of bottom-left corner
    'left_x': 1,
    'bottom_y': 5,

    # width and height
    'width': 10,
    'height': 4,

    }

    rectangle_2 = {

    # coordinates of bottom-left corner
    'left_x': 8,
    'bottom_y': 3,

    # width and height
    'width': 5,
    'height': 5,

    }

    print intersection_rectangle(rectangle_1, rectangle_2)