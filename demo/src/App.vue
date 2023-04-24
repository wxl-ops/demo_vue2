<template lang='pug'>
//- #webgl(style="margin-top: 200px; margin-left: 100px")
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Stats from "stats.js";
export default {
  name: "App",
  components: {},
  // mounted() {
  //   /**
  //    * 使用new THREE.Scene()创建3D场景
  //    * 使用new THREE.BoxGeometry(100, 100, 100);创建物体几何对象
  //    * 使用new THREE.MeshLambertMaterial({color: 0x0000ff,transparent: true,opacity: 0.5});创建材质
  //    * 使用new THREE.Mesh(geometry, material);把材质和几何对象打在一起。
  //    * 使用mesh.position.set(100, 600, 0);设置几何对象在场景中的位置。
  //    * 使用scene.add(mesh);把模型加入3D场景。
  //    *
  //    */
  //   // 创建3D场景对象Scene
  //   const scene = new THREE.Scene();
  //   //创建一个长方体几何对象Geometry
  //   const geometry = new THREE.BoxGeometry(100, 100, 100);
  //   //创建一个材质对象Material
  //   // const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  //   // const material = new THREE.MeshBasicMaterial({
  //   //   color: 0x0000ff,
  //   //   transparent: true, //开启透明
  //   //   opacity: 0.5, //设置透明度
  //   // });
  //   //MeshLambertMaterial受光照影响
  //   const material = new THREE.MeshLambertMaterial({
  //     color: 0x0000ff,
  //     // transparent: true, //开启透明
  //     // opacity: 0.5, //设置透明度
  //   });
  //   // 两个参数分别为几何体geometry、材质material
  //   const mesh = new THREE.Mesh(geometry, material);
  //   //设置网格模型在三维空间中的位置坐标，默认是坐标原点
  //   // mesh.position.set(0, 10, 0);
  //   mesh.position.set(100, 0, 0);
  //   scene.add(mesh);

  //   /**
  //    * 直观感受性能测试
  //    */
  //   //随机创建大量的模型，测试渲染性能
  //   // const num = 1000; //控制长方体模型数量
  //   // for (let i = 0; i < num; i++) {
  //   //   const geometry = new THREE.BoxGeometry(5, 5, 5);
  //   //   const material = new THREE.MeshLambertMaterial({
  //   //     color: 0x00ffff,
  //   //   });
  //   //   const mesh = new THREE.Mesh(geometry, material);
  //   //   //随机生成长方体xyz坐标
  //   //   const x = (Math.random() - 0.5) * 200;
  //   //   const y = (Math.random() - 0.5) * 200;
  //   //   const z = (Math.random() - 0.5) * 200;
  //   //   mesh.position.set(x, y, z);
  //   //   scene.add(mesh);
  //   // }

  //   /**
  //    * 设置画布宽高
  //    * 使用new THREE.PerspectiveCamera(30, width / height, 1, 3000);设置透视投影相机。
  //    * 使用camera.position.set(600, 300, 200);设置相机位置
  //    * 使用camera.lookAt(mesh.position); 设置相机面向的位置
  //    * 使用new THREE.AxesHelper(150);创建辅助观察坐标系
  //    * 使用scene.add(axesHelper);将坐标系加入3D场景
  //    */
  //   // 实例化一个透视投影相机对象
  //   // const camera = new THREE.PerspectiveCamera();
  //   // width和height用来设置Three.js输出的Canvas画布尺寸(像素px)
  //   // const width = 800;
  //   // const height = 500;
  //   // 全屏渲染,width和height用来设置Three.js输出的Canvas画布尺寸(像素px)
  //   const width = window.innerWidth; //窗口文档显示区的宽度作为画布宽度
  //   const height = window.innerHeight; //窗口文档显示区的高度作为画布高度
  //   // 30:视场角度, width / height:Canvas画布宽高比, 1:近裁截面, 3000：远裁截面
  //   // const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);
  //   const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);
  //   //相机在Three.js三维坐标系中的位置
  //   // 根据需要设置相机位置具体值
  //   camera.position.set(600, 300, 200);
  //   // camera.position.set(-1000, 0, 200);
  //   //相机观察目标指向Threejs 3D空间中某个位置
  //   // camera.lookAt(0, 0, 0); //坐标原点
  //   // camera.lookAt(0, 10, 0); //y轴上位置10
  //   camera.lookAt(mesh.position); //指向mesh对应的位置
  //   // AxesHelper：辅助观察的坐标系
  //   const axesHelper = new THREE.AxesHelper(150);
  //   // 把坐标系加入3D场景，红X轴绿Y轴蓝Z轴
  //   scene.add(axesHelper);

  //   /**
  //    * 使用new THREE.PointLight(0xffffff, 1.0);创建点光源。
  //    * 使用pointLight.position.set(-500, -200, -300);设置点光源位置。
  //    * 使用new THREE.PointLightHelper(pointLight, 10);在画布中显示出光源位置。
  //    */
  //   //点光源：两个参数分别表示光源颜色和光照强度
  //   // 参数1：0xffffff是纯白光,表示光源颜色
  //   // 参数2：1.0,表示光照强度，可以根据需要调整
  //   const pointLight = new THREE.PointLight(0xffffff, 0.6);
  //   // 点光源位置
  //   pointLight.position.set(50, -100, -100);
  //   // 点光源添加到场景中
  //   scene.add(pointLight);
  //   //光源辅助观察
  //   const pointLightHelper = new THREE.PointLightHelper(pointLight, 10);
  //   scene.add(pointLightHelper);

  //   //环境光：没有特定方向，整体改变场景的光照明暗
  //   const ambient = new THREE.AmbientLight(0xffffff, 0.4);
  //   scene.add(ambient);

  //   //平行光
  //   const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
  //   // 设置光源的方向：通过光源position属性和目标指向对象的position属性计算
  //   directionalLight.position.set(200, 200, 100);
  //   // 方向光指向对象网格模型mesh，可以不设置，默认的位置是0,0,0
  //   directionalLight.target = mesh;
  //   scene.add(directionalLight);
  //   //平行光辅助光源
  //   scene.add(new THREE.DirectionalLightHelper(directionalLight, 10));

  //   /**
  //    * 使用new THREE.WebGLRenderer();创建渲染器对象
  //    * 使用setSize设置渲染区域宽高
  //    * 使用render渲染
  //    */
  //   // 创建渲染器对象
  //   const renderer = new THREE.WebGLRenderer();
  //   renderer.setSize(width, height); //设置three.js渲染区域的尺寸(像素px)
  //   // renderer.render(scene, camera); //执行渲染操作
  //   //渲染器WebGLRenderer通过属性.domElement可以获得渲染方法.render()生成的Canvas画布，.domElement本质上就是一个HTML元素：Canvas画布。
  //   document.body.appendChild(renderer.domElement);
  //   // document.getElementById("webgl").appendChild(renderer.domElement);

  //   /**
  //    * 设置相机控制器，就可以操作相机位置了。控制器必须在渲染器执行后才可以添加。
  //    * 如果使用了动画渲染就不需要给控制器添加监听事件了，因为动画渲染一直在执行renderer.render(scene, camera);
  //    */
  //   // // 设置相机控件轨道控制器OrbitControls
  //   // const controls = new OrbitControls(camera, renderer.domElement);
  //   // // 如果OrbitControls改变了相机参数，重新调用渲染器渲染三维场景
  //   // controls.addEventListener("change", function () {
  //   //   renderer.render(scene, camera); //执行渲染操作
  //   // }); //监听鼠标、键盘事件
  //   // 因为使用了动画渲染，不需要监听事件了
  //   new OrbitControls(camera, renderer.domElement);

  //   /**
  //    * 动画渲染
  //    * 使用stats查看渲染帧率
  //    */
  //   // requestAnimationFrame实现周期性循环执行
  //   // requestAnimationFrame默认每秒钟执行60次，但不一定能做到，要看代码的性能
  //   // 计算两帧渲染时间间隔和帧率
  //   const clock = new THREE.Clock();
  //   //创建stats对象
  //   const stats = new Stats();
  //   stats.setMode(0);
  //   document.body.appendChild(stats.domElement);
  //   function render() {
  //     const spt = clock.getDelta() * 1000; //毫秒
  //     console.log("两帧渲染时间间隔（毫秒）", spt);
  //     console.log("帧率FPS", 1000 / spt);
  //     stats.update();
  //     renderer.render(scene, camera); //执行渲染操作
  //     mesh.rotateY(0.01); //每次绕y轴旋转0.01弧度
  //     requestAnimationFrame(render); //请求再次执行渲染函数render，渲染下一帧
  //   }
  //   render();
  //   //onresize事件会在窗口被调整大小时发生
  //   window.onresize = function () {
  //     //重置渲染器输出画布canvas尺寸
  //     renderer.setSize(window.innerWidth, window.innerHeight);
  //     //全屏情况下：设置观察范围长宽比aspect为窗口宽高比
  //     camera.aspect = window.innerWidth / window.innerHeight;
  //     // 渲染器执行render方法的时候会读取相机对象的投影矩阵属性projectionMatrix
  //     // 但是不会每渲染一帧，就通过相机的属性计算投影矩阵(节约计算资源)
  //     // 如果相机的一些属性发生了变化，需要执行updateProjectionMatrix ()方法更新相机的投影矩阵
  //     camera.updateProjectionMatrix();
  //   };
  // },
  mounted() {
    //创建3D场景
    const scene = new THREE.Scene();
    // //for循环创建一列模型,长方体,60帧
    // const geometry = new THREE.BoxGeometry(100, 100, 100);
    // //for循环创建一列模型,圆柱体,20帧
    // const geometry = new THREE.CylinderGeometry(100, 100, 100);
    // //for循环创建一列模型,球体,5帧
    // const geometry = new THREE.SphereGeometry(100, 100, 100);
    // //for循环创建一列模型,圆锥,18帧
    // const geometry = new THREE.ConeGeometry(100, 100, 100);
    // //for循环创建一列模型,矩形平面,30帧
    // const geometry = new THREE.PlaneGeometry(100, 100, 100);
    //for循环创建一列模型,圆平面,20帧
    const geometry = new THREE.CircleGeometry(100, 100, 100);
    //材质对象Material
    const material = new THREE.MeshLambertMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.5,
      // 是否双面可见,默认单面可见
      side: THREE.DoubleSide,
    });
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const mesh = new THREE.Mesh(geometry, material); //网络模型对象Mesh
        //沿着x轴分布
        mesh.position.set(i * 200, 0, j * 200);
        scene.add(mesh); //网格模型添加到场景中
      }
    }
    const width = window.innerWidth;
    const height = window.innerHeight;
    // const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);
    // camera.position.set(800, 800, 800);
    // camera.lookAt(0, 0, 0);
    const camera = new THREE.PerspectiveCamera(30, width / height, 1, 8000);
    camera.position.set(2000, 2000, 2000);
    camera.lookAt(1000, 0, 1000);
    const pointLight = new THREE.PointLight(0xffffff, 1.0);
    pointLight.position.set(800, 800, 800);
    scene.add(pointLight);
    const pointLightHelper = new THREE.PointLightHelper(pointLight, 10);
    scene.add(pointLightHelper);
    const ambient = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambient);
    const axesHelper = new THREE.AxesHelper(150);
    scene.add(axesHelper);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    document.body.appendChild(renderer.domElement);
    //注意相机控件OrbitControls会影响lookAt设置，注意手动设置OrbitControls的目标参数
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(1000, 0, 1000);
    controls.update();
    const stats = new Stats();
    document.body.appendChild(stats.domElement);
    stats.setMode(0);
    function render() {
      stats.update();
      renderer.render(scene, camera);
      console.log("camera.position", camera.position);
      requestAnimationFrame(render);
    }
    render();
    window.onresize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
  },
};
</script>

<style>
body {
  overflow: hidden;
  margin: 0;
}
</style>
