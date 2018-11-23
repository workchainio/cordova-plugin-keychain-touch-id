const exec = require('cordova/exec');

function ToucID() {
}

ToucID.prototype.isAvailable =  function(successCallback, errorCallback){
	exec(successCallback, errorCallback, "TouchID", "isAvailable", []);
}
ToucID.prototype.save = function(key,password, userAuthenticationRequired, successCallback, errorCallback) {
	exec(successCallback, errorCallback, "TouchID", "save", [key,password, userAuthenticationRequired]);
}
ToucID.prototype.verify = function(key,message,successCallback, errorCallback){
	exec(successCallback, errorCallback, "TouchID", "verify", [key,message]);
}
ToucID.prototype.has = function(key,successCallback, errorCallback){
	exec(successCallback, errorCallback, "TouchID", "has", [key]);
}
ToucID.prototype.delete = function(key,successCallback, errorCallback){
	exec(successCallback, errorCallback, "TouchID", "delete", [key]);
}
ToucID.prototype.setLocale = function(locale,successCallback, errorCallback){
	exec(successCallback, errorCallback, "TouchID", "setLocale", [locale]);
}
ToucID.prototype.move = function(key, packageName,successCallback, errorCallback){
	exec(successCallback, errorCallback, "TouchID", "move", [key,packageName]);
}

module.exports = new ToucID();
