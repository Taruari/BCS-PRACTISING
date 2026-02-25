
class Account:
    # class variable
    interest_rate = 0.02

    def __init__(self, account_number, name, balance):
        self.acc_no = account_number
        self.name = name
        self.balance = balance

    # Task
    def display_balance(self):
        return f"Your balance is: ₹{self.balance:,.2f}"
    def apply_interest(self):
        self.balance = self.balance * Account.interest_rate + self.balance
        return f"Success. Applied interest rate of {Account.interest_rate:.2%}. {self.display_balance()}"
    
    def update_interest_rate(self):
        self.balance = self.balance * Account.update_interest_rate + self.balance
        return f"Success. Applied interest rate of {Account.update_interest_rate:.4%}. {self.display_balance()}"
    

gopi = Account(101, "Gopika Hariharan", 1_00_00_000)
vikki = Account(102, "Vignesh M", 10_00_000)
bala = Account(103, "Bala Kumar", 50_00_000)
# Task 1.5
# Interest rate 2%
# 100 + 2 = 102
print(gopi.apply_interest())
print(vikki.apply_interest())
print(bala.apply_interest())

# Success. Applied interest rate of 2.00%. Your balance is: ₹10,200,000.00
# Success. Applied interest rate of 2.00%. Your balance is: ₹1,020,000.00
# Success. Applied interest rate of 2.00%. Your balance is: ₹5,100,000.00



print(Account.update_interest_rate(4))

# print(gopi.apply_interest())
# print(vikki.apply_interest())
# print(bala.apply_interest())

# print(gopi.display_balance())
# print(vikki.display_balance())
# print(bala.display_balance())

# # Success. Interest rate updated => 4.00%
# # Success. Applied interest rate of 4.00%. Your balance is: ₹10,400,000.00
# # Success. Applied interest rate of 4.00%. Your balance is: ₹1,040,000.00
# # Success. Applied interest rate of 4.00%. Your balance is: ₹5,200,000.00
# # Your balance is: ₹10,400,000.00
# # Your balance is: ₹1,040,000.00
# # Your balance is: ₹5,200,000.00