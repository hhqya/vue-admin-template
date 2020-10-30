import queryString from "query-string";

const userMap = {
  admin: {
    roles: ["admin"],
    token: "admin",
    introduction: "i am super admin",
    avatar: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3328840230,2654759162&fm=26&gp=0.jpg",
    name: "超级管理员"
  },
  sakuya: {
    roles: ["sakuya"],
    token: "sakuya",
    introduction: "i am 不明真相的吃瓜群众",
    avatar: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3000883454,1217784126&fm=26&gp=0.jpg",
    name: "吃瓜群众"
  },
  pipi:{
    roles: ["pipi"],
    token: 'pipi',
    introduction: "i am 蛇皮怪",
    avatar: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1314621943,1893268318&fm=26&gp=0.jpg",
    name: '蛇皮怪'
  },
  user:{
      roles:["user"],
      token: 'user',
      introduction: 'i am user',
      avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3968294391,2821352806&fm=27&gp=0.jpg',
      name: '普通用户'
  },
    test:{
      roles:["test"],
        token: 'test',
        introduction: '当前账户为测试账号',
        avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=755448589,3168471348&fm=26&gp=0.jpg',
        name: '测试账户'
    }

};

export default {
  loginbyUser: config => {
    let { username } = JSON.parse(config.body);
    let response = {};
    if (username in userMap) {
      response = {
        code: 200,
        data: userMap[username],
        message: "Login success, Welcome"
      };
    } else {
      response = {
        code: 200,
        data: null,
        message: "账号不存在！"
      };
    }
    return response;
  },
  logout: () => {
    return {
      code: 200,
      data: {
        state: 1
      },
      message: "退出成功！"
    };
  },
  info: config => {
    let params = queryString.parse(config.url.replace(/^\S+(?=\?)/, ""));
    let response = {
      code: 200,
      data: userMap[params.username],
      message: "Login success, Welcome"
    };
    return response;
  }
};
