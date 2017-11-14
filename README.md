# Hello_vue
vue2 + vue-router3 + vuex3 + webpack2

## 项目运行（nodejs 6.0+）
``` bash
# 克隆到本地
git clone https://github.com/Vinkugor/hello_vue.git

# 进入文件夹
cd hello_vue

# 安装依赖
npm install

# 开启本地服务器localhost:8080
npm run dev

# 发布环境
npm run build
```

## 项目结构
```
src
├── App.vue
├── assets
│   └── logo.png
├── main.js
├── request-config.js
├── router-config.js
├── store
│   ├── global
│   │   ├── actions.js
│   │   ├── getters.js
│   │   ├── mutations.js
│   │   └── state.js
│   ├── modules
│   ├── index.js
│   └── types.js
└── views
    ├── 404.vue
    ├── index.vue
    └── profile.vue
```
