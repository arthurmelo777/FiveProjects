from random import randint

nAleat = randint(1,100)

nChute = int(input('Chute um numero: '))

while (nChute != nAleat):
    if nChute != nAleat:
        if nChute > nAleat:
            nChute = int(input('Chute um numero menor: '))
        if nChute < nAleat:
            nChute = int(input('Chute um numero maior: '))
    
print('Parabens, voce acertou o numero!')