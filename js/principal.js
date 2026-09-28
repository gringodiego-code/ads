const target = new Date("2026-11-14T06:00:00-03:00").getTime();

function tick() {
  const countdown = document.querySelector("#countdown");
  if (!countdown) return;
  const remaining = Math.max(0, target - Date.now());
  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining / 3600000) % 24);
  const minutes = Math.floor((remaining / 60000) % 60);
  countdown.innerHTML = `<span><b>${days}</b>días</span><span><b>${hours}</b>horas</span><span><b>${minutes}</b>min</span>`;
}

tick();
setInterval(tick, 60000);
