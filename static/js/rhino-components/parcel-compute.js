async function useRoadData(Graphic, Polygon){
    let input = []
    let vertices = savedPolygon.rings.toString().split(",")
    for (let i=0; i<vertices.length/2; i++){
      input.push([parseFloat(vertices[i*2]), parseFloat(vertices[i*2+1])])
    }
  
    const options = {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      credentials:'include',
      body: JSON.stringify(input)
    };
  
    fetch('/api_roadCat', options)
    .then(function (response) {
      return response.json();
    })
    .then(function(text){
      let roadCat = JSON.parse(text).toString().split(",")
      runOptimization(Graphic, Polygon, roadCat)
    })
}