const foodOptions = {
    happy: {
        vibe: "Yay! You're glowing! ✨ Try these:",
        foods: ["Ice Cream", "Nachos", "Fried Rice", "Boba Tea", "Chocolate Cake"]
    },
    sad: {
        vibe: "It’s okay to feel sad. Comfort food coming your way 💗",
        foods: ["Hot Chocolate", "Mac & Cheese", "Soup", "Brownies", "Pasta"]
    },
    angry: {
        vibe: "LET IT OUT! Then eat these fiery treats 🔥",
        foods: ["Spicy Momos", "Tandoori Chicken", "Peri Peri Fries", "Chilli Paneer"]
    },
    tired: {
        vibe: "You need energy! Try these 😴⚡",
        foods: ["Cold Coffee", "Bagel", "Protein Shake", "Banana Smoothie"]
    },
    romantic: {
        vibe: "Love is in the air 💕 Perfect mood for these:",
        foods: ["Strawberries", "Fondue", "Pasta Alfredo", "Sushi", "Red Velvet Cupcakes"]
    }
};

function getSuggestion() {
    const mood = document.getElementById('mood').value;
    const suggestionDiv = document.getElementById('suggestion');
    const vibeText = document.getElementById('vibe');
    const foodsDiv = document.getElementById('food-suggestions');

    if (!mood) {
        alert("Pick a mood first! 🌸");
        return;
    }

    const selectedMood = foodOptions[mood];

    // Show vibe
    vibeText.innerText = selectedMood.vibe;

    // Clear previous food list
    foodsDiv.innerHTML = "";

    // Insert food items
    selectedMood.foods.forEach(food => {
        const item = document.createElement('div');
        item.className = "food-item";
        item.innerText = food;
        foodsDiv.appendChild(item);
    });

    suggestionDiv.style.display = "block";
}

