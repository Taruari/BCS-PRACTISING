# for i in range(1, 6):
#     print("🔥" * i)


# def msg(name):
#     return f"Hello, {name}"


# print(msg("NK"))


# def emoji(rows, symbol="🔥"):
#     for i in range(1, rows + 1):
#         print(symbol * i)


# Task  1.1 - With function

# (emoji(2, "🍓"))
# (emoji(6, "🍍"))
# (emoji(4, "🥕"))
# (emoji(3))

# 🍓
# 🍓🍓
# 🍍
# 🍍🍍
# 🍍🍍🍍
# 🍍🍍🍍🍍
# 🍍🍍🍍🍍🍍
# 🍍🍍🍍🍍🍍🍍
# 🥕
# 🥕🥕
# 🥕🥕🥕
# 🥕🥕🥕🥕
# 🔥
# 🔥🔥
# 🔥🔥🔥


flowers = ["💐", "🌷", "🌼", "🌷", "🌺"]


# Task 1.1 - Print all the flower using for loop
# Hint - range, len

# Expected output
# Flower 1 - 💐
# Flower 2 - 🌷
# Flower 3 - 🌼
# Flower 4 - 🌷
# Flower 5 - 🌺


# Task 1.2: Double all the numbers
# marks = [80, 90, 100, 60, 85]
# for i in range(0, len(marks)):
#     marks[i] = marks[i] * 2
# print(marks)

# Output
# print(marks) -> [160, 180, 200, 120, 170]

# Task 1.3: Double the power
# powers = [2000, 3000, 4000, 1500]
# doubled_powers =[]
# for power in powers:
#     doubled_powers.append(power*2)
# print(doubled_powers)

# Output
# doubled_powers -> [4000, 6000, 8000, 3000]
# powers -> [2000, 3000, 4000, 1500]


# ## Task 1.4
# Find longer names (>= 6 letter)
# characters = ["Hello kitty", "Goku", "Pikachu", "Luffy", "Yuji Itadori", "Levi"]
# big_names = []
# for character in characters:
#     if len(character) >= 6:
#         big_names.append(character)

# print(big_names)

# ### Expected Output
# ['Hello kitty', 'Pikachu', 'Yuji Itadori']





# pirate = {
#     "name": "Moneky D. Luffy",
#     "age": 25,
#     "crew_name": "Straw hat pirates",
#     "crew_members": ["Zoro", "Sanji", "Nami", "Chopper"],
#     "position": "captain",
# }
# pirate["age"]=pirate["age"]+1


# print(pirate)

# Increase age by 1


books = [
    {"title": "Infinite Jest", "rating": 4.5, "genre": "Fiction"},
    {"title": "The Catcher in the Rye", "rating": 3.9, "genre": "Fiction"},
    {"title": "Sapiens", "rating": 4.9, "genre": "History"},
    {"title": "A Brief History of Time", "rating": 4.8, "genre": "Science"},
    {"title": "Clean Code", "rating": 4.7, "genre": "Technology"},
]


# print(titles) # ["Infinite Jest",  "The Catcher in the Rye", "Sapiens",  "A Brief History of Time",  "Clean Code"]

# titles=[]
# for book in books:
#     titles.append(book["title"])
# print(titles)

# # # ### Expected Output
# # ["Infinite Jest",  "The Catcher in the Rye"]

# titles2=[]
# for book in books:
#     if book["genre"] == "Fiction":
#      titles2.append(book["title"])
# print(titles2)
# books = [
#     {"title": "Infinite Jest", "rating": 4.5, "genre": "Fiction"},
#     {"title": "The Catcher in the Rye", "rating": 3.9, "genre": "Fiction"},
#     {"title": "Sapiens", "rating": 4.9, "genre": "History"},
#     {"title": "A Brief History of Time", "rating": 4.8, "genre": "Science"},
#     {"title": "Clean Code", "rating": 4.7, "genre": "Technology"},
# ]
# Please provide Highest rated books (>= 4.7) ;
# # # ### Expected Output
# Highest rated books are Sapiens, A Brief History of Time and Clean Code 



class Car:
    # function =  method (class function)
    def __init__(self, wheels, engine, model, doors):
        # instance variables
        self.wheels = wheels
        self.engine = engine
        self.model = model
        self.doors = doors

    # instance methods - objects share them
    def horn(self):
        return "Vroom Vroom!!!"


# Share

# Object
# self -> Object
hindustan = Car(4, "v4", "Ambassador", 4)
jeep = Car(4, "v6", "Wrangler", 4)

print(hindustan)  # Car object
print(jeep)

# Dot syntax - Class objects
print(jeep.model)
print(jeep.doors)

print(jeep.horn())
print(hindustan.horn())

# ## Tata
# - Wheels - 4
# - Engine - v4
# - Model - Harrier
# - Doors - 4


# ## Task 1.1
# Create blueprint

# ### Account
# 1. acc_no
# 2. name
# 3. balance


## Task 1.2
# Create 3 account
# 1. nk - 50_000
# 2. rishi - 3_00_000
# 3. puspha - 10_00_000

class Account:
    def __init__(self , name , salary ,area ):
        self.name = name
        self.salary = salary
        self.area = area
nk = Account( "nk",50_000, "Tamilnadu" )
print(nk.area)