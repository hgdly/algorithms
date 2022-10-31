def manhattan_distance(x: list, y: list):
    return sum([abs(a - b) for a, b in zip(x, y)])
