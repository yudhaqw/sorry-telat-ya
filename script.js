document.addEventListener('DOMContentLoaded', function() {
            const celebrateBtn = document.getElementById('celebrateBtn');
            const audio = document.getElementById('birthdayAudio');
            const floatingElements = document.getElementById('floatingElements');
            
            // Create floating elements
            function createFloatingElements() {
                const elements = ['🌸', '🌟', '💝', '🎀', '🌷', '✨'];
                const colors = ['#FF9999', '#FFD166', '#06D6A0', '#118AB2'];
                
                for (let i = 0; i < 12; i++) {
                    const element = document.createElement('div');
                    element.className = 'floating';
                    element.textContent = elements[Math.floor(Math.random() * elements.length)];
                    element.style.left = Math.random() * 100 + 'vw';
                    element.style.animationDuration = (Math.random() * 6 + 6) + 's';
                    element.style.animationDelay = Math.random() * 3 + 's';
                    element.style.color = colors[Math.floor(Math.random() * colors.length)];
                    element.style.fontSize = (Math.random() * 30 + 20) + 'px';
                    
                    floatingElements.appendChild(element);
                }
            }
            
            createFloatingElements();
            
            // Start music automatically (muted until user interaction)
            audio.volume = 0;
            audio.play().catch(e => console.log("Auto-play prevented"));
            
            celebrateBtn.addEventListener('click', function() {
                // Create confetti effect
                createConfetti();
                
                // Enable audio
                audio.volume = 0.4;
                audio.play().catch(e => console.log("Play prevented"));
                
                // Change button text and style
                this.textContent = 'Selamat Ulang Tahun Chasyifa!';
                this.style.background = 'linear-gradient(45deg, var(--mint), var(--sky))';
                this.style.animation = 'pulse 1.5s infinite';
                
                // Intensify background animation
                document.body.style.animation = 'gradientBG 8s ease infinite';
                
                // Create more floating elements
                setInterval(createFloatingElements, 3000);
                
                // Create name hearts animation
                createNameHearts();
            });
            
            function createConfetti() {
                const shapes = ['🌸', '💐', '🌺', '🌻', '🌼', '🏵️', '💮', '🌹', '🥀', '🌷'];
                
                for (let i = 0; i < 100; i++) {
                    const confetti = document.createElement('div');
                    confetti.className = 'floating';
                    confetti.textContent = shapes[Math.floor(Math.random() * shapes.length)];
                    confetti.style.left = Math.random() * 100 + 'vw';
                    confetti.style.top = -10 + 'px';
                    confetti.style.fontSize = (Math.random() * 25 + 15) + 'px';
                    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
                    confetti.style.animationDelay = Math.random() * 2 + 's';
                    
                    document.body.appendChild(confetti);
                    
                    setTimeout(() => {
                        confetti.remove();
                    }, 10000);
                }
            }
            
            function createNameHearts() {
                const nameTag = document.querySelector('.name');
                const colors = ['#FF9999', '#FFD166', '#06D6A0', '#118AB2'];
                
                for (let i = 0; i < 20; i++) {
                    const heart = document.createElement('span');
                    heart.textContent = '❤️';
                    heart.style.position = 'absolute';
                    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
                    heart.style.color = colors[Math.floor(Math.random() * colors.length)];
                    heart.style.animation = `floatUp ${Math.random() * 3 + 2}s linear forwards`;
                    heart.style.left = (Math.random() * 80 + 10) + '%';
                    heart.style.top = '100%';
                    heart.style.opacity = '0';
                    
                    nameTag.appendChild(heart);
                    
                    setTimeout(() => {
                        heart.style.opacity = '1';
                    }, 100);
                    
                    setTimeout(() => {
                        heart.remove();
                    }, 3000);
                }
            }
        });
  


   const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox.querySelector('img');
    document.querySelectorAll('.gallery-photo').forEach(img => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = img.src;
        });
    });
    lightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });