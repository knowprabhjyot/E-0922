function  Model() {
   // I am just keeping this empty 
}


Model.prototype.setData = function(incomingData) {
    this.data = incomingData;
}

Model.prototype.getData = function() {
    return this.data;
}
