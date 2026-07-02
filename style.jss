/* ==========================================
   LUXE CAFÉ - STYLE.CSS
   PART 1 / 6
========================================== */

/* Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@300;400;500;600;700&display=swap');

/* ==========================================
   ROOT VARIABLES
========================================== */

:root{

--gold:#D4AF37;
--gold-light:#E5C76B;
--gold-dark:#B8912F;

--black:#0D0D0D;
--dark:#181818;
--dark-light:#202020;

--white:#FFFFFF;
--gray:#BDBDBD;
--light:#F5F5F5;

--radius:18px;

--shadow:0 15px 35px rgba(212,175,55,.18);
--shadow-hover:0 20px 40px rgba(212,175,55,.28);

--transition:.35s ease;

}

/* ==========================================
   RESET
========================================== */

*{
margin:0;
padding:0;
box-sizing:border-box;
}

html{

scroll-behavior:smooth;

}

body{

font-family:'Poppins',sans-serif;

background:var(--black);

color:var(--white);

line-height:1.7;

overflow-x:hidden;

}

/* ==========================================
   COMMON
========================================== */

img{

display:block;

max-width:100%;

height:auto;

user-select:none;

-webkit-user-drag:none;

}

a{

text-decoration:none;

color:inherit;

}

ul{

list-style:none;

}

button{

font-family:inherit;

}

/* ==========================================
   SCROLLBAR
========================================== */

::-webkit-scrollbar{

width:10px;

}

::-webkit-scrollbar-track{

background:#111;

}

::-webkit-scrollbar-thumb{

background:var(--gold);

border-radius:20px;

}

::-webkit-scrollbar-thumb:hover{

background:var(--gold-light);

}

::selection{

background:var(--gold);

color:#111;

}

/* ==========================================
   NAVBAR
========================================== */

.navbar{

position:fixed;

top:0;

left:0;

width:100%;

height:76px;

display:flex;

justify-content:space-between;

align-items:center;

padding:0 8%;

background:rgba(8,8,8,.92);

backdrop-filter:blur(16px);

-webkit-backdrop-filter:blur(16px);

border-bottom:1px solid rgba(212,175,55,.15);

transition:var(--transition);

z-index:9999;

}

/* ==========================================
   LOGO
========================================== */

.logo{

font-family:'Playfair Display',serif;

font-size:30px;

font-weight:700;

letter-spacing:2px;

color:var(--gold);

transition:var(--transition);

}

.logo:hover{

color:var(--gold-light);

transform:scale(1.04);

}

/* ==========================================
   NAV LINKS
========================================== */

.nav-links{

display:flex;

align-items:center;

gap:28px;

}

.nav-links a{

position:relative;

font-size:15px;

font-weight:500;

color:var(--white);

transition:var(--transition);

}

.nav-links a:hover,
.nav-links a.active{

color:var(--gold);

}

.nav-links a::after{

content:"";

position:absolute;

left:0;

bottom:-7px;

width:0;

height:2px;

background:var(--gold);

transition:.3s;

}

.nav-links a:hover::after,
.nav-links a.active::after{

width:100%;

}

/* ==========================================
   MOBILE MENU BUTTON
========================================== */

.menu-toggle{

display:none;

width:46px;

height:46px;

padding:8px;

cursor:pointer;

background:transparent;

border:1px solid rgba(212,175,55,.35);

border-radius:12px;

transition:var(--transition);

}

.menu-toggle:hover{

background:rgba(212,175,55,.08);

}

.menu-toggle span{

display:block;

width:24px;

height:3px;

margin:4px auto;

background:var(--gold);

border-radius:10px;

transition:.35s;

}

/* ==========================================
   BUTTONS
========================================== */

.btn{

display:inline-flex;

justify-content:center;

align-items:center;

padding:15px 36px;

border-radius:50px;

background:var(--gold);

color:#111;

font-weight:700;

transition:var(--transition);

box-shadow:0 10px 25px rgba(212,175,55,.22);

overflow:hidden;

position:relative;

}

.btn:hover{

transform:translateY(-5px);

box-shadow:var(--shadow-hover);

}

.btn-outline{

display:inline-flex;

justify-content:center;

align-items:center;

padding:15px 36px;

border-radius:50px;

border:2px solid var(--gold);

background:transparent;

color:var(--gold);

font-weight:700;

transition:var(--transition);

}

.btn-outline:hover{

background:var(--gold);

color:#111;

}

/* ==========================================
   COMMON TITLES
========================================== */

.section-title{

font-family:'Playfair Display',serif;

font-size:clamp(36px,5vw,50px);

color:var(--gold);

text-align:center;

margin-bottom:22px;

}

.eyebrow{

color:var(--gold);

font-size:14px;

font-weight:600;

letter-spacing:4px;

text-transform:uppercase;

margin-bottom:15px;

}

.hero-buttons{

display:flex;

justify-content:center;

align-items:center;

gap:18px;

flex-wrap:wrap;

margin-top:30px;

}

/* ==========================================
   HERO SECTION
========================================== */

.hero{

position:relative;

overflow:hidden;

width:100%;

min-height:100vh;

display:flex;

justify-content:center;

align-items:center;

text-align:center;

padding:120px 20px 60px;

background:
linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.82)),
url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070");

background-size:cover;

background-position:center;

background-repeat:no-repeat;

background-attachment:fixed;

}

.hero-overlay{

position:absolute;

top:0;

left:0;

width:100%;

height:100%;

background:rgba(0,0,0,.15);

pointer-events:none;

}

.hero-content{

position:relative;

z-index:2;

max-width:850px;

animation:fadeUp 1s ease;

}

.hero-content h1{

font-family:'Playfair Display',serif;

font-size:clamp(48px,7vw,84px);

line-height:1.15;

margin-bottom:20px;

}

.hero-content p{

max-width:720px;

margin:auto;

font-size:18px;

color:var(--light);

}
/* ==========================================
   HERO SECTION
========================================== */

.hero{
position:relative;
display:flex;
justify-content:center;
align-items:center;
min-height:100vh;
padding:120px 8% 80px;
text-align:center;
overflow:hidden;
background:
linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.82)),
url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070");
background-size:cover;
background-position:center;
background-repeat:no-repeat;
background-attachment:fixed;
}

.hero-overlay{
position:absolute;
inset:0;
background:linear-gradient(to bottom,rgba(0,0,0,.15),rgba(0,0,0,.45));
z-index:1;
}

.hero-content{
position:relative;
z-index:2;
max-width:900px;
animation:fadeUp 1s ease;
}

.hero-content h1{
font-family:'Playfair Display',serif;
font-size:clamp(50px,8vw,90px);
line-height:1.1;
margin-bottom:20px;
}

.hero-content p{
font-size:18px;
color:var(--light);
max-width:700px;
margin:auto;
}

.hero-buttons{
margin-top:35px;
display:flex;
justify-content:center;
gap:20px;
flex-wrap:wrap;
}

/* ==========================================
   STATS
========================================== */

.stats{
padding:90px 8%;
display:grid;
grid-template-columns:repeat(4,1fr);
gap:25px;
}

.stat-card{
background:rgba(255,255,255,.03);
border:1px solid rgba(212,175,55,.15);
border-radius:var(--radius);
padding:35px;
text-align:center;
transition:var(--transition);
backdrop-filter:blur(15px);
}

.stat-card:hover{
transform:translateY(-10px);
box-shadow:var(--shadow);
border-color:var(--gold);
}

.stat-card h2{
font-size:48px;
color:var(--gold);
margin-bottom:12px;
}

.stat-card p{
color:var(--gray);
font-size:16px;
}

/* ==========================================
   REVIEWS
========================================== */

.reviews{
padding:90px 8%;
}

.review-container{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:25px;
}

.review-box{
background:rgba(255,255,255,.03);
border:1px solid rgba(212,175,55,.15);
border-radius:var(--radius);
padding:35px;
transition:var(--transition);
backdrop-filter:blur(15px);
}

.review-box:hover{
transform:translateY(-10px);
box-shadow:var(--shadow);
}

.stars{
font-size:22px;
color:var(--gold);
letter-spacing:3px;
margin-bottom:15px;
}

.review-box p{
color:var(--gray);
margin-bottom:20px;
}

.review-box h4{
color:var(--gold);
font-weight:600;
}

/* ==========================================
   WHY CHOOSE US
========================================== */

.why-choose{
padding:90px 8%;
}

.why-grid{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:25px;
margin-top:40px;
}

.why-card{
background:rgba(255,255,255,.03);
border:1px solid rgba(212,175,55,.15);
border-radius:var(--radius);
padding:35px;
text-align:center;
transition:var(--transition);
backdrop-filter:blur(15px);
}

.why-card:hover{
transform:translateY(-10px);
box-shadow:var(--shadow);
}

.why-card h3{
font-family:'Playfair Display',serif;
color:var(--gold);
margin-bottom:15px;
font-size:28px;
}

.why-card p{
color:var(--gray);
}

/* ==========================================
   HOME CTA
========================================== */

.home-cta{
padding:100px 8%;
text-align:center;
}

.home-cta h2{
font-family:'Playfair Display',serif;
font-size:clamp(36px,5vw,54px);
color:var(--gold);
margin-bottom:20px;
}

.home-cta p{
max-width:720px;
margin:auto;
color:var(--gray);
font-size:17px;
margin-bottom:35px;
}
/* ==========================================
   ABOUT PAGE
========================================== */

.about-section{
display:grid;
grid-template-columns:1fr 1fr;
align-items:center;
gap:60px;
padding:110px 8% 80px;
}

.about-content .section-title{
text-align:left;
margin-bottom:25px;
}

.about-content p{
color:var(--gray);
font-size:17px;
margin-bottom:20px;
}

.about-image{
overflow:hidden;
border-radius:var(--radius);
}

.about-image img{
width:100%;
height:500px;
object-fit:cover;
border-radius:var(--radius);
transition:.6s;
box-shadow:var(--shadow);
}

.about-image:hover img{
transform:scale(1.06);
}

.about-values{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:30px;
padding:0 8% 90px;
}

.about-value{
background:rgba(255,255,255,.03);
border:1px solid rgba(212,175,55,.12);
border-radius:var(--radius);
padding:35px;
text-align:center;
transition:.35s;
backdrop-filter:blur(12px);
}

.about-value:hover{
transform:translateY(-10px);
box-shadow:var(--shadow);
}

.about-value span{
display:block;
font-size:48px;
margin-bottom:15px;
}

.about-value h3{
color:var(--gold);
margin-bottom:12px;
font-family:'Playfair Display',serif;
}

.about-value p{
color:var(--gray);
}

/* ==========================================
   CONTACT PAGE
========================================== */

.contact-section{
padding:110px 8% 90px;
}

.contact-heading{
text-align:center;
max-width:760px;
margin:auto auto 50px;
}

.contact-heading p:last-child{
color:var(--gray);
}

.contact-grid{
display:grid;
grid-template-columns:repeat(4,1fr);
gap:25px;
margin-bottom:60px;
}

.contact-card{
background:rgba(255,255,255,.03);
border:1px solid rgba(212,175,55,.12);
backdrop-filter:blur(12px);
padding:35px;
border-radius:var(--radius);
text-align:center;
transition:.35s;
}

.contact-card:hover{
transform:translateY(-10px);
box-shadow:var(--shadow);
}

.contact-icon{
font-size:42px;
margin-bottom:15px;
}

.contact-card h3{
color:var(--gold);
margin-bottom:12px;
}

.contact-card p,
.contact-card a{
color:var(--gray);
text-decoration:none;
}

.contact-card a:hover{
color:var(--gold);
}

.contact-form-section{
max-width:850px;
margin:80px auto;
text-align:center;
}

.contact-form-section h2{
font-family:'Playfair Display',serif;
font-size:42px;
color:var(--gold);
margin-bottom:15px;
}

.contact-form-section p{
color:var(--gray);
margin-bottom:35px;
}

.contact-form{
display:flex;
flex-direction:column;
gap:20px;
}

.contact-form input,
.contact-form textarea{
width:100%;
padding:16px 18px;
background:rgba(255,255,255,.03);
border:1px solid rgba(212,175,55,.15);
border-radius:14px;
color:#fff;
font-size:16px;
transition:.3s;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder{
color:#999;
}

.contact-form input:focus,
.contact-form textarea:focus{
outline:none;
border-color:var(--gold);
box-shadow:0 0 0 3px rgba(212,175,55,.15);
}

.contact-map{
text-align:center;
margin-top:80px;
}

.contact-map h2{
font-family:'Playfair Display',serif;
font-size:42px;
color:var(--gold);
margin-bottom:15px;
}

.contact-map p{
color:var(--gray);
margin-bottom:30px;
}

.contact-cta{
margin-top:90px;
text-align:center;
}

.contact-cta h2{
font-family:'Playfair Display',serif;
font-size:44px;
color:var(--gold);
margin-bottom:20px;
}

.contact-cta p{
max-width:720px;
margin:auto;
margin-bottom:35px;
color:var(--gray);
font-size:17px;
}
/* ==========================================
   RESERVATION PAGE
========================================== */

.reservation-section{
padding:110px 8% 90px;
}

.reservation-heading{
max-width:760px;
margin:0 auto 50px;
text-align:center;
}

.reservation-heading p:last-child{
color:var(--gray);
}

.reservation-form{
max-width:850px;
margin:auto;
display:flex;
flex-direction:column;
gap:22px;
}

.reservation-form label{
font-weight:600;
color:var(--white);
}

.reservation-form span{
color:var(--gray);
font-size:14px;
}

.reservation-form input,
.reservation-form select,
.reservation-form textarea{
width:100%;
padding:16px 18px;
background:rgba(255,255,255,.03);
border:1px solid rgba(212,175,55,.15);
border-radius:14px;
color:var(--white);
font-size:16px;
transition:.3s;
}

.reservation-form input::placeholder,
.reservation-form textarea::placeholder{
color:#999;
}

.reservation-form input:focus,
.reservation-form textarea:focus,
.reservation-form select:focus{
outline:none;
border-color:var(--gold);
box-shadow:0 0 0 3px rgba(212,175,55,.15);
}

.form-row{
display:grid;
grid-template-columns:1fr 1fr;
gap:20px;
}

.booking-note{
text-align:center;
font-size:15px;
color:var(--gray);
margin-top:5px;
}

.form-message{
margin-top:15px;
text-align:center;
font-weight:600;
color:var(--gold);
}

/* ==========================================
   RESERVATION BENEFITS
========================================== */

.reservation-benefits{
padding:90px 8%;
text-align:center;
}

.reservation-cta{
padding:90px 8%;
text-align:center;
}

.reservation-cta h2{
font-family:'Playfair Display',serif;
font-size:44px;
color:var(--gold);
margin-bottom:20px;
}

.reservation-cta p{
max-width:720px;
margin:auto;
margin-bottom:35px;
color:var(--gray);
}

/* ==========================================
   FOOTER
========================================== */

footer{
background:#0d0d0d;
border-top:1px solid rgba(212,175,55,.15);
padding:60px 20px;
text-align:center;
}

.footer-content{
max-width:750px;
margin:auto;
}

footer h3{
font-family:'Playfair Display',serif;
font-size:34px;
color:var(--gold);
margin-bottom:18px;
}

footer p{
margin:10px 0;
color:var(--gray);
}

footer a{
color:var(--gold);
transition:.3s;
}

footer a:hover{
color:var(--gold-light);
}

/* ==========================================
   SCROLL ANIMATION
========================================== */

.stat-card,
.review-box,
.menu-card,
.gallery-card,
.about-value,
.contact-card{
opacity:0;
transform:translateY(40px);
transition:opacity .7s ease,transform .7s ease;
}

.show{
opacity:1;
transform:translateY(0);
}

/* ==========================================
   BACK TO TOP BUTTON
========================================== */

#topBtn{
position:fixed;
bottom:20px;
right:20px;
width:52px;
height:52px;
border:none;
border-radius:50%;
background:var(--gold);
color:#111;
font-size:24px;
cursor:pointer;
display:none;
align-items:center;
justify-content:center;
box-shadow:var(--shadow);
transition:.3s;
z-index:9999;
}

#topBtn:hover{
transform:translateY(-5px);
background:var(--gold-light);
}

/* ==========================================
   LOADER SUPPORT
========================================== */

body{
opacity:0;
transition:opacity .5s ease;
}

body.loaded{
opacity:1;
}
/* ==========================================
   PART 4/6
   CONTACT + RESERVATION
========================================== */

.contact-section,
.reservation-section{
    padding:120px 8% 90px;
}

.contact-heading,
.reservation-heading{
    max-width:760px;
    margin:auto;
    text-align:center;
    margin-bottom:60px;
}

.contact-heading p:last-child,
.reservation-heading p:last-child{
    color:var(--gray);
}

.contact-grid{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:25px;
    margin-bottom:60px;
}

.contact-card{
    background:rgba(255,255,255,.03);
    backdrop-filter:blur(12px);
    border:1px solid rgba(212,175,55,.15);
    border-radius:var(--radius);
    padding:35px 25px;
    text-align:center;
    transition:.35s;
}

.contact-card:hover{
    transform:translateY(-10px);
    border-color:var(--gold);
    box-shadow:var(--shadow);
}

.contact-icon{
    font-size:42px;
    margin-bottom:18px;
}

.contact-card h3{
    color:var(--gold);
    margin-bottom:10px;
    font-family:'Playfair Display',serif;
}

.contact-card p,
.contact-card a{
    color:var(--gray);
}

.contact-card a:hover{
    color:var(--gold);
}

/* CONTACT FORM */

.contact-form-section{
    max-width:800px;
    margin:80px auto;
    text-align:center;
}

.contact-form-section h2{
    font-family:'Playfair Display',serif;
    color:var(--gold);
    font-size:40px;
    margin-bottom:15px;
}

.contact-form-section p{
    color:var(--gray);
    margin-bottom:35px;
}

.contact-form{
    display:flex;
    flex-direction:column;
    gap:22px;
}

.form-group input,
.form-group textarea,
.reservation-form input,
.reservation-form textarea,
.reservation-form select{
    width:100%;
    padding:17px;
    border-radius:15px;
    background:rgba(255,255,255,.04);
    border:1px solid rgba(212,175,55,.15);
    color:#fff;
    font-size:16px;
    transition:.3s;
}

.form-group input:focus,
.form-group textarea:focus,
.reservation-form input:focus,
.reservation-form textarea:focus,
.reservation-form select:focus{
    outline:none;
    border-color:var(--gold);
    box-shadow:0 0 15px rgba(212,175,55,.25);
}

.form-group textarea{
    resize:vertical;
}

.contact-map{
    text-align:center;
    margin:90px auto;
}

.contact-map h2{
    font-family:'Playfair Display',serif;
    color:var(--gold);
    margin-bottom:15px;
}

.contact-map p{
    color:var(--gray);
    margin-bottom:25px;
}

.contact-cta,
.reservation-cta{
    text-align:center;
    padding-top:70px;
}

.contact-cta h2,
.reservation-cta h2{
    font-family:'Playfair Display',serif;
    color:var(--gold);
    font-size:44px;
    margin-bottom:20px;
}

.contact-cta p,
.reservation-cta p{
    color:var(--gray);
    max-width:750px;
    margin:auto;
    margin-bottom:35px;
}

/* RESERVATION FORM */

.reservation-form{
    max-width:800px;
    margin:auto;
    display:flex;
    flex-direction:column;
    gap:20px;
}

.reservation-form label{
    color:#fff;
    font-weight:600;
}

.form-row{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:20px;
}

.booking-note{
    text-align:center;
    color:var(--gray);
    font-size:15px;
}

.form-message{
    text-align:center;
    color:var(--gold);
    font-weight:700;
    margin-top:10px;
}

.reservation-benefits{
    padding:100px 0 50px;
}
/* ==========================================
   PART 5/6
   FOOTER + ANIMATIONS + UTILITIES
========================================== */

/* FOOTER */

footer{
    background:#101010;
    border-top:1px solid rgba(212,175,55,.15);
    padding:70px 20px;
    text-align:center;
}

.footer-content{
    max-width:750px;
    margin:auto;
}

footer h3{
    font-family:'Playfair Display',serif;
    font-size:34px;
    color:var(--gold);
    margin-bottom:18px;
}

footer p{
    color:var(--gray);
    margin:10px 0;
    line-height:1.8;
}

footer a{
    color:var(--gold);
    transition:.3s;
}

footer a:hover{
    color:var(--gold-light);
}

/* ==========================
   SCROLL ANIMATION
========================== */

.stat-card,
.review-box,
.menu-card,
.gallery-card,
.about-value,
.contact-card,
.why-card{

    opacity:0;
    transform:translateY(40px);
    transition:.8s ease;

}

.show{

    opacity:1 !important;
    transform:translateY(0) !important;

}

/* ==========================
   HERO ANIMATION
========================== */

.hero-content{

    animation:fadeUp 1s ease both;

}

/* ==========================
   KEYFRAMES
========================== */

@keyframes fadeUp{

0%{

opacity:0;
transform:translateY(40px);

}

100%{

opacity:1;
transform:translateY(0);

}

}

@keyframes fadeIn{

from{

opacity:0;

}

to{

opacity:1;

}

}

@keyframes pulse{

0%{

transform:scale(1);

}

50%{

transform:scale(1.08);

}

100%{

transform:scale(1);

}

}

/* ==========================
   BACK TO TOP BUTTON
========================== */

#topBtn{

position:fixed;

right:25px;
bottom:25px;

width:55px;
height:55px;

border:none;

border-radius:50%;

background:var(--gold);

color:#111;

font-size:24px;
font-weight:bold;

cursor:pointer;

display:none;

justify-content:center;
align-items:center;

box-shadow:var(--shadow);

transition:.35s;

z-index:999;

}

#topBtn:hover{

background:var(--gold-light);

transform:translateY(-6px);

}

/* ==========================
   HAMBURGER ANIMATION
========================== */

.menu-toggle.active span:nth-child(1){

transform:translateY(7px) rotate(45deg);

}

.menu-toggle.active span:nth-child(2){

opacity:0;

}

.menu-toggle.active span:nth-child(3){

transform:translateY(-7px) rotate(-45deg);

}

/* ==========================
   IMAGE EFFECTS
========================== */

.gallery-card img,
.menu-card img,
.about-image img{

transition:.5s ease;

}

.gallery-card:hover img,
.menu-card:hover img{

transform:scale(1.08);

}

/* ==========================
   SMOOTH SECTION SPACING
========================== */

section{

scroll-margin-top:90px;

}

/* ==========================
   PREVENT OVERFLOW
========================== */

body,
html{

overflow-x:hidden;

}

/* ==========================
   OPTIONAL LOADER SUPPORT
========================== */

body.loaded{

animation:fadeIn .5s ease;

}
/* ==========================================
   PART 6/6
   RESPONSIVE + FINAL POLISH
========================================== */

@media (max-width:992px){

.stats,
.review-container,
.menu-grid,
.gallery-grid,
.contact-grid,
.about-values,
.why-grid{
grid-template-columns:repeat(2,1fr);
}

.about-section{
grid-template-columns:1fr;
gap:50px;
text-align:center;
}

.about-content .section-title{
text-align:center;
}

.about-image img{
height:380px;
}

}

/* ==========================
   MOBILE
========================== */

@media (max-width:768px){

.navbar{
height:72px;
padding:0 6%;
}

.logo{
font-size:24px;
}

.menu-toggle{
display:block;
z-index:10001;
}

.nav-links{
position:absolute;
top:72px;
left:0;
width:100%;
display:none;
flex-direction:column;
align-items:center;
gap:22px;
padding:30px 0;
background:#111;
border-top:1px solid rgba(212,175,55,.15);
box-shadow:0 15px 35px rgba(0,0,0,.45);
}

.nav-links.show-menu{
display:flex;
animation:fadeIn .3s ease;
}

.hero{
padding:110px 20px 70px;
background-attachment:scroll;
}

.hero-content h1{
font-size:46px;
}

.hero-content p{
font-size:16px;
}

.hero-buttons{
flex-direction:column;
align-items:center;
}

.btn,
.btn-outline{
width:100%;
max-width:300px;
text-align:center;
margin:0;
}

.stats,
.review-container,
.menu-grid,
.gallery-grid,
.contact-grid,
.about-values,
.why-grid{
grid-template-columns:1fr;
}

.gallery-card img{
height:230px;
}

.menu-card img{
height:220px;
}

.about-image img{
height:300px;
}

.form-row{
grid-template-columns:1fr;
}

.contact-section,
.about-section,
.menu-section,
.gallery-section,
.reservation-section{
padding:90px 6% 60px;
}

.home-cta h2,
.menu-cta h2,
.gallery-cta h2,
.contact-cta h2,
.reservation-cta h2{
font-size:34px;
}

.section-title{
font-size:36px;
}

}

/* ==========================
   SMALL PHONES
========================== */

@media (max-width:480px){

.logo{
font-size:20px;
letter-spacing:1px;
}

.hero-content h1{
font-size:38px;
}

.hero-content p{
font-size:15px;
}

.btn,
.btn-outline{
padding:14px 24px;
font-size:15px;
}

.stat-card,
.review-box,
.menu-card,
.gallery-card,
.contact-card,
.about-value,
.why-card{
padding:22px;
}

footer h3{
font-size:28px;
}

footer p{
font-size:14px;
}

}

/* ==========================
   LARGE DESKTOPS
========================== */

@media (min-width:1400px){

.hero-content{
max-width:1050px;
}

.menu-grid,
.gallery-grid{
gap:35px;
}

}

/* ==========================
   ACCESSIBILITY
========================== */

button:focus,
a:focus,
input:focus,
textarea:focus,
select:focus{
outline:2px solid var(--gold);
outline-offset:3px;
}

/* ==========================
   END OF STYLE.CSS
========================================== */
