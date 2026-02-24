// Единственная ответственность: хранить состояние игры
const GameState = {
    player: { x: 200, y: 500, width: 30, height: 30 },
    chips: [],
    enemies: [],
    score: 0,
    gameOver: false,
    gameWon: false,
    
    init() {
        // Начальные фишки
        this.chips = [
            { x: 100, y: 100, collected: false },
            { x: 300, y: 200, collected: false },
            { x: 150, y: 300, collected: false },
            { x: 250, y: 400, collected: false },
            { x: 50, y: 450, collected: false }
        ];
        
        // Начальные враги
        this.enemies = [
            { x: 200, y: 50, speed: 2 },
            { x: 350, y: 150, speed: 3 }
        ];
        
        this.score = 0;
        this.gameOver = false;
        this.gameWon = false;
    },
    
    updateScore() {
        const collected = this.chips.filter(c => c.collected).length;
        this.score = collected;
        this.gameWon = collected >= 5;
    }
};