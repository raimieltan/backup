def test___CS___case_1(self):
    self.assertEqual(cowboy(10, 5), True)

def test___CS___case_2(self):
    self.assertEqual(cowboy(7, 4), False)

def test___CS___case_3(self):
    self.assertEqual(cowboy(4, 5), False)

def test___CS___case_4(self):
    self.assertEqual(cowboy(100, 40), True)

def test___CS___case_5(self):
    self.assertEqual(cowboy(1500, 751), False)

def test___CS___case_6(self):
    self.assertEqual(cowboy(0, 1), False)
