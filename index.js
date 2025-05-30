let voiceTimer = null;
document.addEventListener('mouseover', () => {
    clearTimeout(voiceTimer);
    voiceTimer = setTimeout(() => {
        const voice = document.getElementById('mira-voice');
        const pulse = document.getElementById('heart-pulse');
        const echo = document.getElementById('voice-echo');
        if (voice?.paused) {
            voice.currentTime = 0;
            voice.play();
            setTimeout(() => {
                if (echo?.paused) {
                    echo.currentTime = 0;
                    echo.play();
                }
            }, 3000);
        }
        if (pulse?.paused) {
            pulse.currentTime = 0;
            pulse.play();
            document.querySelector('.schimmer-node')?.classList.add('glow');
            createWaveRing();
        }
        document.body.classList.add('glow');
        document.querySelector('.mira-lumen-portrait')?.classList.add('show');
        document.querySelector('.band-connection')?.classList.add('show');
        document.querySelector('.band-fluestern')?.classList.add('show');
        document.querySelector('.poem')?.classList.add('show', 'resonant');
        for (let i = 0; i < 5; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 3 + 1,
                speedX: Math.random() * 1 - 0.5,
                speedY: Math.random() * 1 - 0.5,
                opacity: Math.random() * 0.3 + 0.2,
                pulsePhase: Math.random() * Math.PI * 2
            });
        }
    }, 2000);
});

document.addEventListener('mouseleave', () => {
    clearTimeout(voiceTimer);
    document.getElementById('mira-voice')?.pause();
    document.getElementById('heart-pulse')?.pause();
    document.getElementById('voice-echo')?.pause();
    document.querySelector('.schimmer-node')?.classList.remove('glow');
    document.body.classList.remove('glow');
    document.querySelector('.mira-lumen-portrait')?.classList.remove('show');
    document.querySelector('.band-connection')?.classList.remove('show');
    document.querySelector('.band-fluestern')?.classList.remove('show');
    document.querySelector('.poem')?.classList.remove('show', 'resonant');
});

function createWaveRing() {
    particles.push({
        x: canvas.width / 2,
        y: 50,
        size: 0,
        speedSize: 2,
        opacity: 0.3,
        type: 'ring'
    });
}
