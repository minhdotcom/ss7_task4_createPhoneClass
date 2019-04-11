function Phone (name, status, battery) {
    this.name = name; // string
    this.status = status; // boolean
    this.battery = battery; // int (0 --> 100)
    this.msgDraft = [];
    this.msgInbox = [];
    this.msgSent = [];
    this.getStatus = function () {
        console.log(this.status ? this.name + " is on" : this.name + " is off");
    }
    this.turnOn = function () {
        this.status = true;
    }
    this.turnOff = function () {
        this.status = false;
    }
    this.charge = function (battery) {
        this.battery = battery;
    }
    this.isReady = function () {
        if ( ! this.status) {
            console.log (this.name + " is not turned on. Please turn it on.")
            return false;
        } else if (this.battery == 0) {
            console.log (this.name + "'s battery is exhausted. Please charge.")
            return false
        } else { return true }
    }
    this.composeMsg = function (msg) {
        if (this.isReady()) {
            this.msgDraft.push(msg);
            this.battery -- ;
        } else console.log ("Compose function failed.");
    }
    this.sendMsg = function (phone, msg) {
        if (this.isReady()) {
            this.msgSent.push (msg);
            phone.msgInbox.push(msg);
            console.log(this.name + " sent msg to " + phone.name + " successfully.")
            this.battery -- ;
        } else console.log ("Send function failed.");
    }
    this.readMsgInbox = function (msgIndex) {
        if (this.isReady()) {
            console.log(this.name + ": Inbox message no." + (msgIndex + 1) + " is '" + this.msgInbox[msgIndex] + "'");
            this.battery--;
        } else console.log ("Read inbox function failed.");

    }
    this.readMsgSent = function (msgIndex) {
        if (this.isReady()) {
            console.log("Sent message no." + (msgIndex + 1) + " is: " + this.msgSent[msgIndex]);
            this.battery--;
        } else console.log ("Read inbox function failed.");
    }
}