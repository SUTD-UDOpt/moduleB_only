import rhino3dm from 'https://cdn.jsdelivr.net/npm/rhino3dm@0.15.0-beta/rhino3dm.module.js'
import { RhinoCompute } from 'https://cdn.jsdelivr.net/npm/compute-rhino3d@0.13.0-beta/compute.rhino3d.module.js'

require(["esri/Map", "esri/views/SceneView", "esri/layers/GraphicsLayer","esri/widgets/Sketch/SketchViewModel","esri/layers/support/FeatureFilter","esri/geometry/geometryEngine", "esri/Graphic","esri/layers/FeatureLayer","esri/geometry/SpatialReference","esri/views/3d/externalRenderers","esri/widgets/Measurement","esri/Ground", "esri/geometry/Polygon"], 
(Map, SceneView, GraphicsLayer, SketchViewModel, FeatureFilter, geometryEngine, Graphic, FeatureLayer, SpatialReference, externalRenderers, Measurement, Ground, Polygon) => {
  setupLayers(FeatureLayer, GraphicsLayer)
  setupMap(Map, SceneView, Ground)
  setupWidgets(Measurement)
  setupSketch(SketchViewModel, FeatureFilter, Graphic, geometryEngine)

  document.getElementById("actionButton").addEventListener("click", () => {
    if (state == 0){
      if (currentPolygon != undefined){
        document.getElementById("popup").style.display = "block"
        document.getElementById("optimizePrompt").style.display = "block"
        popup = true
        savedPolygon = currentPolygon
        resiParcels.push(savedPolygon)
      } else {
        alert("Please draw a polygon first")
      }
    } else if(state == 1) {
      document.getElementById("popup").style.display = "block"
      document.getElementById("resetPrompt").style.display = "block"
      popup = true
    }
  })

  document.getElementById("optButton").addEventListener("click", () => {
    setComponentDisplay([1,2,0])
    document.getElementById('loader').style.display = 'block';
    document.getElementById('resultB').style.display = 'block';
    document.getElementById("actionButton").disabled = true
    document.getElementById("clearFilter").style.display = "none"
    document.getElementById("popup").style.display = "none"
    document.getElementById("optimizePrompt").style.display = "none"
    popup = false
    useRoadData(Graphic, Polygon)
  })

  // Init Rhino
  rhino3dm().then( async m => {
    console.log( 'Loaded rhino3dm.' )
    rhino = m // global

    //RhinoCompute.url = 'http://localhost:8081/'; // RhinoCompute server url. Use http://localhost:8081 if debugging locally.
    RhinoCompute.url = "http://18.143.175.3:80/"; // RhinoCompute server url. Use http://localhost:8081 if debugging locally.
    RhinoCompute.apiKey = "0hOfevzxs49OfbXDqyUx" // RhinoCompute server api key. Leave blank if debugging locally.

    // load a grasshopper file!
    const url = definitionName
    const res = await fetch(url)
    const buffer = await res.arrayBuffer()
    const arr = new Uint8Array(buffer)
    definition = arr
  })
});