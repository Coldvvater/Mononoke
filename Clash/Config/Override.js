// 参考 Verge Rev 示例 Script 配置
//
// Clash Verge Rev (Version ≥ 17.2) & Mihomo-Party (Version ≥ 1.5.10)
//
// 最后更新时间: 2025-03-28 13:23

// 规则集通用配置
const ruleProviderCommon = {
};

// 策略组通用配置
const groupBaseOption = {
  "interval": 300,
  "url": "http://www.gstatic.com/generate_204",
  "max-failed-times": 3,
};

// 程序入口
function main(config) {
  const proxyCount = config?.proxies?.length ?? 0;
  const proxyProviderCount =
    typeof config?.["proxy-providers"] === "object" ? Object.keys(config["proxy-providers"]).length : 0;
  if (proxyCount === 0 && proxyProviderCount === 0) {
    throw new Error("配置文件中未找到任何代理");
  }

  // 覆盖通用配置
  config["mixed-port"] = "7890";
  config["tcp-concurrent"] = true;
  config["allow-lan"] = true;
  config["ipv6"] = true;
  config["log-level"] = "info";
  config["unified-delay"] = "true";
  config["find-process-mode"] = "strict";
  config["global-client-fingerprint"] = "chrome";

  // 覆盖 dns 配置
  config["dns"] = {
    "enable": true,
    "listen": "0.0.0.0:1053",
    "ipv6": true,
    "enhanced-mode": "fake-ip",
    "fake-ip-range": "198.18.0.1/16",
    "fake-ip-filter": ["*", "+.lan", "+.local", "+.direct", "+.msftconnecttest.com", "+.msftncsi.com"],
    "default-nameserver": ["223.5.5.5", "119.29.29.29"],
    "nameserver": ["https://dns.alidns.com/dns-query", "https://doh.pub/dns-query"],
    "proxy-server-nameserver": ["https://dns.alidns.com/dns-query", "https://doh.pub/dns-query"]
  };

  // 覆盖 geodata 配置
  config["geodata-mode"] = true;
  config["geox-url"] = {
    "geoip": "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/geoip.dat",
    "geosite": "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/geosite.dat",
    "mmdb": "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/country.mmdb",
    "asn": "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/GeoLite2-ASN.mmdb"
  };

  // 覆盖 sniffer 配置
  config["sniffer"] = {
    "enable": true,
    "parse-pure-ip": true,
    "sniff": {
      "TLS": {
        "ports": ["443", "8443"]
      },
      "HTTP": {
        "ports": ["80", "8080-8880"],
        "override-destination": true
      },
      "QUIC": {
        "ports": ["443", "8443"]
      }
    }
  };

  // 覆盖 tun 配置
  config["tun"] = {
    "enable": true,
    "stack": "mixed",
    "dns-hijack": ["any:53"],
    "auto-route": true,
    "auto-detect-interface": true
  };

  // 覆盖策略组
  config["proxy-groups"] = [
    {
      ...groupBaseOption,
      "name": "Final",
      "type": "select",
      "proxies": ["Proxy", "DIRECT"],
      "icon": "https://gh-proxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Final.png"
    },
    {
      ...groupBaseOption,
      "name": "Proxy",
      "type": "select",
      "proxies": ["HongKong", "TaiWan", "Japan", "Singapore", "America", "AllServer", "DIRECT"],
      "icon": "https://gh-proxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Rocket.png"
    },
    {
      ...groupBaseOption,
      "name": "AI",
      "type": "select",
      "proxies": ["Proxy", "HongKong", "TaiWan", "Japan", "Singapore", "America", "AllServer"],
      "icon": "https://gh-proxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/ChatGPT.png"
    },
    {
      ...groupBaseOption,
      "name": "YouTube",
      "type": "select",
      "proxies": ["Proxy", "HongKong", "TaiWan", "Japan", "Singapore", "America", "AllServer"],
      "icon": "https://gh-proxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/YouTube.png"
    },
    {
      ...groupBaseOption,
      "name": "NETFLIX",
      "type": "select",
      "proxies": ["Proxy", "HongKong", "TaiWan", "Japan", "Singapore", "America", "AllServer"],
      "icon": "https://gh-proxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Netflix.png"
    },
    {
      ...groupBaseOption,
      "name": "Emby",
      "type": "select",
      "proxies": ["Proxy", "HongKong", "TaiWan", "Japan", "Singapore", "America", "AllServer", "DIRECT"],
      "icon": "https://gh-proxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Emby.png"
    },
    {
      ...groupBaseOption,
      "name": "TikTok",
      "type": "select",
      "proxies": ["Proxy", "HongKong", "TaiWan", "Japan", "Singapore", "America", "AllServer"],
      "icon": "https://gh-proxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/TikTok.png"
    },
    {
      ...groupBaseOption,
      "name": "bilibili",
      "type": "select",
      "proxies": ["DIRECT", "HongKong", "TaiWan"],
      "icon": "https://gh-proxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/bilibili_3.png"
    },
    {
      ...groupBaseOption,
      "name": "Spotify",
      "type": "select",
      "proxies": ["Proxy", "HongKong", "TaiWan", "Japan", "Singapore", "America", "AllServer", "DIRECT"],
      "icon": "https://gh-proxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Spotify.png"
    },
    {
      ...groupBaseOption,
      "name": "Streaming",
      "type": "select",
      "proxies": ["Proxy", "HongKong", "TaiWan", "Japan", "Singapore", "America", "AllServer"],
      "icon": "https://gh-proxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Streaming.png"
    },
    {
      ...groupBaseOption,
      "name": "Telegram",
      "type": "select",
      "include-all": true,
      "proxies": ["Proxy", "HongKong", "TaiWan", "Japan", "Singapore", "America", "AllServer"],
      "icon": "https://gh-proxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Telegram_X.png"
    },
    {
      ...groupBaseOption,
      "name": "X",
      "type": "select",
      "include-all": true,
      "proxies": ["Proxy", "HongKong", "TaiWan", "Japan", "Singapore", "America", "AllServer"],
      "icon": "https://gh-proxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/X.png"
    },
    {
      ...groupBaseOption,
      "name": "Apple",
      "type": "select",
      "proxies": ["Proxy", "HongKong", "TaiWan", "Japan", "Singapore", "America", "AllServer", "DIRECT"],
      "icon": "https://gh-proxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Apple_1.png"
    },
    {
      ...groupBaseOption,
      "name": "Google",
      "type": "select",
      "proxies": ["Proxy", "HongKong", "TaiWan", "Japan", "Singapore", "America", "AllServer", "DIRECT"],
      "icon": "https://gh-proxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Google_Search.png"
    },
    {
      ...groupBaseOption,
      "name": "Microsoft",
      "type": "select",
      "proxies": ["Proxy", "HongKong", "TaiWan", "Japan", "Singapore", "America", "AllServer", "DIRECT"],
      "icon": "https://gh-proxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Windows_11.png"
    },
    {
      ...groupBaseOption,
      "name": "Games",
      "type": "select",
      "proxies": ["Proxy", "HongKong", "TaiWan", "Japan", "Singapore", "America", "AllServer", "DIRECT"],
      "icon": "https://gh-proxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Game.png"
    },
    // 地区分组
    {
      ...groupBaseOption,
      "name": "HongKong",
      "type": "select",
      "proxies": ["HK-Auto", "HK-FallBack", "HK-LoadBalance"],
      "include-all": true,
      "filter": "(?i)🇭🇰|香港|(\b(HK|Hong)\b)",
      "icon": "https://gh-proxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Hong_Kong.png"
    },
    {
      ...groupBaseOption,
      "name": "HK-Auto",
      "type": "url-test",
      "tolerance": 50,
      "lazy": true,
      "include-all": true,
      "hidden": true,
      "filter": "(?i)🇭🇰|香港|(\b(HK|Hong)\b)",
      "icon": "https://gh-proxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Hong_Kong.png"
    },
    {
      ...groupBaseOption,
      "name": "HK-FallBack",
      "type": "fallback",
      "lazy": true,
      "include-all": true,
      "hidden": true,
      "filter": "(?i)🇭🇰|香港|(\b(HK|Hong)\b)",
      "icon": "https://gh-proxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Hong_Kong.png"
    },
    {
      ...groupBaseOption,
      "name": "HK-LoadBalance",
      "type": "load-balance",
      "lazy": true,
      "include-all": true,
      "hidden": true,
      "filter": "(?i)🇭🇰|香港|(\b(HK|Hong)\b)",
      "icon": "https://gh-proxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Hong_Kong.png"
    },
    {
      ...groupBaseOption,
      "name": "TaiWan",
      "type": "select",
      "proxies": ["TW-Auto", "TW-FallBack", "TW-LoadBalance"],
      "include-all": true,
      "filter": "(?i)🇨🇳|🇹🇼|台湾|(\b(TW|Tai|Taiwan)\b)",
      "icon": "https://gh-proxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/China.png"
    },
    {
      ...groupBaseOption,
      "name": "TW-Auto",
      "type": "url-test",
      "tolerance": 50,
      "lazy": true,
      "include-all": true,
      "hidden": true,
      "filter": "(?i)🇨🇳|🇹🇼|台湾|(\b(TW|Tai|Taiwan)\b)",
      "icon": "https://gh-proxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/China.png"
    },
    {
      ...groupBaseOption,
      "name": "TW-FallBack",
      "type": "fallback",
      "lazy": true,
      "include-all": true,
      "hidden": true,
      "filter": "(?i)🇨🇳|🇹🇼|台湾|(\b(TW|Tai|Taiwan)\b)",
      "icon": "https://gh-proxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/China.png"
    },
    {
      ...groupBaseOption,
      "name": "TW-LoadBalance",
      "type": "load-balance",
      "lazy": true,
      "include-all": true,
      "hidden": true,
      "filter": "(?i)🇨🇳|🇹🇼|台湾|(\b(TW|Tai|Taiwan)\b)",
      "icon": "https://gh-proxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/China.png"
    },
    {
      ...groupBaseOption,
      "name": "Japan",
      "type": "select",
      "proxies": ["JP-Auto", "JP-FallBack", "JP-LoadBalance"],
      "include-all": true,
      "filter": "(?i)🇯🇵|日本|东京|(\b(JP|Japan)\b)",
      "icon": "https://gh-proxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Japan.png"
    },
    {
      ...groupBaseOption,
      "name": "JP-Auto",
      "type": "url-test",
      "tolerance": 50,
      "lazy": true,
      "include-all": true,
      "hidden": true,
      "filter": "(?i)🇯🇵|日本|东京|(\b(JP|Japan)\b)",
      "icon": "https://gh-proxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Japan.png"
    },
    {
      ...groupBaseOption,
      "name": "JP-FallBack",
      "type": "fallback",
      "lazy": true,
      "include-all": true,
      "hidden": true,
      "filter": "(?i)🇯🇵|日本|东京|(\b(JP|Japan)\b)",
      "icon": "https://gh-proxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Japan.png"
    },
    {
      ...groupBaseOption,
      "name": "JP-LoadBalance",
      "type": "load-balance",
      "lazy": true,
      "include-all": true,
      "hidden": true,
      "filter": "(?i)🇯🇵|日本|东京|(\b(JP|Japan)\b)",
      "icon": "https://gh-proxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Japan.png"
    },
    {
      ...groupBaseOption,
      "name": "Singapore",
      "type": "select",
      "proxies": ["SG-Auto", "SG-FallBack", "SG-LoadBalance"],
      "include-all": true,
      "filter": "(?i)🇸🇬|新加坡|狮|(\b(SG|Singapore)\b)",
      "icon": "https://gh-proxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Singapore.png"
    },
    {
      ...groupBaseOption,
      "name": "SG-Auto",
      "type": "url-test",
      "tolerance": 50,
      "lazy": true,
      "include-all": true,
      "hidden": true,
      "filter": "(?i)🇸🇬|新加坡|狮|(\b(SG|Singapore)\b)",
      "icon": "https://gh-proxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Singapore.png"
    },
    {
      ...groupBaseOption,
      "name": "SG-FallBack",
      "type": "fallback",
      "lazy": true,
      "include-all": true,
      "hidden": true,
      "filter": "(?i)🇸🇬|新加坡|狮|(\b(SG|Singapore)\b)",
      "icon": "https://gh-proxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Singapore.png"
    },
    {
      ...groupBaseOption,
      "name": "SG-LoadBalance",
      "type": "load-balance",
      "lazy": true,
      "include-all": true,
      "hidden": true,
      "filter": "(?i)🇸🇬|新加坡|狮|(\b(SG|Singapore)\b)",
      "icon": "https://gh-proxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Singapore.png"
    },
    {
      ...groupBaseOption,
      "name": "America",
      "type": "select",
      "proxies": ["US-Auto", "US-FallBack", "US-LoadBalance"],
      "include-all": true,
      "filter": "(?i)🇺🇸|美国|洛杉矶|圣何塞|(\b(US|United States)\b)",
      "icon": "https://gh-proxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/United_States.png"
    },
    {
      ...groupBaseOption,
      "name": "US-Auto",
      "type": "url-test",
      "tolerance": 50,
      "lazy": true,
      "include-all": true,
      "hidden": true,
      "filter": "(?i)🇺🇸|美国|洛杉矶|圣何塞|(\b(US|United States)\b)",
      "icon": "https://gh-proxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/United_States.png"
    },
    {
      ...groupBaseOption,
      "name": "US-FallBack",
      "type": "fallback",
      "lazy": true,
      "include-all": true,
      "hidden": true,
      "filter": "(?i)🇺🇸|美国|洛杉矶|圣何塞|(\b(US|United States)\b)",
      "icon": "https://gh-proxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/United_States.png"
    },
    {
      ...groupBaseOption,
      "name": "US-LoadBalance",
      "type": "load-balance",
      "lazy": true,
      "include-all": true,
      "hidden": true,
      "filter": "(?i)🇺🇸|美国|洛杉矶|圣何塞|(\b(US|United States)\b)",
      "icon": "https://gh-proxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/United_States.png"
    },
    {
      ...groupBaseOption,
      "name": "AllServer",
      "type": "select",
      "proxies": ["All-Auto"],
      "include-all": true,
      "filter": "(?=.*(.))(?!.*((?i)群|邀请|返利|循环|官网|客服|网站|网址|获取|订阅|流量|到期|机场|下次|版本|官址|备用|过期|已用|联系|邮箱|工单|贩卖|通知|倒卖|防止|国内|地址|频道|无法|说明|使用|提示|特别|访问|支持|教程|关注|更新|作者|加入|(\b(USE|USED|TOTAL|Traffic|Expire|EMAIL|Panel|Channel|Author)\b|(\d{4}-\d{2}-\d{2}|\d+G)))).*$",
      "icon": "https://gh-proxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Airport.png"
    },
    {
      ...groupBaseOption,
      "name": "All-Auto",
      "type": "url-test",
      "tolerance": 50,
      "lazy": true,
      "include-all": true,
      "hidden": true,
      "filter": "(?=.*(.))(?!.*((?i)群|邀请|返利|循环|官网|客服|网站|网址|获取|订阅|流量|到期|机场|下次|版本|官址|备用|过期|已用|联系|邮箱|工单|贩卖|通知|倒卖|防止|国内|地址|频道|无法|说明|使用|提示|特别|访问|支持|教程|关注|更新|作者|加入|(\b(USE|USED|TOTAL|Traffic|Expire|EMAIL|Panel|Channel|Author)\b|(\d{4}-\d{2}-\d{2}|\d+G)))).*$",
      "icon": "https://gh-proxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Airport.png"
    }
  ];

  // 覆盖规则集
  config["rule-providers"] = {
    "private-domain": {
      ...ruleProviderCommon,
      "behavior": "domain",
      "url": "https://gh-proxy.com/https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/private.mrs",
      "path": "./rules/private-domain.mrs",
      "type": "http",
      "format": "mrs",
      "interval": 86400
    },
    "private-ip": {
      ...ruleProviderCommon,
      "behavior": "ipcidr",
      "url": "https://gh-proxy.com/https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/private.mrs",
      "path": "./rules/private-ip.mrs",
      "type": "http",
      "format": "mrs",
      "interval": 86400
    },
    "ai-domain": {
      ...ruleProviderCommon,
      "behavior": "domain",
      "url": "https://gh-proxy.com/https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/category-ai-!cn.mrs",
      "path": "./rules/ai-domain.mrs",
      "type": "http",
      "format": "mrs",
      "interval": 86400
    },
    "youtube-domain": {
      ...ruleProviderCommon,
      "behavior": "domain",
      "url": "https://gh-proxy.com/https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/youtube.mrs",
      "path": "./rules/youtube-domain.mrs",
      "type": "http",
      "format": "mrs",
      "interval": 86400
    },
    "netflix-domain": {
      ...ruleProviderCommon,
      "behavior": "domain",
      "url": "https://gh-proxy.com/https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/netflix.mrs",
      "path": "./rules/netflix-domain.mrs",
      "type": "http",
      "format": "mrs",
      "interval": 86400
    },
    "netflix-ip": {
      ...ruleProviderCommon,
      "behavior": "ipcidr",
      "url": "https://gh-proxy.com/https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/netflix.mrs",
      "path": "./rules/netflix-ip.mrs",
      "type": "http",
      "format": "mrs",
      "interval": 86400
    },
    "emby-classical": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://gh-proxy.com/https://raw.githubusercontent.com/Coldvvater/Mononoke/master/Clash/Rules/Emby.list",
      "path": "./rules/emby-classical.list",
      "type": "http",
      "format": "text",
      "interval": 86400
    },
    "tiktok-domain": {
      ...ruleProviderCommon,
      "behavior": "domain",
      "url": "https://gh-proxy.com/https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/tiktok.mrs",
      "path": "./rules/tiktok-domain.mrs",
      "type": "http",
      "format": "mrs",
      "interval": 86400
    },
    "bahamut-domain": {
      ...ruleProviderCommon,
      "behavior": "domain",
      "url": "https://gh-proxy.com/https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/bahamut.mrs",
      "path": "./rules/bahamut-domain.mrs",
      "type": "http",
      "format": "mrs",
      "interval": 86400
    },
    "biliintl-domain": {
      ...ruleProviderCommon,
      "behavior": "domain",
      "url": "https://gh-proxy.com/https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/biliintl.mrs",
      "path": "./rules/biliintl-domain.mrs",
      "type": "http",
      "format": "mrs",
      "interval": 86400
    },
    "bilibili-domain": {
      ...ruleProviderCommon,
      "behavior": "domain",
      "url": "https://gh-proxy.com/https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/bilibili.mrs",
      "path": "./bilibili-domain.mrs",
      "type": "http",
      "format": "mrs",
      "interval": 86400
    },
    "bilibili-ip": {
      ...ruleProviderCommon,
      "behavior": "ipcidr",
      "url": "https://gh-proxy.com/https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo-lite/geoip/bilibili.mrs",
      "path": "./bilibili-ip.mrs",
      "type": "http",
      "format": "mrs",
      "interval": 86400
    },
    "spotify-domain": {
      ...ruleProviderCommon,
      "behavior": "domain",
      "url": "https://gh-proxy.com/https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/spotify.mrs",
      "path": "./rules/spotify-domain.mrs",
      "type": "http",
      "format": "mrs",
      "interval": 86400
    },
    "proxymedia-classical": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://gh-proxy.com/https://raw.githubusercontent.com/Coldvvater/Mononoke/master/Clash/Rules/ProxyMedia.list",
      "path": "./rules/proxymedia-classical.list",
      "type": "http",
      "format": "text",
      "interval": 86400
    },
    "wechat-classical": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://gh-proxy.com/https://raw.githubusercontent.com/Coldvvater/Mononoke/master/Clash/Rules/WeChat.list",
      "path": "./rules/wechat-classical.list",
      "type": "http",
      "format": "text",
      "interval": 86400
    },
    "telegram-domain": {
      ...ruleProviderCommon,
      "behavior": "domain",
      "url": "https://gh-proxy.com/https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/telegram.mrs",
      "path": "./rules/telegram-domain.mrs",
      "type": "http",
      "format": "mrs",
      "interval": 86400
    },
    "telegram-ip": {
      ...ruleProviderCommon,
      "behavior": "ipcidr",
      "url": "https://gh-proxy.com/https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/telegram.mrs",
      "path": "./rules/telegram-ip.mrs",
      "type": "http",
      "format": "mrs",
      "interval": 86400
    },
    "github-domain": {
      ...ruleProviderCommon,
      "behavior": "domain",
      "url": "https://gh-proxy.com/https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/github.mrs",
      "path": "./rules/github-domain.mrs",
      "type": "http",
      "format": "mrs",
      "interval": 86400
    },
    "twitter-domain": {
      ...ruleProviderCommon,
      "behavior": "domain",
      "url": "https://gh-proxy.com/https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/twitter.mrs",
      "path": "./rules/twitter-domain.mrs",
      "type": "http",
      "format": "mrs",
      "interval": 86400
    },
    "twitter-ip": {
      ...ruleProviderCommon,
      "behavior": "ipcidr",
      "url": "https://gh-proxy.com/https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/twitter.mrs",
      "path": "./rules/twitter-ip.mrs",
      "type": "http",
      "format": "mrs",
      "interval": 86400
    },
    "apple-classical": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://gh-proxy.com/https://raw.githubusercontent.com/Coldvvater/Mononoke/master/Clash/Rules/AppleProxyService.list",
      "path": "./rules/apple-classical.list",
      "type": "http",
      "format": "text",
      "interval": 86400
    },
    "apple-domain": {
      ...ruleProviderCommon,
      "behavior": "domain",
      "url": "https://gh-proxy.com/https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/apple.mrs",
      "path": "./rules/apple-domain.mrs",
      "type": "http",
      "format": "mrs",
      "interval": 86400
    },
    "apple-ip": {
      ...ruleProviderCommon,
      "behavior": "ipcidr",
      "url": "https://gh-proxy.com/https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo-lite/geoip/apple.mrs",
      "path": "./rules/apple-ip.mrs",
      "type": "http",
      "format": "mrs",
      "interval": 86400
    },
    "google-domain": {
      ...ruleProviderCommon,
      "behavior": "domain",
      "url": "https://gh-proxy.com/https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/google.mrs",
      "path": "./rules/google-domain.mrs",
      "type": "http",
      "format": "mrs",
      "interval": 86400
    },
    "google-ip": {
      ...ruleProviderCommon,
      "behavior": "ipcidr",
      "url": "https://gh-proxy.com/https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/google.mrs",
      "path": "./rules/google-ip.mrs",
      "type": "http",
      "format": "mrs",
      "interval": 86400
    },
    "microsoft-domain": {
      ...ruleProviderCommon,
      "behavior": "domain",
      "url": "https://gh-proxy.com/https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/microsoft.mrs",
      "path": "./rules/microsoft-domain.mrs",
      "type": "http",
      "format": "mrs",
      "interval": 86400
    },
    "games-domain": {
      ...ruleProviderCommon,
      "behavior": "domain",
      "url": "https://gh-proxy.com/https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/category-games.mrs",
      "path": "./rules/games-domain.mrs",
      "type": "http",
      "format": "mrs",
      "interval": 86400
    },
    "cn-domain": {
      ...ruleProviderCommon,
      "behavior": "domain",
      "url": "https://gh-proxy.com/https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/cn.mrs",
      "path": "./rules/cn-domain.mrs",
      "type": "http",
      "format": "mrs",
      "interval": 86400
    },
    "proxy-domain": {
      ...ruleProviderCommon,
      "behavior": "domain",
      "url": "https://gh-proxy.com/https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/geolocation-!cn.mrs",
      "path": "./rules/proxy-domain.mrs",
      "type": "http",
      "format": "mrs",
      "interval": 86400
    }
  };

  // 覆盖规则
  config["rules"] = [
    "DOMAIN,clash.razord.top,DIRECT",
    "DOMAIN,yacd.metacubex.one,DIRECT",
    "DOMAIN,yacd.haishan.me,DIRECT",
    "DOMAIN,d.metacubex.one,DIRECT",
    "DOMAIN,board.zash.run.place,DIRECT",
    "RULE-SET,private-domain,DIRECT",
    "RULE-SET,ai-domain,AI",
    "RULE-SET,youtube-domain,YouTube",
    "RULE-SET,netflix-domain,NETFLIX",
    "RULE-SET,emby-classical,Emby",
    "RULE-SET,tiktok-domain,TikTok",
    "RULE-SET,bahamut-domain,TaiWan",
    "RULE-SET,biliintl-domain,Streaming",
    "RULE-SET,bilibili-domain,bilibili",
    "RULE-SET,spotify-domain,Spotify",
    "RULE-SET,proxymedia-classical,Streaming",
    "RULE-SET,wechat-classical,DIRECT",
    "RULE-SET,telegram-domain,Telegram",
    "RULE-SET,github-domain,Proxy",
    "RULE-SET,twitter-domain,X",
    "RULE-SET,apple-classical,America",
    "RULE-SET,apple-domain,Apple",
    "RULE-SET,google-domain,Google",
    "RULE-SET,microsoft-domain,Microsoft",
    "RULE-SET,games-domain,Games",
    "RULE-SET,proxy-domain,Proxy",
    "RULE-SET,google-ip,Google",
    "RULE-SET,netflix-ip,NETFLIX",
    "RULE-SET,telegram-ip,Telegram",
    "RULE-SET,twitter-ip,X",
    "RULE-SET,cn-domain,DIRECT",
    "RULE-SET,bilibili-ip,bilibili",
    "RULE-SET,apple-ip,Apple",
    "RULE-SET,private-ip,DIRECT",
    "GEOIP,cn,DIRECT",
    "MATCH,Final"
  ];

  // 返回修改后的配置
  return config;
}
