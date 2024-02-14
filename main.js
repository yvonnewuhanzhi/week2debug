import './style.css'
import * as THREE from 'three'
import { centerPlanet,ring } from './addMeshes'


const renderer = new THREE.WebGLRenderer()
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100
)
const scene = new THREE.Scene()

const meshes = {}

const clock = new THREE.Clock() //clock
// scene.background = new THREE.Color(0xaaccd8);

// 创建背景图
// const textureLoader = new THREE.TextureLoader();
// textureLoader.load('/textures/black.webp', function (texture) {
//     // 将加载的纹理应用到场景的背景中
//     scene.background = texture;
// });


init()

//setup
function init() {
    // 设置渲染器的默认设置，并将场景/画布添加到网页中
    renderer.setSize(window.innerWidth, window.innerHeight)
    //将这个 <canvas> 元素添加到了当前文档的 <body> 元素中
    document.body.appendChild(renderer.domElement)

    meshes.center = centerPlanet()
    meshes.ring=ring()
    
    scene.add(meshes.center)
    scene.add(meshes.ring)


    camera.position.set(0, 0, 5)
    resize()
    animate()
}

//当屏幕resize后，物体随之变大变小
function resize() {
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight)
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
    })
}

function animate() {
    requestAnimationFrame(animate)

    const tick = clock.getElapsedTime()
    // 对于每个物体，设置大小的动画
    Object.values(meshes).forEach((mesh) => {
        let scale = Math.sin(tick)*0.1 + 0.5 // 将值限制在 0.5 到 1.5 之间
        scale = Math.max(scale, 0.5) // 确保缩放不小于 0.5
        mesh.scale.set(scale, scale, scale)
    })

    meshes.ring.rotation.x += 0.01;
    meshes.ring.rotation.y -= 0.01;
    // meshes.ring.rotation.z += 0.01;


    // 渲染场景
    renderer.render(scene, camera)
}
