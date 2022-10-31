def euclidean_distance(x: list, y: list):
    return sum([(a - b)**2 for a, b in zip(x, y)])**0.5
