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
import './App.css';
import { useState, useRef } from 'react';

const SITE_PATH = "https://cattype.herokuapp.com"
// const SITE_PATH = "http://localhost:3000"
const QUERY_PARAM_MSG = "msg"

const FONT_SIZE = 25
const FONT_MARGIN_BOTTOM = FONT_SIZE / 5

function App() {
  const initialUrlParams = new URLSearchParams(window.location.search);
  const initialReceivedMessage = initialUrlParams.get(QUERY_PARAM_MSG)
  const displayReceivedMessage = !!initialReceivedMessage
  const [inputValue, setInputValue] = useState(initialReceivedMessage ?? "")

  const txtRef = useRef()

  function onChangeInput(e) {
    setInputValue(e.target.value)
  }

  async function onShare() {
    const shareableLink = `${SITE_PATH}/?msg=${encodeURI(inputValue)}`
    await navigator.clipboard.writeText(shareableLink)
    window.location = shareableLink
  }

  return (
    <>
    <div style={{textAlign: "center", margin: "5%", backgroundColor: "white", padding: "10px", borderColor: "#B87333", borderWidth: "1px", borderStyle: "solid", borderRadius: "5px"}}>
      {!displayReceivedMessage && <textarea ref={txtRef} value={inputValue} onChange={onChangeInput} autoFocus={true} placeholder="try me" style={{paddingBottom: "10px", resize: "none", width: "100%", maxWidth: "100%", paddingRight: "0px", marginRight: "0px"}} />}
      <div style={{textAlign: "left", paddingBottom: "10px"}}>
        {inputValue.toLowerCase().split("").map((letter) => {
          return letter_to_cat[letter] ? 
            <img height={FONT_SIZE} style={{marginBottom: `-${FONT_MARGIN_BOTTOM}px`}} src={letter_to_cat[letter]} /> :
            letter.charCodeAt(0) == 10 ?
              <div /> :
              <span style={{fontSize: `${FONT_SIZE}px`}}>{letter}</span> 
          })}
      </div>
      {!displayReceivedMessage && <button onClick={onShare}>Share</button>}
    </div>
    <div style={{textAlign: "center"}}>
      {displayReceivedMessage && <a href={SITE_PATH}><button>Reply</button></a>}
    </div>
    </>
  );
}

const letter_to_cat = {
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

export default App;
