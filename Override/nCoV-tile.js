name: 疫情日报
desc: 用于显示当前疫情动态

tiles:
  - name: nCov-tile
    interval: 1800
    title: '疫情日报'
    content: ''
    icon: 'aqi.medium'
    backgroundColor: '#318BD5'

script-providers:
  nCov-tile:
    url: https://raw.githubusercontent.com/Peng-YM/QuanX/master/Tasks/nCov.js
    interval: 86400
