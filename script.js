var panorama, viewer, container, infospot;
var containerBaseWidth = 700;
var containerBaseHeight = 400;
var deltaSize = 100;

container = document.querySelector( '#container' );

var file_names = [
  'building.jpg',
  'cabin.jpg',
  'dawn4000x2000.jpg',
  'dusty9000x4500.jpg',
  'field.jpg',
  'golf.jpg',
  'lake5000x2500.jpg',
  'lamp.jpg',
  'leaf.jpg',
  'lookout.jpg',
  'mountainpeak15000x7500.jpg',
  'pier.jpg',
  'pier4000x2000.jpg',
  'planet.jpg',
  'road.jpg',
  'rock.jpg',
  'suite.jpg', 
  'sunset.jpg', 
  'tent.jpg',
  'tunnel.jpg', 
  'view.jpg'
];
console.log('file_names.length: ',file_names.length);
console.log('file_names[0]: ',file_names[0]);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

//console.log('getRandomInt(3)', getRandomInt(3)); // expected output: 0, 1 or 2
//console.log('getRandomInt(1)', getRandomInt(1)); // expected output: 0
//console.log('Math.random()', Math.random()); // expected output: a number between 0 and 1



panorama = new PANOLENS.ImagePanorama( 'https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/tunnel.jpg' );
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
viewer.add( panorama ); 

document.querySelector( '#btn_next' ).addEventListener( 'click', function(){
  var file_name = 'out' + String(getRandomInt(325)) + '.png';
  console.log('file_name:', file_name);
  panorama = new PANOLENS.ImagePanorama( 'https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/' + file_names[getRandomInt(file_names.length)-1] );
  panorama.addEventListener( 'progress', onProgress );
  panorama.addEventListener( 'enter', onEnter );
  viewer.setPanorama( panorama );
  viewer.add( panorama );
}, false );


//infospot = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
//infospot.position.set( 0, 0, -5000 );
//infospot.addHoverText( 'Hello Panolens', 30 );
//panorama.add( infospot );
/*function changeContainerSize ( width, height ) {
  viewer.container.style.width = width + "px";
  viewer.container.style.height = height + "px";
  viewer.onWindowResize( width, height );
}
document.querySelector( '#btn_change_size' ).addEventListener( 'click', function(){
  var newWidth = containerBaseWidth + (Math.random() - 0.5) * deltaSize;
  var newHeight = containerBaseHeight + (Math.random() - 0.5) * deltaSize;
  changeContainerSize( newWidth, newHeight );
}, false );*/