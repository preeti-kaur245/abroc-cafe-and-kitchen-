/**
 * ABROC CAFE & KITCHEN - 3D FOOD EXPERIENCE
 * Interactive 3D floating elements: Roasted coffee beans, herbs, golden particles,
 * and culinary elements with realistic depth, lighting, and physics.
 */

(function () {
  'use strict';

  const container = document.getElementById('threejs-canvas-container');
  if (!container) return;

  // Verify Three.js availability
  if (typeof THREE === 'undefined') {
    console.warn('Three.js not loaded, 3D experience falling back to CSS layers.');
    return;
  }

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
  camera.position.z = 18;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  container.appendChild(renderer.domElement);

  // Lighting setup for luxury product visualization
  const ambientLight = new THREE.AmbientLight(0xf5efe6, 0.8);
  scene.add(ambientLight);

  const mainLight = new THREE.DirectionalLight(0xffecd2, 2.5);
  mainLight.position.set(10, 15, 12);
  mainLight.castShadow = true;
  scene.add(mainLight);

  const rimLight = new THREE.DirectionalLight(0xc89d66, 3.2);
  rimLight.position.set(-12, -8, -10);
  scene.add(rimLight);

  const pointLightWarm = new THREE.PointLight(0xd4af37, 2, 25);
  pointLightWarm.position.set(0, 2, 6);
  scene.add(pointLightWarm);

  // Material Library
  const beanMaterial = new THREE.MeshStandardMaterial({
    color: 0x2b1810,
    roughness: 0.35,
    metalness: 0.15,
    bumpScale: 0.05
  });

  const goldRoastMaterial = new THREE.MeshStandardMaterial({
    color: 0x935c32,
    roughness: 0.4,
    metalness: 0.25
  });

  const leafMaterial = new THREE.MeshStandardMaterial({
    color: 0x5a7042,
    roughness: 0.5,
    metalness: 0.05,
    side: THREE.DoubleSide
  });

  const goldDustMaterial = new THREE.MeshStandardMaterial({
    color: 0xe5be8a,
    roughness: 0.2,
    metalness: 0.85,
    emissive: 0x442c0f
  });

  // Helper geometry: Realistic Coffee Bean
  function createCoffeeBeanGeometry() {
    const geom = new THREE.SphereGeometry(1, 24, 16);
    geom.scale(0.8, 1.25, 0.65);
    const pos = geom.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = pos.getZ(i);
      // Create cleft in center
      if (z > 0 && Math.abs(x) < 0.25) {
        pos.setZ(i, z * 0.45);
      }
    }
    geom.computeVertexNormals();
    return geom;
  }

  // Helper geometry: Basil Leaf
  function createLeafGeometry() {
    const shape = new THREE.Shape();
    shape.moveTo(0, -1.5);
    shape.bezierCurveTo(1.2, -0.8, 1.4, 0.8, 0, 1.8);
    shape.bezierCurveTo(-1.4, 0.8, -1.2, -0.8, 0, -1.5);

    const extrudeSettings = { depth: 0.04, bevelEnabled: true, bevelSegments: 3, steps: 1, bevelSize: 0.02, bevelThickness: 0.02 };
    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }

  // Helper geometry: Roasted Crisp / Artisan Shard
  function createShardGeometry() {
    const geom = new THREE.ConeGeometry(1.2, 2.2, 3);
    geom.scale(1, 0.2, 1);
    return geom;
  }

  const beanGeom = createCoffeeBeanGeometry();
  const leafGeom = createLeafGeometry();
  const shardGeom = createShardGeometry();
  const dustGeom = new THREE.DodecahedronGeometry(0.18, 0);

  const objects = [];

  // Spawn Coffee Beans
  const beanPositions = [
    { x: -5.5, y: 3.2, z: 2, s: 1.1, rotS: 0.008, mat: beanMaterial },
    { x: 5.2, y: -2.8, z: 3, s: 1.3, rotS: -0.006, mat: goldRoastMaterial },
    { x: -3.8, y: -3.5, z: 1, s: 0.9, rotS: 0.007, mat: beanMaterial },
    { x: 4.8, y: 3.6, z: -1, s: 1.0, rotS: 0.009, mat: beanMaterial },
    { x: 0.2, y: 4.2, z: 0.5, s: 0.85, rotS: -0.008, mat: goldRoastMaterial },
    { x: -1.5, y: -4.2, z: 2.5, s: 1.2, rotS: 0.005, mat: beanMaterial }
  ];

  beanPositions.forEach((cfg) => {
    const mesh = new THREE.Mesh(beanGeom, cfg.mat);
    mesh.position.set(cfg.x, cfg.y, cfg.z);
    mesh.scale.set(cfg.s, cfg.s, cfg.s);
    mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    scene.add(mesh);
    objects.push({
      mesh,
      origX: cfg.x,
      origY: cfg.y,
      origZ: cfg.z,
      rotSpeedX: cfg.rotS,
      rotSpeedY: cfg.rotS * 1.4,
      floatSpeed: 0.0015 + Math.random() * 0.001,
      floatAmp: 0.35 + Math.random() * 0.25,
      offset: Math.random() * 10
    });
  });

  // Spawn Fresh Herb Leaves
  const leafPositions = [
    { x: -6.2, y: -1.2, z: 2.2, s: 0.9 },
    { x: 6.4, y: 1.5, z: 1.8, s: 1.05 },
    { x: 2.5, y: -3.8, z: -0.5, s: 0.8 }
  ];

  leafPositions.forEach((cfg) => {
    const mesh = new THREE.Mesh(leafGeom, leafMaterial);
    mesh.position.set(cfg.x, cfg.y, cfg.z);
    mesh.scale.set(cfg.s, cfg.s, cfg.s);
    mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    scene.add(mesh);
    objects.push({
      mesh,
      origX: cfg.x,
      origY: cfg.y,
      origZ: cfg.z,
      rotSpeedX: 0.004,
      rotSpeedY: -0.005,
      floatSpeed: 0.002,
      floatAmp: 0.4,
      offset: Math.random() * 10
    });
  });

  // Golden Floating Aromatic Specks
  for (let i = 0; i < 24; i++) {
    const mesh = new THREE.Mesh(dustGeom, goldDustMaterial);
    const px = (Math.random() - 0.5) * 16;
    const py = (Math.random() - 0.5) * 12;
    const pz = (Math.random() - 0.5) * 8;
    mesh.position.set(px, py, pz);
    mesh.scale.setScalar(0.4 + Math.random() * 0.8);
    scene.add(mesh);
    objects.push({
      mesh,
      origX: px,
      origY: py,
      origZ: pz,
      rotSpeedX: 0.01,
      rotSpeedY: 0.015,
      floatSpeed: 0.003 + Math.random() * 0.002,
      floatAmp: 0.6,
      offset: Math.random() * 10
    });
  }

  // Central Hero Floating Composition
  const centerGroup = new THREE.Group();
  scene.add(centerGroup);

  // Target coordinates for interactive mouse parallax
  let targetMouseX = 0;
  let targetMouseY = 0;
  let currentMouseX = 0;
  let currentMouseY = 0;

  window.addEventListener('mousemove', (e) => {
    targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  // Scroll Reactivity
  let scrollProgress = 0;
  window.addEventListener('scroll', () => {
    const rect = container.getBoundingClientRect();
    const windowH = window.innerHeight;
    if (rect.top < windowH && rect.bottom > 0) {
      scrollProgress = (windowH - rect.top) / (windowH + rect.height);
    }
  });

  // Animation Loop
  let clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);

    const elapsedTime = clock.getElapsedTime();

    // Smooth lerp mouse coordinates
    currentMouseX += (targetMouseX - currentMouseX) * 0.05;
    currentMouseY += (targetMouseY - currentMouseY) * 0.05;

    // Subtle camera drift based on mouse & scroll
    camera.position.x = currentMouseX * 1.8;
    camera.position.y = -currentMouseY * 1.5;
    camera.position.z = 18 - scrollProgress * 4;
    camera.lookAt(0, 0, 0);

    // Update each floating object
    objects.forEach((obj) => {
      obj.mesh.rotation.x += obj.rotSpeedX;
      obj.mesh.rotation.y += obj.rotSpeedY;

      const floatOffset = Math.sin(elapsedTime * obj.floatSpeed * 1000 + obj.offset) * obj.floatAmp;
      obj.mesh.position.y = obj.origY + floatOffset;
      obj.mesh.position.x = obj.origX + Math.cos(elapsedTime * 0.5 + obj.offset) * 0.15;
    });

    // Rotate center composition
    centerGroup.rotation.y = elapsedTime * 0.15 + currentMouseX * 0.5;
    centerGroup.rotation.x = Math.sin(elapsedTime * 0.2) * 0.1 - currentMouseY * 0.3;

    renderer.render(scene, camera);
  }

  animate();

  // Resize Handler
  window.addEventListener('resize', () => {
    if (!container) return;
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });
})();
