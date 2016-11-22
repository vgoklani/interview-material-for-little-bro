
# Complexity is O(n) since we go through the list once
# Space is O(1) since our variables just hold a number

def get_max_profit(stock_prices_yesterday):
    """
    """

    # Make sure we have at least two prices
    if len(stock_prices_yesterday) < 2:
        return IndexError('Need at least two prices.')

    # Initialize
    min_price = stock_prices_yesterday[0]
    max_profit = stock_prices_yesterday[1] - stock_prices_yesterday[0]

    # Greedy approach
    for i, price in enumerate(stock_prices_yesterday[1:]):
        max_profit = max(max_profit, price - min_price)
        min_price = min(min_price, price)

    return max_profit


if __name__  == '__main__':
    stock_prices_yesterday = [10, 7, 5, 8, 11, 9]
    print get_max_profit(stock_prices_yesterday)