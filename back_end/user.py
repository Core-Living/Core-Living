class User:
	def __init__(self, userID):
		self.userID = userID
	
	class userAvatar:
		def __init__(self, userName = "-1", userLevel = -1, userCoins = -1, userItems = [0,0,0,0,0]):
			self.userLevel = userLevel
			self.userCoins = userCoins
			self.userItems = userItems
	
	class userData:
		def __init__(self, userHeight = -1, userWeight = -1, userAge = -1, userGender = "-1", friendsList = [0,0]):
			self.userHeight = userHeight
			self.userWeight = userWeight
			self.userAge = userAge
			self.useGender = useGender
			self.friendsList = friendsList
	
	class bitMoji:
		def __init__(self, bitMojiID = "-1"):
			self.bitMojiID = bitMojiID
		