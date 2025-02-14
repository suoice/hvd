const envelopes = document.querySelectorAll('.envelope');

envelopes.forEach(envelope => {
    envelope.addEventListener('mouseenter', () => {
        envelope.classList.add('open');
    });

    envelope.addEventListener('mouseleave', () => {
        envelope.classList.remove('open');
    });

    // For mobile devices (click to open/close)
    envelope.addEventListener('click', () => {
        envelope.classList.toggle('open');
    });
});

function openLetter(envelope) {
    envelope.classList.toggle('open');
}

// Function to play music
function playMusic() {
    const backgroundMusic = document.getElementById('backgroundMusic');

    // Check if the music is already playing
    if (backgroundMusic.paused) {
        backgroundMusic.play().catch(error => {
            console.log("Music playback failed. Please interact with the page first.");
        });
    }
}

function openModal(src) {
    document.getElementById('modalImage').src = src;
    document.getElementById('imageModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}