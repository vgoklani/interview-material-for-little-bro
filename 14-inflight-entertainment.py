
def two_movies(flight_length, movie_lengths):
    """
    Determine if there are exactly two unique movies
    to watch such that their added movie lengths is equal
    to the exact length of the flight.

    Complexity:
    Space:
    """

    movie_lengths_seen = set()

    for movie_length in movie_lengths:

        # second movie to see if available
        if flight_length-movie_length in movie_lengths_seen:
            return True
        else:
            movie_lengths_seen.add(movie_length)

    return False



if __name__ == '__main__':
    assert(two_movies(14, [1,6,2,9,7,8])==True)