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
        self.__age = age  # is private but accesible as "parent_1._Parent__age"

    def set_age(self, value):  # private fields should be set by "setters"
        if not isinstance(value, (int, float)):
            raise ValueError('Only numbers allowed!')
        self.__age = value

    def get_age(self):
        return self.__age

    age = property(fget=get_age, fset=set_age)

    def get_name_and_age(self):
        return self._name, self.__age

 # Allowed!
parent_1 = Parent(age='too Old!', name='Jolie', gender='female')
parent_1.__age = '100'  # Allowed!
parent_1._age = '100'  # Allowed!
# parent_1.age = '100' - NOT Allowed!

print('\r\n Parent-1', parent_1.get_name_and_age(), 'gender =', parent_1.gender)


class Parent2:
    def __init__(self):
        pass

    def parent2_print_hi(self):
        print('Hi!')


class Child(Parent, Parent2):  # ORDER matters!
    def __init__(self, age, name):
        super().__init__(age, name, 'female')  # First Parent init.
        # Parent.__init__(self, age, name, 'female')
        Parent2.__init__(self)


child = Child(13, 'Jess')

print('\r\nChild', child.get_name_and_age(), '\r\n')

child.parent2_print_hi()

print(Child.__mro__, '\r\n')  # Method Resolution Order.

# ( <class '__main__.Child'>, <class '__main__.Parent'>, <class '__main__.Parent2'>, <class 'object'> )

print(dir(Child))  # To see all PRIVATE and INHERITED members of CHILD.

# ['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__',
# '__getattribute__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__module__',
# '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__','__sizeof__', '__str__',
# '__subclasshook__', '__weakref__', 'age', 'get_age', 'get_name_and_age', 'parent2_print_hi', 'set_age']
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