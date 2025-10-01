const items = {
    'boots-of-dexterity': {
        name: 'Boots of Dexterity',
        image: 'images/boots_attackspd.webp',
        cost: '710 Gold',
        effects: [
            { text: 'Movement Speed +60', type: 'positive'},
            { text: 'Attack Speed +20%', type: 'positive'}
        ]
    }
};

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

    const effectsHTML = item.effects.map(effect => 
        `<div class="tooltip-effect ${effect.type}">${effect.text}</div>`
    ).join('');

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