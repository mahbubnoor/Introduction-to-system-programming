/* CSE 4105 slide viewer. The page defines window.D (slides as images, one per animation step) and may load
   ../notes/<deck>.js first, which sets window.DECK_NOTES; the Notes button appears only then (instructor copy). */
(function () {
  "use strict";
  var D = window.D, N = window.DECK_NOTES || null;
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var unit = D.label || "Lecture", me = D.course[D.idx], prevL = D.course[D.idx - 1], nextL = D.course[D.idx + 1];

  /* ---------- build the page ---------- */
  document.body.innerHTML =
    '<div id="bar" role="toolbar" aria-label="Slide navigation">' +
    '<a href="../index.html" title="Course home">⌂ <span class="wide">Course</span></a>' +
    '<a id="prevlec" class="mid" href="#" title="Previous ' + unit.toLowerCase() + ' ([)">◀ <span></span></a>' +
    '<select id="lecsel" aria-label="Go to ' + unit.toLowerCase() + '"></select>' +
    '<a id="nextlec" class="mid" href="#" title="Next ' + unit.toLowerCase() + ' (])"><span></span> ▶</a>' +
    '<a id="labbtn" class="lab" href="#" title="' + esc(D.labTitle || "Open the interactive lab") + ' (L)">' + esc(D.labShort || "Lab") + '</a>' +
    '<span class="sp"></span>' +
    '<div class="grp"><button type="button" id="prevs" aria-label="Previous step">‹</button><span id="count" class="count"></span><button type="button" id="nexts" aria-label="Next step">›</button></div>' +
    '<button type="button" id="listbtn" title="Slide list (S)">☰<span class="wide">&nbsp;Slides</span></button>' +
    '<a id="pdfbtn" class="wide" href="#" title="These slides as a PDF">PDF</a>' +
    '<button type="button" id="notesbtn" class="wide" title="Speaker notes (N)">Notes</button>' +
    '<button type="button" id="fsbtn" title="Full screen (F)">⛶<span class="wide">&nbsp;Full screen</span></button>' +
    '<button type="button" id="helpbtn" class="mid" aria-label="Keyboard shortcuts">?</button></div>' +
    '<div id="prog"></div>' +
    '<div id="help" hidden><b>Keyboard</b><br><kbd>→</kbd> <kbd>Space</kbd> next step · <kbd>←</kbd> back · click the slide: right two thirds next, left third back<br>' +
    '<kbd>Home</kbd> / <kbd>End</kbd> first / last slide · type a number + <kbd>Enter</kbd> to jump<br>' +
    '<kbd>[</kbd> / <kbd>]</kbd> previous / next ' + unit.toLowerCase() + ' · <kbd>L</kbd> open the lab · <kbd>S</kbd> slide list<br>' +
    '<kbd>F</kbd> full screen' + (N ? ' · <kbd>N</kbd> speaker notes' : '') + ' · <kbd>Esc</kbd> close</div>' +
    '<nav id="drawer" aria-label="Slides"><h2 id="dtitle"></h2><ol id="list"></ol></nav>' +
    '<div id="view"><div class="frame" id="frame"><img id="img" alt=""><video id="vid" controls preload="none" playsinline></video>' +
    '<a class="labgo" id="labgo" href="#">Open the interactive lab →</a></div></div>' +
    '<div id="notes" hidden></div><div class="rotate">Turn your phone sideways for bigger slides.</div>';

  var sel = $("lecsel");
  D.course.forEach(function (l, i) { var o = document.createElement("option"); o.value = l.href; o.textContent = l.label; if (i === D.idx) o.selected = true; sel.appendChild(o); });
  sel.addEventListener("change", function () { location.href = sel.value; });
  function setLink(id, l) { var a = $(id); if (l) { a.href = l.href; a.title = l.label; a.querySelector("span").textContent = unit + " " + l.no; } else { a.classList.add("dis"); a.querySelector("span").textContent = unit; } }
  setLink("prevlec", prevL); setLink("nextlec", nextL);
  if (D.lab) { $("labbtn").href = D.lab; $("labgo").href = D.lab; } else $("labbtn").style.display = "none";
  if (D.pdf) $("pdfbtn").href = D.pdf; else $("pdfbtn").style.display = "none";
  if (!N) $("notesbtn").style.display = "none";
  $("dtitle").textContent = unit + " " + me.no + " · " + D.slides.length + " slides";
  D.slides.forEach(function (sl, i) {
    var li = document.createElement("li"), b = document.createElement("button");
    b.innerHTML = '<span class="n">' + (i + 1) + '</span><span></span>'; b.lastChild.textContent = sl.t || "(slide " + (i + 1) + ")";
    b.onclick = function () { go(i, 0); toggleList(false); }; li.appendChild(b); $("list").appendChild(li);
  });

  /* ---------- state and drawing ---------- */
  var s = 0, k = 0, notesOn = false, pre = {};
  try { notesOn = !!N && localStorage.getItem("cse4105-notes") === "1"; } catch (e) {}
  function preload(i, j) { var sl = D.slides[i]; if (!sl || !sl.steps[j] || pre[i + ":" + j]) return; var im = new Image(); im.src = sl.steps[j]; pre[i + ":" + j] = im; }
  function render() {
    var sl = D.slides[s], v = $("vid"), n = sl.steps.length;
    $("img").src = sl.steps[k]; $("img").alt = "Slide " + (s + 1) + ": " + sl.t;
    if (sl.v) { var r = sl.v; v.style.left = r[0] * 100 + "%"; v.style.top = r[1] * 100 + "%"; v.style.width = r[2] * 100 + "%"; v.style.height = r[3] * 100 + "%"; v.style.display = "block"; var src = sl.vsrc || D.video; if (v.getAttribute("src") !== src) v.src = src; }
    else { v.pause(); v.style.display = "none"; }
    $("labgo").style.display = sl.lab && D.lab ? "block" : "none";
    $("count").innerHTML = (s + 1) + " / " + D.slides.length + (n > 1 ? "<small>step " + (k + 1) + "/" + n + "</small>" : "");
    $("prog").style.width = ((s + (k + 1) / n) / D.slides.length * 100) + "%";
    [].forEach.call(document.querySelectorAll("#list button"), function (b, i) { b.classList.toggle("cur", i === s); });
    if (location.hash !== "#" + (s + 1)) history.replaceState(null, "", "#" + (s + 1));
    document.title = me.label + " (" + (s + 1) + "/" + D.slides.length + ") · CSE 4105";
    renderNotes(); preload(s, k + 1); preload(s + 1, 0); preload(s - 1, 0);
  }
  function renderNotes() {
    var box = $("notes"); $("notesbtn").classList.toggle("on", notesOn);
    if (!notesOn || !N) { box.hidden = true; return; }
    box.hidden = false; box.innerHTML = "<b>Speaker notes · slide " + (s + 1) + "</b>"; box.appendChild(document.createTextNode(N[s] || "(no notes for this slide)"));
  }
  function go(i, j) { closeEnd(); s = Math.max(0, Math.min(D.slides.length - 1, i)); k = Math.max(0, Math.min(D.slides[s].steps.length - 1, j)); render(); }
  function next() { if ($("endcard")) return; if (k < D.slides[s].steps.length - 1) { k++; render(); } else if (s < D.slides.length - 1) { s++; k = 0; render(); } else endCard(); }
  function prev() { if ($("endcard")) { closeEnd(); return; } if (k > 0) { k--; render(); } else if (s > 0) { s--; k = D.slides[s].steps.length - 1; render(); } }

  function endCard() {
    var d = document.createElement("div"); d.id = "endcard";
    var h = "<div><h2>End of " + esc(me.label) + "</h2><p>" + esc(D.title) + "</p><div class=\"row\">";
    if (nextL) h += '<a class="go" href="' + nextL.href + '">' + esc(nextL.label) + " →</a>";
    if (D.lab) h += '<a href="' + D.lab + '">' + esc(D.labTitle || "Open the interactive lab") + "</a>";
    h += '<a href="../index.html">Course home</a><button type="button" id="stay">Stay here</button></div></div>';
    d.innerHTML = h; document.body.appendChild(d);
    $("stay").addEventListener("click", closeEnd); $("stay").focus();
    d.addEventListener("click", function (e) { if (e.target === d) closeEnd(); });
  }
  function closeEnd() { var e = $("endcard"); if (e) e.remove(); }
  function toggleList(open) { $("drawer").classList.toggle("open", open); if (open) { var c = document.querySelector("#list .cur"); if (c) c.focus(); } else if (document.activeElement && $("drawer").contains(document.activeElement)) document.activeElement.blur(); }
  function toggleNotes() { if (!N) return; notesOn = !notesOn; try { localStorage.setItem("cse4105-notes", notesOn ? "1" : "0"); } catch (e) {} renderNotes(); }
  function toggleFs() { if (!document.fullscreenElement) { var p = document.documentElement.requestFullscreen && document.documentElement.requestFullscreen(); if (p && p.catch) p.catch(function () {}); } else document.exitFullscreen(); }

  $("nexts").onclick = next; $("prevs").onclick = prev;
  $("listbtn").onclick = function () { toggleList(!$("drawer").classList.contains("open")); };
  $("notesbtn").onclick = toggleNotes; $("fsbtn").onclick = toggleFs;
  $("helpbtn").onclick = function () { $("help").hidden = !$("help").hidden; };
  $("img").addEventListener("click", function (e) { var r = e.currentTarget.getBoundingClientRect(); (e.clientX - r.left < r.width / 3) ? prev() : next(); });
  document.addEventListener("fullscreenchange", function () { document.body.classList.toggle("fs", !!document.fullscreenElement); poke(); });
  var idleT; function poke() { document.body.classList.remove("idle"); clearTimeout(idleT); idleT = setTimeout(function () { document.body.classList.add("idle"); }, 2500); }
  document.addEventListener("mousemove", poke);

  var typed = "";
  document.addEventListener("keydown", function (e) {
    var tag = (e.target.tagName || "").toLowerCase(), key = e.key;
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    if (tag === "select" || tag === "input" || tag === "textarea") return;
    if (tag === "video" && (key === " " || key === "ArrowLeft" || key === "ArrowRight")) return;
    var onCtl = tag === "button" || tag === "a";
    if (/^[0-9]$/.test(key)) { typed += key; return; }
    if (key === "Enter" && typed) { go(parseInt(typed, 10) - 1, 0); typed = ""; e.preventDefault(); return; }
    typed = "";
    if ((key === " " || key === "Enter") && onCtl) return;
    if (key === "ArrowRight" || key === "ArrowDown" || key === "PageDown" || key === " ") { e.preventDefault(); next(); }
    else if (key === "ArrowLeft" || key === "ArrowUp" || key === "PageUp" || key === "Backspace") { e.preventDefault(); prev(); }
    else if (key === "Home") go(0, 0); else if (key === "End") go(D.slides.length - 1, 99);
    else if (key === "f" || key === "F") toggleFs();
    else if (key === "n" || key === "N") toggleNotes();
    else if (key === "s" || key === "S") toggleList(!$("drawer").classList.contains("open"));
    else if ((key === "l" || key === "L") && D.lab) location.href = D.lab;
    else if (key === "[" && prevL) location.href = prevL.href;
    else if (key === "]" && nextL) location.href = nextL.href;
    else if (key === "?") $("help").hidden = !$("help").hidden;
    else if (key === "Escape") { closeEnd(); toggleList(false); $("help").hidden = true; }
  });
  var tx = null, ty = null;
  $("frame").addEventListener("touchstart", function (e) { if (e.target.tagName === "VIDEO") return; tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, { passive: true });
  $("frame").addEventListener("touchend", function (e) { if (tx === null) return; var dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty; tx = null; if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) (dx < 0 ? next : prev)(); });
  window.addEventListener("hashchange", function () { var n = parseInt(location.hash.slice(1), 10); if (n >= 1 && n <= D.slides.length && n - 1 !== s) go(n - 1, 0); });
  var start = parseInt(location.hash.slice(1), 10); if (start >= 1 && start <= D.slides.length) s = start - 1;
  window.go = go; window.next = next; window.prev = prev;
  render(); poke();
})();
