import Foundation

public class Counter {

  var countValue = 5

  open func getCountValue() -> Int {
    return self.countValue
  }

  open func increaseCount() {
    self.countValue += 1
  }

  open func decreaseCount() {
    self.countValue -= 1
  }

  open func setCountValue(_ value: Int) {
    self.countValue = value
  }
}
