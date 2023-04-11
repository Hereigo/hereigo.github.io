def func1(idx, count):
    return {
        "ID": idx,
        "values": ["{}-{}".format(idx, val) for val in range(count)]
    }


a = list(range(5))[::-1]  # -   [4, 3, 2, 1, 0]

z = list(zip('abcdefg', range(3), range(999)))
#   -   [('a', 0, 0), ('b', 1, 1), ('c', 2, 2)])


def generate(count):
    return [func1(i, c) for i, c in zip(range(count), list(range(count))[::-1])]


x = generate(5)
# [ {'ID': 0, 'values': ['0-0', '0-1', '0-2', '0-3']},
# {'ID': 1, 'values': ['1-0', '1-1', '1-2']},
# {'ID': 2, 'values': ['2-0', '2-1']},
# {'ID': 3, 'values': ['3-0']},
# {'ID': 4, 'values': []} ]

y = [val for sublist in x for val in sublist['values']]
# - ['0-0', '0-1', '0-2', '0-3', '1-0', '1-1', '1-2', '2-0', '2-1', '3-0']

print(y)
