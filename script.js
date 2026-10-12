const grid=document.getElementById('storyGrid');
const cards=[...grid.querySelectorAll('.story-card')];
const searchInput=document.getElementById('searchInput');
const sortSelect=document.getElementById('sortSelect');
const noResults=document.getElementById('noResults');
let selectedCategory='All';
function filterStories(){const q=searchInput.value.trim().toLowerCase();let visible=0;cards.forEach(card=>{const category=card.dataset.category;const matchesCategory=selectedCategory==='All'||category===selectedCategory;const matchesSearch=card.innerText.toLowerCase().includes(q);const show=matchesCategory&&matchesSearch;card.hidden=!show;if(show)visible++});noResults.hidden=visible!==0;}
document.querySelectorAll('.category').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.category').forEach(b=>b.classList.remove('active'));btn.classList.add('active');selectedCategory=btn.dataset.category;filterStories()}));
searchInput.addEventListener('input',filterStories);
sortSelect.addEventListener('change',()=>{const sorted=[...cards];if(sortSelect.value==='newest')sorted.sort((a,b)=>b.dataset.date.localeCompare(a.dataset.date));else if(sortSelect.value==='popular')sorted.sort((a,b)=>Number(b.dataset.popularity)-Number(a.dataset.popularity));else sorted.sort((a,b)=>cards.indexOf(a)-cards.indexOf(b));sorted.forEach(card=>grid.appendChild(card));filterStories()});
function toast(message){const el=document.getElementById('toast');el.textContent=message;el.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>el.classList.remove('show'),2600)}
document.querySelectorAll('.like-btn').forEach(btn=>btn.addEventListener('click',()=>{btn.classList.toggle('liked');const count=btn.querySelector('span');const n=Number(count.textContent);count.textContent=btn.classList.contains('liked')?n+1:n-1;toast(btn.classList.contains('liked')?'Story liked!':'Like removed')}));
document.querySelectorAll('.save-btn').forEach(btn=>btn.addEventListener('click',()=>{btn.classList.toggle('saved');btn.textContent=btn.classList.contains('saved')?'▣':'▱';toast(btn.classList.contains('saved')?'Saved for later (demo)':'Removed from saved stories')}));
document.getElementById('themeToggle').addEventListener('click',()=>{document.body.classList.toggle('dark');toast(document.body.classList.contains('dark')?'Dark theme on':'Light theme on')});
document.getElementById('menuBtn').addEventListener('click',()=>document.querySelector('.main-nav').classList.toggle('open'));
document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.main-nav').classList.remove('open')));
document.getElementById('signInBtn').addEventListener('click',()=>toast('Sign-in needs a backend and user account setup.'));
document.getElementById('joinBtn').addEventListener('click',()=>toast('Community sign-up is a demo. Connect a backend to enable accounts.'));
document.getElementById('newsletterForm').addEventListener('submit',e=>{e.preventDefault();toast('Demo only: connect an email service to collect subscribers.');document.getElementById('newsletterMessage').textContent='Demo mode — no email was saved.';});
document.getElementById('loadMore').addEventListener('click',()=>toast('You are viewing all demo stories. Add your own articles to grow the feed.'));
