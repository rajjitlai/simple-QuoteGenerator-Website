const quoteElement = document.getElementById('quote');
const categorySelect = document.getElementById('category');
const generateButton = document.getElementById('generate');
const popup = document.getElementById('share-popup');
const quoteCode = document.getElementById('quote-code');
const closeIcon = document.getElementById('close-icon');
const shareFacebookButton = document.getElementById('share-facebook');
const shareTwitterButton = document.getElementById('share-twitter');

const quotes = {
    inspirational: [
        "The only way to do great work is to love what you do.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    ],
    funny: [
        "I'm writing a book. I've got the page numbers done.",
        "I told my wife she was drawing her eyebrows too high. She seemed surprised.",
    ],
};

function generateRandomQuote() {
    const selectedCategory = categorySelect.value;
    const categoryQuotes = quotes[selectedCategory];
    const randomIndex = Math.floor(Math.random() * categoryQuotes.length);
    return categoryQuotes[randomIndex];
}

generateButton.addEventListener('click', () => {
    const randomQuote = generateRandomQuote();
    quoteElement.textContent = randomQuote;
    quoteCode.value = randomQuote;
    popup.style.display = 'block';
});

closeIcon.addEventListener('click', () => {
    popup.style.display = 'none';
});

shareFacebookButton.addEventListener('click', () => {
    const url = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
});

shareTwitterButton.addEventListener('click', () => {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(quoteCode.value)}`;
    window.open(url, '_blank');
});
