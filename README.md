# React-responsive-message-popup
炫酷动画效果的弹窗，因react是单页面渲染，将弹窗直接挂载到body其他dom上，因此可以在你任何组件时都可以将弹窗弹出

效果图:

![image](https://user-images.githubusercontent.com/83505101/161192783-36f614d9-5e1b-45a9-8229-b2c1200314e0.png)


实现原理：

  1, 在模板html文件中新增一个div元素用于挂载你的弹窗，并且设置样式，让元素脱离文档流
  
  ![image](https://user-images.githubusercontent.com/83505101/161191162-1825d268-64e6-42a0-8b60-f6c6ee4b0d91.png)
  ![image](https://user-images.githubusercontent.com/83505101/161191346-4c558bef-9e1c-4a65-8e47-24d8914b962b.png)

  2, 在react hooks中，因hooks会产生闭包setInterval是一个大坑,其中我使用的解决方案是再创建一个hooks用于跑setInterval
  
  ![image](https://user-images.githubusercontent.com/83505101/161191556-35a83ca6-ea2f-4f71-8d51-e4d9fb6212ec.png)

  3, 挂载组件
  
  ![image](https://user-images.githubusercontent.com/83505101/161191697-6563aebb-fb76-4f3e-a7a8-0a40895465ff.png)
