#Adventures in Pi - Text based RPG

import time

#Define variable
hp = 30

print("You are standing on a path at the edge of a jungle. There is a cave to your left and a beach to your right.")

time.sleep(1)

#Loop until we get a recognised response

while True:
    direction1 = input("Do you want to go left or right?")
    direction1= direction1.lower()

    direction1 = direction1.lower()
    if direction1 == "left":
        print("You walk to the cave and notice there is an opening.")
        break #leave loop 1
    elif direction1 == "right":
        print("You walk to the beach but remember you do not have any swimwear.")
        print("The cool water revitalises you. You have never felt more alive, gain 70 health points")
        hp += 70
        break # leave loop 2
    else:
        print("You think for a while.")

# Check health points after the player has made a move
print("You now have ", hp, "health points")
if hp <= 0:
    print("You are dead. I am sorry")

print("The end")



