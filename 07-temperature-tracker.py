class TempTracker(object):

    """
    O(1) complexity and O(1) space because we never store all of the
    temperatures. We do ahead-of-time (offline) calculations, as each
    temperature is being inserted.
    """

    def __init__(self):

        # mean
        self.sum = 0
        self.num_temps = 0.0
        self.mean = 0

        # mode
        self.occurances = [0]*111
        self.max_occurances = 0
        self.mode = 0

        # min and max
        self.max = None
        self.min = None


    def insert(self, temp):

        # mean
        self.sum += temp
        self.num_temps += 1.0
        self.mean = self.sum/self.num_temps

        # mode
        self.occurances[temp] += 1
        if self.occurances[temp] > self.max_occurances:
            self.mode = temp
            self.max_occurances = self.occurances[temp]

        # min and max
        if (self.max is None) or (temp > self.max):
            self.max = temp
        if (self.min is None) or (temp < self.min):
            self.min = temp


    def get_max(self):
        return self.max

    def get_min(self):
        return self.min

    def get_mean(self):
        return self.mean

    def get_mode(self):
        return self.mode

