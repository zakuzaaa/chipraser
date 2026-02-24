// Единственная ответственность: запускать игровой цикл
window.onload = function() {
    // Инициализация всех компонентов
    GameState.init();
    Renderer.init('gameCanvas');
    InputHandler.init();
    
   
    Renderer.updateScoreDisplay();
    
  
    function gameLoop() {
      
        InputHandler.handleMovement();
        
        // Применение правил
        GameRules.updateEnemies();
        
        // Проверка столкновений
        CollisionSystem.checkCollisions();
        
        // Отрисовка
        Renderer.clear();
        Renderer.drawChips();
        Renderer.drawEnemies();
        Renderer.drawPlayer();
        
        // Отрисовка статуса игры
        const status = GameRules.getGameStatus();
        if (status === 'LOSE') {
            Renderer.drawGameOver();
        } else if (status === 'WIN') {
            Renderer.drawWin();
        }
        
        // Обновление счетчика
        Renderer.updateScoreDisplay();
        
        requestAnimationFrame(gameLoop);
    }
    
    gameLoop();
};