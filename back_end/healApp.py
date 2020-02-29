import user
import random
import os
import json

def makeNewUser(userFirstName, userLastName, userAge = -1, userGender = "-1", userHeight = -1, userWeight = -1):
	userNameList = list(userLastName+userFirstName)
	seed = 0
	for letter in userNameList:
		seed = ord(letter) + seed
	random.seed(seed)
	newUserId = random.randint(1000000, 9999999)
	userFullName = userLastName + ',' + userFirstName
	jsonData = {}
	jsonData["users"] = []
	jsonData["users"].append({
		'userID': str(newUserId),
		'lastName': userLastName,
		'firstName': userFirstName,
		'age': str(userAge),
		'gender': userGender,
		'height-inches': str(userHeight),
		'weight-pounds': str(userWeight)
	})
	with open(os.path.join(os.getcwd(), "usrs/") + str(newUserId) +'.txt', 'w') as file:
		json.dump(jsonData, file)
		file.close()
	return

makeNewUser("Kevin", "Hogan", 21, "Male", 75, 165)
