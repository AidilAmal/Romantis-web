(function(){
  const cfg = window.APP_CONFIG || {};
  const $ = s => document.querySelector(s);
  let index = 0;
  function render(turn=false){
    const page = $('#bookPage'); if(!page) return;
    const items = cfg.bookMemories || cfg.memories || [];
    const m = items[index] || {};
    if(turn){page.classList.add('turning');setTimeout(()=>page.classList.remove('turning'),360)}
    page.innerHTML = `
      <img src="${m.fullImg || m.img || ''}" alt="${escapeHtml(m.title || 'Memory')}">
      <span class="kicker">📖 Halaman ${index+1} dari ${items.length}</span>
      <h2>${escapeHtml(m.title || 'Memory')}</h2>
      <p>${escapeHtml(m.desc || '')}</p>`;
    const count = $('#bookCount'); if(count) count.textContent = `${index+1} / ${items.length}`;
  }
  function escapeHtml(str=''){
    return String(str).replace(/[&<>"]/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[s]));
  }
  document.addEventListener('DOMContentLoaded',()=>{
    render();
    $('#prevPage')?.addEventListener('click',()=>{const len=(cfg.bookMemories || cfg.memories || []).length;if(!len)return;index=(index-1+len)%len;render(true)});
    $('#nextPage')?.addEventListener('click',()=>{const len=(cfg.bookMemories || cfg.memories || []).length;if(!len)return;index=(index+1)%len;render(true)});
  });
})();
