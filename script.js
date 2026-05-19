// =====================
// IRIN - MAIN SCRIPT
// ملف جافاسكربت واحد للموقع كامل
// =====================


// 1) رسالة زر البداية
function showMessage() {
  alert("مرحباً بك في IRIN 🚀");
}


// 2) إخفاء وإظهار الأقسام (اختياري للتطوير المستقبلي)
function showSection(id) {
  document.querySelectorAll("section").forEach(section => {
    section.style.display = "none";
  });

  const target = document.getElementById(id);
  if (target) {
    target.style.display = "block";
  }
}


// 3) تأثير ظهور العناصر عند التمرير
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach(el => {
  observer.observe(el);
});


// 4) زر الرجوع للأعلى
const scrollBtn = document.getElementById("scrollTop");

if (scrollBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}


// 5) تنعيم التنقل داخل الصفحة
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href").replace("#", "");
    const target = document.getElementById(targetId);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// 6) تشغيل الفيديوهات بشكل آمن (إذا موجودة)
document.querySelectorAll("video").forEach(video => {
  video.addEventListener("mouseenter", () => {
    video.play();
  });

  video.addEventListener("mouseleave", () => {
    video.pause();
  });
});


// 7) تحسين الأداء (خفيف)
console.log("IRIN script loaded successfully 🚀");
