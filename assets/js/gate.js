(function(){
  const cfg = window.APP_CONFIG || {};
  const $ = s => document.querySelector(s);
  function show(id){['#pinScreen','#introScreen','#thanksScreen'].forEach(s=>$(s)?.classList.add('hidden'));$(id)?.classList.remove('hidden')}

  document.addEventListener('DOMContentLoaded',()=>{
    const title = $('#introTitle'); if(title) title.textContent = cfg.messages?.introTitle || '';
    const introText = $('#introText'); if(introText) introText.textContent = cfg.messages?.introText || '';
    const yesBtn = $('#yesBtn'); if(yesBtn) yesBtn.textContent = cfg.messages?.yesText || 'Iya';
    const noBtn = $('#noBtn'); if(noBtn) noBtn.textContent = cfg.messages?.noText || 'Tidak';
    const thanksTitle = $('#thanksTitle'); if(thanksTitle) thanksTitle.textContent = cfg.messages?.thanksTitle || '';
    const thanksText = $('#thanksText'); if(thanksText) thanksText.textContent = cfg.messages?.thanksText || '';
    const introGif = $('#introGif'); if(introGif) introGif.src = cfg.gifs?.intro || '';
    const hugGif = $('#hugGif'); if(hugGif) hugGif.src = cfg.gifs?.hug || '';

    $('#pinForm')?.addEventListener('submit',(e)=>{
      e.preventDefault();
      const val = ($('#pinInput')?.value || '').trim();
      if(val === String(cfg.pin || '141105')){
        $('#pinError').textContent = '';
        localStorage.setItem('lovePinUnlocked','true');
        show('#introScreen');
      }else{
        $('#pinError').textContent = 'PIN-nya salah sayanggg 😭 coba inget tanggal spesialnya.';
        $('#pinInput')?.animate([{transform:'translateX(0)'},{transform:'translateX(-8px)'},{transform:'translateX(8px)'},{transform:'translateX(0)'}],{duration:240});
      }
    });

    let noClicks = 0;
    $('#noBtn')?.addEventListener('click',()=>{
      noClicks++;
      const yes = $('#yesBtn');
      const no = $('#noBtn');
      const zone = $('#choiceZone');
      if(!yes || !no || !zone) return;
      const scale = Math.min(1 + noClicks*.28, 4.2);
      yes.style.transform = `scale(${scale})`;
      const maxX = Math.max(40, zone.clientWidth/2 - 90);
      const maxY = 42;
      const x = (Math.random()*2-1)*maxX;
      const y = (Math.random()*2-1)*maxY;
      no.style.transform = `translate(${x}px,${y}px) rotate(${(Math.random()*24-12).toFixed(1)}deg)`;
      const lines = ['Yakin nih? 😭','Aku tungguin yaa 🥺','Pelan-pelan aja, tapi jangan pergi dulu 💗','Tombol iya makin gemes nih 😭'];
      no.textContent = lines[Math.min(noClicks-1, lines.length-1)];
    });

    $('#yesBtn')?.addEventListener('click',()=>{
      localStorage.setItem('loveAccepted','true');
      show('#thanksScreen');
    });

    $('#continueBtn')?.addEventListener('click',()=>{ location.href='home.html'; });
  });
})();
