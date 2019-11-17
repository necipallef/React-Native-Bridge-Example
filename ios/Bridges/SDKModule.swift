import Foundation

@objc(SDKModule)
public class SDKModule: RCTEventEmitter {
  
  var counterInstance = Counter()
  
  @objc
  open override func supportedEvents() -> [String] {
    return ["onNewCountValue"]
  }
  
  @objc
  open func getCountValue(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
    resolve(self.counterInstance.getCountValue());
  }
  
  @objc
  open func increaseCount() {
    self.counterInstance.increaseCount();
    sendCountValue()
  }
  
  @objc
  open func decreaseCount() {
    self.counterInstance.decreaseCount();
    sendCountValue()
  }
  
  @objc
  open func setCountValue(_ value: Int) {
    self.counterInstance.setCountValue(value)
    sendCountValue()
  }
  
  open func sendCountValue() {
    let body = ["countValue" : self.counterInstance.countValue]
    self.sendEvent(withName: "onNewCountValue", body: body)
  }
}
