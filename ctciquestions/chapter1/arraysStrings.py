
# def printStrings(num = 1): 
#     if num % 2 == 0:
#         print("Number is even")
#     else:
#         print("Number is odd")        

# def printExponent():
#     print(2 ** 3)
# def printMod():
#     print(4 % 2)
# def printDivision():
#     print(4 / 2)
# def printInteger():
#     print(5 // 2)  

# def printBang(): 
#     print(not not 3)
#     print(not "")
#     print(not "hello")
    
# # printBang()

# first_fruits_list = ["apple", "banana"]
# second_fruits_list = ["apple", "banana"]
# print(first_fruits_list is second_fruits_list) 
# print(first_fruits_list == second_fruits_list) 
# print(first_fruits_list is not second_fruits_list)
# print(first_fruits_list != second_fruits_list) 

squares = [1, 4, 9, 16, 25]

def printIndexes():
    for i in range(len(squares) - 1, -1, -1):
        print(i)
        
printIndexes()