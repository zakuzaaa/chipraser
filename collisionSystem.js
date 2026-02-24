// Единственная ответственность: проверять пересечения объектов
const CollisionSystem = {
    checkCollisions() {
        if (GameState.gameOver || GameState.gameWon) return;
        
        this.checkChipCollisions();
        this.checkEnemyCollisions();
    },
    
    checkChipCollisions() {
        GameState.chips.forEach(chip => {
            if (!chip.collected) {
                // Проверяем, коснулся ли игрок фишки
                if (Math.abs(GameState.player.x - chip.x) < 25 &&
                    Math.abs(GameState.player.y - chip.y) < 25) {
                    chip.collected = true;
                    GameState.updateScore();
                }
            }
        });
    },
    
    checkEnemyCollisions() {
        GameState.enemies.forEach(enemy => {
            // Проверяем столкновение с врагом
            if (Math.abs(GameState.player.x - enemy.x) < 30 &&
                Math.abs(GameState.player.y - enemy.y) < 30) {
                GameState.gameOver = true;
            }
        });
    }
};