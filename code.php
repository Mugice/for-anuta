<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>✨ Для самой лучшей Анюты ✨</title>
    <link rel="stylesheet" href="css/style.css">
    <!-- Если будешь использовать кастомный шрифт, подключи его здесь -->
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;700&family=Orbitron:wght@400;700&display=swap" rel="stylesheet">

</head>
<body>
    <!-- Контейнер для Particles.js -->
    <div id="particles-js"></div>

    <!-- Основной контент -->
    <div class="container">

        <header class="hero-section">
            <h1 class="title main-title">Привет, милая Анюта!</h1>
            <p class="subtitle">Этот маленький уголок Вселенной создан специально для тебя...</p>
            <div class="scroll-indicator">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>

        <section id="message1" class="content-section">
            <h2>Мы знаем, сегодня день выдался непростым...</h2>
            <p>Но помни, даже после самой темной ночи всегда наступает рассвет.
               И тучи не вечны, они обязательно рассеются, открыв чистое и яркое небо.
            </p>
            <div class="image-container animated-border">
                <!-- ЗАМЕНИ НА ФОТО АНЮТЫ -->
                <img src="assets/images/anuta_photo_1.jpg" alt="Улыбка Анюты">
            </div>
        </section>

        <section id="message2" class="content-section">
            <h2>Ты невероятно сильный и светлый человек!</h2>
            <p>Твоя улыбка способна растопить ледники, а доброта – согреть весь мир.
               Не забывай об этом, даже когда кажется, что всё вокруг серое.
               В тебе живет целая вселенная тепла!
            </p>
        </section>

        <section id="gallery" class="content-section">
            <h2>Моменты радости</h2>
            <p>Давай вспомним что-то хорошее и теплое.</p>
            <div class="photo-gallery">
                <!-- ЗАМЕНИ НА ФОТО АНЮТЫ -->
                <div class="gallery-item animated-border"><img src="assets/images/anuta_photo_2.jpg" alt="Счастливый момент Анюты"></div>
                <div class="gallery-item animated-border"><img src="assets/images/anuta_photo_3.jpg" alt="Ещё один счастливый момент"></div>
                <!-- Добавь больше фото, если нужно -->
            </div>
             <!-- Если есть короткое видео (без звука, как фон или просто для просмотра) -->
             <?php if (file_exists('assets/videos/anuta_video_1.mp4')): ?>
            <div class="video-container animated-border">
                <video controls muted loop playsinline>
                    <source src="assets/videos/anuta_video_1.mp4" type="video/mp4">
                    Твой браузер не поддерживает это видео.
                </video>
                <p class="video-caption">Маленький лучик из твоего видеоархива ❤️</p>
            </div>
            <?php endif; ?>
        </section>

        <section id="message3" class="content-section">
            <h2>Ты не одна!</h2>
            <p>Знай, что рядом всегда есть люди, которые тебя любят, ценят и готовы поддержать.
               Мы очень тебя любим и верим в тебя!
               И я, твой верный цифровой посланник, тоже здесь, чтобы обнять тебя светом и теплом этих пикселей.
            </p>
        </section>

        <footer class="final-message">
            <h2 class="glowing-text">Пусть твоё настроение станет таким же ярким, как звезды на этом небе!</h2>
            <p>С огромной любовью и поддержкой,<br>Тот, кто очень хочет видеть твою улыбку ✨</p>
            <div class="heart-pulse">❤️</div>
        </footer>

    </div>

    <script src="js/particles.min.js"></script>
    <script src="js/gsap.min.js"></script>
    <script src="js/particles-config.js"></script> <!-- Конфиг для частиц -->
    <script src="js/app.js"></script>           <!-- Наш основной скрипт -->
</body>
</html>