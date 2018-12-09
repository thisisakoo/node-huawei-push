var Payload = function () {
  this.hps = {
    'msg': {
      'type': 3,
      'body': {
        'title': '',
        'content': ''
      },
      'action': {
        'type': 3,
        'param': {
          'appPkgName': '',
        },

      },
    },

    'ext': {
      "biTag": "Trump",
      "icon": '',
      'customize':[],
    },
  };
  return this;
};

/*
 * Notification bar上显示的标题
 * 必须
 */
Payload.prototype.title = function (title) {
  return this.setPayloadMsgBody('title', title);
};

/*
 * Notification bar上显示的内容
 * 必须
 */
Payload.prototype.content = function (content) {
  return this.setPayloadMsgBody('content', content);
};

/*
 * Notification apppackgename
 * 必须
 */
Payload.prototype.appPkgName = function (appPkgName) {
  return this.setPayloadMsgActionParam('appPkgName', appPkgName);
};

/*
 * Notification icon
 * 可选
 */
Payload.prototype.icon = function (icon) {
  return this.setPayloadMsgExt('icon', icon);
};

/*
 * Notification icon
 * 可选
 */
Payload.prototype.customize = function (customize) {
  return this.setPayloadMsgExt('customize', customize);
};

Payload.prototype.setPayloadMsgBody = function (key, value) {
  this.hps.msg.body[key] = value;
  return this;
};

Payload.prototype.setPayloadMsgActionParam = function (key, value) {
  this.hps.msg.action.param[key] = value;
  return this;
};
Payload.prototype.setPayloadMsgExt = function (key, value) {
  this.hps.ext[key] = value;
  return this;
};


module.exports = Payload;
