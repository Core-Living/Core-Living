from myMap import myMap
import user
import random
import os


def makeNewUser(userFirstName, userLastName, userAge = -1, userGender = "-1", userHeight = -1, userWeight = -1):
	userNameList = list(userLastName+userFirstName)
	seed = 0
	for letter in userNameList:
		seed = ord(letter) + seed
	random.seed(seed)
	newUserId = random.randint(1000000, 9999999)
	userFullName = userLastName + ',' + userFirstName
	with open(os.path.join(os.getcwd(), "usrs/") + str(newUserId) +'.txt', 'w') as file:
		file.write(str(newUserId)+'\n')
		file.write(userFirstName + ' ')
		file.write(userLastName + '\n')
		file.write(str(userAge) + '\n')
		file.write(userGender + '\n')
		file.write(str(userHeight) + '\n')
		file.write(str(userWeight) + '\n')
		file.write("#")
		file.close()
	return

makeNewUser("Kevin", "Hogan", 21, "Male", 75, 165)