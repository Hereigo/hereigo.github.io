# List Comprehensions:

chars = [char for char in "qwerty"]  # ['q', 'w', 'e', 'r', 't', 'y']
print(chars)

names = [n.capitalize() for n in ['mike', 'sally', 'jack']]  # ['Mike', ...
print(names)

even_nums = [x for x in [1, 2, 3, 4, 5, 6] if x % 2 == 0]  # [2,4,6]
print(even_nums)

# Set Comprehensions:

unique_set = {val for val in [8, 1, 3, 5, 5, 1, 7, 3]}  # {1,3,5,7,8}
print(unique_set)

#      {(3, 1), (4, 0), (4, 1), (3, 0)}
set1 = {(m, n) for n in range(2) for m in range(3, 5)}
print(set1)

x = {x for x in range(5)}
print(x)

# Dictio Comprehensions:

data = ["Alfa_10", "Beta_20", "Gamma_30"]
dict = {v.split('_')[0]: v.split('_')[1] for v in data}  # {'Alfa': '10' , ...
print(dict)

# Double Comprehension:

matrix = [[j for j in range(2)] for i in range(3)]  # [[0, 1], [0, 1], [0, 1]]
print(matrix)

# Flattening:

flatten_matrix = [v for sublist in matrix for v in sublist]  # [0,1,0,1,0,1]
print(flatten_matrix)
