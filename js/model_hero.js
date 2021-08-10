var container = null;
var scene = null;
var camera = null;
var light = null;
var geometry = null;
var renderer = null;

window.addEventListener("load", onLoad);

function onLoad() {
  //renderer
  container = document.getElementById("hero_bg");
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  container.appendChild(renderer.domElement);

  //scene//
  scene = new THREE.Scene();

  //camera//
  camera = new THREE.PerspectiveCamera(
    45,
    container.offsetWidth / container.offsetHeight,
    1,
    4000
  );
  camera.position.set(0, 0, 3);

  //light//
  light = new THREE.DirectionalLight(0xffffff, 1.5);
  light.position.set(0, 0, 1);
  scene.add(light);

  material = new THREE.MeshPhongMaterial();

  geometry = new THREE.BoxGeometry(1, 1, 1);
  cube = new THREE.Mesh(geometry, material);

  cube.rotation.x = Math.PI / 5;
  cube.rotation.y = Math.PI / 5;
  scene.add(cube);

  addMouseHandler();
  run();
}
window.addEventListener("load", onLoad);
function run() {
  renderer.render(scene, camera);
  if (animating) {
    cube.rotation.y -= 0.01;
  }
  requestAnimationFrame(run);
}
function addMouseHandler() {
  var dom = renderer.domElement;
  dom.addEventListener("mouseup", onMouseUp, false);
}
function onMouseUp(event) {
  event.preventDefault();
  animating = !animating;
}
