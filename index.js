console.log('Hello')
import './style.css'
import * as BABYLON from 'babylonjs'
const canvas = document.getElementById('renderCanvas')
var img = 'https://res.cloudinary.com/archipicture/image/upload/v1557302160/ca_pano.jpg'

var engine = new BABYLON.Engine(canvas, true)

var createScene = function() {
  var scene = new BABYLON.Scene(engine)
  var camera = new BABYLON.ArcRotateCamera(
    'Camera',
    -Math.PI / 2,
    Math.PI / 2,
    0.5,
    BABYLON.Vector3.Zero(),
    scene
  )
  camera.attachControl(canvas, true)
  camera.inputs.attached.mousewheel.detachControl(canvas)
  camera.lowerAlphaLimit = -1.9
  camera.upperAlphaLimit = 1.2

  let zoomLevel = 2

  var dome = new BABYLON.PhotoDome(
    'testdome',
    img,
    {
      resolution: 32,
      size:15,
      useDirectMapping: false,
    },
    scene
  )

  return scene
}

const scene = createScene()

engine.runRenderLoop(function() {
  scene.render()
})

window.addEventListener('resize', function() {
  engine.resize()
})
