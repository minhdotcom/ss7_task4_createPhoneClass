var iphone = new Phone ("Iphone", false, 0);
var nokia = new Phone ("Nokia", false, 0);

console.log(iphone);
console.log(nokia);
iphone.turnOn();
iphone.charge(100);
nokia.turnOn();
nokia.charge(50);
nokia.sendMsg(iphone, "test msg");
iphone.readMsgInbox(0);
console.log(iphone);
console.log(nokia);

