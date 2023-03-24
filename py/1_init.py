class Human:
    def __init__(self, age, name, gender):
        self.age = age
        self.name = name
        self.gender = gender

    def get_name_and_age(self):
        return self.name, self.age


human_1 = Human(age=25, name='Mark', gender='male')

print(human_1.get_name_and_age(), 'gender =', human_1.gender)
