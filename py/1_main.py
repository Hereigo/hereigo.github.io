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

print()
