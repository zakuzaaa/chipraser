// Единственная ответственность: обрабатывать нажатия клавиш
const InputHandler = {
    keys: {},
    
    init() {
        window.addEventListener('keydown', (e) => {
            this.keys[e.key] = true;
        });
        
        window.addEventListener('keyup', (e) => {
            this.keys[e.key] = false;
        });
    },
    
    handleMovement() {
        if (GameState.gameOver || GameState.gameWon) return;
        
        const speed = 5;
        
        if (this.keys['ArrowLeft'] && GameState.player.x > 0) {
            GameState.player.x -= speed;
        }
        if (this.keys['ArrowRight'] && GameState.player.x < 370) {
            GameState.player.x += speed;
        }
        if (this.keys['ArrowUp'] && GameState.player.y > 0) {
            GameState.player.y -= speed;
        }
        if (this.keys['ArrowDown'] && GameState.player.y < 570) {
            GameState.player.y += speed;
        }
        
        // Перезапуск по R
        if (this.keys['r'] || this.keys['R']) {
            GameState.init();
        }
    }
};