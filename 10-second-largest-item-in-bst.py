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

def second_largest(root):
    """
    Find second largest item in bst.

    Complexity is O(n) (worst case, but best case is O(log n) if
    tree is blaanced.

    Space is O(1).
    """

    node_stack = []
    top2 = [float('-inf'), float('inf')]

    node_stack.append(root)

    while len(node_stack):

        node = node_stack.pop()

        if node.value > max[1]:
            max[1] = node.value
        elif node.value > max[0]:
            max[0] = node.value

        if node.right:
            node_stack.append(node.right)
        elif node.left:
            node_stack.append(node.left)

    return max[0] # 2nd largest value









def find_largest(root_node):
    current = root_node
    while current:
        if not current.right:
            return current.value
        current = current.right

def find_second_largest(root_node):
    if root_node is None or \
            (root_node.left is None and root_node.right is None):
        raise Exception('Tree must have at least 2 nodes')

    current = root_node

    while current:
        # case: current is largest and has a left subtree
        # 2nd largest is the largest in that subtree
        if current.left and not current.right:
            return find_largest(current.left)

        # case: current is parent of largest, and
        # largest has no children, so
        # current is 2nd largest
        if current.right and \
           not current.right.left and \
           not current.right.right:
            return current.value

        current = current.right
