### Python Basics:

```python
#!/usr/bin/python
# -*- coding: utf-8 -*-
import os

aPath = os.path.dirname(os.path.abspath(__file__)) + '/myFilesDirectory/'
aFiles = os.listdir(aPath)
aFiles.sort()
aRezFile = open('files_list.txt', 'w')

for f in aFiles:
    aRezFile.write(f + os.linesep)

# Or using context manager
with open('files_list.txt', 'w') as aRezFile:
	for f in aFiles:
		aRezFile.write(f + os.linesep) # And now we don't need aRezFile.close()
```

### Inheritance & Incapsulation:

```python
class Parent:
    def __init__(self, age, name, gender):
        self._name = name
        self.gender = gender
        self.__age = age  # - is private but accesible as "parent_1._Parent__age"

    def set_age(self, value):  # - private fields should be set by "setters"
        if not isinstance(value, (int, float)):
            raise ValueError('Only numbers allowed!')
        self.__age = value

    def get_age(self):
        return self.__age

    age = property(fget=get_age, fset=set_age)

    def get_name_and_age(self):
        return self._name, self.__age


# Private is Accessible!
parent_1 = Parent(age='too Old!', name='Jolie', gender='female')
parent_1.__age = '100'  # - Allowed!
parent_1._age = '100'  # - Allowed!
# parent_1.age = '100' - NOT Allowed!

print('\r\n Parent-1', parent_1.get_name_and_age(), 'gender =', parent_1.gender)
#   -   Parent-1 ('Jolie', 'too Old!') gender = female


class Parent2:
    def __init__(self):
        pass


class Child(Parent, Parent2):  # ORDER Matters!
    def __init__(self, age, name):
        super().__init__(age, name, 'female')  # First Parent init.
        # Parent.__init__(self, age, name, 'female')
        Parent2.__init__(self)


child = Child(13, 'Jess')

print('\r\nChild', child.get_name_and_age(), '\r\n')
#   -   Parent-1 ('Jolie', 'too Old!') gender = female

print(dir(Child))  # To see all PRIVATE and INHERITED members of CHILD.

# ['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__',
# '__getattribute__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__module__',
# '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__','__sizeof__', '__str__',
# '__subclasshook__', '__weakref__', 'age', 'get_age', 'get_name_and_age', 'parent2_print_hi', 'set_age']

print(Child.__mro__, '\r\n')  # Method Resolution Order.

# ( <class '__main__.Child'>, <class '__main__.Parent'>, <class '__main__.Parent2'>, <class 'object'> )

# # # # # # Comlex Objects :

user = {
    "name": "John Doe",
    "info": {
        "basic": {
            "age": 25,
            "salary": 5000
        },
        "additional": {
            "study": "mathematics",
            "family": "married"
        },
        "special": {
            "projects": [
                {"name": "quantum computing", "stage": "in progress"},
                {"name": "laser gun", "stage": "in production"}
            ]
        }
    }
}


def get_data_from_dict(dict, keys):
    data = dict
    for key in keys:
        data = data[key]
    return data


def get_data_reccurin(dict, path_to_prop, idx=0):
    if idx < len(path_to_prop):
        return get_data_reccurin(dict[path_to_prop[idx]], path_to_prop, idx+1)
    return dict


print(get_data_from_dict(user, ['info', 'special', 'projects']))
print(get_data_reccurin(user, ['info', 'special', 'projects']))
# [{'name': 'quantum computing', 'stage': 'in progress'}, {'name': 'laser gun', 'stage': 'in production'}]
```

### Interfaces (decoration):

```python
class Core_Logic:
    def __init__(self):
        self._types = {
            "A": 3000,
            "B": 5000
        }

    def get_salary_from_db(self, type_name):
        return self._types.get(type_name, 0)  # Get by Property Name.


class AccountingInterface:
    def __init__(self, data):
        self._logic = Core_Logic()
        self._database = data

    def get_salary_by_name(self, employee_name):
        employee_type = self._database.get(employee_name)
        employee_salary = self._logic.get_salary_from_db(employee_type)
        return employee_salary


db_emul = {"John": "B", "Mike": "A"}

# - Decorates the work of logic with db:
interface = AccountingInterface(db_emul)

johns_salary = interface.get_salary_by_name("John")

print("\nJohn's salary is: ${}\n".format(johns_salary))
```

### Comlex Objects :

```python
user = {
    "name": "John Doe",
    "info": {
        "basic": {
            "age": 25,
            "salary": 5000
        },
        "additional": {
            "study": "mathematics",
            "family": "married"
        },
        "special": {
            "projects": [
                {"name": "quantum computing", "stage": "in progress"},
                {"name": "laser gun", "stage": "in production"}
            ]
        }
    }
}

def get_data_from_dict(dict, keys):
    data = dict
    for key in keys:
        data = data[key]
    return data

print(get_data_from_dict(user, ['info', 'special', 'projects']))

def get_data_reccurin(dict, path_to_prop, idx=0):
    if idx < len(path_to_prop):
        return get_data_reccurin(dict[path_to_prop[idx]], path_to_prop, idx+1)
    return dict

print(get_data_reccurin(user, ['info', 'special', 'projects']))
```

### Comprehensions:

```python
# List Comprehensions:

chars = [char for char in "qwerty"]  # ['q', 'w', 'e', 'r', 't', 'y']

names = [n.capitalize() for n in ['mike', 'sally', 'jack']]  # ['Mike', ...

even_nums = [x for x in [1, 2, 3, 4, 5, 6] if x % 2 == 0]  # - [2, 4, 6]

# Set Comprehensions:

unique_set = {val for val in [8, 1, 3, 5, 5, 1, 7, 3]}  # - {1, 3, 5, 7, 8}

set1 = {(m, n) for n in range(2) for m in range(3, 5)}
#   -   {(3, 1), (4, 0), (4, 1), (3, 0)}

x = {x for x in range(5)}  # -   {0, 1, 2, 3, 4}

# Dictio Comprehensions:

data = ["Alfa_10", "Beta_20", "Gamma_30"]
dict = {v.split('_')[0]: v.split('_')[1] for v in data}  # {'Alfa': '10' , ...

# Double Comprehension:

matrix = [[j for j in range(2)] for i in range(3)]  # [[0, 1], [0, 1], [0, 1]]

# Flattening:

flatten_matrix = [v for sublist in matrix for v in sublist]  # [0,1,0,1,0,1]

# Generators:

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
```

### ...

```python

```