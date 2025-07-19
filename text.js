import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const canvas = document.getElementById('canvasText');

const scene = new THREE.Scene();

// Камера
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 0, 40); // Подальше, чтобы текст влезал

// Рендерер
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true,
  antialias: true,
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

// Свет
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(-40, 10, 25);
directionalLight.intensity = 2;
directionalLight.castShadow = true;
scene.add(directionalLight);
/* const directionalLightHelper = new THREE.DirectionalLightHelper(
  directionalLight,
  0.5
);
scene.add(directionalLightHelper); */

const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
directionalLight2.position.set(-20, 12, 15);
directionalLight2.intensity = 2;
directionalLight2.castShadow = true;
scene.add(directionalLight2);
/* const directionalLightHelper2 = new THREE.DirectionalLightHelper(
  directionalLight2,
  0.5
);
scene.add(directionalLightHelper2); */

const spotLight = new THREE.SpotLight(0xffffff, 100);
spotLight.position.set(-19, 0, 20);

spotLight.intensity = 100;
spotLight.castShadow = true;
scene.add(spotLight);
/* const spotLightHelper = new THREE.SpotLightHelper(
  spotLight,
  0.5
);
scene.add(spotLightHelper); */

const spotLight4 = new THREE.SpotLight(0xffffff, 100);
spotLight4.position.set(5, -7, 20); /*  */

spotLight4.intensity = 100;
spotLight4.castShadow = true;
scene.add(spotLight4);
// ---------- LIGHTS 2 ----------

const directionalLight3 = new THREE.DirectionalLight(0xffffff, 1);
directionalLight3.position.set(20, 5, 25);
directionalLight3.intensity = 2;
directionalLight3.castShadow = true;
scene.add(directionalLight3);
const directionalLightHelper3 = new THREE.DirectionalLightHelper(
  directionalLight3,
  0.5
);
scene.add(directionalLightHelper3);

const directionalLight4 = new THREE.DirectionalLight(0xffffff, 1);
directionalLight4.position.set(0, 10, 15);
directionalLight4.intensity = 2;
directionalLight4.castShadow = true;
scene.add(directionalLight4);
const directionalLightHelper4 = new THREE.DirectionalLightHelper(
  directionalLight4,
  0.5
);
scene.add(directionalLightHelper4);

const spotLight2 = new THREE.SpotLight(0xffffff, 100);
spotLight2.position.set(5, -7, 20); /*  */

spotLight2.intensity = 100;
spotLight2.castShadow = true;
scene.add(spotLight2);
const spotLightHelper2 = new THREE.SpotLightHelper(spotLight2, 0.5);
scene.add(spotLightHelper2);

const spotLight3 = new THREE.SpotLight(0xffffff, 100);
spotLight3.position.set(30, -10, 20); /*  */

spotLight3.intensity = 100;
spotLight3.castShadow = true;
scene.add(spotLight3);
const spotLightHelper3 = new THREE.SpotLightHelper(spotLight3, 0.5);
scene.add(spotLightHelper3);



// Загрузка модели
const loader = new GLTFLoader();

const textureLoader = new THREE.TextureLoader();
const textTexture = textureLoader.load('img/gradient.png');

let text = null;

loader.load('RANDOM_TEXT.glb', (gltf) => {
  text = gltf.scene;

  text.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = false;
      directionalLight.target = text;
      directionalLight2.target = text;

      spotLight.target = text;
      child.material = new THREE.MeshStandardMaterial({
        map: textTexture,
        metalness: 1,
        roughness: 0.2,
        transparent: true,
        opacity: 1.0,
        side: THREE.DoubleSide,
      });
    }
  });
  // ---------- РАСПОЛОЖЕНИЕ ----------
  // Сдвиг по координатам — подбери под сцену
  text.position.set(-32, -2, 2);

  // ---------- ПОВОРОТЫ ----------
  // Разворачиваем, если текст пишется справа налево
  text.rotation.y = 4.95;

  // Наклон назад (по оси X)
  text.rotation.x = 0.5; // можно -0.2, -0.5 — смотри, что нравится

  // Наклон влево (по оси Z)
  text.rotation.z = -0.2;

  // Добавляем текст в сцену
  scene.add(text);
});

let text2 = null;

const targetObject2 = new THREE.Object3D();
scene.add(targetObject2);

loader.load('QUOTE_TEXT.glb', (gltf) => {
  text2 = gltf.scene;

  text2.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = false;

      child.material = new THREE.MeshStandardMaterial({
        map: textTexture,
        metalness: 1,
        roughness: 0.2,
        transparent: true,
        opacity: 1.0,
        side: THREE.DoubleSide,
      });
    }
  });

  text2.position.set(35, -10, 0);
  text2.rotation.y = 0;
  text2.rotation.x = 0;
  text2.rotation.z = -0.4;

  scene.add(text2);

  // ✅ после добавления текста — привязываем таргет
  targetObject2.position.copy(text2.position);

  directionalLight3.target = targetObject2;
  directionalLight4.target = targetObject2;
  spotLight2.target = targetObject2;

  directionalLight3.target.updateMatrixWorld();
  directionalLight4.target.updateMatrixWorld();
  spotLight2.target.updateMatrixWorld();
  spotLight3.target.updateMatrixWorld();
});

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

  percent.position.set(23, 30, -10);
  percent.rotation.x = 0.5

  scene.add(percent);
});
// Анимация
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene,camera)

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
  }

  directionalLightHelper3.update();
  directionalLightHelper4.update();
  spotLightHelper2.update();
  spotLightHelper3.update();
  
  if(percent){
    percent.rotation.y += 0.01
  }
}

animate();
