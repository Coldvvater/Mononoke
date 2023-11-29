#### 模块使用步骤

1. 在 Surge 首页点击「**修改**」(新版本MitM位置已调整)点击「**配置根证书**」，先点击「**生成新的CA证书**」再点击「**安装证书**」跳转到下载证书页面点击**允许**。

<div align="center">
<img src=https://github.com/Coldvvater/Coldvvater/blob/master/img-folder/ModuleCap/modify.PNG?raw=true width=60%  />
<img src=https://github.com/Coldvvater/Coldvvater/blob/master/img-folder/ModuleCap/ca.PNG?raw=true width=60%  />
<img src=https://github.com/Coldvvater/Coldvvater/blob/master/img-folder/ModuleCap/NewCAandInstallCA.PNG?raw=true width=60%  />
<img src=https://github.com/Coldvvater/Coldvvater/blob/master/img-folder/ModuleCap/allow.PNG?raw=true width=60%  />
</div>


2. 前往手机的系统设置，会看到**已下载的描述文档**，点击它**安装**证书描述文档，**输入手机锁屏密码**，**确认安装**，点击**完成**。

<div align="center">
<img src=https://github.com/Coldvvater/Coldvvater/blob/master/img-folder/ModuleCap/file.PNG?raw=true width=60%  />
<img src=https://github.com/Coldvvater/Coldvvater/blob/master/img-folder/ModuleCap/install.PNG?raw=true width=60%  />
<img src=https://github.com/Coldvvater/Coldvvater/blob/master/img-folder/ModuleCap/password.PNG?raw=true width=60%  />
<img src=https://github.com/Coldvvater/Coldvvater/blob/master/img-folder/ModuleCap/sureinstall.PNG?raw=true width=60%  />
<img src=https://github.com/Coldvvater/Coldvvater/blob/master/img-folder/ModuleCap/sureinstall2.PNG?raw=true width=60%  />
<img src=https://github.com/Coldvvater/Coldvvater/blob/master/img-folder/ModuleCap/done.PNG?raw=true width=60%  />
</div>


3.  继续在手机的系统设置「**关于本机**」下拉，找到「**证书信任列表设置**」，看到刚才安装的 Surge 证书，把信任证书开关**打开**，回到 Surge 的「**配置根证书**」界面会看到证书**已安装**和**已信任**，
把
-  **跳过服务端证书验证**」
-  「**用于TCP连接**」
-  「**MITM over HTTP/2**」
开关全部打开。

<div align="center">
<img src=https://github.com/Coldvvater/Coldvvater/blob/master/img-folder/ModuleCap/about.PNG?raw=true width=60%  />
<img src=https://github.com/Coldvvater/Coldvvater/blob/master/img-folder/ModuleCap/calist.PNG?raw=true width=60%  />
<img src=https://github.com/Coldvvater/Coldvvater/blob/master/img-folder/ModuleCap/open.PNG?raw=true width=60%  />
<img src=https://github.com/Coldvvater/Coldvvater/blob/master/img-folder/ModuleCap/trusted2.PNG?raw=true width=60%  />
</div>


4. 返回 Surge 首页把「**MitM**」、「**Rewrite**」、「**脚本**」几个开关打开，这个时候移步到GitHub仓库选择你需要的模块，点击右边的三个点点•••，点击后会看到菜单，点击 **View** ，跳转后复制地址栏的模块链接，回到 Surge 的首页点击「**通用**」界面，点击「**模块**」进入模块安装界面，点击「**安装新模块**」在输入框粘贴你刚才复制的模块链接，点击**好的**，跳转到模块详情再点击**安装**，即安装成功！

<div align="center">
<img src=https://github.com/Coldvvater/Coldvvater/blob/master/img-folder/ModuleCap/MitMRewriteJS.PNG?raw=true width=60%  />
<img src=https://github.com/Coldvvater/Coldvvater/blob/master/img-folder/ModuleCap/raw.PNG?raw=true  />
<img src=https://github.com/Coldvvater/Coldvvater/blob/master/img-folder/ModuleCap/module.PNG?raw=true width=60%  />
<img src=https://github.com/Coldvvater/Coldvvater/blob/master/img-folder/ModuleCap/installnew.PNG?raw=true width=60%  />
<img src=https://github.com/Coldvvater/Coldvvater/blob/master/img-folder/ModuleCap/ok.PNG?raw=true width=60%  />
<img src=https://github.com/Coldvvater/Coldvvater/blob/master/img-folder/ModuleCap/getinstall.PNG?raw=true width=60%  />
<img src=https://github.com/Coldvvater/Coldvvater/blob/master/img-folder/ModuleCap/alldone.PNG?raw=true width=60%  />
</div>



*⚠️注意：引用大佬的脚本所编写的模块，不保证长期可用，部分模块需查看注释内容按教程使用，有问题请发issues*

