var panorama, viewer, container, infospot;
var containerBaseWidth = 700;
var containerBaseHeight = 400;
var deltaSize = 100;

var file_names = ['building.jpg', 'cabin.jpg', 'dawn4000x2000.jpg', 'dusty9000x4500.jpg', 'field.jpg', 'golf.jpg', 'lake5000x2500.jpg', 'lamp.jpg', 'leaf.jpg', 'lookout.jpg', 'mountainpeak15000x7500.jpg', 'pier.jpg', 'pier4000x2000.jpg', 'planet.jpg', 'road.jpg', 'rock.jpg', 'suite.jpg', 'sunset.jpg', 'tent.jpg', 'tunnel.jpg', 'view.jpg' ];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

// progressElement
//=============================================================
progressElement = document.getElementById( 'pg' );

function onEnter ( event ) {
  progressElement.style.width = 0;
  progressElement.classList.remove( 'finish' );
}

function onProgress ( event ) {
  progress = event.progress.loaded / event.progress.total * 100;
  progressElement.style.width = progress + '%';
  if ( progress === 100 ) {
    progressElement.classList.add( 'finish' );
  }
}

// IMAGE
//=============================================================
function createPanorama() {
  var file_name = './images/out' + String(getRandomInt(325)) + '.png';
  console.log('file_name:', file_name);
  panorama = new PANOLENS.ImagePanorama( file_name );
  //panorama = new PANOLENS.ImagePanorama( 'https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/' + file_names[getRandomInt(file_names.length)-1] );
  panorama.addEventListener( 'progress', onProgress );
  panorama.addEventListener( 'enter', onEnter );
}

container = document.querySelector( '#ct_image' );

createPanorama();

viewer = new PANOLENS.Viewer( { 
  container: container, 
  controlButtons: ['fullscreen'],
  autoRotate: true,
  autoRotateSpeed: 0.5, 
  autoRotateActivationDuration: 2000,
  cameraFov: 100
} );

//viewer.OrbitControls.noZoom = true;
viewer.add( panorama ); 

document.querySelector( '#btn_next' ).addEventListener( 'click', function(){
  createPanorama();
  viewer.setPanorama( panorama );
  viewer.add( panorama );
}, false );

// VIDEO
//=============================================================
var panorama_v, viewer_v, ct;

ct = document.querySelector( '#ct' );

panorama_v = new PANOLENS.VideoPanorama( 'http://flimshaw.github.io/Valiant360/videos/overpass-2k.mp4', { autoplay: true } );
//panorama_v = new PANOLENS.VideoPanorama( './video.mp4', { autoplay: true } );

viewer_v = new PANOLENS.Viewer({
  container: ct,
  controlButtons: ['fullscreen','video'],
  autoRotate: true,
  autoRotateSpeed: 0.5, 
  autoRotateActivationDuration: 2000,
  cameraFov: 100
});

viewer_v.OrbitControls.noZoom = true;
viewer_v.add( panorama_v );

// PROJECT 1
//=============================================================
function changeImage1() {
  console.log(document.getElementById("imgClickAndChange1").src)
  var file_name = './images/out' + String(getRandomInt(325)) + '.png';
  document.getElementById("imgClickAndChange1").src = file_name
}

// PROJECT 2
//=============================================================
function changeImage2() {
  console.log(document.getElementById("imgClickAndChange2").src)
  var file_name = './viewpoints/out' + String(getRandomInt(325)) + '.png';
  document.getElementById("imgClickAndChange2").src = file_name;
}
