/* ====== EDIT HERE ======
   WhatsApp number: international format, digits only (no + or leading 0).
   +357 96 128522 (Cyprus) = 35796128522 */
const WHATSAPP = "35796128522";
const CURRENCY = "€";
/* Menu control from Google Sheet (optional): paste your "Publish to web" CSV link between the quotes.
   Leave empty to show every item as available. */
const SHEET_CSV = "https://docs.google.com/spreadsheets/d/1WNGGblN6-aH2g0fN38DJQtTOLQ9K6fMzyiSMH1Hwiqk/gviz/tq?tqx=out:csv&gid=243207064";

const T = {
 si:{
  title:"ශාමිලා කිචන් | ගෙදර හදපු රසම රස කෑම, WhatsApp එකෙන් ඕඩර් කරන්න",
  desc:"බත් පැකට්, ඩිනර් බොක්ස්, බිත්තර රොටි, ආප්ප, ඉස්සො වඩේ. ගෙදරදීම අලුතින් හදපු රසම රස කෑම. WhatsApp එකෙන් ඕඩර් කරන්න.",
  brand:"ශාමිලා කිචන්",nMenu:"මෙනුව",nHow:"ඕඩර් කරන හැටි",nContact:"අමතන්න",cart:"ඔබේ ඕඩර් එක",lang:"English",
  tag:"අද රසටම රස බත් පැකට් එක",h1:"ගෙදර රසට, ආසාවෙන් කමු!",
  lead:"බත් පැකට්, ඩිනර් බොක්ස්, බිත්තර රොටි, ආප්ප, ඉස්සො වඩේ... හැමදේම ගෙදරදීම අලුතින් හදපු රසම රස කෑම. WhatsApp එකෙන් ඕඩර් එකක් දාන්න, ඉතිරිය අපි බලාගන්නම්!",
  seeMenu:"මෙනුව බලන්න",wa:"WhatsApp එකෙන් කතා කරන්න",stamp:"බත් පැකට් එක",
  menuH:"අද මොනවද තියෙන්නේ?",howH:"ඕඩර් කරන්නේ කොහොමද?",
  s1:"කන්න ඕන දේ තෝරන්න.",s1t:" මෙනුවෙන් ඕන දේවල් ඕඩර් එකට දාලා, කීයක් ඕනද කියලා තෝරන්න.",
  s2:"WhatsApp එකෙන් යවන්න.",s2t:" ඔයාගේ ඕඩර් එක ලස්සනට ලියවිලා WhatsApp එකට එනවා. Send එබුවාම ඉවරයි!",
  s3:"අපි confirm කරනවා.",s3t:" මුළු ගාණයි, ලෑස්ති වෙන වෙලාවයි අපි ඉක්මනට කියනවා. Pick up හරි Delivery හරි.",
  fTag:"ගෙදර හදපු. අලුත්. රසයි.",fWa:"WhatsApp එකෙන් ඕඩර් කරන්න",
  oTitle:"ඔබේ ඕඩර් එක",close:"වසන්න",lName:"ඔයාගේ නම",phName:"නම",mode:"Pick up ද Delivery ද?",
  pick:"Pick up (ගෙනියන්න)",deliv:"Delivery (ගෙදරටම)",lAddr:"ඔයාගේ ලිපිනය",phAddr:"පාර, අංකය, නගරය",
  lNote:"විශේෂ දේවල් (කුළුබඩු ගාන, අසාත්මිකතා, වෙලාව)",total:"මුළු ගාණ",send:"WhatsApp එකෙන් ඕඩර් එක යවන්න",
  fine:"Delivery ගාස්තුවක් තියෙනවා නම් WhatsApp එකෙන් අපි කියන්නම්.",
  empty:"ඔයාගේ ඕඩර් එක හිස්. මෙනුවෙන් රසක් දාන්න!",each:"එකකට",add:"ඕඩර් එකට දාන්න",added:"දැම්මා ✓",
  soldOut:"අද නැහැ",aY:"අද තියෙනවා",aN:"අද නැහැ",needName:"කරුණාකර නම ලියන්න",all:"සියල්ල",
  cats:{rc:"බත් & කරි",dn:"ඩිනර් බොක්ස්",rh:"රොටි & ආප්ප"},
  hello:"ආයුබෝවන් ශාමිලා කිචන්! මට ඕඩර් එකක් දාන්න ඕන.",
  m1:"ආයුබෝවන් ශාමිලා කිචන්! මට මේ ඕඩර් එක දාන්න ඕන:",m2:"මුළු ගාණ",m3:"නම",m4:"ලිපිනය",m5:"සටහන",m6:"ස්තූතියි!",
  pickM:"Pick up (ගෙනියනවා)",delM:"Delivery (ගෙදරටම)"
 },
 en:{
  title:"Shamila Kitchen | Home-made Sri Lankan food, order on WhatsApp",
  desc:"Rice & curry packets, dinner boxes, bittara roti, appa and isso wade. Home-made Sri Lankan food. Order on WhatsApp.",
  brand:"Shamila Kitchen",nMenu:"Menu",nHow:"How to order",nContact:"Contact",cart:"Your order",lang:"සිංහල",
  tag:"අද රසටම රස බත් පැකට් එක",h1:"Home-made Sri Lankan food, ready when you are.",
  lead:"Rice & curry packets, dinner boxes, bittara roti, appa and isso wade. Cooked fresh at home and sent to you after you order on WhatsApp.",
  seeMenu:"See the menu",wa:"Message us on WhatsApp",stamp:"Rice & curry packet",
  menuH:"Today’s menu",howH:"How to order",
  s1:"Pick your food.",s1t:" Add items to your order and choose how many.",
  s2:"Send on WhatsApp.",s2t:" Your order opens as a ready-written message to us.",
  s3:"We confirm.",s3t:" We reply with the total and when it will be ready, for pick-up or delivery.",
  fTag:"Home made. Fresh. Delicious.",fWa:"Order on WhatsApp",
  oTitle:"Your order",close:"Close",lName:"Your name",phName:"Name",mode:"Pick-up or delivery",
  pick:"Pick-up",deliv:"Delivery",lAddr:"Delivery address",phAddr:"Street, number, city",
  lNote:"Notes (spice level, allergies, time)",total:"Total",send:"Send order on WhatsApp",
  fine:"Delivery costs, if any, are confirmed by us on WhatsApp.",
  empty:"Your order is empty. Add something from the menu.",each:"each",add:"Add to order",added:"Added ✓",
  soldOut:"Not available today",aY:"Available today",aN:"Not available today",needName:"Please enter your name",all:"All",
  cats:{rc:"Rice & curry",dn:"Dinner boxes",rh:"Roti & hoppers"},
  hello:"Hello Shamila Kitchen, I would like to place an order.",
  m1:"Hello Shamila Kitchen, I would like to order:",m2:"Total",m3:"Name",m4:"Address",m5:"Notes",m6:"Thank you!",
  pickM:"Pick-up",delM:"Delivery"
 }
};
const MENU = [
 {id:"rc",cat:"rc",price:7,img:"rice-curry",
  si:{n:"රසම රස බත් පැකට් එක",d:"බාසමතී බත්, චිකන් කරිය, බටු මෝජු, කජු කරිය, පරිප්පුව, කැට සලාදය, පපඩම් එක්ක. ආසාවෙන් කන්න පුරා රස පැකට් එකක්!"},
  en:{n:"Rice & curry packet",d:"Basmati rice, chicken curry, brinjal moju, cashew curry, dhal, kachumbari salad and papadam."}},
 {id:"db",cat:"dn",price:8,img:"dinner-biryani",
  si:{n:"ඩිනර් බොක්ස්: චිකන් බිරියානි",d:"රසම රස චිකන් බිරියානි, බුල්සායි එග් එකක්, ෆ්‍රයිඩ් චිකන්, ගාලික් චට්නි, ග්‍රීන් සලාදය එක්ක."},
  en:{n:"Dinner box: Chicken biryani",d:"Chicken biryani, bulsai egg, fried chicken, garlic chutney and green salad."}},
 {id:"df",cat:"dn",price:7,img:"dinner-fried-rice",
  si:{n:"ඩිනර් බොක්ස්: චිකන් ෆ්‍රයිඩ් රයිස්",d:"චිකන් ෆ්‍රයිඩ් රයිස්, ඩෙවල්ඩ් චිකන් ඩ්‍රම්ස්ටික් එකක්, මිරිස් පේස්ට්, සලාදය එක්ක."},
  en:{n:"Dinner box: Chicken fried rice",d:"Chicken fried rice, devilled chicken drumstick, chilli paste and salad."}},
 {id:"br",cat:"rh",price:2,img:"roti",
  si:{n:"බිත්තර රොටි",d:"එක බැගින් ගන්න පුළුවන්. කරියයි පරිප්පු නොදියයි එක්ක රසට කන්න!"},
  en:{n:"Bittara roti",d:"Egg roti, sold each. Served with curry and dhal sauce."}},
 {id:"pa",cat:"rh",price:1,img:"plain-appa",
  si:{n:"ප්ලේන් ආප්ප",d:"මැද මෘදුයි, කොන ක්‍රිස්පියි. ආසාවෙන් කන්න ආප්පයක්!"},
  en:{n:"Plain appa",d:"Soft, lacy hopper with a crisp edge."}},
 {id:"ea",cat:"rh",price:1.5,img:"egg-appa",
  si:{n:"බිත්තර ආප්ප",d:"මැද බිත්තරයක් දාලා හදපු රස ආප්පයක්."},
  en:{n:"Egg appa",d:"Appa with an egg cooked in the centre."}},
 {id:"iw",cat:"rh",price:1.5,img:"isso-wade",
  si:{n:"ඉස්සො වඩේ",d:"ක්‍රිස්පි, ක්‍රන්චි ඉස්සො වඩේ. මිරිස් සම්බෝලත් එක්ක!"},
  en:{n:"Isso wade",d:"Crunchy prawn wade, served with chilli paste."}}
];
const $=s=>document.querySelector(s);
const money=n=>CURRENCY+(Number.isInteger(n)?n:n.toFixed(2));
let lang="si",cart={},tab="all";
try{cart=JSON.parse(localStorage.getItem("sk-cart")||"{}");lang=localStorage.getItem("sk-lang")||"si"}catch(e){}
if(!T[lang])lang="si";
const t=k=>T[lang][k];
const other=()=>lang==="si"?"en":"si";
const save=()=>{try{localStorage.setItem("sk-cart",JSON.stringify(cart))}catch(e){}};

function renderTabs(){
 const ids=["all",...Object.keys(T[lang].cats)];
 $("#tabs").innerHTML=ids.map(c=>`<button role="tab" aria-selected="${c===tab}" data-c="${c}">${c==="all"?t("all"):t("cats")[c]}</button>`).join("");
}
function renderGrid(){
 $("#grid").innerHTML=MENU.filter(m=>tab==="all"||m.cat===tab).sort((a,b)=>(a.off?1:0)-(b.off?1:0)).map(m=>`
 <article class="card${m.off?" off":""}"><span class="badge ${m.off?"no":"yes"}" ${m.off===undefined?"hidden":""}>${m.off?t("aN"):t("aY")}</span><img src="${IMG[m.img]}" alt="${m[lang].n}" loading="lazy">
 <div class="body"><h3>${m[lang].n}</h3><span class="si2">${m[other()].n}</span><p>${m[lang].d}</p>
 <div class="buy"><span class="price">${money(m.price)}</span><button class="add" data-id="${m.id}"${m.off?" disabled":""}>${m.off?t("soldOut"):t("add")}</button></div></div></article>`).join("");
}
function lines(){return Object.entries(cart).filter(([,q])=>q>0).map(([id,q])=>({m:MENU.find(x=>x.id===id),q})).filter(l=>l.m&&!l.m.off)}
function total(){return lines().reduce((s,l)=>s+l.m.price*l.q,0)}
function renderCart(){
 const L=lines();
 $("#cartCount").textContent=L.reduce((s,l)=>s+l.q,0);
 $("#lines").innerHTML=L.length?L.map(({m,q})=>`<div class="line"><div>${m[lang].n}<small>${t("each")} ${money(m.price)}</small></div>
 <div class="qty"><button data-d="-1" data-id="${m.id}" aria-label="−">−</button><b>${q}</b><button data-d="1" data-id="${m.id}" aria-label="+">+</button></div>
 <b>${money(m.price*q)}</b></div>`).join(""):`<p class="empty">${t("empty")}</p>`;
 $("#total").textContent=money(total());
 $("#send").disabled=!L.length;$("#send").style.opacity=L.length?1:.5;
}
function applyLang(){
 document.documentElement.lang=lang;
 document.title=t("title");
 const md=document.querySelector('meta[name=description]');if(md)md.content=t("desc");
 document.querySelectorAll("[data-i]").forEach(e=>e.textContent=t(e.dataset.i));
 document.querySelectorAll("[data-ph]").forEach(e=>e.placeholder=t(e.dataset.ph));
 $("#langBtn").textContent=t("lang");
 const hello=`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(t("hello"))}`;
 $("#quickWa").href=hello;$("#footWa").href=hello;
 renderTabs();renderGrid();renderCart();
}
function change(id,d){cart[id]=Math.max(0,(cart[id]||0)+d);save();renderCart()}
function openCart(o){document.body.classList.toggle("open",o);$("#drawer").setAttribute("aria-hidden",!o)}

document.addEventListener("click",e=>{
 const x=e.target;
 if(x.dataset.c){tab=x.dataset.c;renderTabs();renderGrid()}
 if(x.classList.contains("add")){change(x.dataset.id,1);x.textContent=t("added");setTimeout(()=>x.textContent=t("add"),900)}
 if(x.dataset.d)change(x.dataset.id,+x.dataset.d);
 if(x.closest("#openCart"))openCart(true);
 if(x.id==="closeCart"||x.id==="scrim")openCart(false);
 if(x.id==="langBtn"){lang=other();try{localStorage.setItem("sk-lang",lang)}catch(e){}applyLang()}
});
document.addEventListener("keydown",e=>{if(e.key==="Escape")openCart(false)});
document.querySelectorAll('input[name=mode]').forEach(r=>r.addEventListener("change",()=>{$("#addrWrap").hidden=document.querySelector('input[name=mode]:checked').value!=="Delivery"}));

$("#send").addEventListener("click",()=>{
 const L=lines();if(!L.length)return;
 const del=document.querySelector('input[name=mode]:checked').value==="Delivery",name=$("#name").value.trim(),addr=$("#addr").value.trim(),note=$("#note").value.trim();
 if(!name){$("#name").focus();$("#name").placeholder=t("needName");return}
 if(del&&!addr){$("#addr").focus();return}
 let msg=t("m1")+"\n\n"+L.map(({m,q})=>`• ${q} x ${m[lang].n} (${money(m.price*q)})`).join("\n")+
 `\n\n${t("m2")}: ${money(total())}\n${t("m3")}: ${name}\n${del?t("delM"):t("pickM")}`+(del?`\n${t("m4")}: ${addr}`:"")+(note?`\n${t("m5")}: ${note}`:"")+`\n\n${t("m6")}`;
 window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`,"_blank","noopener");
});
applyLang();
function parseCSV(s){const rows=[];let r=[],c="",q=false;
 for(let i=0;i<s.length;i++){const ch=s[i];
  if(q){if(ch==='"'){if(s[i+1]==='"'){c+='"';i++}else q=false}else c+=ch}
  else if(ch==='"')q=true;else if(ch===","){r.push(c);c=""}
  else if(ch==="\n"){r.push(c);rows.push(r);r=[];c=""}else if(ch!=="\r")c+=ch}
 if(c||r.length){r.push(c);rows.push(r)}return rows}
function getCSV(u){
 return fetch(u+(u.includes("?")?"&":"?")+"t="+Date.now(),{cache:"no-store"}).then(r=>{
  if(!r.ok)throw new Error("HTTP "+r.status);return r.text()}).then(t=>{
  if(/^\s*</.test(t))throw new Error("sheet is not public (got a web page, not CSV)");return t})}
function loadSheet(){
 if(!SHEET_CSV)return;
 const alt=SHEET_CSV.replace("/gviz/tq?tqx=out:csv&","/export?format=csv&");
 getCSV(SHEET_CSV).catch(e=>{dbg("Method 1 failed: "+e.message+" - trying method 2");return getCSV(alt)}).then(txt=>{
  const rows=parseCSV(txt).map(r=>r.map(s=>s.trim()));
  const H=rows.shift().map(s=>s.toLowerCase()),ci=H.indexOf("id"),ca=H.indexOf("available"),cp=H.indexOf("price");
  if(ci<0||ca<0){dbg("Sheet read, but headers id/available not found: "+H.join("|"));return}
  rows.forEach(r=>{
   const m=MENU.find(x=>x.id===r[ci]);if(!m)return;
   if(r[ca])m.off=/^(no|n|false|0|sold)/i.test(r[ca]);
   if(cp>=0&&r[cp]&&!isNaN(+r[cp]))m.price=+r[cp];
  });renderGrid();renderCart();dbg("Sheet OK: "+rows.length+" rows read");
 }).catch(e=>dbg("Could not load sheet: "+e.message));
}
function dbg(m){console.warn("[sheet]",m);if(location.hash==="#debug"){let e=document.getElementById("dbg");if(!e){e=document.createElement("div");e.id="dbg";e.style.cssText="position:fixed;left:0;right:0;bottom:0;z-index:99;background:#000;color:#0f0;font:13px monospace;padding:8px";document.body.appendChild(e)}e.textContent=m}}
loadSheet();setInterval(loadSheet,60000);
document.getElementById("heroImg").src=IMG["rice-curry"];
