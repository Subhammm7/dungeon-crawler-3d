const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("game-container").appendChild(renderer.domElement);

const player = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: "blue" }));
scene.add(player);
camera.position.z = 5;

function generateDungeon() {
    for (let i = 0; i < 10; i++) {
        let wall = new THREE.Mesh(new THREE.BoxGeometry(1, 2, 1), new THREE.MeshBasicMaterial({ color: "gray" }));
        wall.position.set(Math.random() * 10 - 5, 0, Math.random() * 10 - 5);
        scene.add(wall);
    }
}
generateDungeon();

const enemies = [];
for (let i = 0; i < 3; i++) {
    let enemy = new THREE.Mesh(new THREE.SphereGeometry(0.5), new THREE.MeshBasicMaterial({ color: "red" }));
    enemy.position.set(Math.random() * 5, 0, Math.random() * 5);
    scene.add(enemy);
    enemies.push(enemy);
}

const bossMaterial = new THREE.MeshBasicMaterial({ color: "purple", emissive: "red", emissiveIntensity: 2 });
const boss = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.5, 1.5), bossMaterial);
boss.position.set(0, 0, -5);
scene.add(boss);

document.getElementById("attackButton").addEventListener("click", () => {
    enemies.forEach(enemy => {
        if (Math.abs(player.position.x - enemy.position.x) < 1 && Math.abs(player.position.z - enemy.position.z) < 1) {
            scene.remove(enemy);
        }
    });
});

document.getElementById("magicButton").addEventListener("click", () => {
    boss.position.y += 0.5;
    setTimeout(() => {
        boss.position.y -= 0.5;
    }, 500);
});

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
