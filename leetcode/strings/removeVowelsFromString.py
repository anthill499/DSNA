def removevowels(string):
    answer = ""
    vowels = {'a': True,'e': True, 'i': True, 'o': True, 'u': True }
    for letter in string:
        if letter.lower() in vowels:
            answer += letter
    return answer

print(removevowels("hEllo"))