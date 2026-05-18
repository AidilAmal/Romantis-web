(function(){
  const cfg = window.APP_CONFIG || {};

  function qs(sel, root=document){return root.querySelector(sel)}
  function qsa(sel, root=document){return [...root.querySelectorAll(sel)]}

  function initNav(){
    const toggle = qs('.menu-toggle');
    const links = qs('.nav-links');
    if(toggle && links){
      toggle.addEventListener('click', () => links.classList.toggle('open'));
    }
    const path = location.pathname.split('/').pop() || 'index.html';
    qsa('.nav-links a').forEach(a => {
      const href = a.getAttribute('href');
      if(href === path) a.classList.add('active');
    });
  }

  function initCanvas(){
    const canvas = qs('#particleCanvas');
    if(!canvas) return;
    const ctx = canvas.getContext('2d');
    const particles = [];
    const isDark = document.body.classList.contains('dark-love');
    let w = 0, h = 0, dpr = 1;

    function resize(){
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.width = Math.floor(innerWidth*dpr);
      h = canvas.height = Math.floor(innerHeight*dpr);
      canvas.style.width = innerWidth+'px';
      canvas.style.height = innerHeight+'px';
      particles.length = 0;
      const count = isDark ? 170 : 85;
      for(let i=0;i<count;i++){
        particles.push({
          x:Math.random()*w,
          y:Math.random()*h,
          r:(Math.random()*2.2+0.7)*dpr,
          a:Math.random()*.6+.2,
          vx:(Math.random()-.5)*.18*dpr,
          vy:(Math.random()-.5)*.18*dpr,
          t:Math.random()*Math.PI*2
        });
      }
    }
    function heart(ctx,x,y,s,a){
      ctx.save();
      ctx.translate(x,y);ctx.rotate(Math.PI/4);ctx.globalAlpha=a;
      ctx.fillStyle = isDark ? 'rgba(255,85,205,.92)' : 'rgba(255,95,168,.62)';
      ctx.fillRect(-s/2,-s/2,s,s);
      ctx.beginPath();ctx.arc(-s/2,0,s/2,0,Math.PI*2);ctx.arc(0,-s/2,s/2,0,Math.PI*2);ctx.fill();
      ctx.restore();
    }
    function draw(){
      ctx.clearRect(0,0,w,h);
      particles.forEach(p=>{
        p.x += p.vx; p.y += p.vy; p.t += .012;
        if(p.x<0)p.x=w;if(p.x>w)p.x=0;if(p.y<0)p.y=h;if(p.y>h)p.y=0;
        if(isDark){
          ctx.beginPath();ctx.globalAlpha = p.a + Math.sin(p.t)*.18;ctx.fillStyle='rgba(255,212,245,.95)';ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();
        }else{
          heart(ctx,p.x,p.y,p.r*5,p.a*.55);
        }
      });
      requestAnimationFrame(draw);
    }
    resize();draw();
    addEventListener('resize', resize);
  }

  function initFloatHearts(){
    const wrap = qs('.float-hearts');
    if(!wrap) return;
    wrap.innerHTML = '';
    for(let i=0;i<20;i++){
      const s = document.createElement('span');
      s.style.left = Math.random()*100 + '%';
      s.style.animationDuration = (9 + Math.random()*9) + 's';
      s.style.animationDelay = (-Math.random()*10) + 's';
      s.style.opacity = Math.random()*.6+.2;
      s.style.transform = `scale(${Math.random()*.8+.5}) rotate(45deg)`;
      wrap.appendChild(s);
    }
  }

  function renderHome(){
    const hero = qs('#heroImage');
    if(hero) hero.src = cfg.heroImage || '';
    const title = qs('#homeTitle'); if(title) title.textContent = cfg.messages?.homeTitle || '';
    const text = qs('#homeText'); if(text) text.textContent = cfg.messages?.homeText || '';
    const grid = qs('#galleryGrid');
    if(grid){
      grid.innerHTML = (cfg.memories || []).map((m,idx)=>`
        <a class="memory-card" href="detail.html?id=${encodeURIComponent(m.id)}" aria-label="Buka detail ${escapeHtml(m.title)}">
          <img src="${m.img}" alt="${escapeHtml(m.title)}" loading="lazy">
          <div class="memory-info">
            <h3>${escapeHtml(m.title)}</h3>
            <p>${escapeHtml(m.date || 'Kenangan kita')} · klik buat baca detail</p>
          </div>
        </a>`).join('');
    }
  }

  function renderDetail(){
    const root = qs('#detailRoot');
    if(!root) return;
    const id = new URLSearchParams(location.search).get('id');
    const item = (cfg.memories || []).find(m=>m.id===id) || (cfg.memories || [])[0];
    if(!item){ root.innerHTML = '<p>Belum ada data foto.</p>'; return; }
    root.innerHTML = `
      <div class="detail-shell">
        <img src="${item.fullImg || item.img}" alt="${escapeHtml(item.title)}">
        <div class="detail-text">
          <span class="kicker">💌 ${escapeHtml(item.date || 'Memory')}</span>
          <h1>${escapeHtml(item.title)}</h1>
          <p class="lead">${escapeHtml(item.desc || '')}</p>
          <div class="btn-row">
            <a class="btn btn-primary" href="home.html#galleryGrid">Balik ke foto lain</a>
            <a class="btn btn-soft" href="love.html">Lihat Love</a>
          </div>
        </div>
      </div>`;
  }

  function initLoveExperience(){
    const stage = qs('#loveStage');
    const canvas = qs('#loveHeartCanvas');
    const ring = qs('#planetRing');
    const repairBtn = qs('#repairHeartBtn');
    if(!stage || !canvas || !ring || !repairBtn) return;

    const ctx = canvas.getContext('2d');
    const settings = cfg.loveSettings || {};
    const memories = (cfg.lovePlanets && cfg.lovePlanets.length ? cfg.lovePlanets : cfg.memories) || [];
    const words = cfg.loveWords || [];
    const planets = (memories.length ? memories : [{title:'Foto 1', img:'assets/img/photo-1.svg', desc:'Kenangan kita.'}]).map((m,i)=>({
      title: m.title || `Foto ${i+1}`,
      caption: m.caption || m.short || words[i % Math.max(words.length,1)] || m.date || 'Kenangan kita',
      desc: m.desc || m.caption || words[i % Math.max(words.length,1)] || 'Kenangan kita.',
      img: m.img || 'assets/img/photo-1.svg',
      fullImg: m.fullImg || m.img || 'assets/img/photo-1.svg'
    }));

    // Jumlah foto = jumlah planet. Kalau mau nambah/mengurangi planet, cukup edit lovePlanets di config.js.
    ring.innerHTML = planets.map((p,i)=>`
      <button class="love-planet" type="button" data-index="${i}" aria-label="Buka ${escapeHtml(p.title)}">
        <span class="planet-photo"><img src="${p.img}" alt="${escapeHtml(p.title)}"></span>
        <span class="planet-title">${escapeHtml(p.title)}</span>
        <span class="planet-caption">${escapeHtml(p.caption)}</span>
      </button>`).join('');

    const planetEls = qsa('.love-planet', ring);
    const autoBtn = qs('#autoModeBtn');
    const manualBtn = qs('#manualModeBtn');
    const modal = qs('#loveModal');
    const modalImg = qs('#loveModalImg');
    const modalTitle = qs('#loveModalTitle');
    const modalCaption = qs('#loveModalCaption');

    let w = 0, h = 0, dpr = 1;
    let particles = [];
    let repaired = false;
    let auto = true;
    let dragging = false;
    let moved = false;
    let lastX = 0;
    let lastY = 0;
    let lastDragTime = 0;
    let dragVelocity = 0;
    let targetAngle = -Math.PI / 2;
    let currentAngle = targetAngle;
    let raf = null;

    const particleCount = Number(settings.particleCount || 780);
    const orbitSpeed = Number(settings.orbitSpeed || 0.00072); // makin kecil = makin pelan

    function resizeLoveCanvas(){
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = stage.getBoundingClientRect();
      w = Math.max(1, Math.floor(rect.width * dpr));
      h = Math.max(1, Math.floor(rect.height * dpr));
      canvas.width = w;
      canvas.height = h;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';

      const targets = makeHeartTargets(particleCount);
      if(!particles.length){
        particles = targets.map((target, i)=>makeParticle(target, i));
      }else{
        particles.forEach((p,i)=>{
          const target = targets[i % targets.length];
          p.tx = target.x;
          p.ty = target.y;
          p.edge = target.edge;
        });
      }
      updatePlanets(true);
    }

    function makeHeartTargets(count){
      const targets = [];
      const cx = w / 2;
      const cy = h * 0.445;
      const heartW = Math.min(w * 0.47, h * 0.62);
      const heartH = Math.min(w * 0.42, h * 0.58);
      const outlineCount = Math.floor(count * 0.26);

      // 1) Titik pinggir hati, biar bentuk love-nya kebaca jelas.
      for(let i=0;i<outlineCount;i++){
        const t = (i / outlineCount) * Math.PI * 2;
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y = 13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t);
        targets.push({
          x: cx + (x / 16) * (heartW * 0.50) + (Math.random() - .5) * 2.2 * dpr,
          y: cy - (y / 17) * (heartH * 0.50) + (Math.random() - .5) * 2.2 * dpr,
          edge: true
        });
      }

      // 2) Titik isi hati pakai rumus implicit heart, bukan sekadar garis random.
      while(targets.length < count){
        const nx = Math.random() * 2.7 - 1.35;
        const ny = Math.random() * 2.55 - 1.15;
        const a = nx*nx + ny*ny - 1;
        const inside = (a*a*a - nx*nx*ny*ny*ny) <= 0;
        if(!inside) continue;
        const density = Math.sqrt(Math.random());
        targets.push({
          x: cx + nx * (heartW * 0.39) * density + (Math.random() - .5) * 3.2 * dpr,
          y: cy - (ny - 0.10) * (heartH * 0.39) * density + (Math.random() - .5) * 3.2 * dpr,
          edge: false
        });
      }

      return targets.sort(()=>Math.random() - .5);
    }

    function makeParticle(target, index){
      const edge = Math.floor(Math.random()*4);
      let x = Math.random()*w;
      let y = Math.random()*h;
      if(edge === 0) y = -70*dpr;
      if(edge === 1) x = w + 70*dpr;
      if(edge === 2) y = h + 70*dpr;
      if(edge === 3) x = -70*dpr;
      return {
        x, y,
        tx: target.x,
        ty: target.y,
        edge: target.edge,
        vx: (Math.random()-.5) * 1.35 * dpr,
        vy: (Math.random()-.5) * 1.35 * dpr,
        size: (Math.random()*1.9 + (target.edge ? 1.35 : 0.9)) * dpr,
        alpha: Math.random()*0.48 + (target.edge ? 0.46 : 0.34),
        hue: 315 + Math.random()*28,
        twinkle: Math.random() * Math.PI * 2,
        speed: 0.065 + Math.random() * 0.045
      };
    }

    function drawHeartGuide(){
      if(!repaired) return;
      ctx.save();
      ctx.translate(w/2, h*0.445);
      ctx.scale(Math.min(w * 0.47, h * 0.62) / 36, Math.min(w * 0.42, h * 0.58) / 38);
      ctx.beginPath();
      for(let i=0;i<=160;i++){
        const t = (i / 160) * Math.PI * 2;
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y = 13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t);
        if(i === 0) ctx.moveTo(x, -y);
        else ctx.lineTo(x, -y);
      }
      ctx.closePath();
      ctx.globalCompositeOperation = 'lighter';
      ctx.fillStyle = 'rgba(255, 68, 189, .055)';
      ctx.shadowColor = 'rgba(255, 65, 190, .56)';
      ctx.shadowBlur = 26 * dpr;
      ctx.fill();
      ctx.restore();
    }

    function drawLoveParticles(){
      ctx.clearRect(0,0,w,h);
      drawHeartGuide();
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      for(const p of particles){
        p.twinkle += 0.025;
        if(repaired){
          p.x += (p.tx - p.x) * p.speed;
          p.y += (p.ty - p.y) * p.speed;
          p.vx *= 0.90;
          p.vy *= 0.90;
        }else{
          p.x += p.vx;
          p.y += p.vy;
          p.vx += (Math.random()-.5) * 0.025 * dpr;
          p.vy += (Math.random()-.5) * 0.025 * dpr;
          if(p.x < -90*dpr || p.x > w + 90*dpr) p.vx *= -1;
          if(p.y < -90*dpr || p.y > h + 90*dpr) p.vy *= -1;
        }

        const twinkle = 0.78 + Math.sin(p.twinkle) * 0.22;
        const glow = (repaired ? (p.edge ? 9.5 : 7.2) : 6.5) * dpr;
        const gradient = ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,glow);
        gradient.addColorStop(0, `hsla(${p.hue}, 100%, 78%, ${p.alpha * twinkle})`);
        gradient.addColorStop(0.36, `hsla(${p.hue}, 100%, 64%, ${p.alpha * 0.42 * twinkle})`);
        gradient.addColorStop(1, 'rgba(255,70,190,0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x,p.y,glow,0,Math.PI*2);
        ctx.fill();

        ctx.fillStyle = `hsla(${p.hue}, 100%, 91%, ${Math.min(1,p.alpha+.32) * twinkle})`;
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
        ctx.fill();
      }
      ctx.restore();
    }

    function updatePlanets(force=false){
      const total = planetEls.length || 1;
      const rect = stage.getBoundingClientRect();
      const rx = Math.min(rect.width * 0.42, 430);
      const ry = Math.min(rect.height * 0.285, 170);
      const centerX = rect.width / 2;
      const centerY = rect.height * 0.51;
      const visiblePlanets = stage.classList.contains('is-repaired');
      const usedAngle = currentAngle;

      planetEls.forEach((el,i)=>{
        const theta = usedAngle + (Math.PI * 2 / total) * i;
        const depth = (Math.sin(theta) + 1) / 2;
        const scale = 0.76 + depth * 0.32;
        const x = visiblePlanets ? centerX + Math.cos(theta) * rx : centerX + Math.cos(theta) * rect.width * 0.94;
        const y = visiblePlanets ? centerY + Math.sin(theta) * ry : centerY + Math.sin(theta) * rect.height * 0.86;
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        el.style.transform = `translate(-50%, -50%) scale(${visiblePlanets ? scale : 0.35})`;
        el.style.zIndex = String(20 + Math.round(depth * 30));
        el.style.opacity = visiblePlanets ? String(0.66 + depth * 0.34) : '0';
      });
    }

    function animate(){
      drawLoveParticles();
      if(repaired && auto && !dragging){
        targetAngle += orbitSpeed;
      }
      if(repaired && !dragging && Math.abs(dragVelocity) > 0.0002){
        targetAngle += dragVelocity;
        dragVelocity *= 0.94;
      }
      currentAngle += (targetAngle - currentAngle) * (dragging ? 0.32 : 0.12);
      updatePlanets();
      raf = requestAnimationFrame(animate);
    }

    function setMode(nextAuto){
      auto = nextAuto;
      autoBtn?.classList.toggle('active', auto);
      manualBtn?.classList.toggle('active', !auto);
      stage.classList.toggle('manual-mode', !auto);
    }

    function repairHeart(){
      if(repaired) return;
      repaired = true;
      stage.classList.add('is-repairing');
      repairBtn.disabled = true;
      repairBtn.innerHTML = '<span>✨</span> Lagi nyatuin hatinya... <span>✨</span>';

      setTimeout(()=>{
        stage.classList.add('is-repaired','is-arriving');
        // Tombol mulai hilang saat hati dan planet sudah muncul, biar pemandangan bersih.
        setTimeout(()=>stage.classList.add('heart-complete'), 520);
        setTimeout(()=>{
          stage.classList.remove('is-arriving');
          stage.classList.add('is-orbiting');
        }, 1050);
      }, 900);
    }

    function openLoveModal(index){
      if(!repaired || moved) return;
      const p = planets[index];
      if(!p || !modal) return;
      modalImg.src = p.fullImg || p.img;
      modalImg.alt = p.title;
      modalTitle.textContent = p.title;
      modalCaption.textContent = p.desc || p.caption || 'Kenangan kita.';
      modal.classList.add('open');
      modal.setAttribute('aria-hidden','false');
      document.body.classList.add('modal-open');
    }

    function closeLoveModal(){
      if(!modal) return;
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden','true');
      document.body.classList.remove('modal-open');
    }

    repairBtn.addEventListener('click', repairHeart);
    autoBtn?.addEventListener('click', ()=>setMode(true));
    manualBtn?.addEventListener('click', ()=>setMode(false));

    stage.addEventListener('pointerdown', (e)=>{
      if(e.target.closest('.repair-heart-btn') || e.target.closest('.love-planet') || e.target.closest('.love-mode-controls')) return;
      if(!repaired) return;
      dragging = true;
      moved = false;
      dragVelocity = 0;
      lastX = e.clientX;
      lastY = e.clientY;
      lastDragTime = performance.now();
      stage.classList.add('is-dragging');
      stage.setPointerCapture?.(e.pointerId);
      setMode(false);
    });
    stage.addEventListener('pointermove', (e)=>{
      if(!dragging) return;
      const now = performance.now();
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const dt = Math.max(16, now - lastDragTime);
      if(Math.abs(dx) + Math.abs(dy) > 3) moved = true;
      targetAngle += dx * 0.0062;
      dragVelocity = (dx * 0.0062) * (16 / dt);
      lastX = e.clientX;
      lastY = e.clientY;
      lastDragTime = now;
    });
    function endDrag(e){
      if(!dragging) return;
      dragging = false;
      stage.classList.remove('is-dragging');
      stage.releasePointerCapture?.(e.pointerId);
      setTimeout(()=>{ moved = false; }, 120);
    }
    stage.addEventListener('pointerup', endDrag);
    stage.addEventListener('pointercancel', endDrag);

    planetEls.forEach(el=>{
      el.addEventListener('click', ()=>openLoveModal(Number(el.dataset.index || 0)));
    });
    qsa('[data-close-love-modal]').forEach(el=>el.addEventListener('click', closeLoveModal));
    document.addEventListener('keydown', e=>{ if(e.key === 'Escape') closeLoveModal(); });

    resizeLoveCanvas();
    setMode(true);
    animate();
    addEventListener('resize', resizeLoveCanvas);

    // Berhenti animasi kalau pindah halaman, biar ringan.
    addEventListener('pagehide', ()=>cancelAnimationFrame(raf));
  }

  function initContact(){
    const preview = qs('#waPreview');
    const btn = qs('#waBtn');
    const text = cfg.messages?.contactText || '';
    const number = cfg.whatsappNumber || '';
    if(preview) preview.textContent = text;
    if(btn){
      const clean = String(number).replace(/[^0-9]/g,'');
      btn.href = `https://wa.me/${clean}?text=${encodeURIComponent(text)}`;
    }
  }

  function escapeHtml(str=''){
    return String(str).replace(/[&<>"]/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[s]));
  }

  document.addEventListener('DOMContentLoaded',()=>{
    initNav();
    initCanvas();
    initFloatHearts();
    renderHome();
    renderDetail();
    initLoveExperience();
    initContact();
  });
})();
