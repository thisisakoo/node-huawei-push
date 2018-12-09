var HwPush = require('../lib');
var Payload = HwPush.Payload;
var Notification = HwPush.Notification;

var config = require('./config');

var payload = new Payload();
payload
  .title(config.title)
  .content(config.content)
  .appPkgName(config.appPkgName)
  .icon(config.icon)
  .customize([{"aa":"aaa"},{"bb":"bbb"}])
  
;
var notification = new Notification({
  appId: config.appId,
  appSecret: config.appSecret
});

notification.send(config.tokens, payload, config.callback);
