from myMap import myMap
import user
import random
import os
import json

#  makeNewUser
#  takes name(str), age(int), gender(str), height(int, inches) and weight(int, pounds)
#  and creates a user, with a seven digit user id
#  outputs all user info to json file with the user id as its name in the usrs folder. 
#  Must be passed two strings, first and last names
#  if other info is not given, a default -1 is placed in missing slots
#  -1 is returned in the event of an error
def makeNewUser(userFirstName, userLastName, userAge = -1, userSex = "-1", userHeight = -1, userWeight = -1):
	try:
		userNameList = list(userLastName+userFirstName)
		seed = 0
		for letter in userNameList:
			seed = ord(letter) + seed
		random.seed(seed)
		newUserId = random.randint(1000000, 9999999)
		userFullName = userLastName + ',' + userFirstName
		data = {
			'userID': str(newUserId),
			'lastName': userLastName,
			'firstName': userFirstName,
			'age': str(userAge),
			'sex': userSex,
			'height-inches': str(userHeight),
			'weight-pounds': str(userWeight)
		}
		with open(os.path.join(os.getcwd(), "usrs/") + str(newUserId) +'.json', 'w') as file:
			json.dump(data, file)
			file.close()
		return newUserId
	except Exception as error:
		print("Error in makeNewUser :>" + str(error))
		return -1

#  getUserInfo()
# returns 1 or all of designated user info as json
# requires id number to be passed, if no specific data is asked for,
# all info is retuned, else just the specified date gets returned
# if user does not exist, -1 is retuned
def getUserInfo(userIDNumber, userDataField = '-1'):
	try:
	with open(os.path.join(os.getcwd(), "usrs/") +str(userIDNumber)+'.json') as file:
		jsonData = json.load(file)
		if userDataField == "-1":
			return json.dumps(jsonData)
		else:
			return jsonData[userDataField]
	file.close()
	except Exception as error:
		print("Error in getUserInfo :>" + str(error))
		return -1
	
# idNum = makeNewUser("Kevin", "Hogan", 21, "M", 75, 163)
# print(getUserInfo(str(idNum), 'age'))
