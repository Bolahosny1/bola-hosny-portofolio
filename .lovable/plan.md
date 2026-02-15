

# ترقية الانيميشن والتأثيرات البصرية - Glassmorphism + Scroll Reveal

## ملخص التغييرات

هنضيف تأثيرات glassmorphism (زجاجية) على كل الكاردات والأزرار، مع تحسين انيميشن الظهور لما بتنزل تحت، وتأثيرات hover احترافية على كل العناصر التفاعلية.

---

## 1. تأثير Glassmorphism على الكاردات

- كل الكاردات هتاخد تأثير زجاجي: `backdrop-blur`, `bg-white/5` (dark) / `bg-white/70` (light), و border شفاف
- الـ hover هيزود الـ glow والـ blur
- الكاردات في: About, Skills, Experience, Projects, Certifications, Education, CV, Contact

## 2. أزرار بأنيميشن احترافية

- الأزرار (Download CV, Send Message, Social links) هيكون عليها:
  - تأثير shimmer/shine يعدي عليها
  - Hover scale + glow effect
  - Border gradient animation
- زرار الـ Hero social links هيتحسن بنفس الستايل

## 3. تحسين Scroll Reveal Animation

- تحديث `AnimatedSection` بحيث العناصر تظهر بشكل أحلى:
  - Staggered children animation (كل عنصر يظهر بعد اللي قبله)
  - تأثيرات مختلفة: fade-up, fade-left, scale-in
  - الـ viewport margin يتظبط عشان العناصر تظهر في الوقت المناسب

## 4. تحديثات الـ CSS

- اضافة utility classes جديدة في `index.css`:
  - `.glass` - التأثير الزجاجي الأساسي
  - `.glass-hover` - تأثير hover زجاجي
  - `.btn-glow` - أزرار بـ glow
  - `.shimmer` - تأثير shimmer على الأزرار

---

## التفاصيل التقنية

### الملفات اللي هتتعدل:

1. **`src/index.css`** - اضافة glass utility classes و shimmer keyframes
2. **`src/components/AnimatedSection.tsx`** - تحسين scroll animations مع stagger
3. **`src/components/About.tsx`** - glass effect على الكاردات
4. **`src/components/Skills.tsx`** - glass cards + hover glow
5. **`src/components/Experience.tsx`** - glass timeline cards
6. **`src/components/Projects.tsx`** - glass project cards مع enhanced hover
7. **`src/components/Certifications.tsx`** - glass cert cards
8. **`src/components/CVSection.tsx`** - glass container + shimmer button
9. **`src/components/Contact.tsx`** - glass form + shimmer send button
10. **`src/components/Hero.tsx`** - glass terminal + enhanced social buttons
11. **`src/components/Navbar.tsx`** - glass navbar background
12. **`tailwind.config.ts`** - اضافة shimmer keyframe

### CSS Classes الجديدة:
```css
.glass {
  background: hsl(var(--card) / 0.6);
  backdrop-filter: blur(16px);
  border: 1px solid hsl(var(--border) / 0.5);
}

.glass-hover:hover {
  background: hsl(var(--card) / 0.8);
  backdrop-filter: blur(24px);
  border-color: hsl(var(--primary) / 0.3);
  box-shadow: 0 8px 32px hsl(var(--primary) / 0.1);
}

.btn-shimmer {
  position: relative;
  overflow: hidden;
}
.btn-shimmer::after {
  /* animated shine sweep */
}
```

### AnimatedSection المحسن:
- هيدعم `direction` prop: "up" | "left" | "right" | "scale"
- Stagger delay تلقائي للعناصر المتكررة
- Spring-based easing بدل linear عشان الحركة تبان طبيعية أكتر

