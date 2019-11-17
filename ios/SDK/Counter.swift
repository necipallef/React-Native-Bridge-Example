import Foundation

public class Counter {
  
  var countValue = 5
  
  open func getCountValue() -> Int {
    return self.countValue
  }
  
  @objc
  open func increaseCount() {
    self.countValue += 1
  }
  
  @objc
  open func decreaseCount() {
    self.countValue -= 1
  }
  
  @objc
  open func setCountValue(_ value: Int) {
    self.countValue = value
  }
}
