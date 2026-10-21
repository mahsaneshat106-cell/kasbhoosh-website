(() => {
  const $ = (s) => document.querySelector(s);
  const menu = $('#mobileMenu'), menuToggle = $('#menuToggle');
  if (menu && menuToggle) {
    menuToggle.addEventListener('click',()=>{ const isOpen=menu.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(isOpen)) });
    menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');menuToggle.setAttribute('aria-expanded','false')}));
  }
  const progress=$('#scrollProgress');
  if(progress) window.addEventListener('scroll',()=>{const d=document.documentElement;progress.style.width=(d.scrollTop/(d.scrollHeight-d.clientHeight)*100||0)+'%'},{passive:true});
  const modeDescription=$('#modeDescription');
  document.querySelectorAll('[data-business]').forEach(btn=>btn.addEventListener('click',()=>{
    const m=btn.dataset.business;document.querySelectorAll('[data-business]').forEach(el=>{el.classList.toggle('active',el===btn);el.setAttribute('aria-pressed',String(el===btn))});
    document.querySelectorAll('[data-retail][data-wholesale]').forEach(el=>{el.textContent=el.dataset[m]});
    if(modeDescription)modeDescription.textContent=m==='wholesale'?'برای پخش پوشاک زنانه، سفارش‌های عمده، مشتریان فروشگاهی، موجودی و مانده‌حساب‌ها اهمیت ویژه‌ای دارند.':'در خرده‌فروشی، ثبت فاکتور فروش، کنترل موجودی و دریافت وجه باید سریع و بی‌دردسر باشد.';
  }));
  const promoVideo=$('#promoVideo');$('#videoPlayButton')?.addEventListener('click',()=>{promoVideo?.scrollIntoView({behavior:'smooth',block:'center'});promoVideo?.play().catch(()=>{})});
  let done=[false,false,false];
  const gameTasks=document.querySelectorAll('.game-task');
  const update=()=>{let count=done.filter(Boolean).length;const digits=['۰','۱','۲','۳'];$('#gameCount').textContent=digits[count]+' از ۳';$('#gameProgress').style.width=(count/3*100)+'%';$('#gameState').textContent=count===3?'آفرین! مسیر آشنایی را کامل کردید 🎉':count?'عالی! '+digits[3-count]+' قدم دیگر باقی مانده':'مسیر آشنایی را شروع کنید';gameTasks.forEach((b,i)=>{b.classList.toggle('done',done[i]);b.setAttribute('aria-pressed',String(done[i]))})};
  gameTasks.forEach((btn,i)=>btn.addEventListener('click',()=>{done[i]=!done[i];update()}));
  if(gameTasks.length)update();
  const modal=$('#planModal');
  const closeModal=()=>{if(!modal)return;modal.hidden=true;document.body.classList.remove('modal-open')};
  document.querySelectorAll('[data-plan]').forEach(b=>b.addEventListener('click',()=>{const p=b.dataset.plan;$('#modalTitle').textContent='اطلاعات طرح «'+p+'»';$('#modalEmail').href='mailto:mahsaneshat106@gmail.com?subject='+encodeURIComponent('درخواست راهنمایی درباره پلن '+p+' کسب‌هوش');modal.hidden=false;document.body.classList.add('modal-open');$('#modalClose').focus()}));
  $('#modalClose')?.addEventListener('click',closeModal);$('#modalCancel')?.addEventListener('click',closeModal);modal?.addEventListener('click',e=>{if(e.target===modal)closeModal()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
})();
