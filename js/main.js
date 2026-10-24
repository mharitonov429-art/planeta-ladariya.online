// ============================================================
// 1. УПРАВЛЕНИЕ МОБИЛЬНЫМ МЕНЮ (БУРГЕР)
// ============================================================
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('mobileMenuToggle');
    const navList = document.querySelector('.nav-list');

    if (toggleBtn && navList) {
        toggleBtn.addEventListener('click', function () {
            if (navList.style.display === 'flex') {
                navList.style.display = 'none';
            } else {
                navList.style.display = 'flex';
                navList.style.flexDirection = 'column';
                navList.style.position = 'absolute';
                navList.style.top = '64px';
                navList.style.left = '0';
                navList.style.right = '0';
                navList.style.background = 'white';
                navList.style.padding = '24px';
                navList.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                navList.style.gap = '16px';
                navList.style.zIndex = '100';
            }
        });
    }
});

// ============================================================
// 2. ИНТЕГРАЦИЯ С ФОРМАМИ ЗАХВАТА И ROI-ДАННЫМИ
// ============================================================
// Функция автоматического подтягивания параметров выбранного кейса из URL
function parseUrlParameters() {
    if (window.location.pathname.includes('contact.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const selectedSolution = urlParams.get('solution');
        const messageField = document.getElementById('clientMessageInput');
        
        if (selectedSolution && messageField) {
            const solutionsCatalog = {
                hr: 'Интересует внедрение Кейса 1: Корпоративный AI-чат по базам знаний сотрудников.',
                sales: 'Интересует внедрение Кейса 2: Круглосуточный AI-консультант для Telegram / VK.',
                admin: 'Интересует внедрение Кейса 3: Умный ИИ-секретарь для записи и расписаний.'
            };
            if (solutionsCatalog[selectedSolution]) {
                messageField.value = solutionsCatalog[selectedSolution];
            }
        }
    }
}

// ============================================================
// 3. ИНИЦИАЛИЗАЦИЯ И СТАТУС ЗАПУСКА КОРНЕВЫХ СЕРВИСОВ
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    parseUrlParameters();
    console.log('🌐 ИТ-Центр Planeta Ladariya: Цифровая инфраструктура ИИ успешно инициализирована.');
});

// Автоматическое внедрение WebMCP-модуля для внешних ИИ-агентов
(function () {
    if (!document.getElementById('webmcp-agent-script')) {
        var script = document.createElement('script');
        script.id = 'webmcp-agent-script';
        script.src = window.location.pathname.includes('/blog/') ? '../js/webmcp.js' : 'js/webmcp.js';
        script.defer = true;
        document.head.appendChild(script);
    }
})();
