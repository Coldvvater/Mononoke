#### 配置文件使用简易说明

`Evolve.ini`一份自制的Clash自定义在线分流规则策略组配置文件，需要经过 [URL-encode](https://www.urlencoder.org/) 后，再配合订阅转换链接使用。如想更详细地了解ini文件如何使用，这里有一遍 [教程](https://yattazen.com/tutorial/clash-custom-config.html) 非常推荐你参考！

`Evolve.yaml`是一个自用配置，Stash、Clash (Premium及Meta内核）均可使用，只需要填入订阅链接到指定位置即可使用，具体请看以下部分说明。

#### 电脑端使用步骤
> 电脑使用方面，用 `Clash For Windows` 客户端为例(以下简称 `CFW` )。

1. 首先在仓库里获取配置文件 **raw** 链接，点击配置文件然后再点右边的 **raw** ，跳转后复制地址栏中的链接。

![](https://github.com/Coldvvater/Coldvvater/blob/9bbf32e648392ba21302e05f7528eeafe205f3af/img-folder/CFWscreenshot/raw.png?raw=true)
![](https://github.com/Coldvvater/Coldvvater/blob/9bbf32e648392ba21302e05f7528eeafe205f3af/img-folder/CFWscreenshot/addressbar.png?raw=true)

2. 在 CFW 左边列表上点「**Profiles**」，在上方输入框粘贴链接点击「**Download**」，即可下载配置文件

![](https://github.com/Coldvvater/Coldvvater/blob/9bbf32e648392ba21302e05f7528eeafe205f3af/img-folder/CFWscreenshot/download.png?raw=true)

3. 选择刚下载的配置文件，右键选择 **Edit** 或 **Edit externally** 编辑，根据配置文件里注释内容操作，填入订阅链接即可使用。

![](https://github.com/Coldvvater/Coldvvater/blob/9bbf32e648392ba21302e05f7528eeafe205f3af/img-folder/CFWscreenshot/edit.png?raw=true)
![](https://github.com/Coldvvater/Coldvvater/blob/9bbf32e648392ba21302e05f7528eeafe205f3af/img-folder/CFWscreenshot/sub.png?raw=true)

4. 当然，你也可以将配置文件预先下载到本地，再在「**Profiles**」界面点击「**Import**」导入到 CFW 亦可。



#### 手机端使用步骤

> 手机端方面以 `Stash` 为例（亲测 `Choc` 以及 `Pharos Pro` 等代理App均可使用）

1. 同样，先在仓库里获取配置文件 **raw** 链接，手机端浏览器打开GitHub仓库获取配置文件 **raw** 链接方式有点不同，点击配置文件再点击右边的三个点点•••，点击后会看到菜单，这个时候我们长按 **View** ，会弹出菜单选择复制链接，这样就成功获得了配置文件的 **raw** 链接了。

![](https://github.com/Coldvvater/Coldvvater/blob/master/img-folder/Stashscreenshot/Raw.PNG?raw=true)

2. 在 Stash 首页点击左上方「**Default**」或在设置上方点击「**配置文件**」进入配置列表，在配置列表选择「**从URL下载**」粘贴配置文件 **raw** 链接并下载

![](https://github.com/Coldvvater/Coldvvater/blob/master/img-folder/Stashscreenshot/daoru.PNG?raw=true)
![](https://github.com/Coldvvater/Coldvvater/blob/master/img-folder/Stashscreenshot/URLdownload.PNG?raw=true#pic_center)

下载配置文件成功后，这个时候你并不能对配置文件进行更改和设置，因为Stash不允许对托管链接进行更改，这时候你可以在配置列表下方选择「**复制当前配置**」将刚才导入的配置文件复制一份纯本地的，这样你就可以随意更改配置文件了。

![](https://github.com/Coldvvater/Coldvvater/blob/master/img-folder/Stashscreenshot/copy.PNG?raw=true)

另外，你也可以将配置文件直接下载到本地并保存到系统文件App里，在 Stash 配置列表选择「**从文件中导入**」选择刚才下载的文件，这样也是一份纯本地配置文件。

![](https://github.com/Coldvvater/Coldvvater/blob/master/img-folder/Stashscreenshot/wenjiandaoru.PNG?raw=true)

3. 复制配置文件后我们可以通过可视化编辑填入订阅链接，点击「**可视化编辑**」，选择「**远程代理集**」，点击「**Subscribe**」，在空的URL输入框里填上你的订阅链接并储存即可。

![](https://github.com/Coldvvater/Coldvvater/blob/master/img-folder/Stashscreenshot/siheyi.PNG?raw=true)

4. 当然，如果你习惯了手搓配置，你仍然可以点击「**编辑**」，通过文本编辑模式填上你的订阅链接。

![](https://github.com/Coldvvater/Coldvvater/blob/master/img-folder/Stashscreenshot/wenbenbianji.PNG?raw=true)
![](https://github.com/Coldvvater/Coldvvater/blob/master/img-folder/Stashscreenshot/wenbentianru.jpg?raw=true)


> PS：此配置使用说明只适合本仓库的配置文件使用，其他配置请以其使用操作为准。
