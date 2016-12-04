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

def is_superbalanced(tree_root):
    """
    Determine if a binary tree is superbalanced.
    A tree is "superbalanced" if the difference between the
    depths of any two leaf nodes ↴ is no greater than one.

    Complexity and space are O(n):
        For time, the worst case is the tree is balanced and we have to
        iterate over all nn nodes to make sure.
        For the space cost, we have two data structures
        to watch: depths and nodes. depths will never hold more than three
        elements, so we can write that off as O(1)O(1).

        Because we’re doing a depth first search, nodes will hold at most
        dd nodes where d is the depth of the tree (the number of levels in
        the tree from the root node down to the lowest node). So we could say
        our space cost is O(d)O(d). But we can also relate d to nn.
        In a balanced tree, dd is O(\log_{2}(n))O(log​2(n)).
        And the more unbalanced the tree gets, the closer dd gets to nn.
    """

    depths = [] # we short-circuit as soon as we find more than 2

    # we'll treat this list as a stack that will store tuples of (node, depth)
    nodes = []
    nodes.append((tree_root, 0))

    while len(nodes):

        # pop a node and its depth from the top of our stack
        node, depth = nodes.pop()

        # case: we found a leaf
        if (not node.left) and (not node.right):

            # we only care if it's a new depth
            if depth not in depths:
                depths.append(depth)

                # two ways we might now have an unbalanced tree:
                #   1) more than 2 different leaf depths
                #   2) 2 leaf depths that are more than 1 apart
                if (len(depths) > 2) or \
                        (len(depths) == 2 and abs(depths[0] - depths[1]) > 1):
                    return False

        # case: this isn't a leaf - keep stepping down
        else:
            if node.left:
                nodes.append((node.left, depth + 1))
            if node.right:
                nodes.append((node.right, depth + 1))

    return True
