import collections

# 'defaultdict' - added default value if not exists.
dict_of_lists = collections.defaultdict(list)

for value in range(1, 11):
    if value % 2 == 0:
        dict_of_lists['even'].append(value)
    else:
        dict_of_lists['odd'].append(value)

#   -   {'odd': [1, 3, 5, 7, 9], 'even': [2, 4, 6, 8, 10]}

print(dict(dict_of_lists))
