class Parent:
    def __init__(self, age, name, gender):
        self.age = age
        self.name = name
        self.gender = gender

    def get_name_and_age(self):
        return self.name, self.age


parent_1 = Parent(age=35, name='Jolie', gender='female')

print('\r\nParent-1', parent_1.get_name_and_age(), 'gender =', parent_1.gender)


class Parent2:
    def __init__(self):
        pass

    def print_hi(self):
        print('Hi!')


class Child(Parent, Parent2):
    def __init__(self, age, name):
        Parent.__init__(self, age, name, 'female')
        Parent2.__init__(self)


child = Child(13, 'Jess')

print('\r\nChild', child.get_name_and_age(), '\r\n')

child.print_hi()

print()
