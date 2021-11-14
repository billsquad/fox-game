import initButtons from "./buttons";
import { TICK_RATE } from "./contants";
import gameState from "./gameState";

async function init() {
  console.log("starting...");
  initButtons(gameState.handleUserAction);

  let nextTimeToTick = Date.now();

  function nextAnimationFrame() {
    const now = Date.now();

    if (nextTimeToTick <= now) {
      gameState.tick();
      nextTimeToTick = now + TICK_RATE;
    }

    requestAnimationFrame(nextAnimationFrame);
  }

  nextAnimationFrame();
}

init();
