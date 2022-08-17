#### Clash.yaml

一份懒人配置，使用Proxy-Providers及Rule-Providers引用订阅链接和远程规则集，通过YAML语法的描点筛选节点，只需要填入订阅链接到指定位置即可使用，具体请看配置里注释部分说明，本配置Clash Premium及Clash Meta内核均可使用。

#### Stash.yaml

Stash.yaml懒人配置专属Stash 2.0使用，因地区节点已采用策略组筛选，低于Stash 2.0版本及Clash(Premium内核)本质上也可以使用此配置，但节点无筛选效果。

#### Custom.ini

一份自制的Clash自定义在线分流规则策略组配置文件，根据神机规则修改而来，需要经过 [URL-encode](https://www.urlencoder.org/) 后，再配合订阅转换链接使用。

#### PS：关于规则集的一些说明
- 如若不需要观看哔哩哔哩、爱奇艺等面向港澳台的限定内容可移除「StreamingSE」规则集。
- 如若不需要代理 Apple 服务可移除「Apple」规则集，若加入必须在「Global」和「China」之间。
- 如需细化流媒体如「Youtube」需要加在「Streaming」之上。
- 如需应用类的如「Telegram、Google、PayPal」等规则集，可自行在各大规则库搜索并添加，需要加在「Global」之上。

一般情况下默认引入配置默认10个（如不需要 StreamingSE 和 Apple 可减至 8 个）即可，那么为什么还有更多的如「Youtube、Netflix、Spotify等规则集」？

1. 对于一些「进阶玩家」来说其拥有专用于观看流媒体的线路，比如观看限定区域的 Netflix、Hulu、HBO 等，所以引入相关规则集，建立一个策略组设置相应服务区节点线路。但对于普通用户来说，那些「Youtube、Hulu」什么的都是集成在「Streaming」中不需要额外引入。
2. 对于一些「有需要者」来说其拥有高速的新加坡节点线路，为了提升 Telegram 使用体验所以会引入「Telegram」规则集到指定一些节点。

综上所述、以此类推，独立的规则集一般都集成在了默认的 8 条 .yaml 文件中，如果你没有进阶的定制化需求是**不 需 要**引入那么多的，根据需求使用才是Ruleset的灵活用法，规则不是越多越好。
