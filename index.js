console.log('Hello')
import './style.css'
import * as BABYLON from 'babylonjs'
const canvas = document.getElementById('renderCanvas')
var img = 'https://res.cloudinary.com/archipicture/image/upload/v1557281843/ca_pano.jpg'

var engine = new BABYLON.Engine(canvas, true)

var createScene = function() {
  var scene = new BABYLON.Scene(engine)
  var camera = new BABYLON.ArcRotateCamera(
    'Camera',
    -Math.PI,
    Math.PI / 2,
    5,
    BABYLON.Vector3.Zero(),
    scene
  )
  camera.attachControl(canvas, true)
  camera.inputs.attached.mousewheel.detachControl(canvas)
  camera.lowerAlphaLimit = 0.83
  camera.upperAlphaLimit = 4.8

  let zoomLevel = 2

  var dome = new BABYLON.PhotoDome(
    'testdome',
    img,
    {
      resolution: 64,
      size: 2000,
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
