var panorama, viewer, container, infospot;
var containerBaseWidth = 700;
var containerBaseHeight = 400;
var deltaSize = 100;

container = document.querySelector( '#container' );

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1 ;
}
//console.log('getRandomInt(3)', getRandomInt(3)); // expected output: 0, 1 or 2
//console.log('getRandomInt(1)', getRandomInt(1)); // expected output: 0
//console.log('Math.random()', Math.random()); // expected output: a number between 0 and 1

//panorama = new PANOLENS.ImagePanorama( 'https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/' + file_names[getRandomInt(file_names.length)-1] );
//panorama = new PANOLENS.ImagePanorama( 'https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/tunnel.jpg' );

var file_name = 'images/out' + String(getRandomInt(325)) + '.png';
console.log('file_name:', file_name);
panorama = new PANOLENS.ImagePanorama( file_name );
panorama.addEventListener( 'progress', onProgress );
panorama.addEventListener( 'enter', onEnter );

progressElement = document.getElementById( 'progress' );

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

viewer = new PANOLENS.Viewer( { 
  container: container, 
  controlButtons: ['fullscreen'],
  autoRotate: true,
  autoRotateSpeed: 0.5, 
  autoRotateActivationDuration: 2000
} );
viewer.getCamera().fov = 30;
viewer.getCamera().updateProjectionMatrix();
viewer.add( panorama ); 

document.querySelector( '#btn_next' ).addEventListener( 'click', function(){
  var file_name = 'images/out' + String(getRandomInt(325)) + '.png';
  console.log('file_name:', file_name);
  panorama = new PANOLENS.ImagePanorama( file_name );
  panorama.addEventListener( 'progress', onProgress );
  panorama.addEventListener( 'enter', onEnter );
  viewer.setPanorama( panorama );
  viewer.add( panorama );
}, false );

//====================
var panorama_v, viewer_v;

panorama_v = new PANOLENS.VideoPanorama( 'asset/textures/video/ClashofClans.mp4', { autoplay: true } );
viewer_v = new PANOLENS.Viewer();
viewer_v.add( panorama_v );
