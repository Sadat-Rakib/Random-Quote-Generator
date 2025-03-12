const quotes = [
    "Your ability to doubt yourself is your inability to succeed.",
    "Kep quiet and let your success make the noise.",
    "Winners never quit and quitters never win.",
    "Don't let yesterday take up too much of today.",
    "You learn more from failure than from success. Don't let it stop you. Failure builds character.",
    "It's not whether you get knocked down, it's whether you get up.",
    "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.",
    "People who are crazy enough to think they can change the world, are the ones who do.",
    "Failure will never overtake me if my determination to succeed is strong enough.",
    "We may encounter many defeats but we must not be defeated.",
    "The only way to achieve the impossible is to believe it is possible.",
    "Good things come to people who wait, but better things come to those who go out and get them.",
    "Success is walking from failure to failure with no loss of enthusiasm.",
    "Opportunities don't happen. You create them.",
    "Don't watch the clock; do what it does. Keep going.",
    "Don't Waste Time",
    "Strive for progress, not perfection.",
    "You are never too old to set another goal or to dream a new dream.",
    "To be the best, you must be able to handle the worst.",
    "The best way to predict the future is to invent it.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Become so rich that you can buy anything you want, and become so precious that no one can buy you.",
    "The only way to do great work is to love what you do.",
    "Life is what happens when you're busy making other plans." ,
    "The future belongs to those who believe in the beauty of their dreams." ,
    "It does not matter how slowly you go as long as you do not stop.",
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "The purpose of our lives is to be happy.",
    "Get busy living or get busy dying.",
    "Life is either a daring adventure or nothing at all.",
    "You only live once, but if you do it right, once is enough.",
    "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    "If you want to live a happy life, tie it to a goal, not to people or things." 
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }

    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)

        if (usedIndexes.has(randomIdx)) continue

        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
    }
}

//The js code is working fine. It generates a random quote from the quotes array and displays it on the screen.//