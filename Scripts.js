function getSuggestion() {
    const mood = document.getElementById("mood").value;
    const suggestionDiv = document.getElementById("suggestion");
    const vibeH2 = document.getElementById("vibe");
    const foodsDiv = document.getElementById("food-suggestions");

    if (!mood) {
        alert("Pick a mood first! 🌸");
        return;
    }

    const moods = {
        happy: {
            vibe: "You're glowing! Here's something to keep the vibe:",
            foods: ["Ice Cream", "Fruit Bowl", "Milkshake", "Cupcakes"]
        },
        sad: {
            vibe: "It's okay to feel this way. Comfort food coming up:",
            foods: ["Chocolate", "Warm Cookies", "Pasta", "French Fries"]
        },
        stressed: {
            vibe: "Breathe. These foods can help soothe stress:",
            foods: ["Green Tea", "Dark Chocolate", "Soup", "Noodles"]
        },
        angry: {
            vibe: "Let it out. These foods will cool your fire:",
            foods: ["Smoothie", "Yogurt", "Pizza", "Biryani"]
        },
        romantic: {
            vibe: "Love is in the air! Try these romance boosters:",
            foods: ["Strawberries", "Red Velvet Cake", "Pasta", "Mocktails"]
        },
        lazy: {
            vibe: "Too tired? Grab something effortless:",
            foods: ["Sandwich", "Maggi", "Chips", "Cold Coffee"]
        }
    };

    const selected = moods[mood];

    vibeH2.textContent = selected.vibe;
    foodsDiv.innerHTML = "";

    selected.foods.forEach(food => {
        const item = document.createElement("div");
        item.className = "food-item";
        item.textContent = food;
        foodsDiv.appendChild(item);
    });

    suggestionDiv.classList.remove("hidden");
}

