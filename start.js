//变量
let v = 0;

//常量
const fullname = `wangjiale`;
console.log(fullname);
const user = {
  name: "vue3",
  age: 9,
};
console.log(user);

//字符串
let str1 = "wangjiale"; //普通字符串
let str2 = `wang
jia
le`; //模板字符串
let age = 17;
let ret = `${fullname}'s age is ${age}, you are ${age > 18 ? "an adult" : "not an adult"}`; //可嵌入表达式
console.log(ret);

//对象
const school = {
  schoolName: "Fudan School",
  location: "Shanghai",
};
//点取值
console.log(school.schoolName);
console.log(school.location);
//中括号取值
let schoolName = "schoolName";
let location = "location";
console.log(school[schoolName]);
console.log(school[location]);
//属性名和属性值一样时，可以简写
let min = 1;
let max = 2;
const obj = {
  min,
  max,
};
console.log(obj.min + obj.max);

//方法
let fn1 = {
  fn: function () {
    console.log("fn1");
  },
};
let fn2 = {
  fn() {
    console.log("fn2"); // : 和 funciton 可以省略
  },
};

//解构赋值
//数组解构
const arr = [11, 22, 33];
let [a, b, c] = arr; //分别赋值
let [, d, e] = arr; //跳过赋值
let [f, ...subArr] = arr; //把剩下的部分都付给subStr
console.log(a);
console.log(e);
console.log(subArr);
//对象解构
let info = {
  brand: "lenevo",
  system: "Windows11 enterprise ltsc",
  memory: "32GB",
};
let { brand, system } = info; //直接将对象属性结构到同名变量
let { brand: brand1, ...machineInfo } = info; //将单个获取的属性之外的属性全部放到另一个对象中
let { system: WindowsEdition } = info; //将对象属性解包到非同名变量
console.log(brand + " " + system);
console.log(brand1);
console.log(machineInfo);
console.log(WindowsEdition);
//==============
const array = [2, [3, 4], 5];
let [, subArray] = array;
let [val1, val2] = subArray;
console.log(val1);
console.log(val2);
//==============
const obj2 = {
  data: {
    code: 10000,
    message: "频道列表获取成功",
    result: ["HTML", "CSS", "JavaScript", "Vue", "SprintBoot"],
  },
  status: 200,
  statusText: "Ok",
};
let { data } = obj2;
let { code } = data;
let { message } = data;
let { result: list } = data;
console.log(code);
console.log(message);
console.log(list);

//箭头函数
//当参数只有一个，可以省略小括号；当函数体只有一句，可以省略大括号，同时函数体语句自带return
const state = (user) => ({
  user: user,
  age: 19,
});
console.log(state("wjl"));
//可以用于设置回调
setTimeout(() => console.log("wake up"), 200);

//数组
let arr1 = [1, 2, 3];
arr1.push(4); //尾插
arr1.unshift(0); //头插
console.log(arr1);
arr1.pop(); //尾删
arr1.shift(); //头删
console.log(arr1);
arr1.splice(1, 2); //从1开始删两个
console.log(arr1);
arr1.splice(1, 0, 2, 3); //从1开始，删零个，增添2、3
console.log(arr1);
console.log(arr1.includes(4)); //查看是否包含某个元素
console.log(arr1.includes(1));

//遍历
//arr1.forEach((item, index, array) => {})
let sum = 0;
arr1.forEach((item) => {
  sum += item;
});
console.log(sum);

//过滤
arr1.push(4);
arr1.push(5);
let evens = arr1.filter((item) => {
  if (item % 2 == 0) return true;
  else return false;
});
console.log(evens);
let odds = arr1.filter((item) => {
  if (item % 2 == 0) return false;
  else return true;
});
console.log(odds);

//map，由一个数组得到另一个数组，并且两者元素存在一一对应关系
let doubledArr1 = arr1.map((item) => {
  return item * 2;
});
console.log(doubledArr1);
let kvs = [
  { index: 0, value: 1 },
  { index: 1, value: 2 },
  { index: 2, value: 3 },
  { index: 3, value: 4 },
  { index: 4, value: 5 },
];
let result = arr1.map((item, index) => ({
  index: index,
  value: item,
}));
console.log(result);

// 检测每一个，返回true，继续下一个；返回 false，结束并返回false
let isEven = evens.every((item) => {
  return item % 2 == 0;
});
console.log(isEven);

// 汇总
// arr1.reduce(prev, item, index, array) => {}, initValue)
let sumArr1 = arr1.reduce((prev, item) => {
  return prev + item;
}, 0);
console.log(arr1);
console.log(sumArr1);

//对象的重要方法
//Object.keys 获取所有属性名
let obj3 = {
  id: 1,
  name: "zhangsan",
  gender: "male",
  address: "Shanghai, China",
};
let keys = Object.keys(obj3);
console.log(keys);
Object.keys(obj3).forEach((item) => {
  console.log(obj3[item]);
});
//扩展运算符
let arrSrc = [1, 2, 3]; //复制对象或数组
let arrDst = [...arrSrc];
arrSrc.push(4);
console.log(arrSrc);
console.log(arrDst);
let obj4 = { ...obj3 };
console.log(obj4);
let arrBigger = [...arrSrc, ...arrDst]; //合并数组或对象（对象的同名属性会覆盖）
let objBigger = { ...obj3, ...obj4 };
console.log(arrBigger);
console.log(objBigger);

//序列化和反序列化
let raw = {
  id: 1,
  name: "lisi",
  age: 19,
};
let jsonStr = JSON.stringify(raw);
console.log(jsonStr);
let rawParsed = JSON.parse(jsonStr);
console.log(rawParsed);

//Web 存储（sessionStorage，localStorage，仅浏览器环境可用，Node.js 没有）
/*localStorage.setItem("user", "wangwu");
let user1 = localStorage.getItem("user");
localStorage.removeItem("user");
console.log(user1);*/

//Promise，是一个类，用来包装异步操作
const p = new Promise((resolve, reject) => {
  resolve("ok");
  reject("err");
});
setTimeout(() => {console.log("wake up!")}, 10000)
p.then(
  (msg) => {
    console.log(msg);
  },
);
//链式调用
function delay(duration, n){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(n)
        }, duration)
    })
}
console.log("before")
delay(100, 1)
    .then(n1 => {
        console.log(n1)
        return delay(100, 2)
    })
    .then(n2 => {
        console.log(n2)
    })

//1. 有 await 修饰的Promise对象，返回的内容是 resolve 的参数
//2. await 所在函数必须被 async 修饰
//3. async 函数内，await 按照同步的方式执行
async function log(){
    const n1 = await delay(10000, 1)
    console.log(n1)
    const n2 = await delay(10000, 2)
    console.log(n2)
}
log()