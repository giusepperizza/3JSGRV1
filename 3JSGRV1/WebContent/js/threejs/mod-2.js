function init(){
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

	var renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

//	var geometry = new THREE.BoxGeometry( 1, 1, 1 );
//	var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
//	var cube = new THREE.Mesh( geometry, material );
//	scene.add( cube );
	var message = "- K I N G -";

//	var text = new THREE.TextGeometry( message, textParams );
	var loader = new THREE.FontLoader();

	loader.load( '../../../fonts/helvetiker_regular.typeface.json', function ( font ) {

		var geometry = new THREE.TextGeometry( message, {
			font: font,
			size: 80,
			height: 5,
			curveSegments: 12,
			bevelEnabled: true,
			bevelThickness: 10,
			bevelSize: 8,
			bevelSegments: 5
		} );
	} )
	
//	scene.add( loader );
	camera.position.z = 5;
	
	document.getElementById("WebGl-output").appendChild(renderer.domElement);
	renderer.render(scene, camera);
	
//	function animate() {
//		requestAnimationFrame( animate );
//
//		cube.rotation.x += 0.1;
//		cube.rotation.y += 0.1;
//
//		renderer.render(scene, camera);
//	};

//	animate();
}
window.onload = init;