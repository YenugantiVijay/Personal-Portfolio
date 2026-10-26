document.getElementById("y").textContent = new Date().getFullYear();
var bar = document.getElementById("bar");
var nav = document.querySelector("nav");
function updateNav() {
  if (!nav) return;
  var sy = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
  if (sy > 15) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
}
updateNav();
window.addEventListener(
  "scroll",
  function () {
    var h = document.documentElement;
    if (bar) {
      bar.style.width =
        (h.scrollTop / (h.scrollHeight - h.clientHeight || 1)) * 100 + "%";
    }
    updateNav();
  },
  { passive: true },
);
window.addEventListener("resize", updateNav);

// Click on logo smoothly scrolls back to hero section
var logoLink = document.querySelector(".nav-logo");
if (logoLink) {
  logoLink.addEventListener("click", function (e) {
    var href = logoLink.getAttribute("href");
    if (href === "#top" || href === "#") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
}

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
      "Founder @ Pixora Studio",
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

/* ---- Portfolio Chatbot Widget Logic ---- */
(function () {
  var toggleBtn = document.getElementById("chatbot-toggle");
  var widget = document.getElementById("chatbot-widget");
  var messagesContainer = document.getElementById("cb-messages");
  var chipsContainer = document.getElementById("cb-chips");
  var form = document.getElementById("cb-form");
  var input = document.getElementById("cb-input");

  if (!toggleBtn || !widget || !messagesContainer || !chipsContainer || !form || !input) return;

  var defaultQuestions = [
    "✨ Pixora Studio",
    "👋 Who is Vijay?",
    "🛠️ Key Skills",
    "💼 Work Experience",
    "🚀 Current Projects",
    "📬 Contact Details"
  ];

  var isInitialized = false;

  function renderChips(questions) {
    chipsContainer.innerHTML = "";
    (questions || defaultQuestions).forEach(function (q) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "cb-chip";
      btn.textContent = q;
      btn.addEventListener("click", function () {
        handleSend(q);
      });
      chipsContainer.appendChild(btn);
    });
  }

  function appendMessage(sender, htmlContent) {
    var msg = document.createElement("div");
    msg.className = "cb-msg " + sender;
    msg.innerHTML = htmlContent;
    messagesContainer.appendChild(msg);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  function showTypingIndicator() {
    var typing = document.createElement("div");
    typing.id = "cb-typing";
    typing.className = "cb-typing";
    typing.innerHTML = "<span></span><span></span><span></span>";
    messagesContainer.appendChild(typing);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  function removeTypingIndicator() {
    var typing = document.getElementById("cb-typing");
    if (typing) typing.remove();
  }

  function getBotResponse(rawText) {
    var text = rawText.toLowerCase().replace(/[?!.,]/g, " ").trim();

    if (/^(hi+|hello+|helo+w*|hey+|greetings|namaste|good\s*(morning|afternoon|evening))\b/.test(text)) {
      return "Hello! 👋 I'm Vijay's AI assistant. What would you like to know about Vijay or his web studio, <b>Pixora Studio</b>? You can tap any of the suggested questions below or ask me anything!";
    }

    if (/\b(pixora|studio|agency|business|venture|company|client|services|hire\s*studio|consulting)\b/.test(text)) {
      return "<b>Pixora Studio</b> is Vijay's independent digital web design &amp; engineering studio!<br><br><b>• What it does:</b> Handcrafts high-converting responsive business websites, commercial landing pages, cloud edge hosting, and maintenance retainers.<br><b>• Client Promise:</b> Direct 1-on-1 collaboration with Vijay, sub-second speed (100 Core Web Vitals), and zero builder lock-in.<br><br>👉 Explore the live studio at <a href='https://pixorastudio.website' target='_blank' rel='noopener'><b>pixorastudio.website</b></a>!";
    }

    if (/\b(who|about|bio|background|summary|profile|developer|vijay)\b/.test(text)) {
      return "I'm <b>Vijay Kumar Yenuganti</b>, a Front-End Developer at <b>MetaMinds Pvt. Ltd.</b> and Founder of <b>Pixora Studio</b>.<br><br>Before moving into full-time code, I worked for 1.6 years in accounts and warehouse management at Vamsi Enterprises. That experience shaped how I build interfaces: practical, detail-oriented, and made for real-world usability!";
    }

    if (/\b(skill|skills|stack|technolog|frontend|react|javascript|python|sql|html|css|tailwind|tools)\b/.test(text)) {
      return "Vijay's core technical toolkit:<br><br><b>• Front-End:</b> HTML5, CSS3, JavaScript (ES6+), React, Tailwind CSS, Bootstrap, Responsive Design<br><b>• Backend & Data:</b> REST APIs, Git &amp; GitHub, SQL, Python<br><b>• Operations:</b> Advanced Excel, Spreadsheets, Tally, Busy, Stock &amp; Warehouse Management";
    }

    if (/\b(experience|work|journey|job|career|history|metaminds|mindminds|vamsi|warehouse|accounts)\b/.test(text)) {
      return "Vijay brings a dual background in development and operations:<br><br><b>1. Front-End Developer</b> @ MetaMinds Pvt. Ltd. (Current)<br>Worked on the Mallampalli Group project (1.5 months) and currently building the <b>Fashion Hub</b> e-commerce platform.<br><br><b>2. Agent</b> @ Vamsi Enterprises (1.6 Years)<br>Day-to-day stock records, spreadsheets, and accounts, building rigorous accuracy and process thinking.";
    }

    if (/\b(project|projects|fashion|mallampalli|portfolio|built|work|ecommerce|website)\b/.test(text)) {
      return "Key projects built by Vijay:<br><br><b>• Pixora Studio:</b> Independent digital web design & engineering studio (<a href='https://pixorastudio.website' target='_blank' rel='noopener'>pixorastudio.website</a>).<br><b>• Fashion Hub (Ongoing):</b> An e-commerce website currently under active development at MetaMinds.<br><b>• Mallampalli Group:</b> Enterprise client portal (<a href='http://mallampalligroup.in/' target='_blank' rel='noopener'>mallampalligroup.in</a>).<br><b>• MetaMinds Dashboard:</b> High-performance internal enterprise analytics suite.<br><b>• Smart Counseling:</b> Interactive student & career advisory demo.<br><br>Browse his repositories on <a href='https://github.com/YenugantiVijay' target='_blank' rel='noopener'>GitHub</a>!";
    }

    if (/\b(contact|email|phone|reach|hire|linkedin|github|message|collaborat)\b/.test(text)) {
      return "Let's connect! You can reach Vijay directly via:<br><br>• 📧 Email: <a href='mailto:vijaykumaryenuganti1@gmail.com'>vijaykumaryenuganti1@gmail.com</a><br>• 💼 LinkedIn: <a href='https://www.linkedin.com/in/vijay-kumar-yenuganti-2b91a440b' target='_blank' rel='noopener'>Vijay Kumar Yenuganti</a><br>• 🐙 GitHub: <a href='https://github.com/YenugantiVijay' target='_blank' rel='noopener'>github.com/YenugantiVijay</a>";
    }

    if (/\b(resume|cv)\b/.test(text)) {
      return "Vijay is a Front-End Developer with hands-on experience in React, JavaScript, HTML, CSS, SQL, and Python, paired with 1.6+ years in operations management. You can get in touch directly at <a href='mailto:vijaykumaryenuganti1@gmail.com'>vijaykumaryenuganti1@gmail.com</a> to request a copy of his resume!";
    }

    if (/\b(education|degree|study|college|school)\b/.test(text)) {
      return "Vijay built his frontend engineering expertise through practical, hands-on production work at MetaMinds Pvt. Ltd., applying problem-solving skills honed during his operations career.";
    }

    return "I don't have an exact answer for that yet, but I can tell you all about Vijay's <b>skills</b>, <b>projects</b>, <b>work experience</b>, or <b>how to contact him</b>! Tap any of the topics below:";
  }

  var typingTimer = null;
  var clearChatTimeout = null;

  function clearChat() {
    if (typingTimer) {
      clearTimeout(typingTimer);
      typingTimer = null;
    }
    removeTypingIndicator();
    messagesContainer.innerHTML = "";
    isInitialized = false;
    input.value = "";
    renderChips(defaultQuestions);
  }

  function handleSend(userText) {
    if (!userText || !userText.trim()) return;
    var trimmed = userText.trim();

    // Clean user query display (strip leading emoji if from chip)
    var cleanDisplay = trimmed.replace(/^[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]\s*/u, "");
    appendMessage("user", cleanDisplay);
    input.value = "";

    showTypingIndicator();

    if (typingTimer) clearTimeout(typingTimer);
    typingTimer = setTimeout(function () {
      removeTypingIndicator();
      var botReply = getBotResponse(trimmed);
      appendMessage("bot", botReply);
      renderChips(defaultQuestions);
      typingTimer = null;
    }, 420);
  }

  function initChat() {
    if (isInitialized) return;
    isInitialized = true;
    appendMessage(
      "bot",
      "Hi there! 👋 I'm Vijay's AI assistant. How can I help you today? Tap any of the common questions below or type your own:"
    );
    renderChips(defaultQuestions);
  }

  function openChat() {
    // If reopened within 5 seconds, preserve conversation and cancel clear timer
    if (clearChatTimeout) {
      clearTimeout(clearChatTimeout);
      clearChatTimeout = null;
    }

    widget.classList.add("open");
    toggleBtn.classList.add("open");
    widget.setAttribute("aria-hidden", "false");
    toggleBtn.setAttribute("aria-expanded", "true");

    if (!isInitialized) {
      initChat();
    }

    setTimeout(function () {
      input.focus();
    }, 180);
  }

  function closeChat() {
    widget.classList.remove("open");
    toggleBtn.classList.remove("open");
    widget.setAttribute("aria-hidden", "true");
    toggleBtn.setAttribute("aria-expanded", "false");

    // Clear chat automatically 5 seconds after closing
    if (clearChatTimeout) {
      clearTimeout(clearChatTimeout);
      clearChatTimeout = null;
    }

    clearChatTimeout = setTimeout(function () {
      if (!widget.classList.contains("open")) {
        clearChat();
      }
    }, 5000);
  }

  toggleBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    if (widget.classList.contains("open")) {
      closeChat();
    } else {
      openChat();
    }
  });

  // Close chatbot when clicking anywhere on the site outside of it
  document.addEventListener("click", function (e) {
    if (!widget.classList.contains("open")) return;
    if (!widget.contains(e.target) && !toggleBtn.contains(e.target)) {
      closeChat();
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    handleSend(input.value);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && widget.classList.contains("open")) {
      closeChat();
      toggleBtn.focus();
    }
  });
})();

/* Project cards touch / click toggle for touch devices */
(function () {
  var cards = document.querySelectorAll(".project-card");
  cards.forEach(function (card) {
    card.addEventListener("click", function (e) {
      if (e.target.closest("a") || e.target.closest("button")) return;
      var wasActive = card.classList.contains("active");
      cards.forEach(function (c) {
        if (c !== card) c.classList.remove("active");
      });
      card.classList.toggle("active", !wasActive);
    });
  });
})();



