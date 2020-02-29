#map
#
class myMap:
	class Node:
		def __init__(self, Key = None, Value = None, Left = None, Right = None):
			self.Key = Key
			self.Value = Value
			self.Left = Left
			self.Right = Right
		def __init__(self, Key = None, Value = None):
			self.Root = Node(Key, Value)
	
	def _insert(curNode, newKey, newVal):
		# if we find the key, insert
		if curNode.Key == None:
			curNode.Key = newIdNum
			curNode.Value = newVal
			curNode.Left = None;
			curNode.Right = None;
			return
		elif Key < curNode.Key: #we go left
			_insert(curNode.Left, newKey)
		else:
			_insert(curNode.Right, newKey)

	def insert(newKey, newVal):
		_insert(this.Root, newKey, newVal)
	
	
	def _find(curNode, newKey):
		if curNode.Key == newKey:
			return curNode.Value
		elif newKey < curNode.Key:
			_find(curNode.Left, newKey)
		else:
			_find(curNode.Right, newKey)

	def find(newKey):
		return _find(self.Root, newKey)
	
	