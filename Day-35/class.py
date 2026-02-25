class Account:
    def __init__(self, account_number, name, balance):
        self.acc_no = account_number
        self.name = name
        self.balance = balance

    # Task
    def display_balance(self):
      return print(f"Your balance is:₹{self.balance:,.2f}")
    


    

nk = Account(101, "Nandha Kumar", 50_000)
rishi = Account(102, "Rishi", 3_00_000)
puspha = Account(103, "Pushpendar", 10_00_000)

# print(rishi.balance)
# print(rishi)


# Your balance is: ₹3,00,000.00

# print(rishi.display_balance())  # Your balance is: ₹300,000.00
# print(nk.display_balance())  # Your balance is: ₹50,000.00


## Task 1.2



   
def withdraw(self, amount,):
      self.amount=amount
       # Shield 🛡️
      if amount < 0:
            return "Invalid amount"

      if amount > self.balance:
            return f"Insufficient funds. {self.display_balance()}"
        # Shield 🛡️

      self.balance = self.balance - amount
      return f"Success. {self.display_balance()}"
 



print(puspha.withdraw(1_00_000))  # Success. Your balance is: ₹900,000.00
print(puspha.display_balance())  # Your balance is: ₹900,000.00
print(puspha.withdraw(10_00_000))  # Insufficient funds. Your balance is: ₹900,000.00
print(puspha.withdraw(-100))  # Invalid amount