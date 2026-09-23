'use client';
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ArrowDown, Menu, X, Zap } from 'lucide-react';
import Image from 'next/image';

const X_URL = 'https://x.com/FuseBullX';
const FUSE_URL = 'https://fusi.ng';
const steps = [
  ['01', 'DISCOVER', 'Find what’s taking shape.'],
  ['02', 'CREATE', 'Give an idea its own token.'],
  ['03', 'TRADE', 'Meet the market on Ethereum.'],
  ['04', 'FUSE', 'Where the energy comes together.'],
];
function BullImage({className='', priority=false}:{className?:string,priority?:boolean}) {return <Image src="/fuse-bull.jpg" alt="Fuse Bull, a white bull wearing a cyan and violet visor against a glowing circular backdrop" width={1536} height={1536} priority={priority} className={className}/>}
function Label({children}:{children:React.ReactNode}) {return <span className="eyebrow">{children}</span>}
function LinkButton({href,children,secondary=false}:{href:string,children:React.ReactNode,secondary?:boolean}) {return <a className={'button '+(secondary?'button-ghost':'button-primary')} href={href} target={href.startsWith('http')?'_blank':undefined} rel={href.startsWith('http')?'noopener noreferrer':undefined}>{children}<ArrowUpRight size={17} aria-hidden="true"/></a>}
export default function Home(){
 const [active,setActive]=useState(false),[menu,setMenu]=useState(false),[scrolled,setScrolled]=useState(false);
 const reduce=useReducedMotion();
 useEffect(()=>{const fn=()=>setScrolled(window.scrollY>30);fn();window.addEventListener('scroll',fn,{passive:true});return()=>window.removeEventListener('scroll',fn)},[]);
 return <main>
  <header className={'nav '+(scrolled?'nav-scrolled':'')}>
   <a className="brand" href="#top" aria-label="Fuse Bull, back to top"><span className="brand-mark"><BullImage/></span><span>FUSE<span className="brand-light">BULL</span></span></a>
   <nav className={'nav-links '+(menu?'open':'')} aria-label="Main navigation"><a href="#about" onClick={()=>setMenu(false)}>THE BULL</a><a href="#origin" onClick={()=>setMenu(false)}>THE FUSE</a><a href="#herd" onClick={()=>setMenu(false)}>THE HERD</a><a className="nav-cta" href={FUSE_URL} target="_blank" rel="noopener noreferrer">ENTER FUSI.NG <ArrowUpRight size={15}/></a></nav>
   <button className="menu-button" onClick={()=>setMenu(!menu)} aria-label={menu?'Close menu':'Open menu'} aria-expanded={menu}>{menu?<X/>:<Menu/>}</button>
  </header>
  <section className="hero" id="top"><div className="hero-grid"/><div className="hero-noise"/>
   <div className="hero-copy"><Label>FUSI.NG UNIVERSE <span className="divider">/</span> NEW ENTITY DETECTED</Label><h1><span>THE BULL</span><span>HAS ENTERED</span><em>THE FUSE.</em></h1><p>Meet $BULL. The new face charging through the Fusi.ng universe.</p><div className="actions"><LinkButton href={FUSE_URL}>ENTER THE FUSE</LinkButton><a className="text-link" href="#about">MEET THE BULL <ArrowDown size={16}/></a></div></div>
   <motion.div className="hero-art" initial={reduce?false:{opacity:0,y:36,scale:.96}} animate={{opacity:1,y:0,scale:1}} transition={{duration:1.1,delay:.2}}><div className="hero-halo"/><BullImage priority className="hero-bull"/><span className="art-label">// BULL DETECTED</span></motion.div>
   <div className="hero-status"><span>STATUS <b>● ONLINE</b></span><span>NETWORK <b>ETHEREUM</b></span><span>SPECIES <b>BULL</b></span><span>ENERGY <b>MAX</b></span></div><span className="hero-index">001 / 004</span>
  </section>
  <section className="intro section-wrap" id="about"><div className="section-top"><Label>001 / THE BULL</Label><span>AN ENTITY WITH HORNS</span></div><div className="intro-layout"><div><h2>NOT ANOTHER<br/>SUIT ON <span className="outline">WALL STREET.</span><br/><span className="gradient-text">THIS ONE HAS HORNS.</span></h2><p className="intro-text">The Bull of Fuse. A little electric, a little unpredictable, and right at home in the Fusi.ng universe.</p><div className="traits"><span>CHARGED</span><span>UNBOTHERED</span><span>ONCHAIN</span></div></div><div className="intro-visual"><BullImage/><span>// VISOR CHARGED</span></div></div></section>
  <section className="origin section-wrap" id="origin"><div className="section-top"><Label>002 / ORIGIN</Label><span>THE WORLD BEHIND THE BULL</span></div><h2>BUILT FROM<br/><span className="gradient-text">THE SAME ENERGY.</span></h2><p className="origin-lede">A mascot for the culture growing around Fusi.ng.</p><div className="steps">{steps.map(([n,title,desc])=><div className="step" key={n}><span className="step-num">{n} / 04</span><strong>{title}</strong><p>{desc}</p><span className="step-line"/></div>)}</div><div className="origin-foot"><span>FUSI.NG PLATFORM</span><span>ETHEREUM MAINNET <i/> UNISWAP V4</span></div></section>
  <section className={'mode '+(active?'mode-active':'')} id="mode"><div className="mode-glow"/><div className="mode-grid"/><div className="mode-content"><Label>EXPERIMENT / 001</Label><h2>{active?<>BULL MODE:<br/><span className="gradient-text">ACTIVE.</span></>:<>PRESS TO RELEASE<br/><span className="outline">THE BULL.</span></>}</h2><p>{active?'Horns online. Visor charged.':'One tap. A different kind of energy.'}</p><button className="mode-switch" type="button" onClick={()=>setActive(!active)} aria-pressed={active}><Zap size={22} fill={active?'currentColor':'none'}/><span>{active?'POWER DOWN':'ACTIVATE BULL MODE'}</span><span className="switch-dot"/></button><div className="mode-trace" aria-hidden="true"><svg viewBox="0 0 800 220" preserveAspectRatio="none"><path d="M0 185 L80 170 L145 178 L210 140 L280 151 L340 124 L405 139 L475 102 L530 114 L595 75 L660 88 L720 45 L800 23"/></svg></div></div><div className="mode-side-art"><BullImage/></div><span className="mode-note">// VISUAL MODE ONLY</span></section>
  <section className="culture section-wrap"><div className="section-top"><Label>003 / CHARACTER</Label><span>FACE OF THE FUSE</span></div><div className="culture-layout"><div><h2>EVERY PROTOCOL<br/>NEEDS A FACE.</h2><p>Fuse found one with horns.</p><span className="small-note">// MARKET WATCHING</span></div><div className="culture-frame"><BullImage/><div className="frame-caption"><span>FUSE BULL / 001</span><span>THE BULL OF FUSE</span></div></div></div></section>
  <section className="home-panel section-wrap"><div className="home-inner"><Label>FUSI.NG × FUSE BULL</Label><h2>THE MASCOT<br/>HAS A HOME.</h2><p>Follow the Bull back to the platform that started it all.</p><LinkButton href={FUSE_URL}>EXPLORE FUSI.NG</LinkButton><div className="portal" aria-hidden="true"/></div></section>
  <section className="herd section-wrap" id="herd"><Label>004 / THE HERD</Label><h2>THE HERD<br/><span className="gradient-text">IS FORMING.</span></h2><p>Follow the Bull. Enter the Fuse.</p><div className="actions"><LinkButton href={X_URL}>FOLLOW $BULL ON X</LinkButton><LinkButton href={FUSE_URL} secondary>VISIT FUSI.NG</LinkButton></div><div className="herd-art"><BullImage/></div></section>
  <footer><div className="footer-main"><a href="#top">FUSE BULL<span>THE BULL OF FUSE.</span></a><div><a href={X_URL} target="_blank" rel="noopener noreferrer">X ↗</a><a href={FUSE_URL} target="_blank" rel="noopener noreferrer">FUSI.NG ↗</a></div></div><div className="footer-bottom"><span>CONCEPT INTERFACE / 2026</span><span>Tokens can be volatile. Nothing here is financial advice.</span></div></footer>
 </main>
}
