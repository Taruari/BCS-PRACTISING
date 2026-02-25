# full_name = "Tarachand kanwar"
# print(full_name)

# print(f"welcome, {full_name}")

# age = 20
# follower = 2_000_000

# print(f"My age is {age} and my followers are {follower * 2}")

# task 2nd


# tell= input("Tell me your name?: ")
# print(tell)

# birth = input("tell me your birth year?: ")
# print(f"Hi, {tell} you are {2026-int(birth) } years old" )


# Clue: Type conversions
# Task 1.3
# Output
# Please provide your Fahrenheit: 98.6
# The 98.6°F is 37°C
# (32°F − 32) × 5/9

# Fahrenheit = input("tell Fahrenheit?:  ")
# celsius = (float(Fahrenheit) - 32) * 5 / 9
# print(f"{celsius}")


# radius = input("tell me radius?: ")
# pi = 3.14

# area = pi * float(radius) ** 2

# print(f"{area}")


# Task 1.2
# Task: Build a loader
# Case: 1
# Input: 70
# Output: [=======   ] 70%

# Case: 2
# Input: 23
# Output: [==        ] 23%


# number= int(input("tell me any number?: "))
# per= (number )

# s = "PYTHON ROCK"
# print(s[2:5:2])


# s[start:stop:step]
#  stop value not include
# start value depending upon the step value


# secret_message = ("Programming in Python is not only powerful but also fun!").strip

# # Task 1.1
# # Expected Output
# # "PYTHON-POWERFUL"

# p = secret_message[15:22]
# q = secret_message[33:42]
# print(f"{p}")
# print(f"{q}")
# r = p+"-"+q
# print(f"{r.upper()}")


# Task 1.1
# Compare Two People’s Heights (Taller / Same Height)
# Hint - input
# Better - abs()
# Expected Output -
# Case 1:
# Please tell me the captain name?: Luffy
# Please tell me the vice captain name?: Zoro
# Please tell me the height of Luffy?: 173
# Please tell me the height of Zoro?: 163
# Luffy is taller than Zoro by 10cm

# person1 = input("Please tell me the captain name?: ")
# height1 = int(input("Please tell me your height?: "))
# person2 = input("Please tell me the captain name?: ")
# height2 = int(input("Please tell me your height?: "))
# if height1 > height2:
#     print(f"{person1} is taller than {person2} by {height1 - height2}cm")
# elif height2 > height1:
#     print(f"{person2} is taller than {person1} by {height2 - height1}cm")
# elif height2 == height1:
#     print(f"{person1} and {person2} equal height")


stock1 = "vanilla"
stock2 = "green tea"
stock3 = "lemon"
stock4 = "chocolate"


# Task 1.2
# Clue - String methods
# Handle the extra space & letter case
# Case1:
# Please enter your fav 🍧?:      vaNillA
# Yes, we have vanilla in stock

# Case 2:
# Please enter your fav 🍧?:   pisTa
# Sorry, we ran out of pista

# ice= input("Please enter your fav 🍧?: ")
# if ice==stock1:
#         print(f"Yes, we have {stock1} in stock")
# elif ice==stock2:
#          print(f"Yes, we have {stock2} in stock")
# elif ice==stock3:
#         print(f"Yes, we have {stock3} in stock")
# elif ice==stock4:
#          print(f"Yes, we have {stock4} in stock")
# else:
#     print(f"Sorry, we ran out of {ice}")        


