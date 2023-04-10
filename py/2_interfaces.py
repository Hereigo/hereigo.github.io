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
