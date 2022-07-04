# odd indexes => invert the letters
# even indexes => capitalize the string

names = ['aNtHoNy', 'aNdReW', 'bOb', 'MiChAeL'] 

def passAppAcademyInterview(array):
    answer = []
    for key, val in enumerate(array):
        string = ''
        for letter in val:
           if (letter == letter.upper()):
                string += letter.lower()
           elif (letter == letter.lower()):
                string += letter.upper()
        answer.append(string)
    return answer
    
print(passAppAcademyInterview(names))
    
