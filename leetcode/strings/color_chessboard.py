class Solution:
    def squareIsWhite(self, coordinates: str) -> bool:
        blackOdds = ['a', 'c', 'e', 'g']
        whiteOdds = ['b', 'd', 'f', 'h']
        
        if coordinates[0] in blackOdds:
            if int(coordinates[1]) % 2 == 0:
                return True
            else: 
                return False
        elif coordinates[0] in whiteOdds: 
            if int(coordinates[1]) % 2 == 0:
                return False
            else: 
                return True