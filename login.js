(()=>{
 const form=document.getElementById('loginForm');const username=document.getElementById('loginUsername');const password=document.getElementById('loginPassword');const error=document.getElementById('authError');const notice=document.getElementById('authNotice');const toggle=document.getElementById('togglePassword');
 toggle.addEventListener('click',()=>{const visible=password.type==='password';password.type=visible?'text':'password';toggle.setAttribute('aria-pressed',String(visible));toggle.setAttribute('aria-label',visible?'مخفی کردن رمز عبور':'نمایش رمز عبور')});
 form.addEventListener('submit',e=>{e.preventDefault();notice.classList.remove('show');error.textContent='';const name=username.value.trim();const pass=password.value;if(!name){error.textContent='لطفاً شماره موبایل یا ایمیل را وارد کنید.';username.focus();return}if(!pass){error.textContent='لطفاً رمز عبور را وارد کنید.';password.focus();return}notice.classList.add('show')});
})();
