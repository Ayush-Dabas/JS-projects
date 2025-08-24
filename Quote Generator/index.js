const quotes = [
    "Quote 1",
    "Quote 2",
    "Quote 3",
    "Quote 4",
    "Quote 5",
    "Quote 6"
];

const quoteText = document.getElementById("quote");
const newQuoteButton = document.getElementById("newQuote");

newQuoteButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
});