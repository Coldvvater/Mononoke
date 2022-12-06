#### 配置文件说明

`Clash-Evolve.yaml`是一个自用配置，使用Proxy-Providers及Rule-Providers引用订阅链接和远程规则集，通过YAML语法的锚点筛选节点，只需要填入订阅链接到指定位置即可使用，具体请看配置里注释部分说明，本配置Clash (Premium)及Clash Meta内核均可使用。

`Custom.ini`一份自制的Clash自定义在线分流规则策略组配置文件，需要经过 [URL-encode](https://www.urlencoder.org/) 后，再配合订阅转换链接使用。如想更详细地了解ini文件如何使用，这里有一遍 [教程](https://yattazen.com/tutorial/clash-custom-config.html) 非常推荐你参考！

#### 配置使用步骤
> 在Clash使用方面，用Clash For Windows为例(以下简称CFW)，获取配置文件raw链接后在CFW左边列表上点Profile，在上方输入框粘贴链接点击Download，即可下载配置文件，选择刚下载的配置文件，右键编辑，根据配置文件里注释内容操作，导入订阅链接即可使用。当然，你也可以将配置文件预先下载到本地，再导入到CFW亦可。
