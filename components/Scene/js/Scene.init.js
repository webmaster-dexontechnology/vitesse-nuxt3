import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { CopyShader } from 'three/examples/jsm/shaders/CopyShader.js'
import { CSS2DObject, CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js'
import * as THREE from 'three'
// import Stats from 'stats.js'
// import GUI from 'lil-gui'

const flagLabel = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
]

let labelData = []
let labelPosition = []

class SceneInit {
  constructor({ rootEl, autoRotate, modelLabel, customCamPoY, modelLabelId }) {
    this.canvas = document.createElement('canvas')
    this.parent = document.querySelector('#parent')
    this.root = rootEl
    this.width = rootEl.clientWidth
    this.height = rootEl.clientHeight
    this.model = null
    this.background = 0xEEEEEE
    this.customCamPoY = customCamPoY
    this.autoRotate = autoRotate
    this.modelLabel = modelLabel
    this.modelLabelId = modelLabelId

    this.init()
    this.update()
    this.bindEvents()
  }

  init() {
    this.initScene()
    this.initLabel()
    this.initLights()
    this.initCamera()
    this.initRenderer()
    this.initControls()
    this.initPostprocessing()
    this.onResize()
    this.root.appendChild(this.canvas)
  }

  updateAllMaterials() {
    this.scene.traverse((child) => {
      if (
        child instanceof THREE.Mesh
        && child.material instanceof THREE.MeshStandardMaterial
      ) {
        child.material.envMapIntensity = 2.5
        child.material.needsUpdate = true
        child.castShadow = true
        child.receiveShadow = true
      }
    })
  }

  initScene() {
    this.scene = new THREE.Scene()

    const cubeTextureLoader = new THREE.CubeTextureLoader()
    const environmentMap = cubeTextureLoader.load([
      '/texture/bridge/posx.jpg',
      '/texture/bridge/negx.jpg',
      '/texture/bridge/posy.jpg',
      '/texture/bridge/negy.jpg',
      '/texture/bridge/posz.jpg',
      '/texture/bridge/negz.jpg',
    ])
    environmentMap.TextureEncoding = THREE.SRGBColorSpace

    // this.scene.background = environmentMap
    this.scene.environment = environmentMap
    // this.stats = new Stats()

    // this.stats.showPanel(0)
    // document.body.appendChild(this.stats.dom)
    this.follow = document.getElementById(this.modelLabelId)
  }

  initLabel() {
    if (this.modelLabelId === 'UT-Furnace') {
      labelData = [
        'Batteries, Electronics <br>& Data Storage Unit',
        'Ultrasonic Transducers',
        'Brush',
      ]
      labelPosition = [
        [
          1.25,
          3.75,
          1.5,
          (x, y, z) => {
            if (x > 0 && x < Math.PI / 1)
              return true

            else
              return false
          },
        ],
        [
          -0.125,
          -3.25,
          -0.25,
          (x, y, z) => {
            if (y > -1 && y < 1 && x > -3 && x < 0.25)
              return true
            else
              return false
          },
        ],
        [
          -1.25,
          1.5,
          -5.25,
          (x, y, z) => {
            if (z > Math.PI / 1.25)
              return true

            else
              return false
          },
        ],
      ]
    }
    else if (this.modelLabelId === 'UTR') {
      labelData = [
        'Batteries, Electronics <br>& Data Storage Unit',
        'Ultrasonic<br>Transducers',
        'Odometer Sensors',
        'Transmitter',
        'Nose Cone',
        '3 Axis Inertial<br>Measurement Unit',
        'Mux Board',
      ]
      labelPosition = [
        [
          0.9,
          3.6,
          0,
          (x, y, z) => {
            if (x > 0 && x < 1.9)
              return true

            else
              return false
          },
        ],
        [
          6.2,
          -1.1,
          0,
          (x, y, z) => {
            if (x < -0.5)
              return true

            else
              return false
          },
        ],
        [
          -4.5,
          3.3,
          0,
          (x, y, z) => {
            if (x > 0.5)
              return true

            else
              return false
          },
        ],
        [
          -3.7,
          -2.1,
          0,
          (x, y, z) => {
            if (x < 0.5)
              return true

            else
              return false
          },
        ],
        [
          5.9,
          1.25,
          0,
          (x, y, z) => {
            if (x > -0.5)
              return true

            else
              return false
          },
        ],
        [
          0.9,
          -3.2,
          0,
          (x, y, z) => {
            if (x < 0)
              return true

            else
              return false
          },
        ],
        [
          2,
          2,
          1,
          (x, y, z) => {
            if (x > 0 && x < 1.9)
              return true

            else
              return false
          },
        ],
      ]
    }
    else if (this.modelLabelId === 'UT-MC-Octopus') {
      labelData = [
        'Batteries, Electronics <br>& Data Storage Unit',
        'Ultrasonic<br>Transducers',
        'Odometer Sensors',
        'Mechanical Sensor Arms',
        'Nose Cone',
        '3 Axis Inertial<br>Measurement Unit',
        'Mux Board',
      ]
      labelPosition = [
        [
          -1,
          2.6,
          0.25,
          (x, y, z) => {
            if (x > 0 && x < 1)
              return true

            else
              return false
          },
        ],
        [
          4.75,
          -1.1,
          1.5,
          (x, y, z) => {
            if (x < -0.5)
              return true

            else
              return false
          },
        ],
        [
          6.75,
          2.5,
          -1,
          (x, y, z) => {
            if (x > 0.5)
              return true

            else
              return false
          },
        ],
        [
          3.75,
          1,
          1.3,
          (x, y, z) => {
            if (x > 0 && x < 1.9)
              return true

            else
              return false
          },
        ],
        [
          -5.25,
          1,
          0,
          (x, y, z) => {
            if (x > 0.3)
              return true

            else
              return false
          },
        ],
        [
          3.75,
          -2.7,
          0,
          (x, y, z) => {
            if (x < 0)
              return true

            else
              return false
          },
        ],
        [
          3.5,
          2.25,
          -1,
          (x, y, z) => {
            if (x > 0 && x < 1.9)
              return true

            else
              return false
          },
        ],
      ]
    }
    else if (this.modelLabelId === 'UT-MC-Ring') {
      labelData = [
        'Pressure and<br>Temperature Sensors',
        'Ultrasonic<br>Transducers',
        'Nose Cone',
        '3 Axis Inertial<br>Measurement Unit',
        'Odometer Sensors',
        'Batteries, Electronics <br>& Data Storage Unit',
        'Mux Board',
      ]
      labelPosition = [
        // 01
        [
          4,
          2,
          0.25,
          (x, y, z) => {
            if (x > 0 && x < 1)
              return true

            else
              return false
          },
        ],
        // 02
        [
          0,
          -2.2,
          0.2,
          (x, y, z) => {
            if (x < -0.5)
              return true

            else
              return false
          },
        ],
        // 03
        [
          6.7,
          1,
          0.2,
          (x, y, z) => {
            if (x > 0.2)
              return true

            else
              return false
          },
        ],
        // 04
        [
          -4.8,
          -2,
          0,
          (x, y, z) => {
            if (x < 0)
              return true

            else
              return false
          },
        ],
        // 05
        [
          -5.25,
          1.9,
          0,
          (x, y, z) => {
            if (x > 0.3)
              return true

            else
              return false
          },
        ],
        // 06
        [
          3.6,
          -1.9,
          -0.25,
          (x, y, z) => {
            if (x < 0)
              return true

            else
              return false
          },
        ],
        // 07
        [
          0.25,
          1.75,
          -0.2,
          (x, y, z) => {
            if (x > 0.5 && x < 2.5)
              return true

            else
              return false
          },
        ],
      ]
    }
    else if (this.modelLabelId === 'UT-CS-Hawk') {
      labelData = [
        'Pressure and<br>Temperature Sensors',
        'Ultrasonic<br>Transducers',
        'Nose Cone',
        '3 Axis Inertial<br>Measurement Unit',
        'Batteries, Electronics <br>& Data Storage Unit',
        'Mux Board',
      ]
      labelPosition = [
        // 01
        [
          5.75,
          -1.1,
          0.25,
          (x, y, z) => {
            if (x < 1)
              return true

            else
              return false
          },
        ],
        // 02
        [
          -2.15,
          -1.1,
          0.2,
          (x, y, z) => {
            if (x < -0.5)
              return true

            else
              return false
          },
        ],
        // 03
        [
          7.25,
          0.6,
          0.25,
          (x, y, z) => {
            if (x > 0)
              return true

            else
              return false
          },
        ],
        // 04
        [
          1.6,
          -1.25,
          -0.5,
          (x, y, z) => {
            if (x < 0)
              return true

            else
              return false
          },
        ],
        // 05
        [
          5.15,
          1.25,
          -0.3,
          (x, y, z) => {
            if (x > 0.5)
              return true

            else
              return false
          },
        ],
        // 06
        [
          -1.75,
          1,
          -0.2,
          (x, y, z) => {
            if (x > 0.5 && x < 2.5)
              return true

            else
              return false
          },
        ],
      ]
    }
    else if (this.modelLabelId === 'Caliper') {
      labelData = [
        'Batteries, Electronics <br>& Data Storage Unit',
        '3 Axis Inertial<br>Measurement Unit',
        'Nose Cone',
        'Rear Pressure and<br>Temperature Sensors',
        'Caliper Arms',
        'Front Pressure and<br>Temperature Sensors',
        'Odometer Sensors',
      ]
      labelPosition = [
        // 01
        [
          3.75,
          3.25,
          0.25,
          (x, y, z) => {
            if (x > 0 && x < 1)
              return true

            else
              return false
          },
        ],
        // 02
        [
          0,
          -2.2,
          0.2,
          (x, y, z) => {
            if (x < -0.5)
              return true

            else
              return false
          },
        ],
        // 03
        [
          6.35,
          0.5,
          -0.25,
          (x, y, z) => {
            if (x > 1)
              return true

            else
              return false
          },
        ],
        // 04
        [
          -4.8,
          -3,
          0,
          (x, y, z) => {
            if (x < 0)
              return true

            else
              return false
          },
        ],
        // 05
        [
          -5.25,
          2.5,
          0,
          (x, y, z) => {
            if (x > 0.3)
              return true

            else
              return false
          },
        ],
        // 06
        [
          2,
          -3.25,
          -0.25,
          (x, y, z) => {
            if (x < 0)
              return true

            else
              return false
          },
        ],
        // 07
        [
          -0.5,
          3.1,
          0.2,
          (x, y, z) => {
            if (x > 0.5 && x < 2.5)
              return true

            else
              return false
          },
        ],
      ]
    }
    else if (this.modelLabelId === 'MFL') {
      labelData = [
        'Pressure and<br>Temperature Sensors',
        'Odometer Sensors',
        'Nose Cone',
        '3 Axis Inertial<br>Measurement Unit',
        'Batteries, Electronics <br>& Data Storage Unit',
        'Magnetic Brush<br>and Sensors',
      ]
      labelPosition = [
        // 01
        [
          5.75,
          -2.25,
          0.25,
          (x, y, z) => {
            if (x < 1)
              return true

            else
              return false
          },
        ],
        // 02
        [
          -6,
          -1.5,
          0.2,
          (x, y, z) => {
            if (x < 0)
              return true

            else
              return false
          },
        ],
        // 03
        [
          6.8,
          0.6,
          0.25,
          (x, y, z) => {
            if (x > 0)
              return true

            else
              return false
          },
        ],
        // 04
        [
          -4,
          -2.5,
          -0.5,
          (x, y, z) => {
            if (x < 0)
              return true

            else
              return false
          },
        ],
        // 05
        [
          4,
          2.25,
          -0.3,
          (x, y, z) => {
            if (x > 0.5)
              return true

            else
              return false
          },
        ],
        // 06
        [
          -3.5,
          2.35,
          -0.2,
          (x, y, z) => {
            if (x > 0.5 && x < 2.5)
              return true

            else
              return false
          },
        ],
      ]
    }
    else if (this.modelLabelId === 'Cleaning') {
      labelData = [
        'Pressure and<br>Temperature Sensors',
        'Brush',
        'Nose Cone',
        '3 Axis Inertial<br>Measurement Unit',
        'Batteries, Electronics <br>& Data Storage Unit',
      ]
      labelPosition = [
        // 01
        [
          -3,
          4,
          0.25,
          (x, y, z) => {
            if (x < 0)
              return true

            else
              return false
          },
        ],
        // 02
        [
          3.5,
          -3.7,
          0.3,
          (x, y, z) => {
            if (x < 0)
              return true

            else
              return false
          },
        ],
        // 03
        [
          -5,
          0.4,
          0.25,
          (x, y, z) => {
            if (x < 0)
              return true

            else
              return false
          },
        ],
        // 04
        [
          -0.7,
          -1.75,
          -0.5,
          (x, y, z) => {
            if (x < 0)
              return true

            else
              return false
          },
        ],
        // 05
        [
          0,
          1.75,
          -0.3,
          (x, y, z) => {
            if (x > 0.5)
              return true

            else
              return false
          },
        ],
      ]
    }
    else if (this.modelLabelId === 'Wellhead') {
      labelData = [
        'Ultrasonic<br>Transducers',
        'Odometer Sensors',
        'Batteries, Electronics <br>& Data Storage Unit',
        'Mux Board',
      ]
      labelPosition = [
        // 01
        [
          0,
          -1.5,
          0.2,
          (x, y, z) => {
            if (x < -0.5)
              return true

            else
              return false
          },
        ],
        // 02
        [
          -5.25,
          1.5,
          0,
          (x, y, z) => {
            if (x > 0.3)
              return true

            else
              return false
          },
        ],
        // 03
        [
          3.75,
          -1.75,
          0,
          (x, y, z) => {
            if (x < 0)
              return true

            else
              return false
          },
        ],
        // 04
        [
          1.5,
          1.5,
          0.1,
          (x, y, z) => {
            if (x > 0.5 && x < 2.5)
              return true

            else
              return false
          },
        ],
      ]
    }
  }

  initLights() {
    // const gui = new GUI()
    this.spotLight = new THREE.SpotLight(0xFFFFFF, 1)
    this.spotLight.castShadow = false
    this.spotLight.shadow.camera.far = 15
    this.spotLight.shadow.mapSize.set(1024, 1024)
    this.scene.add(this.spotLight)

    const lights = []
    lights[0] = new THREE.DirectionalLight(0xFFFFFF, 1)
    lights[0].position.set(0, 3, 5)
    lights[1] = new THREE.DirectionalLight(0xFFFFFF, 1)
    lights[1].position.set(5, 1, 0)
    lights[2] = new THREE.DirectionalLight(0xFFFFFF, 1)
    lights[2].position.set(0, 1, -5)
    lights[3] = new THREE.DirectionalLight(0xFFFFFF, 1)
    lights[3].position.set(-5, 3, 0)
    lights[(0, 1, 2, 3)].shadow.mapSize.set(1024, 1024)
    lights[(0, 1, 2, 3)].shadow.camera.far = 15
    lights[(0, 1, 2, 3)].castShadow = false
    this.scene.add(lights[0])
    this.scene.add(lights[1])
    this.scene.add(lights[2])
    this.scene.add(lights[3])

    const d = 50

    lights[(0, 1, 2, 3)].shadow.camera.left = -d
    lights[(0, 1, 2, 3)].shadow.camera.right = d
    lights[(0, 1, 2, 3)].shadow.camera.top = d
    lights[(0, 1, 2, 3)].shadow.camera.bottom = -d

    // const folder1 = gui.addFolder('Direction Light 01')
    // const folder1Settings = { color: lights[0].color.getHex() }
    // folder1.add(lights[0].position, 'x', -20, 20, 0.1).listen()
    // folder1.add(lights[0].position, 'y', -20, 20, 0.1).listen()
    // folder1.add(lights[0].position, 'z', -20, 20, 0.1).listen()
    // folder1.add(lights[0], 'intensity', 0, 2, 0.25).listen()
    // folder1.addColor(folder1Settings, 'color').onChange(value => lights[0].color.set(value)).listen()

    // const folder2 = gui.addFolder('Direction Light 02')
    // const folder2Settings = { color: lights[1].color.getHex() }
    // folder2.add(lights[1].position, 'x', -20, 20, 0.1).listen()
    // folder2.add(lights[1].position, 'y', -20, 20, 0.1).listen()
    // folder2.add(lights[1].position, 'z', -20, 20, 0.1).listen()
    // folder2.add(lights[1], 'intensity', 0, 2, 0.25).listen()
    // folder2.addColor(folder2Settings, 'color').onChange(value => lights[1].color.set(value)).listen()

    // const folder3 = gui.addFolder('Direction Light 03')
    // const folder3Settings = { color: lights[2].color.getHex() }
    // folder3.add(lights[2].position, 'x', -20, 20, 0.1).listen()
    // folder3.add(lights[2].position, 'y', -20, 20, 0.1).listen()
    // folder3.add(lights[2].position, 'z', -20, 20, 0.1).listen()
    // folder3.add(lights[2], 'intensity', 0, 2, 0.25).listen()
    // folder3.addColor(folder3Settings, 'color').onChange(value => lights[2].color.set(value)).listen()

    // const folder4 = gui.addFolder('Direction Light 04')
    // const folder4Settings = { color: lights[3].color.getHex() }
    // folder4.add(lights[3].position, 'x', -20, 20, 0.1).listen()
    // folder4.add(lights[3].position, 'y', -20, 20, 0.1).listen()
    // folder4.add(lights[3].position, 'z', -20, 20, 0.1).listen()
    // folder4.add(lights[3], 'intensity', 0, 2, 0.25).listen()
    // folder4.addColor(folder4Settings, 'color').onChange(value => lights[3].color.set(value)).listen()

    // const lights1 = new THREE.DirectionalLightHelper(lights[0], 2, 0xFF0000)
    // const lights2 = new THREE.DirectionalLightHelper(lights[1], 2, 0xFF0000)
    // const lights3 = new THREE.DirectionalLightHelper(lights[2], 2, 0xFF0000)
    // const lights4 = new THREE.DirectionalLightHelper(lights[3], 2, 0xFF0000)
    // this.scene.add(lights1, lights2, lights3, lights4)
  }

  initPostprocessing() {
    const effectCopy = new ShaderPass(CopyShader)
    effectCopy.renderToScreen = true

    this.composer = new EffectComposer(this.renderer)
    this.composer.addPass(new RenderPass(this.scene, this.camera))
    this.composer.addPass(effectCopy)
  }

  initCamera() {
    this.aspect = this.width / this.height

    // camera 1
    this.camera = new THREE.PerspectiveCamera(
      this.FOV,
      this.aspect,
      this.NEAR,
      this.FAR,
    )

    this.camera.position.z = 15
    this.camera.position.y = this.customCamPoY
    this.camera.aspect = this.aspect
    this.camera.updateProjectionMatrix()
  }

  initRenderer() {
    // renderer1
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' })
    this.renderer.setSize(this.width, this.height)
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.renderer.useLegacyLights = true
    this.renderer.toneMapping = THREE.CineonToneMapping
    this.renderer.toneMappingExposure = 2
    this.renderer.LinearEncoding = THREE.SRGBColorSpace
    // this.renderer.setClearColor(this.background, 1)

    if (this.modelLabel === true) {
      this.labelRenderer = new CSS2DRenderer()
      this.labelRenderer.setSize(this.follow.clientWidth, this.follow.clientHeight)
      this.labelRenderer.domElement.style.position = 'absolute'
      this.labelRenderer.domElement.style.top = '0px'
      this.labelRenderer.domElement.style.pointerEvents = 'auto'
      this.follow.appendChild(this.labelRenderer.domElement)
    }

    this.canvas = this.renderer.domElement
  }

  initControls() {
    this.controls = new OrbitControls(
      this.camera,
      this.parent,
      this.modelLabel === true ? this.labelRenderer.domElement : null,
    )
    this.controls.smooth = true
    this.controls.smoothspeed = 0.95
    this.controls.autoRotateSpeed = 2
    this.controls.maxDistance = 15
    this.controls.minDistance = 5
    this.controls.enableDamping = true

    // this.controls.maxPolarAngle = Math.PI / 2
    // this.controls.minPolarAngle = Math.PI / 2
  }

  render() {
    if (this.modelLabel === true)
      this.labelRenderer.render(this.scene, this.camera)

    // this.renderer.render(this.scene, this.camera)
    this.camera.lookAt(this.scene.position)
    this.spotLight.position.set(this.camera.position.x + 10, this.camera.position.y + 10, this.camera.position.z + 10)
    this.composer.render()
  }

  update() {
    // this.stats.begin()
    requestAnimationFrame(() => this.update())

    const x = this.camera.rotation.x
    const y = this.camera.rotation.y
    const z = this.camera.position.z

    labelPosition.map((position, index) => {
      if (
        position[3](x, y, z)
        && document.getElementById(`model-label${index}`)
        && !flagLabel[index]
      ) {
        document.getElementById(`model-label${index}`).classList.remove('fade-in')
        document.getElementById(`model-label${index}`).classList.add('fade-out')
        flagLabel[index] = true
      }
      else if (
        !position[3](x, y, z)
        && document.getElementById(`model-label${index}`)
        && flagLabel[index]
      ) {
        document.getElementById(`model-label${index}`).classList.remove('fade-out')
        document.getElementById(`model-label${index}`).classList.add('fade-in')
        flagLabel[index] = false
      }
      return true
    })

    this.controls.autoRotate = this.autoRotate

    this.controls.update()

    this.render()

    // this.stats.end()
  }

  finish() {
    labelPosition = []
    labelData = []
    this.scene.remove(this.model)
    this.disposeThreeObjects(this.scene, this.renderer) // dispose
    //
    this.canvas.width = 1 // resize canvas
    this.canvas.height = 1 // resize canvas
  }

  disposeThreeObjects(scene, renderer) {
    scene.children.forEach((obj) => {
      obj.traverse(obj3D => this.dispose(obj3D))
      scene.remove(obj)
    })

    renderer.dispose()
    renderer.renderLists.dispose()
    // renderer.forceContextLoss()
    renderer.domElement = null
  }

  dispose(obj) {
    if (obj.geometry) {
      obj.geometry.dispose()
      obj.geometry = null
    }
    if (!!obj.material && Array.isArray(obj.material))
      obj.material.forEach(material => this.disposeMaterial(material))

    else if (obj.material)
      this.disposeMaterial(obj.material)
  }

  disposeMaterial(material) {
    if (material.map) {
      material.map.dispose()
      material.map = null
    }
    material.dispose()
    material = null
  }

  loadModel(model, callback) {
    this.dracoLoader = new DRACOLoader()
    this.dracoLoader.setDecoderPath('/draco/')

    this.loader = new GLTFLoader()
    this.loader.setDRACOLoader(this.dracoLoader)

    this.loader.load(model, (gltf) => {
      if (typeof callback === 'function')
        callback(gltf.scene)

      model = gltf.scene
      this.model = model

      // console.log(model)

      labelPosition.map((position, index) => {
        const toplabel = document.createElement('div')
        toplabel.className = 'model-label'
        toplabel.id = `model-label${index}`
        toplabel.innerHTML = labelData[index]
        toplabel.style.marginTop = '0'
        toplabel.style.cursor = 'pointer'
        this.followTextObject = new CSS2DObject(toplabel)
        this.followTextObject.position.set(position[0], position[1], position[2])
        // toplabel.addEventListener('click', this.onClick, false)
        return model.add(this.followTextObject)
      })

      this.scene.add(gltf.scene)
      this.updateAllMaterials()
    })
  }

  add(model) {
    this.scene.add(model)
  }

  remove(model) {
    if (this.model) {
      console.log(this.model)
      this.scene.remove(this.model)
    }
  }

  onResize() {
    this.pixelRatio = window.devicePixelRatio
    this.windowWidth = window.innerWidth
    this.width = this.root.clientWidth * this.pixelRatio | 0
    this.height = this.root.clientHeight * this.pixelRatio | 0

    const needResize = this.canvas.width !== this.width || this.canvas.height !== this.height
    if (needResize) {
      this.renderer.setPixelRatio(1)
      this.renderer.setSize(this.width, this.height)
    }

    this.camera.aspect = this.width / this.height
    this.camera.updateProjectionMatrix()

    // this.renderer.setSize(this.width, this.height)
    if (this.modelLabel === true)
      this.labelRenderer.setSize(this.follow.clientWidth, this.follow.clientHeight)
    // this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    this.NEAR = 400
    if (this.windowWidth <= 768) {
      this.FOV = 50
      this.FAR = 1200
    }
    else if (this.windowWidth >= 769 && this.windowWidth <= 1080) {
      this.FOV = 50
      this.FAR = 1475
    }
    else {
      this.FOV = 40
      this.FAR = 20
    }

    if (this.modelLabel === false) {
      if (this.windowWidth < 1024)
        this.parent.style.pointerEvents = 'none'

      else
        this.parent.style.pointerEvents = 'auto'
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => this.onResize())
  }
}

// To call our class as a function
const sceneInit = args => new SceneInit(args)

export default sceneInit
