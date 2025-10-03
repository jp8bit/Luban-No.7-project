const items = {
    'boots-of-dexterity': {
        name: 'Boots of Dexterity',
        image: 'images/boots_attackspd.webp',
        cost: '710 Gold',
        effects: [
            { text: 'Movement Speed +60', type: 'positive'},
            { text: 'Attack Speed +20%', type: 'positive'},
             {
                parts: [
                    { text: 'For every basic attack hit,', type: 'neutral'},

                    { text: ' Restores 30/40 Health', type: 'positive'}
                ]
            }
        ]
    },
    'boots-of-fortitude': {
        name: 'Boots of Fortitude',
        image: 'images/boots_defense.webp',
        cost: '710 Gold',
        effects: [
            { text: 'Movement Speed +60', type: 'positive'},
            {text: 'Physical Defense +120', type: 'physical-def'},
            {
                parts: [
                    { text: 'Reduce the physical damage taken by', type: 'neutral'},

                    { text: ' 10%', type: 'physical-def'}
                ]
            }
        ]
    },
    'boots-of-resistance': {
        name: 'Boots of Resistance',
        image: 'images/boots_resistance.webp',
        cost: '710 Gold',
        effects: [
            { text: 'Movement Speed +60', type: 'positive'},
            { text: 'Magical Defense +120', type: 'magical-def'},
             { text: 'Resistance +25%', type: 'magical-def'}
        ]
    },
    'shadow-ripper': {
        name: 'Shadow Ripper',
        image: 'images/shadow_ripper.webp',
        cost: '1950 Gold',
        effects: [
            { text: 'Attack Speed +35%', type: 'positive'},
            { text: 'Crit Chance +25%', type: 'physical-dmg'},
             { text: 'Movement Speed +5%', type: 'positive'},
             {
                parts: [
                    { text: 'Increases the basic attack damage in 40. After landing a critical hit, ', type: 'neutral'},
                    { text: 'increases the Attack Speed by 20% ', type: 'physical-dmg'},
                    { text: 'and the ', type:'neutral'},
                    { text: 'Movement Speed by 5% ', type: 'positive'},
                    { text: 'for 3 seconds', type: 'neutral'}
                ]
             }
        ]
    }
}

const tooltip = document.querySelector('.tooltip');

document.querySelectorAll('.item-link').forEach((link) => {
    link.addEventListener('mouseover', showTooltip);
    link.addEventListener('mouseout', hideTooltip);
    // Remove the mousemove event listener since we don't want it to follow mouse
});

function showTooltip(event) {
    const itemId = event.target.getAttribute('data-item');
    const item = items[itemId];

    if (!item) return;

   const effectsHTML = item.effects.map(effect => {
    if (effect.parts) {
        // For multi-colored text
        const partsHTML = effect.parts.map(part => 
            `<span class="${part.type}">${part.text}</span>`
        ).join('');
        return `<div class="tooltip-effect">${partsHTML}</div>`;
    } else {
        // For single-colored text (backwards compatible)
        return `<div class="tooltip-effect ${effect.type}">${effect.text}</div>`;
    }
  
}).join('');

    tooltip.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="tooltip-img">
        <div class="tooltip-name">${item.name}</div>
        <div class="tooltip-cost">Cost: ${item.cost}</div>
        ${effectsHTML}
    `;

    // Show the tooltip
    tooltip.style.display = 'block';
    
    // Position directly above the item that was hovered
    positionTooltip(event.target);
}

function hideTooltip() {
    tooltip.style.display = 'none';
}

function positionTooltip(element) {
    const rect = element.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    
    // Center above the element
    const x = rect.left + scrollLeft + (rect.width / 2);
    const y = rect.top + scrollTop - tooltip.offsetHeight - 10; // 10px gap above
    
    tooltip.style.left = x + 'px';
    tooltip.style.top = y + 'px';
    tooltip.style.transform = 'translateX(-50%)'; // This centers it
}