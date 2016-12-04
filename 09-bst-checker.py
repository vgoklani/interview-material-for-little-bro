class BinaryTreeNode:

    def __init__(self, value):
        self.value = value
        self.left  = None
        self.right = None

    def insert_left(self, value):
        self.left = BinaryTreeNode(value)
        return self.left

    def insert_right(self, value):
        self.right = BinaryTreeNode(value)
        return self.right

def check_bst(root):
    """
    Check to see if a bst is a valid bst.

    Complexity and space are O(n) because worst case is
    we go through all notes bc tree is bst. Space is also O(n)
    because we are doing depth traversal so we will store depth d
    nodes which is same dimension as n.
    """

    node_stack = []

    # append the root
    node_stack.append((root, float('-inf'), float('inf')))

    while len(node_stack):

        # Extract last node added
        node, lower_bound, upper_bound = node_stack.pop()

        # Operations to see if valid bst
        if (node.value < lower_bound) or (node.value > upper_bound):
            return False

        # Get lower nodes
        if node.left:
            node_stack.append((node.left, lower_bound, node.value))
        if node.right:
            node_stack.append((node.right, node.value, upper_bound))

    return True

