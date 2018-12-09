# huawei-push
> 华为 Android 推送服务 Node 实现版

官方未提供 Node 版的 SDK, 此 SDK 依照官方文档 [华为推送服务 Server 端SDK (HuaweiPushServiceSDK for server)](http://developer.huawei.com/cn/consumer/wiki/index.php)实现.

目前只实现 Android 通知栏推送功能，其他实现以后补充，欢迎提 PR。

此项目根据 [xiaomi-push](https://github.com/isayme/xiaomi-push) 改写而成。

# 支持的特性

- Palload: 用于构建要发送的消息内容
- Notification: 通知栏推送相关

# 安装及使用

    npm install node-huawei-push --save

# 示例

```
var payload = new Payload();
payload
  .title(config.title)
  .content(config.content)
  .appPkgName(config.appPkgName)
  .icon(config.icon)
  .customize([{"aa":"aaa"},{"bb":"bbb"}])
  ;
var notification = new Notification({
  appId: 'your appId',
  appSecret: 'your appSecret'
});
notification.send('your device token', payload, config.callback);
```

使用示例可以参看[example](./example).

# API说明

请参考 [华为推送服务 Server 端SDK (HuaweiPushServiceSDK for server)](https://developer.huawei.com/consumer/cn/service/hms/catalog/huaweipush_agent.html?page=hmssdk_huaweipush_api_reference_agent_s1)。

参考： huawei-push.
