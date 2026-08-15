const jokes = [

    "Why do programmers prefer dark mode? Because light attracts bugs.",
    
    "I would tell you a UDP joke, but you might not get it.",
    
    "There are 10 kinds of people in the world: those who understand binary and those who don't.",
    
    "Why did the programmer quit their job? They didn't get arrays.",
    
    "A SQL query walks into a bar, walks up to two tables, and asks: 'Can I join you?'",
    
    "Why do Java developers wear glasses? Because they can't C#.",
    
    "I told my computer I needed a break. Now it won't stop sending me vacation ads.",
    
    "It's not a bug. It's an undocumented feature.",
    
    "Have you tried turning it off and on again?",
    
    "Git is just a fancy way of saying 'I hope I didn't break anything.'",
    
    "My code works perfectly. Unfortunately, I have no idea why.",
    
    "I don't always test my code, but when I do, I do it in production.",
    
    "sudo make me a sandwich.",
    
    "Why did Linux users cross the road? There wasn't a proprietary driver on the other side.",
    
    "I use Arch, btw.",
    
    "What do you call a Linux user who finally fixes their Wi-Fi? Experienced.",
    
    "My favorite Linux command is `sudo rm -rf /` because I love living dangerously. (Please don't actually run this.)",
    
    "There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.",
    
    "Why was the JavaScript developer sad? They didn't know how to `null` their feelings.",
    
    "JavaScript walks into a bar. The bartender says, 'We don't serve your type here.' JavaScript says, 'But I'm a dynamically typed language.'",
    
    "HTML walks into a bar. The bartender says, 'Sorry, we don't serve tags.'",
    
    "CSS walks into a bar. It gets absolutely no respect.",
    
    "Why did the CSS developer go broke? They kept losing their margins.",
    
    "I tried to center a div once. I'm still trying.",
    
    "CSS is easy. Just tell the browser what you want and hope it listens.",
    
    "404: Joke not found.",
    
    "Error 418: I'm a teapot.",
    
    "My code has no bugs. It just has undocumented features.",
    
    "Why did the Raspberry Pi cross the road? To get to the GPIO pins on the other side.",
    
    "I built a computer out of LEGO. It keeps crashing because it has too many blocks.",
    
    "I asked ChatGPT to fix my code. Now I have 47 new files and no idea what any of them do.",
    
    "AI is going to take our jobs. At least it can finally take over writing documentation.",
    
    "GitHub Copilot wrote half my code. I wrote the other half by figuring out what Copilot did.",
    
    "Why did the Git repository go to therapy? It had too many unresolved issues.",
    
    "I accidentally committed my secrets to GitHub. My secrets are no longer secrets.",
    
    "What's a programmer's favorite place to hang out? The terminal.",
    
    "Why did the developer bring a ladder to work? They wanted to reach the next level.",
    
    "It's dangerous to go alone! Take this: `git commit -m 'hopefully this works'`",
    
    "Creeper? Aww man.",
    
    "The Jokeinator 3000 has been tested on my machine. Therefore, it is production-ready."
];


function generateJoke() {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    document.getElementById("joke").textContent = randomJoke;
}