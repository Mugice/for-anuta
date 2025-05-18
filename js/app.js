document.addEventListener('DOMContentLoaded', () => {
    // --- РЕГИСТРАЦИЯ ПЛАГИНА SCROLLTRIGGER ---
    if (typeof gsap !== 'undefined') { // Убедимся, что gsap вообще загружен
        gsap.registerPlugin(ScrollTrigger);
    } else {
        console.error("GSAP is not loaded, ScrollTrigger cannot be registered, animations will not work!");
        // Можно добавить здесь логику для случая, если GSAP не загрузился,
        // например, показать статический контент без анимаций.
        // Сейчас уже есть такая логика ниже в файле.
    }

    // --- Элементы DOM ---
    const audio = document.getElementById('background-music');
    // ... остальной твой код из app.js ...

    // --- GSAP Анимации (проверка на gsap перед использованием) ---
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') { // Дополнительная проверка на ScrollTrigger
        // ... весь твой код с GSAP анимациями, использующий ScrollTrigger ...
        
        const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
        // ... и так далее
    } else {
        console.warn("GSAP or ScrollTrigger is not defined. Animations depending on them will not work.");
        // Фоллбэк для отображения контента, если GSAP не работает
        const sectionsToUnhide = document.querySelectorAll('.content-section');
        sectionsToUnhide.forEach(sec => {
            sec.style.opacity = '1';
            sec.style.transform = 'translateY(0px)';
        });
        const heroSectionElements = document.querySelectorAll('.hero-section .main-title, .hero-section .subtitle, .hero-section .scroll-indicator');
        heroSectionElements.forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0px)';
        });
        // И так далее для других анимированных элементов, если нужно.
    }

    console.log("Сайт настроения для Анюты готов!"); // Убрал '(GSAP активен)', т.к. это зависит от загрузки
});
    const audio = document.getElementById('background-music');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const playIcon = '<i class="fas fa-play"></i>';
    const pauseIcon = '<i class="fas fa-pause"></i>';
    const cursorComplimentEl = document.getElementById('cursor-compliment');
    const complimentZones = document.querySelectorAll('.compliment-zone');
    const virtualHugBtn = document.getElementById('virtual-hug-btn');
    const hugOverlay = document.getElementById('hug-overlay');
    const hugMessage = hugOverlay.querySelector('.hug-message');
    const galleryItems = document.querySelectorAll('.gallery-item');

    const compliments = [
        "Ты супер!", "Улыбнись :)", "Все будет хорошо!", "Ты сияешь!",
        "Невероятная!", "Ты важна!", "Чудесный человек!", "Солнышко!",
        "Ты можешь всё!"
    ];
    let currentComplimentIndex = 0;
    let complimentTimer;


    // --- Курсор-комплименты ---
    if (cursorComplimentEl && complimentZones.length > 0) {
        complimentZones.forEach(zone => {
            zone.addEventListener('mousemove', (e) => {
                if (gsap) { // Проверка на существование gsap
                    gsap.to(cursorComplimentEl, {
                        duration: 0.3,
                        x: e.clientX,
                        y: e.clientY,
                        opacity: 1,
                        ease: "power2.out"
                    });
                }
                clearTimeout(complimentTimer);
                complimentTimer = setTimeout(() => {
                    cursorComplimentEl.textContent = compliments[currentComplimentIndex];
                    currentComplimentIndex = (currentComplimentIndex + 1) % compliments.length;
                }, 150);
            });
            zone.addEventListener('mouseleave', () => {
                if (gsap) {
                    gsap.to(cursorComplimentEl, {
                        duration: 0.3,
                        opacity: 0,
                        ease: "power2.out"
                    });
                }
                clearTimeout(complimentTimer);
            });
        });
    }

    // --- "Виртуальное объятие" ---
    if (virtualHugBtn && hugOverlay && hugMessage && gsap) { // Проверка на gsap
        virtualHugBtn.addEventListener('click', () => {
            hugOverlay.classList.add('active');
            gsap.fromTo(hugMessage,
                { scale: 0.5, opacity: 0, y: 20 },
                {
                    duration: 0.8, scale: 1, opacity: 1, y: 0, ease: "elastic.out(1, 0.5)",
                    onComplete: () => {
                        setTimeout(() => {
                            gsap.to(hugMessage, {
                                duration: 0.5, opacity: 0, scale: 0.7, ease: "power2.in", onComplete: () => {
                                     hugOverlay.classList.remove('active');
                                }
                            });
                        }, 1500);
                    }
                }
            );
            gsap.fromTo(hugOverlay,
                { backdropFilter: 'blur(0px) saturate(100%)' },
                { backdropFilter: 'blur(5px) saturate(150%)', duration: 0.5, yoyo: true, repeat: 1, ease: "power1.inOut" }
            );
        });
    }

    // --- Функция для "SplitText" ---
    function splitTextManual(element, type = "chars", wrapperClass = "split-wrapper") {
        if (!element) return []; // Защита если элемента нет
        const textContent = element.innerText;
        element.innerHTML = ''; 
        element.classList.add(wrapperClass);
        let parts;
        if (type === "words") {
            parts = textContent.split(/(\s+)/); 
        } else { 
            parts = textContent.split('');
        }
        parts.forEach(part => {
            const span = document.createElement('span');
            if (part.trim() === '' && part.length > 0) { // Сохраняем пробелы (именно пробелы, а не пустые строки от split)
                span.innerHTML = part.replace(/\s/g, ' '); // Заменяем пробелы на неразрывные для сохранения
            } else {
                span.textContent = part;
            }
            span.style.display = 'inline-block'; 
            span.style.position = 'relative'; 
            if (type === "words") span.classList.add('split-word');
            else span.classList.add('split-char');
            element.appendChild(span);
        });
        return Array.from(element.childNodes).filter(node => node.textContent.trim() !== '' || node.innerHTML.includes(' ')); // Возвращаем только не пустые span'ы или span'ы с  
    }
    
    // --- GSAP Анимации (проверка на gsap перед использованием) ---
    if (typeof gsap !== 'undefined') {
        const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
        
        const mainTitleEl = document.querySelector(".main-title");
        if (mainTitleEl) {
            const mainTitleSpans = splitTextManual(mainTitleEl, "chars");
            if (mainTitleSpans.length > 0) {
                heroTimeline.from(mainTitleSpans, {
                    opacity: 0, y: (i) => (i % 2 === 0 ? -30 : 30),
                    duration: 0.8, stagger: 0.04, ease: "back.out(1.7)", delay: 0.5
                });
            }
        }

        const subtitleEl = document.querySelector(".subtitle");
        if (subtitleEl) {
            const subtitleSpans = splitTextManual(subtitleEl, "words");
             if (subtitleSpans.length > 0) {
                heroTimeline.from(subtitleSpans, {
                    opacity: 0, y: -20, duration: 0.5, stagger: 0.1, ease: "power2.out"
                }, "-=0.5");
            }
        }

        heroTimeline.from(".scroll-indicator", { opacity: 0, y: 20, duration: 1 }, "-=0.5");

        const sections = gsap.utils.toArray('.content-section');
        sections.forEach(section => {
            gsap.fromTo(section,
                { opacity: 0, y: 70 },
                {
                    opacity: 1, y: 0, duration: 1, ease: "power2.out",
                    scrollTrigger: { trigger: section, start: "top 85%", toggleActions: "play none none none" }
                }
            );

            const animatedParagraphs = section.querySelectorAll('p.animated-text');
            animatedParagraphs.forEach(textEl => {
                const paragraphSpans = splitTextManual(textEl, "words");
                 if (paragraphSpans.length > 0) {
                    gsap.from(paragraphSpans, {
                        opacity: 0, y: 20, duration: 0.4,
                        stagger: { amount: 0.6, from: "start", ease: "power1.out" },
                        scrollTrigger: { trigger: textEl, start: "top 90%", toggleActions: "play none none none" }
                    });
                }
            });
            
            const quote = section.querySelector('.quote');
            if (quote) {
                gsap.from(quote, {
                    opacity: 0, x: -50, duration: 0.8, ease: "circ.out",
                    scrollTrigger: { trigger: quote, start: "top 90%", toggleActions: "play none none none" }
                });
            }

            const innerElements = section.querySelectorAll('.image-container, .video-container, .gallery-item, .futuristic-button');
            if (innerElements.length > 0) {
                gsap.from(innerElements, {
                    opacity: 0, y: 30, scale: 0.95, duration: 0.8, stagger: 0.15, ease: "power2.out",
                    scrollTrigger: { trigger: section, start: "top 75%", toggleActions: "play none none none" }
                });
            }
        });
        
        const finalMessageTitleEl = document.querySelector(".final-message .glowing-text");
        if (finalMessageTitleEl) {
            const finalMessageTitleSpans = splitTextManual(finalMessageTitleEl, "words");
            if (finalMessageTitleSpans.length > 0) {
                gsap.from(finalMessageTitleSpans, {
                    opacity: 0, y: 30, stagger: 0.1, duration: 0.7, ease: "power2.out",
                    scrollTrigger: { trigger: ".final-message", start: "top 85%", toggleActions: "play none none none" }
                });
            }
        }

        const finalMessageParagraphEl = document.querySelector(".final-message p");
         if (finalMessageParagraphEl) {
            const finalMessageParagraphSpans = splitTextManual(finalMessageParagraphEl, "words");
            if (finalMessageParagraphSpans.length > 0) {
                gsap.from(finalMessageParagraphSpans, {
                    opacity: 0, y: 20, stagger: 0.08, duration: 0.6, ease: "power1.out",
                    scrollTrigger: { trigger: ".final-message p", start: "top 90%", toggleActions: "play none none none" }
                }, "-=0.4");
            }
        }

        gsap.from(".heart-pulse", {
            opacity: 0, scale:0.5, duration: 1.2, ease: "elastic.out(1,0.5)",
            scrollTrigger: { trigger: ".final-message", start: "top 80%", toggleActions: "play none none none" }
        });

        console.log("Сайт настроения для Анюты готов! ✨ (GSAP активен)");
    } else {
        console.warn("GSAP is not defined. Animations will not work.");
        // Можно отобразить сообщение пользователю или скрыть/упростить элементы, зависящие от GSAP
        // Например, статически отобразить секции, если GSAP нет:
        const sectionsToUnhide = document.querySelectorAll('.content-section');
        sectionsToUnhide.forEach(sec => {
            sec.style.opacity = '1';
            sec.style.transform = 'translateY(0px)';
        });

    }