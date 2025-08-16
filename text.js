import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

const canvas = document.getElementById('canvasText');

const scene = new THREE.Scene();
const hudScene = new THREE.Scene();
// Камера
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 0, 100); // Подальше, чтобы текст влезал

const hudCamera = new THREE.OrthographicCamera(
  window.innerWidth / -2,
  window.innerWidth / 2,
  window.innerHeight / 2,
  window.innerHeight / -2,
  0.1,
  300
);
hudCamera.position.z = 100;

// Рендерер
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true,
  antialias: true,
});
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  // для HUD
  hudCamera.left = window.innerWidth / -2;
  hudCamera.right = window.innerWidth / 2;
  hudCamera.top = window.innerHeight / 2;
  hudCamera.bottom = window.innerHeight / -2;
  hudCamera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Свет
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(-40, 10, 25);
directionalLight.intensity = 2;
directionalLight.castShadow = true;
hudScene.add(directionalLight);

const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
directionalLight2.position.set(-20, 12, 15);
directionalLight2.intensity = 2;
directionalLight2.castShadow = true;
hudScene.add(directionalLight2);

const spotLight = new THREE.SpotLight(0xffffff, 100);
spotLight.position.set(-19, 0, 20);

spotLight.intensity = 100;
spotLight.castShadow = true;
hudScene.add(spotLight);

const spotLight4 = new THREE.SpotLight(0xffffff, 100);
spotLight4.position.set(5, -7, 20); /*  */

spotLight4.intensity = 100;
spotLight4.castShadow = true;
hudScene.add(spotLight4);
// ---------- LIGHTS 2 ----------

const directionalLight3 = new THREE.DirectionalLight(0xffffff, 1);
directionalLight3.position.set(20, 5, 25);
directionalLight3.intensity = 2;
directionalLight3.castShadow = true;
hudScene.add(directionalLight3);

const directionalLight4 = new THREE.DirectionalLight(0xffffff, 1);
directionalLight4.position.set(0, 10, 15);
directionalLight4.intensity = 2;
directionalLight4.castShadow = true;
hudScene.add(directionalLight4);

const spotLight2 = new THREE.SpotLight(0xffffff, 100);
spotLight2.position.set(5, -7, 20); /*  */

spotLight2.intensity = 100;
spotLight2.castShadow = true;
hudScene.add(spotLight2);

const spotLight3 = new THREE.SpotLight(0xffffff, 100);
spotLight3.position.set(30, -10, 20); /*  */

spotLight3.intensity = 100;
spotLight3.castShadow = true;
hudScene.add(spotLight3);

const loader = new GLTFLoader();
const textureLoader = new THREE.TextureLoader();
const textTexture = textureLoader.load('img/gradient.png');

// Загрузка модели

let percent = null;
loader.load('percent1.glb', (gltf) => {
  percent = gltf.scene;

  percent.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = false;

      child.material = new THREE.MeshStandardMaterial({
        map: textTexture, // Если хочешь чистый цвет, текстуру убери
        metalness: 1,
        roughness: 0.3,
        side: THREE.DoubleSide,
      });
    }
  });
  percent.scale.set(10, 10, 10);

  percent.position.set(260 , 385, 0);
  percent.rotation.x = 0.5;

  hudScene.add(percent);
});
const loaderF = new FontLoader();
let letters = null;
loaderF.load('/fonts/helvetiker_regular.typeface.json', (font) => {
  const wordRandom = 'RANDOM';
  const wordQuotes = 'QUOTES';

  letters = [];

  for (let i = 0; i < wordQuotes.length; i++) {
    const letter = wordQuotes[i];
    const geometry = new TextGeometry(letter, {
      font: font,
      size: 50,
      height: 0,
    });
    geometry.center();
    const material = new THREE.MeshStandardMaterial({
      map: textTexture,
      roughness: 0.3,
      metalness: 1,
      side: THREE.DoubleSide,
      transparent: false,
    });
    const mesh = new THREE.Mesh(geometry, material);
    // Ось Z внутри камеры!
    mesh.position.z = 0;
    mesh.position.x = 600;
    mesh.position.y = 380 + i * -140;
    mesh.scale.multiplyScalar(2.2);
    hudScene.add(mesh);
    letters.push(mesh);
  }

  for (let i = 0; i < wordRandom.length; i++) {
    const letter = wordRandom[i];
    const geometry = new TextGeometry(letter, {
      font: font,
      size: 50,
      height: 0, // Плоский
    });

    geometry.center();

    const material = new THREE.MeshStandardMaterial({
      map: textTexture,
      metalness: 1,
      roughness: 0.3,
      side: THREE.DoubleSide,
      // Если нет прозрачности — НЕ ставь transparent
      // transparent: true,
      // alphaTest: 0.5,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.z = 0; // В одной плоскости!

    // Ось Z внутри камеры!
    mesh.position.z = 0;
    mesh.position.x = -600;
    mesh.position.y = 380 + i * -140;
    mesh.scale.multiplyScalar(2.2);
    hudScene.add(mesh);

    letters.push(mesh);
  }
});

// Анимация
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  renderer.render(hudScene, hudCamera);
  /* 
  if (text) {
    text.rotation.y += 0.001;
  }

  if (text2) {
    text2.rotation.y += 0.001;
    // Если text2 двигается — таргет двигается тоже
    targetObject2.position.copy(text2.position);
    directionalLight3.target.updateMatrixWorld();
    directionalLight4.target.updateMatrixWorld();
    spotLight2.target.updateMatrixWorld();
    spotLight3.target.updateMatrixWorld();
  } */

  if (percent) {
    percent.rotation.y += 0.01;
  }
  if (letters) {
    for (let i = 0; i < letters.length; i++) {
      if (i % 2 === 0) {
        letters[i].rotation.y += 0.01;
      }
      if (i % 2 > 0) {
        letters[i].rotation.y += -0.01;
      }
    }
  }
}

animate();
