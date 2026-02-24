// Единственная ответственность: рисовать на canvas
const Renderer = {
    canvas: null,
    ctx: null,
    
    init(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
    },
    
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    
    drawPlayer() {
        this.ctx.fillStyle = '#ff3333';
        this.ctx.fillRect(
            GameState.player.x, 
            GameState.player.y, 
            GameState.player.width, 
            GameState.player.height
        );
    },
    
    drawChips() {
        GameState.chips.forEach(chip => {
            if (!chip.collected) {
                this.ctx.fillStyle = '#3333ff';
                this.ctx.beginPath();
                this.ctx.arc(chip.x, chip.y, 10, 0, Math.PI * 2);
                this.ctx.fill();
                // Рисуем букву "C" (chip)
                this.ctx.fillStyle = 'white';
                this.ctx.font = '12px Arial';
                this.ctx.fillText('C', chip.x - 5, chip.y + 5);
            }
        });
    },
    
    drawEnemies() {
        GameState.enemies.forEach(enemy => {
            this.ctx.fillStyle = '#ffcc00';
            this.ctx.fillRect(enemy.x - 15, enemy.y - 15, 30, 30);
            // Рисуем злые глаза
            this.ctx.fillStyle = 'black';
            this.ctx.fillRect(enemy.x - 10, enemy.y - 10, 5, 5);
            this.ctx.fillRect(enemy.x + 5, enemy.y - 10, 5, 5);
        });
    },
    
    drawGameOver() {
        this.ctx.fillStyle = 'rgba(0,0,0,0.7)';
        this.ctx.fillRect(0, 0, 400, 600);
        this.ctx.fillStyle = 'white';
        this.ctx.font = '30px Arial';
        this.ctx.fillText('GAME OVER', 50, 300);
    },
    
    drawWin() {
        this.ctx.fillStyle = 'rgba(0,255,0,0.2)';
        this.ctx.fillRect(0, 0, 400, 600);
        this.ctx.fillStyle = 'white';
        this.ctx.font = '30px Arial';
        this.ctx.fillText('🏆 ПОБЕДА! 🏆', 50, 300);
        this.ctx.font = '20px Arial';
        this.ctx.fillText('Собраны все фишки!', 80, 350);
    },
    
    updateScoreDisplay() {
        document.getElementById('chipsCount').textContent = GameState.score;
    }
};