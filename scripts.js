function getSuggestion() {
    const moodSelect = document.getElementById('mood');
    const mood = moodSelect.value;
    const suggestionDiv = document.getElementById('suggestion');
    const vibeH2 = document.getElementById('vibe');
    const foodsDiv = document.getElementById('food-suggestions');

    if (!mood) {
        alert('Pick a mood first! 🌸');
        return;
    }

    const moods = {
        hungry: { vibe: 'Time to feast! 🍲', foods: ['🍛 Biryani', '🥟 Momos', '🍜 Noodles'] },
        sad: { vibe: 'Comfort hugs incoming... 🤗', foods: ['🍦 Ice Cream', '🍰 Cheesecake', '🍫 Brownie'] },
        stressed: { vibe: 'Chill pill in food form! 😌', foods: ['🌮 Vada Pav', '🍜 Ramen', '🍦 Ice Cream'] },
        craving: { vibe: 'Indulge away! 🤩', foods: ['🍛 Biryani', '🍰 Cheesecake', '🍫 Brownie'] },
        angry: { vibe: 'Spice it out! 🔥', foods: ['🌶️ Vada Pav', '🍛 Biryani', '🥟 Momos'] },
        confused: { vibe: 'Mix it up! ❓', foods: ['🍜 Noodles', '🥟 Momos', '🍜 Ramen'] },
        bored: { vibe: 'Adventure on a plate! 🎉', foods: ['🍛 Biryani', '🌮 Vada Pav', '🍦 Ice Cream'] }
    };

    const data = moods[mood];
    vibeH2.textContent = data.vibe;
    foodsDiv.innerHTML = data.foods.map(food => `<div class="food">${food}</div>`).join('');

    suggestionDiv.classList.remove('hidden');
    suggestionDiv.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('mood').focus();
});