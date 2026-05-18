(function(){
  const cfg = window.APP_CONFIG || {};
  const $ = s => document.querySelector(s);
  let index = 0;
  let startX = 0;
  let startY = 0;
  let dragging = false;

  function escapeHtml(str=''){
    return String(str).replace(/[&<>"]/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[s]));
  }

  function mimeFromPath(path=''){
    const clean = String(path).split('?')[0].toLowerCase();
    if(clean.endsWith('.webm')) return 'video/webm';
    if(clean.endsWith('.ogg') || clean.endsWith('.ogv')) return 'video/ogg';
    if(clean.endsWith('.mov')) return 'video/quicktime';
    return 'video/mp4';
  }

  function pauseCurrentVideo(){
    const v = $('#videoBookPage video');
    if(v && !v.paused) v.pause();
  }

  function render(turn=false, direction='next'){
    const page = $('#videoBookPage');
    if(!page) return;
    const items = cfg.videos || [];
    if(!items.length){
      page.innerHTML = `
        <div class="empty-video-book">
          <div class="empty-video-icon">🎞️</div>
          <h2>Belum ada video</h2>
          <p>Tambahkan data video di <b>assets/js/config.js</b>, lalu masukkan file videonya ke folder <b>assets/video</b>.</p>
        </div>`;
      const count = $('#videoCount'); if(count) count.textContent = '0 / 0';
      return;
    }

    pauseCurrentVideo();
    const item = items[index] || {};
    if(turn){
      page.classList.remove('turn-next','turn-prev');
      void page.offsetWidth;
      page.classList.add(direction === 'prev' ? 'turn-prev' : 'turn-next');
      setTimeout(()=>page.classList.remove('turn-next','turn-prev'),420);
    }

    const title = escapeHtml(item.title || `Video ${index+1}`);
    const date = escapeHtml(item.date || 'Kenangan video');
    const desc = escapeHtml(item.desc || 'Tulis cerita video ini di config.');
    const video = item.video || '';
    const poster = item.poster || '';

    page.innerHTML = `
      <div class="video-page-grid">
        <div class="video-frame">
          <video controls playsinline preload="metadata" poster="${poster}">
            <source src="${video}" type="${mimeFromPath(video)}">
            Browser kamu belum support pemutar video.
          </video>
        </div>
        <div class="video-page-text">
          <span class="kicker">🎬 Halaman ${index+1} dari ${items.length}</span>
          <h2>${title}</h2>
          <p class="video-date">${date}</p>
          <p>${desc}</p>
          <div class="btn-row">
            <a class="btn btn-soft" href="${video}" target="_blank" rel="noopener">Buka video full</a>
          </div>
        </div>
      </div>`;

    const count = $('#videoCount');
    if(count) count.textContent = `${index+1} / ${items.length}`;
  }

  function move(step){
    const len = (cfg.videos || []).length;
    if(!len) return;
    index = (index + step + len) % len;
    render(true, step < 0 ? 'prev' : 'next');
  }

  document.addEventListener('DOMContentLoaded',()=>{
    render(false);
    $('#prevVideo')?.addEventListener('click',()=>move(-1));
    $('#nextVideo')?.addEventListener('click',()=>move(1));

    const view = $('#videoBookView');
    if(view){
      view.addEventListener('pointerdown', e=>{
        if(e.target.closest('video, button, a')) return;
        dragging = true;
        startX = e.clientX;
        startY = e.clientY;
        view.classList.add('dragging');
        view.setPointerCapture?.(e.pointerId);
      });
      view.addEventListener('pointerup', e=>{
        if(!dragging) return;
        dragging = false;
        view.classList.remove('dragging');
        view.releasePointerCapture?.(e.pointerId);
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        if(Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy)){
          move(dx < 0 ? 1 : -1);
        }
      });
      view.addEventListener('pointercancel', ()=>{dragging=false;view.classList.remove('dragging')});
      view.addEventListener('keydown', e=>{
        if(e.key === 'ArrowLeft') move(-1);
        if(e.key === 'ArrowRight') move(1);
      });
    }
  });
})();
