function getRandomPrhase(){
    const prhases = ["No pain, no gain", "Keep pushing forward", "Believe in yourself", "Stay positive", "Never give up", "Dream big", "Success is a journey, not a destination", "Embrace the challenges", "You are stronger than you think", "Make today count",
        "Every day is a new beginning", "Focus on the good", "Turn your dreams into plans", "Stay hungry, stay foolish", "The best is yet to come", "You are capable of amazing things", "Keep your head up", "Life is tough, but so are you", "Progress, not perfection", "Your only limit is you"];
        const randomIndex = Math.floor(Math.random() * prhases.length());
        return prhases[randomIndex];

}

console.log(getRandomPrhase());