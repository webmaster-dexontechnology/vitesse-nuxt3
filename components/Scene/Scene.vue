<script>
import * as THREE from 'three'
import { gsap } from 'gsap'
import SceneInit from './js/Scene.init'
// import useGUI from '@/hooks/useGui'

// const gui = useGUI()

export default {
  props: {
    scale: {
      type: Number,
      default: 0,
    },
    posY: {
      type: Number,
      default: 0,
    },
    roY: {
      type: Number,
      default: 0,
    },
    camPoY: {
      type: Number,
      default: 0,
    },
    path: {
      type: String,
      default: '',
    },
    models: {
      type: Array,
    },
    modelLabel: {
      type: Boolean,
      default: false,
    },
    labelId: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      model: {},
      objects: [],
      activeMesh: {},
      isLoaded: false,
      showWireframes: true,
      autoRotate: true,
      customCamPoY: this.camPoY,
      windowWidth: null,
      modelLabelId: this.labelId,
    }
  },
  mounted() {
    this.windowWidth = window.innerWidth
    const { customCamPoY } = this
    const { modelLabel } = this
    const { modelLabelId } = this
    const { autoRotate } = this
    this.scene = SceneInit({ rootEl: this.$refs.container, autoRotate, modelLabel, customCamPoY, modelLabelId })
    this.loadModel()
  },
  beforeUnmount() {
    this.startAllOver()
  },
  methods: {
    loadModel() {
      this.isLoaded = false
      this.scene.loadModel(this.models[0].model, (model) => {
        model.name = this.labelId
        this.model = model
        gsap.to(model.scale.set(0, 0, 0), {
          duration: 1,
          x: this.scale,
          y: this.scale,
          z: this.scale,
          ease: 'power4.easeOut',
          onUpdate: () => {
            // this.camera.lookAt(0, 0, 5)
          },
        })

        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            // push to local array
            this.objects.push(child)

            // reset original material
            if (child.material.map)
              child.material.anisotropy = 16
          }
        })

        // this.objects.forEach((node) => {
        //   const parent = node.parent
        //   parent.remove(node)
        // })
        this.scene.add(model)
        // console.log(model.name)

        setTimeout(() => {
          this.isLoaded = true
        }, 200)
      })
    },

    startAllOver() {
      this.objects = []
      this.scene.finish()
    },
  },
}
</script>

<template>
  <div id="webgl" ref="container">
    <div v-if="!isLoaded" class="absolute" role="status">
      <svg aria-hidden="true" class="w-16 h-16 mr-2 text-secondary-gray-100 animate-spin fill-secondary-red-100" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
      </svg>
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<style>
canvas {
  width: 100% !important;
  height: 100% !important;
}
</style>

<style>
#webgl {
  pointer-events: none;
  z-index: -1;
}
  .fade-in {
    display: block;
    -webkit-animation: fadeIn 1s;
    animation: fadeIn s;
    opacity: 1;
  }

  .fade-out {
    display: block;
    -webkit-animation: fadeIn 1s;
    animation: fadeOut 1s;
    opacity: 0;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
</style>
