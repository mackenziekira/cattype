import catfont_og_a from './assets/catfont_og_a.jpeg';
import catfont_og_b from './assets/catfont_og_b.jpeg';
import catfont_og_c from './assets/catfont_og_c.jpeg';
import catfont_og_d from './assets/catfont_og_d.jpeg';
import catfont_og_e from './assets/catfont_og_e.jpeg';
import catfont_og_f from './assets/catfont_og_f.jpeg';
import catfont_og_g from './assets/catfont_og_g.jpeg';
import catfont_og_h from './assets/catfont_og_h.jpeg';
import catfont_og_i from './assets/catfont_og_i.jpeg';
import catfont_og_j from './assets/catfont_og_j.jpeg';
import catfont_og_k from './assets/catfont_og_k.jpeg';
import catfont_og_l from './assets/catfont_og_l.jpeg';
import catfont_og_m from './assets/catfont_og_m.jpeg';
import catfont_og_n from './assets/catfont_og_n.jpeg';
import catfont_og_o from './assets/catfont_og_o.jpeg';
import catfont_og_p from './assets/catfont_og_p.jpeg';
import catfont_og_q from './assets/catfont_og_q.jpeg';
import catfont_og_r from './assets/catfont_og_r.jpeg';
import catfont_og_s from './assets/catfont_og_s.jpeg';
import catfont_og_t from './assets/catfont_og_t.jpeg';
import catfont_og_u from './assets/catfont_og_u.jpeg';
import catfont_og_v from './assets/catfont_og_v.jpeg';
import catfont_og_w from './assets/catfont_og_w.jpeg';
import catfont_og_x from './assets/catfont_og_x.jpeg';
import catfont_og_y from './assets/catfont_og_y.jpeg';
import catfont_og_z from './assets/catfont_og_z.jpeg';

import daddy_cat_a from './assets/daddy_cat_a.jpeg';
import daddy_cat_b from './assets/daddy_cat_b.jpeg';
import daddy_cat_c from './assets/daddy_cat_c.jpeg';
import daddy_cat_d from './assets/daddy_cat_d.jpeg';
import daddy_cat_e from './assets/daddy_cat_e.jpeg';
import daddy_cat_f from './assets/daddy_cat_f.jpeg';
import daddy_cat_g from './assets/daddy_cat_g.jpeg';
import daddy_cat_h from './assets/daddy_cat_h.jpeg';
import daddy_cat_i from './assets/daddy_cat_i.jpeg';
import daddy_cat_j from './assets/daddy_cat_j.jpeg';
import daddy_cat_k from './assets/daddy_cat_k.jpeg';
import daddy_cat_l from './assets/daddy_cat_l.jpeg';
import daddy_cat_m from './assets/daddy_cat_m.jpeg';
import daddy_cat_n from './assets/daddy_cat_n.jpeg';
import daddy_cat_o from './assets/daddy_cat_o.jpeg';
import daddy_cat_p from './assets/daddy_cat_p.jpeg';
import daddy_cat_q from './assets/daddy_cat_q.jpeg';
import daddy_cat_r from './assets/daddy_cat_r.jpeg';
import daddy_cat_s from './assets/daddy_cat_s.jpeg';
import daddy_cat_t from './assets/daddy_cat_t.jpeg';
import daddy_cat_u from './assets/daddy_cat_u.jpeg';
import daddy_cat_v from './assets/daddy_cat_v.jpeg';
import daddy_cat_w from './assets/daddy_cat_w.jpeg';
import daddy_cat_x from './assets/daddy_cat_x.jpeg';
import daddy_cat_y from './assets/daddy_cat_y.jpeg';
import daddy_cat_z from './assets/daddy_cat_z.jpeg';

import './App.css';
import { useState, useRef } from 'react';

const SITE_PATH = "https://cattype.herokuapp.com"
// const SITE_PATH = "http://localhost:3000"
const QUERY_PARAM_MSG = "msg"
const QUERY_PARAM_CATMODE = "mode"

const FONT_SIZE = 60

function isOgMode(cattmode) {
  return cattmode == "og"
}

function isDaddyMode(cattmode) {
  return cattmode == "daddy"
}

function CatMessage({message: message, catmode: catmode}) {
  const FONT_MARGIN_BOTTOM = isOgMode(catmode) ? FONT_SIZE / 5 : FONT_SIZE / 7

  return (
    <div style={{textAlign: "left", paddingBottom: "10px"}}>
      {message.toLowerCase().split("").map((letter) => {
        const cat_src = isDaddyMode(catmode) ? letter_to_daddy_cat[letter] : letter_to_og_cat[letter]
        return cat_src ? 
          <img height={FONT_SIZE} style={{marginBottom: `-${FONT_MARGIN_BOTTOM}px`}} src={cat_src} /> :
          letter.charCodeAt(0) == 10 ?
            <div /> :
            <span style={{fontSize: `${FONT_SIZE}px`}}>{letter}</span> 
        })}
    </div>
  )
}


function App() {
  const initialUrlParams = new URLSearchParams(window.location.search);
  const initialReceivedMessage = initialUrlParams.get(QUERY_PARAM_MSG)
  const initialReceivedMode = initialUrlParams.get(QUERY_PARAM_CATMODE)
  const isComposeMode = !initialReceivedMessage
  const [inputValue, setInputValue] = useState(initialReceivedMessage ?? "")
  const [showCopySuccess, setShowCopySuccess] = useState(false)

  const [catmode, setCatmode] = useState(initialReceivedMode ?? "og")

  const txtRef = useRef()

  function onChangeInput(e) {
    setInputValue(e.target.value)
  }

  async function onShare() {
    const shareableLink = `${SITE_PATH}/?${QUERY_PARAM_CATMODE}=${catmode}&${QUERY_PARAM_MSG}=${encodeURI(inputValue)}`
    await navigator.clipboard.writeText(shareableLink)
    setShowCopySuccess(true)
    setTimeout(() => setShowCopySuccess(false), 3000)
  }

  return (
    <div style={{textAlign: "center", margin: "5%"}}>
      {isComposeMode ? 
        <>
          <div style={{padding: "10px 0px"}}>
            <img style={{marginRight: "10px", borderColor: isOgMode(catmode) ? "blue" : "black", borderWidth: isOgMode(catmode) ? "2px" : "1px", borderStyle: "solid", borderRadius: "5px"}} onClick={() => setCatmode("og")} height={FONT_SIZE + 20} src={letter_to_og_cat.a} />
            <img style={{borderColor: isDaddyMode(catmode) ? "blue" : "black", borderWidth: isDaddyMode(catmode) ? "2px" : "1px", borderStyle: "solid", borderRadius: "5px"}} onClick={() => setCatmode("daddy")} height={FONT_SIZE + 20} src={letter_to_daddy_cat.a} />
          </div>
          <div style={{backgroundColor: "white", padding: "10px", borderColor: "#B87333", borderWidth: "1px", borderStyle: "solid", borderRadius: "5px"}}>
            <textarea ref={txtRef} value={inputValue} onChange={onChangeInput} autoFocus={true} placeholder="try me" style={{paddingBottom: "10px", resize: "none", width: "100%", maxWidth: "100%", paddingRight: "0px", marginRight: "0px"}} />
            <CatMessage message={inputValue} catmode={catmode} />
            <button onClick={onShare}>Share</button>
            {showCopySuccess && <div style={{color: "red"}}>Success! Link copied to clipboard.</div>}
          </div>
        </>
      : 
        <>
          <div style={{backgroundColor: "white", padding: "10px", borderColor: "#B87333", borderWidth: "1px", borderStyle: "solid", borderRadius: "5px"}}>
            <CatMessage message={inputValue} catmode={catmode} />
          </div>
          <div style={{paddingTop: "10px"}}>
            <a href={SITE_PATH}><button>Reply</button></a>
          </div>
        </>
      }
    </div>
  );
}

const letter_to_og_cat = {
  a: catfont_og_a,
  b: catfont_og_b,
  c: catfont_og_c,
  d: catfont_og_d,
  e: catfont_og_e,
  f: catfont_og_f,
  g: catfont_og_g,
  h: catfont_og_h,
  i: catfont_og_i,
  j: catfont_og_j,
  k: catfont_og_k,
  l: catfont_og_l,
  m: catfont_og_m,
  n: catfont_og_n,
  o: catfont_og_o,
  p: catfont_og_p,
  q: catfont_og_q,
  r: catfont_og_r,
  s: catfont_og_s,
  t: catfont_og_t,
  u: catfont_og_u,
  v: catfont_og_v,
  w: catfont_og_w,
  x: catfont_og_x,
  y: catfont_og_y,
  z: catfont_og_z,
}

const letter_to_daddy_cat = {
  a: daddy_cat_a,
  b: daddy_cat_b,
  c: daddy_cat_c,
  d: daddy_cat_d,
  e: daddy_cat_e,
  f: daddy_cat_f,
  g: daddy_cat_g,
  h: daddy_cat_h,
  i: daddy_cat_i,
  j: daddy_cat_j,
  k: daddy_cat_k,
  l: daddy_cat_l,
  m: daddy_cat_m,
  n: daddy_cat_n,
  o: daddy_cat_o,
  p: daddy_cat_p,
  q: daddy_cat_q,
  r: daddy_cat_r,
  s: daddy_cat_s,
  t: daddy_cat_t,
  u: daddy_cat_u,
  v: daddy_cat_v,
  w: daddy_cat_w,
  x: daddy_cat_x,
  y: daddy_cat_y,
  z: daddy_cat_z,
}

export default App;
