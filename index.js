// هسه هنا جبت كل أزرار الفلترة (الكل، الأمن، البرمجيات...) حتى أتحكم بيهن
const chips = document.querySelectorAll(".chip");
// وجبت كل البطاقات مال الوظائف حتى أظهر وأخفي حسب الفلتر
const cards = document.querySelectorAll(".job-card");
// كل العناصر اللي بيها حركة ظهور (reveal)
const revealItems = document.querySelectorAll(".reveal");
// النموذج مال التسجيل
const form = document.querySelector(".form");
// مكان رسالة النجاح بعد التسجيل
const formMessage = document.getElementById("formMessage");

// هنا كل زر فلترة من يدوس عليه المستخدم يغير الفلتر ويعرض بس الوظائف اللي تخصه
chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    // أول شي أشيل التفعيل من كل الأزرار
    chips.forEach((item) => item.classList.remove("active"));
    // أفعل الزر اللي المستخدم اختاره
    chip.classList.add("active");
    const selected = chip.dataset.filter;

    // أشيك كل بطاقة وظيفة إذا تنعرض أو تنخفي حسب الفلتر
    cards.forEach((card) => {
      const category = card.dataset.category;
      card.style.display =
        selected === "all" || selected === category ? "grid" : "none";
    });
  });
});

// هاي الدالة كلما المستخدم ينزل أو يصعد بالصفحة تظهر العناصر بحركة حلوة
function revealOnScroll() {
  const trigger = window.innerHeight - 60;
  revealItems.forEach((item) => {
    const top = item.getBoundingClientRect().top;
    if (top < trigger) {
      item.classList.add("show");
    }
  });
}

// من المستخدم يحرك الصفحة أو أول ما تفتح الصفحة، نفذ حركة الظهور
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// من المستخدم يدوس تأكيد التسجيل، أظهر رسالة نجاح وافرغ الحقول
form.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent =
    "تم استلام تسجيلك بنجاح، نتمنى لك التوفيق في معرض الوظائف.";
  form.reset();
});
