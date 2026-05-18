(function(){
  const cfg = window.APP_CONFIG || {};
  const $ = s => document.querySelector(s);
  const key = 'customSpotifySongs';
  function normalizeSpotify(url){
    if(!url) return '';
    let u = url.trim();
    if(u.includes('/track/') && !u.includes('/embed/')) u = u.replace('open.spotify.com/', 'open.spotify.com/embed/');
    if(u.includes('/playlist/') && !u.includes('/embed/')) u = u.replace('open.spotify.com/', 'open.spotify.com/embed/');
    return u;
  }
  function getSongs(){
    const custom = JSON.parse(localStorage.getItem(key) || '[]');
    return [...(cfg.spotifyEmbeds || []), ...custom];
  }
  function render(){
    const list = $('#songList'); if(!list) return;
    const songs = getSongs();
    list.innerHTML = songs.map((s,i)=>`
      <article class="song-card">
        <div class="song-cover">♫</div>
        <div>
          <h3>${escapeHtml(s.title || 'Lagu romantis')}</h3>
          <p>${escapeHtml(s.artist || 'Spotify')}</p>
        </div>
        ${s.url ? `<iframe class="spotify-frame" src="${normalizeSpotify(s.url)}" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`:''}
      </article>`).join('');
  }
  function escapeHtml(str=''){
    return String(str).replace(/[&<>"]/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[s]));
  }
  document.addEventListener('DOMContentLoaded',()=>{
    render();
    $('#songForm')?.addEventListener('submit',e=>{
      e.preventDefault();
      const title = $('#songTitle').value.trim();
      const artist = $('#songArtist').value.trim();
      const url = normalizeSpotify($('#songUrl').value.trim());
      if(!title || !url) return alert('Judul dan link Spotify wajib diisi yaa.');
      const custom = JSON.parse(localStorage.getItem(key) || '[]');
      custom.push({title,artist,url});
      localStorage.setItem(key, JSON.stringify(custom));
      e.target.reset();
      render();
    });
    $('#clearSongs')?.addEventListener('click',()=>{localStorage.removeItem(key);render();});
  });
})();
