"use client";
import Footer from "../components/Footer";
import SectionHero from "./SectionHero";
import SectionLetsConnect from "./SectionLetsConnect";
import SectionMyLatestProject from "./SectionMyLatestProject";
import SectionQuote from "./SectionQuote";
import Timeline from "./Timeline";
import SectionTechnologyStack from "./SectionTechnologyStack";
// import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { useEffect, useState } from 'react'
import gsap from 'gsap';

// import { useEffect, useState } from 'react'
// import useLocoScroll from './useLocoScroll'











export default function Home() {
  useEffect(() => {

    // Canvas
    const canvas = document.querySelector('canvas.webgl')!

    // Scene
    const scene = new THREE.Scene()

    // Objects
    const geometry = new THREE.TorusGeometry(.7, .2, 16, 200);

    // Materials

    const material = new THREE.PointsMaterial({
      size:0.015
    })


    const particleGeo = new THREE.BufferGeometry;
    const particleCount = 2000;
    const posArray = new Float32Array(particleCount* 3)

    for(let i=0; i < particleCount *6 ; i++){
      posArray[i] = 5*(Math.random() -0.5)

    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray,3))

    // Mesh
    // const sphere = new THREE.Points(geometry, material)
    const partiMesh = new THREE.Points(particleGeo,material)
    scene.add(partiMesh)

    // Lights

    const pointLight = new THREE.PointLight(0xffffff, 0.1)
    pointLight.position.x = 2
    pointLight.position.y = 3
    pointLight.position.z = 4
    scene.add(pointLight)

    /**
     * Sizes
     */
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    window.addEventListener('resize', () => {
      // Update sizes
      sizes.width = window.innerWidth
      sizes.height = window.innerHeight

      // Update camera
      camera.aspect = sizes.width / sizes.height
      camera.updateProjectionMatrix()

      // Update renderer
      renderer.setSize(sizes.width, sizes.height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })



    /**
     * Camera
     */
    // Base camera
    const camera = new THREE.PerspectiveCamera(40, sizes.width / sizes.height, 0.1, 100)
    camera.position.x = 0
    camera.position.y = 0
    camera.position.z = 2
    scene.add(camera)

    // Controls
    // const controls = new OrbitControls(camera, canvas)
    // controls.enableDamping = true

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({canvas, alpha:true})
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    /**
     * Animate
     * 
     * 
     */

    const clock = new THREE.Clock()

    const tick = () => {

      const elapsedTime = clock.getElapsedTime()

      // Update objects
      partiMesh.rotation.y = .009 * elapsedTime

      window.addEventListener("scroll", () =>{
        gsap.to(camera.position, {z: camera.position.z - 0.01, duration: 10, ease:"bounce.in"});
        // gsap.to(camera, {fov: camera.fov + 0.1, duration: 10,ease:"bounce.in"});
        // camera.position.z = camera.position.z - 0.00001
        // camera.fov = camera.fov + 0.0001
        // console.log(camera.position.z)
      })
  
      // Update Orbital Controls
      // controls.update()

      // Render
      renderer.render(scene, camera)

      // Call tick again on the next frame
      window.requestAnimationFrame(tick)
    }

    tick()
  })


  const [start, setStart] = useState(false);

  useEffect(() => {
    setStart(true);
  }, []);

  // useLocoScroll(start);




  return (<>
      <canvas className="webgl fixed z-5 p-0 m-0 top-0 left-0"></canvas>
    <div className="safe-layout" id='main-container'>
      <SectionHero />
      <SectionMyLatestProject />
      <SectionTechnologyStack />
      <Timeline/>
      <SectionLetsConnect />
      <SectionQuote />
      <Footer />
    </div>
    </>
  )
}
