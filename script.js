document.addEventListener('DOMContentLoaded', () => {
    const quoteText = document.getElementById('quoteText');
    const quoteAuthor = document.getElementById('quoteAuthor');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const quoteContainer = document.querySelector('.quote-container');
    
    let currentIndex = 0;

    function updateQuote() {
        // 添加淡出效果
        quoteContainer.classList.add('fade-out');
        
        setTimeout(() => {
            const quote = quotes[currentIndex];
            quoteText.textContent = quote.text;
            quoteAuthor.textContent = `—— ${quote.author}`;
            
            // 添加淡入效果
            quoteContainer.classList.remove('fade-out');
        }, 500);
    }

    function showNextQuote() {
        currentIndex = (currentIndex + 1) % quotes.length;
        updateQuote();
    }

    function showPrevQuote() {
        currentIndex = (currentIndex - 1 + quotes.length) % quotes.length;
        updateQuote();
    }

    // 初始化显示第一条名言
    updateQuote();

    // 添加按钮事件监听
    prevBtn.addEventListener('click', showPrevQuote);
    nextBtn.addEventListener('click', showNextQuote);

    // 添加键盘事件支持
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            showNextQuote();
        } else if (e.key === 'ArrowLeft') {
            showPrevQuote();
        }
    });

    // 添加自动切换功能（可选，每10秒自动切换）
    // setInterval(showNextQuote, 10000);
}); 