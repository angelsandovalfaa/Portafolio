import { useEffect, useRef } from 'react'

export function NoiseCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const c2d = ctx

    let wWidth: number
    let wHeight: number
    let noiseData: ImageData[] = []
    let frame = 0
    let loopTimeout: number

    function createNoise() {
      const idata = c2d.createImageData(wWidth, wHeight)
      const buffer32 = new Uint32Array(idata.data.buffer)
      const len = buffer32.length

      for (let i = 0; i < len; i++) {
        if (Math.random() < 0.1) {
          buffer32[i] = 0xff000000
        }
      }

      noiseData.push(idata)
    }

    function paintNoise() {
      frame = frame === 9 ? 0 : frame + 1
      c2d.putImageData(noiseData[frame], 0, 0)
    }

    function loop() {
      paintNoise()
      loopTimeout = window.setTimeout(() => {
        window.requestAnimationFrame(loop)
      }, 1000 / 25)
    }

    function setup() {
      wWidth = window.innerWidth
      wHeight = window.innerHeight
      const c = canvasRef.current
      if (!c) return
      c.width = wWidth
      c.height = wHeight
      noiseData = []

      for (let i = 0; i < 10; i++) {
        createNoise()
      }

      loop()
    }

    let resizeThrottle: number
    const onResize = () => {
      window.clearTimeout(resizeThrottle)
      resizeThrottle = window.setTimeout(() => {
        window.clearTimeout(loopTimeout)
        setup()
      }, 200)
    }

    window.addEventListener('resize', onResize, false)
    setup()

    return () => {
      window.removeEventListener('resize', onResize, false)
      window.clearTimeout(loopTimeout)
      window.clearTimeout(resizeThrottle)
    }
  }, [])

  return <canvas ref={canvasRef} id="noise" className="noise" aria-hidden />
}
