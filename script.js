document.getElementById("y").textContent = new Date().getFullYear();
var bar = document.getElementById("bar");
addEventListener(
  "scroll",
  function () {
    var h = document.documentElement;
    bar.style.width =
      (h.scrollTop / (h.scrollHeight - h.clientHeight || 1)) * 100 + "%";
  },
  { passive: true },
);
var els = document.querySelectorAll(".rv");
if ("IntersectionObserver" in window) {
  var io = new IntersectionObserver(
    function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15 },
  );
  els.forEach(function (el, i) {
    el.style.transitionDelay = (i % 3) * 90 + "ms";
    io.observe(el);
  });
} else {
  els.forEach(function (el) {
    el.classList.add("in");
  });
}
(function () {
  var sk = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Responsive Design",
    "Tailwind CSS",
    "Bootstrap",
    "REST APIs",
    "Git & GitHub",
    "SQL",
    "Python",
    "Excel",
    "Spreadsheets",
    "Accounts",
    "Tally",
    "Busy",
    "Stock Management",
    "Warehouse Management",
  ];
  document.getElementById("mq").innerHTML = sk
    .concat(sk)
    .map(function (s) {
      return "<span>" + s.replace("&", "&amp;") + "</span>";
    })
    .join("");
  var hero = document.querySelector(".hero"),
    g = document.getElementById("glow");
  hero.addEventListener("pointermove", function (e) {
    if (e.pointerType !== "mouse") return;
    var r = hero.getBoundingClientRect();
    g.style.transform =
      "translate(" +
      (e.clientX - r.left - 200) +
      "px," +
      (e.clientY - r.top - 200) +
      "px)";
    g.style.opacity = 1;
  });
  hero.addEventListener("pointerleave", function () {
    g.style.opacity = 0;
  });
  [
    "A1",
    "=SUM",
    "</>",
    "{ }",
    "SQL",
    "useState",
    "B2",
    ".map()",
    "SKU",
    "fx",
  ].forEach(function (t, i) {
    var s = document.createElement("span");
    s.className = "fl";
    s.textContent = t;
    s.style.left = 6 + ((i * 37) % 84) + "%";
    s.style.top = 8 + ((i * 23) % 78) + "%";
    s.style.animationDelay = -i * 1.3 + "s";
    s.style.fontSize = 0.8 + (i % 3) * 0.2 + "rem";
    hero.appendChild(s);
  });
  var roles = [
      "Front-End Developer",
      "React + JavaScript builder",
      "Spreadsheet-to-code thinker",
    ],
    ri = 0,
    ci = 0,
    del = false,
    rl = document.getElementById("role");
  function type() {
    var w = roles[ri];
    ci += del ? -1 : 1;
    rl.textContent = w.slice(0, ci);
    var d = del ? 35 : 75;
    if (!del && ci === w.length) {
      del = true;
      d = 1400;
    } else if (del && ci === 0) {
      del = false;
      ri = (ri + 1) % roles.length;
      d = 300;
    }
    setTimeout(type, d);
  }
  type();
  var co = new IntersectionObserver(
    function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        co.unobserve(e.target);
        var el = e.target,
          to = +el.dataset.to,
          d = +(el.dataset.d || 0),
          t0 = performance.now();
        (function f(t) {
          var p = Math.min((t - t0) / 1400, 1);
          el.textContent = (to * (1 - Math.pow(1 - p, 3))).toFixed(d);
          if (p < 1) requestAnimationFrame(f);
        })(t0);
      });
    },
    { threshold: 0.6 },
  );
  document.querySelectorAll("[data-to]").forEach(function (el) {
    co.observe(el);
  });
  document.querySelectorAll(".tilt").forEach(function (c) {
    c.addEventListener("pointermove", function (e) {
      if (e.pointerType !== "mouse") return;
      var r = c.getBoundingClientRect(),
        x = (e.clientX - r.left) / r.width - 0.5,
        y = (e.clientY - r.top) / r.height - 0.5;
      c.style.transform =
        "perspective(700px) rotateY(" +
        x * 10 +
        "deg) rotateX(" +
        -y * 10 +
        "deg) translateY(-4px)";
    });
    c.addEventListener("pointerleave", function () {
      c.style.transform = "";
    });
  });
})();
(function () {
  var r = document.documentElement,
    k = "vk-theme",
    s = null;
  try {
    s = localStorage.getItem(k);
  } catch (e) {}
  r.setAttribute(
    "data-theme",
    s ||
      (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"),
  );
  document.getElementById("t").onclick = function () {
    var n = r.getAttribute("data-theme") === "dark" ? "light" : "dark";
    r.setAttribute("data-theme", n);
    try {
      localStorage.setItem(k, n);
    } catch (e) {}
  };
})();

/* Highlight the nav link of the section on screen */
(function () {
  if (!("IntersectionObserver" in window)) return;
  var links = document.querySelectorAll('nav div a[href^="#"]'),
    map = {};
  links.forEach(function (a) {
    map[a.getAttribute("href").slice(1)] = a;
  });
  var so = new IntersectionObserver(
    function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) {
          links.forEach(function (a) {
            a.classList.remove("on");
          });
          map[e.target.id].classList.add("on");
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );
  Object.keys(map).forEach(function (id) {
    var s = document.getElementById(id);
    if (s) so.observe(s);
  });
})();
