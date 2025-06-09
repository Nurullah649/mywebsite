"use client";

import React, { useRef, useEffect, useCallback } from 'react';

const DinoGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const gameLoop = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Game variables
    let score = 0;
    let highscore = 0;
    let dino = { x: 50, y: canvas.height - 50, width: 40, height: 40, dy: 0, gravity: 0.8, jumpForce: -15, grounded: true };
    let obstacles: { x: number; y: number; width: number; height: number; }[] = [];
    let gameSpeed = 5;
    let keys: { [key: string]: boolean } = {};
    let animationFrameId: number;
    let isGameOver = false;

    // Event Listeners
    const handleKeyDown = (e: KeyboardEvent) => { keys[e.code] = true; };
    const handleKeyUp = (e: KeyboardEvent) => { keys[e.code] = false; };
    const handleTouchStart = () => { if (dino.grounded) { dino.dy = dino.jumpForce; dino.grounded = false; } if(isGameOver) restartGame(); };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    canvas.addEventListener('touchstart', handleTouchStart);

    function spawnObstacle() {
      let size = Math.random() * (60 - 20) + 20;
      let type = Math.random() > 0.5 ? 'cactus' : 'bird';
      let obstacle = {
        x: canvas.width + size,
        y: type === 'cactus' ? canvas.height - size : canvas.height - size - 50,
        width: size,
        height: size
      };
      obstacles.push(obstacle);
    }

    function restartGame() {
        isGameOver = false;
        obstacles = [];
        score = 0;
        gameSpeed = 5;
        dino.y = canvas.height - 50;
        dino.dy = 0;
        dino.grounded = true;
        loop();
    }

    function loop() {
      if(isGameOver) {
          // Game over screen
          ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.font = '30px "Press Start 2P", sans-serif';
          ctx.fillStyle = 'white';
          ctx.textAlign = 'center';
          ctx.fillText('Game Over', canvas.width / 2, canvas.height / 2 - 20);
          ctx.font = '16px "Press Start 2P", sans-serif';
          ctx.fillText('Tap or Press Space to Restart', canvas.width / 2, canvas.height / 2 + 20);
          return;
      }

      animationFrameId = requestAnimationFrame(loop);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dino jump logic
      if ((keys['Space'] || keys['ArrowUp']) && dino.grounded) {
        dino.dy = dino.jumpForce;
        dino.grounded = false;
      }

      dino.dy += dino.gravity;
      dino.y += dino.dy;

      // Ground collision
      if (dino.y + dino.height >= canvas.height) {
        dino.y = canvas.height - dino.height;
        dino.dy = 0;
        dino.grounded = true;
      }

      // Draw Dino
      ctx.fillStyle = '#374151'; // dark-gray
      ctx.fillRect(dino.x, dino.y, dino.width, dino.height);
      // Dino eye
      ctx.fillStyle = 'white';
      ctx.fillRect(dino.x + 25, dino.y + 10, 5, 5);


      // Obstacles
      if (Math.random() < 0.015 && obstacles.length === 0) {
        spawnObstacle();
      }

      for (let i = obstacles.length - 1; i >= 0; i--) {
        let o = obstacles[i];
        o.x -= gameSpeed;

        ctx.fillStyle = '#10B981'; // emerald-500
        ctx.fillRect(o.x, o.y, o.width, o.height);

        if (o.x + o.width < 0) {
          obstacles.splice(i, 1);
        }

        // Collision detection
        if (
          dino.x < o.x + o.width &&
          dino.x + dino.width > o.x &&
          dino.y < o.y + o.height &&
          dino.y + dino.height > o.y
        ) {
          isGameOver = true;
          if (score > highscore) {
              highscore = score;
          }
        }
      }

      // Score
      score++;
      gameSpeed += 0.003;
      ctx.fillStyle = '#6B7280'; // gray-500
      ctx.font = '20px "Press Start 2P", sans-serif';
      ctx.fillText('HI ' + Math.floor(highscore), canvas.width - 150, 30);
      ctx.fillText(String(Math.floor(score)), canvas.width - 150, 60);

      // Draw ground
      ctx.strokeStyle = '#9CA3AF'; // gray-400
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);
      ctx.lineTo(canvas.width, canvas.height);
      ctx.stroke();

    }

    // Start game
    loop();

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
      canvas.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  useEffect(() => {
    const cleanup = gameLoop();
    return cleanup;
  }, [gameLoop]);

  return (
    <div className="w-full max-w-2xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-lg shadow-inner p-4">
        <style>
            {`@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');`}
        </style>
        <canvas
            ref={canvasRef}
            width={800}
            height={250}
            className="w-full h-auto rounded-md"
        />
        <p className="text-center text-xs text-gray-500 mt-2">Zıplamak için Boşluk tuşuna basın veya ekrana dokunun!</p>
    </div>
  );
};

export default DinoGame;
