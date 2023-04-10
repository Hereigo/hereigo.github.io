class Core:
    def __init__(self):
        self._types = {
            "A": 3000,
            "B": 5000
        }

    def get_salary(self, class_name):
        return self._types.get(class_name, 0)


class AccountingInterface:
    def __init__(self, data):
        self._core = Core()
        self._database = data

    def get_salary(self, name):
        employee_type = self._database.get(name)
        employee_salary = self._core.get_salary(employee_type)
        return employee_salary


db_emul = {"John": "B", "Mike": "A"}
interface = AccountingInterface(data=db_emul)
johns_salary = interface.get_salary(name="John")

print("John's salary is: ${}".format(johns_salary))
