const GI_TOTAL = 5;

function getState() {
  return JSON.parse(localStorage.getItem('singola_state') || '{"gi":[false,false,false,false,false],"score":0,"user":null}');
}
function setState(state) {
  localStorage.setItem('singola_state', JSON.stringify(state));
}
function markGiDone(index, points = 20) {
  const state = getState();
  if (!state.gi[index]) {
    state.gi[index] = true;
    state.score += points;
    setState(state);
  }
}
function renderProgress(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const state = getState();
  el.innerHTML = '';
  state.gi.forEach((done, i) => {
    const row = document.createElement('div');
    row.className = 'progress-item';
    row.innerHTML = `<div><strong>GI ${i+1}</strong></div>
      <div class="logo-gi ${done ? 'done' : 'pending'}">${done ? '✔' : 'GI'}</div>`;
    el.appendChild(row);
  });
}
function updateProfileActions() {
  const wrap = document.querySelector('.profile-actions');
  if (!wrap) return;
  const state = getState();
  if (state.user) {
    wrap.innerHTML = `<a href="profile.html" class="btn btn-secondary">${state.user.name}</a>`;
  } else {
    wrap.innerHTML = `
      <button class="btn btn-secondary" onclick="fakeLogin()">เข้าสู่ระบบ</button>
      <button class="btn btn-primary" onclick="fakeSignup()">สมัครสมาชิก</button>
    `;
  }
}
function fakeLogin() {
  const state = getState();
  state.user = { name: 'ผู้เล่นตัวอย่าง', email: 'player@gmail.com' };
  setState(state);
  location.reload();
}
function fakeSignup() { fakeLogin(); }

function initMascot(message) {
  const text = document.getElementById('mascot-text');
  if (text && message) text.textContent = message;
}

document.addEventListener('DOMContentLoaded', () => {
  updateProfileActions();
  renderProgress('gi-progress');
});
