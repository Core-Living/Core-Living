#map
#
class myMap:
	class Node:
		def __init__(self, Key = None, Value = "None", Left = None, Right = None):
			self.Key = Key
			self.Value = Value
			self.Left = Left
			self.Right = Right
	def __init__(self, Key = None, Value = "None"):
		self.Root = self.Node(Key, Value)
	
	def _insert(self, curNode, newKey, newVal):
		if curNode.Key == None:
			curNode.Key = newKey
			curNode.Value = newVal
			curNode.Left = None;
			curNode.Right = None;
			return
		elif Key < curNode.Key: #we go left
			_insert(curNode.Left, newKey, newVal)
		else:
			_insert(curNode.Right, newKey, newVal)

	def insert(self, newKey, newVal):
		self._insert(self.Root, newKey, newVal)
	
	
	def _find(curNode, newKey):
		if curNode.Key == newKey:
			return curNode.Value
		elif newKey < curNode.Key:
			_find(curNode.Left, newKey)
		else:
			_find(curNode.Right, newKey)

	def find(newKey):
		return _find(self.Root, newKey)
	
	