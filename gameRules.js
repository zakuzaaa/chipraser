// Единственная ответственность: применять правила игры
const GameRules = {
    updateEnemies() {
        if (GameState.gameOver || GameState.gameWon) return;
        
        GameState.enemies.forEach(enemy => {
            // Враги движутся вниз
            enemy.y += enemy.speed;
            
            // Возврат наверх, если ушли за экран
            if (enemy.y > 620) {
                enemy.y = -20;
                enemy.x = Math.random() * 370;
            }
            
            // Враги немного следят за игроком по X
            if (enemy.x < GameState.player.x) {
                enemy.x += 0.5;
            } else {
                enemy.x -= 0.5;
            }
        });
    },
    
    getGameStatus() {
        if (GameState.gameOver) return 'LOSE';
        if (GameState.gameWon) return 'WIN';
        return 'PLAYING';
    }
};