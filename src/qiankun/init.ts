import {
  registerMicroApps, // 注册子应用方法
  setDefaultMountApp, // 设默认启用的子应用
  runAfterFirstMounted, // 有个子应用加载完毕回调
  start, // 启动qiankun
  addGlobalUncaughtErrorHandler,
  MicroApp, // 添加全局未捕获异常处理器
} from "qiankun";

function genActiveRule(routerPrefix: string) {
  //路由监听
  return (location: Location) => location.pathname.startsWith(routerPrefix);
}

export default function startQiankun() {
  const apps = [
    //子应用配置
    {
      name: "admin",
      entry: "//localhost:9528",
      container: "#admin", //将子应用节点挂载到父应用定义id=admin的div上
      activeRule: genActiveRule("/admin"), //路由前缀
      props: { mag: "我是主应用" }, //父应用给子应用传参
    }
  ];

  //注册子应用
  registerMicroApps(apps, {
    beforeLoad: [
      //子应用加载生命周期，下同
      
    ],
    beforeMount: [
    
    ],
    afterUnmount: [
    ],
  });
  // 设置默认子应用
    setDefaultMountApp('/admin');
  // 第一个子应用加载完毕回调
  runAfterFirstMounted(() => {
  });
  // 启动微服务
  start({
    prefetch: "all", //预加载子应用静态资源
  });
  // 设置全局未捕获一场处理器
  addGlobalUncaughtErrorHandler((event) => console.log(event));
}
