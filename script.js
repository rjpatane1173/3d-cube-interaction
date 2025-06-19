// Select DOM elements
const container = document.querySelector('.container');
const cube = document.querySelector('.cube');
const frontFace = document.querySelector('.face.front');
const rightFace = document.querySelector('.face.right');
const leftFace = document.querySelector('.face.left');
const bottomFace = document.querySelector('.face.bottom');
const yesButton = document.querySelector('.button.yes');
const noButton = document.querySelector('.button.no');

// Rotate cube based on mouse movement
container.addEventListener('mousemove', (event) => {
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 40;
    const rotateX = ((y / rect.height) - 0.5) * -90;

    cube.style.transform = `translate(-50%, -50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

// Reset cube rotation on mouse leave
container.addEventListener('mouseleave', () => {
    cube.style.transform = 'translate(-50%, -50%) rotateX(0deg) rotateY(0deg)';
});

// Yes button hover effect
yesButton.addEventListener('mouseenter', () => {
    frontFace.style.backgroundColor = 'green';
    bottomFace.style.backgroundColor = 'green';
    rightFace.style.backgroundColor = 'green';
});

// No button hover effect
noButton.addEventListener('mouseenter', () => {
    frontFace.style.backgroundColor = 'red';
    leftFace.style.backgroundColor = 'red';
    bottomFace.style.backgroundColor = 'red';
});

// Reset face colors on button leave
yesButton.addEventListener('mouseleave', () => {
    frontFace.style.backgroundColor = 'rgba(246, 255, 0, 0.8)';
    rightFace.style.backgroundColor = 'rgba(246, 255, 0, 0.8)';
    bottomFace.style.backgroundColor = 'rgba(246, 255, 0, 0.8)';
});
noButton.addEventListener('mouseleave', () => {
    frontFace.style.backgroundColor = 'rgba(246, 255, 0, 0.8)';
    bottomFace.style.backgroundColor = 'rgba(246, 255, 0, 0.8)';
    leftFace.style.backgroundColor = 'rgba(246, 255, 0, 0.8)';
});
