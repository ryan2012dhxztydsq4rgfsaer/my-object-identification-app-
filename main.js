Webcam.set({
  
  height:300,
  width:350,
  image_format: 'png',
  png_quality:90
})

cammera = document.getElementById("camera")

Webcam.attach('#camera')

function take_snapshot()

{

  webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id = "capured image" scr ="'+data_uri+"'/>"
  })
}

console.log('ml5 version:', ml5.version)

classifier = ml5.imageclassifier ('https://https://teachablemachine.withgoogle.com/models/[...]',modalloaded)

function modalLoaded()

{
  console.log('Model Loaded!')
}

function check()

{
image = document.getElementById('captured_image')
classifier.classify(img, gotResult)
}

function GotResult(error , result)
{
  if (error){
    console.error(error)
  } else {
    console.log(results)
    document.getElementById("results_object_name").innerHTML = result[0].label;
    document.getElementById("results_object_accurancy").innerHTML = result[0].confidence.ToFixed(3);
  }
}