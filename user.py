class User:
	def __init__(self, userID = -1, userName = "", userLevel = -1, userCoins = -1, userItems = [0,0,0,0,0]):
		self.userId = userID
		self.userLevel = userLevel
		self.userCoins = userCoins
		self.userItems = userItems
		