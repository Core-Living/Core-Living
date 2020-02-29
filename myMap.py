#map
#
class myMap:
	class Node:
		def __init__(self, Key, Value, Left = None, Right = None):
			self.Key = Key
			self.Value = Value
			self.Left = Left
			self.Right = Right
			
		def __init__(self):
			Root = Node(None, None)
			
		def __init__(self, other):
			
			insert(other.Root.Key, other.Root.Value)
	
	
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
	
	