public function test___CS___case_1() {
      $this->assertEquals(True, cowboy(10,5));
}
public function test___CS___case_2() {
      $this->assertEquals(False, cowboy(7,4));

    }
public function test___CS___case_3() {
      $this->assertEquals(False, cowboy(4,5));

    }
public function test___CS___case_4() {
      $this->assertEquals(True, cowboy(100,40));

    }
public function test___CS___case_5() {
      $this->assertEquals(False, cowboy(1500,751));

    }
