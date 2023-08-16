import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// group objects to manipulate together
const group = new THREE.Group()
scene.add(group)

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "white" })
)

group.add(cube1)

// POSITION
mesh.position.x = 0.7
mesh.position.y = 1
mesh.position.set(1, 2, -3) // change values of x, y, z all at once
console.log(mesh.position.length()) // distance between object and center of scene
mesh.position.normalize() // take vector length and reduce to 1

// AXES HELPER
const axesHelper = new THREE.AxesHelper(3) // axes guidelines (leg length)
scene.add(axesHelper)

// SCALE
mesh.scale.x = 3

// ROTATE

// euler
mesh.rotation.reorder('YXZ') // change rotation order (eg. FPS game)
mesh.rotation.y = Math.PI // pi = half rotation
mesh.rotation.x = 3

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.set(1, 1, 3)
scene.add(camera)

console.log(mesh.position.distanceTo(camera.position)) // distance between object and camera

camera.lookAt(mesh.position) // look at something

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)