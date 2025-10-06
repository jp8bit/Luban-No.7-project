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
                    { text: 'Reduce the physical damage taken by 10%', type: 'physical-def'}
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
    },
    'sparkforged-dagger': {
        name: 'Sparkforged Dagger',
        image: 'images/sparkforged_dagger.webp',
        cost: '1870 Gold',
        effects: [
            { text: 'Attack Speed +35%', type: 'positive'},
             { text: 'Movement Speed +8%', type: 'positive'},
             {
                parts: [
                    { text: 'basic attacks deal extra ', type: 'neutral'},
                    { text: '40 to 82 magical damage.', type: 'magical-dmg'},
                    { text: ' For every three basic attacks, it releases rays of thunder in rapid succession, dealing ', type:'neutral'},
                    { text: '140 to 420 of magical damage.', type: 'magical-dmg'},
                ]
            }
        ]
    },
     'eternity-blade': {
        name: 'Eternity Blade',
        image: 'images/eternity_blade.webp',
        cost: '2140 Gold',
        effects: [
            { text: 'Physical Damage +110', type: 'physical-dmg'},
            { text: 'Crit Chance +25%', type: 'physical-dmg'},
             {
                parts: [
                    { text: 'Receives ', type: 'neutral'},
                    { text: '20% of critical damage, ', type: 'physical-dmg'},
                    { text: 'and every ', type:'neutral'},
                    { text: '2% of critical chance ', type: 'physical-dmg'},
                    { text: 'increases the ', type: 'neutral'},
                    { text: 'critical damage by 1% ', type: 'physical-dmg'},
                    { text: '(up to 50%)', type: 'neutral'}
                ]
             }
        ]
    },
     'blood-weeper': {
        name: 'Bloodweeper',
        image: 'images/blood_weeper.webp',
        cost: '1800 Gold',
        effects: [
            { text: 'Physical Damage +100', type: 'physical-dmg'},
            { text: 'Physical Life Steal +25%', type: 'physical-dmg'},
            { text: 'Max Health +500', type: 'positive'},
             {
                parts: [
                    { text: 'Recovers 400 to 610 life ', type: 'positive'},
                    { text: 'in 5 seconds when your life points falls below 30%. <br> (20 second cooldown)', type: 'neutral'}
                ]
             }
        ]
    },
     'mortal-punisher': {
        name: 'Mortal Punisher',
        image: 'images/mortal_punisher.webp',
        cost: '1860 Gold',
        effects: [
            { text: 'Physical Damage +100', type: 'physical-dmg'},
            { text: 'Attack Speed +15%', type: 'positive'},
            { text: 'Physical Life Steal +15%', type: 'physical-dmg'},
             {
                parts: [
                    { text: 'Recovers 400 to 610 life ', type: 'positive'},
                    { text: 'in 5 seconds when your life points falls below 30%. <br> (20 second cooldown)', type: 'neutral'}
                ]
             },
             {
                parts: [
                    { text: 'When a skill or a basic attack hits an enemy, their ', type: 'neutral'},
                    { text: 'life recovery and their life steal are reduced by 35%. ', type: 'debuff'},
                    { text: 'lasts for 2.5 seconds', type: 'neutral'}
                ]
             }
        ]
    },
     'dooms-day': {
        name: 'Doomsday',
        image: 'images/doomsday.webp',
        cost: '2160 Gold',
        effects: [
            { text: 'Physical Damage +60', type: 'physical-dmg'},
            { text: 'Attack Speed +30%', type: 'positive'},
            { text: 'Physical Life Steal +10%', type: 'physical-dmg'},
             {
                parts: [
                    { text: 'Basic attacks deal extra', type: 'neutral'},
                    { text: 'physical damage ', type: 'physical-dmg'},
                    { text: 'equivalent to ', type: 'neutral'},
                    { text: "8% of the target's current health.", type: 'positive'}
                ]
             }
        ]
    },
     'day-breaker': {
        name: 'Daybreaker',
        image: 'images/day_breaker.webp',
        cost: '2760 Gold',
        effects: [
            { text: 'Physical Damage +50', type: 'physical-dmg'},
            { text: 'Attack Speed +30%', type: 'positive'},
            { text: 'Crit Chance +10%', type: 'physical-dmg'},
             {
                parts: [
                    { text: 'Physical Penetration +15%<br>', type: 'physical-dmg'},
                    { text: '(Doubled on ranged heroes)', type: 'neutral'},
                ]
             },
             {
                parts: [
                    { text: 'Basic attack damage +50 <br> (Doubled on range heroes)', type: 'neutral'}
                ]
             }
        ]
    },
    'star-breaker': {
        name: 'Starbreaker',
        image: 'images/star_breaker.webp',
        cost: '2100 Gold',
        effects: [
            { text: 'Physical Damage +80', type: 'physical-dmg'},
            { text: 'Cooldown Reduction +10%', type: 'positive'},
             {
                parts: [
                    { text: 'Physical Penetration +40%', type: 'physical-dmg'},
                ]
             }
        ]
    },
    'siege-breaker': {
        name: 'Siegebreaker',
        image: 'images/siege_breaker.webp',
        cost: '2680 Gold',
        effects: [
            { text: 'Physical Damage +170', type: 'physical-dmg'},
             {
                parts: [
                    { text: 'Deals 30% extra damage to enemies with less than 50% health', type: 'neutral'},
                ]
             }
        ]
    },
    'succubus-cloak': {
        name: 'Succubus Cloak',
        image: 'images/succubus_cloak.webp',
        cost: '2080 Gold',
        effects: [
            { text: 'Magical Defense +200', type: 'magical-def'},
            { text: 'Max Health +1000', type: 'positive'},
            { text: 'Health recovery/5 seconds +100', type:'positive'},
             {
                parts: [
                    { text: 'Grants a shield that nullifies between 100 to 1500 of ', type: 'neutral'},
                    { text: 'magical damage ', type: 'magical-def'},
                    { text: 'outside of combat.', type: 'neutral'}
                ]
             },
             {
                parts: [
                    { text: 'increases the ', type: 'neutral'},
                    { text: 'magical defense between 8 to 120', type: 'magical-def'}
                ]
             }
        ]
    },
    'ominous-premonition': {
        name: 'Ominous Premonition',
        image: 'images/ominous_premonition.webp',
        cost: '2150 Gold',
        effects: [
            { text: 'Physical Defense +270', type: 'physical-def'},
            { text: 'Max Health +1200', type: 'positive'},
             {
                parts: [
                    { text: 'When receiving damage, lowers the ', type: 'neutral'},
                    { text: 'attack speed of the attacker in 40% ', type: 'debuff'},
                    { text: 'and their ', type: 'neutral'},
                    { text: 'movement speed between 7.5% to 15% ', type: 'debuff'},
                    { text: 'for 3 seconds.', type: 'neutral'}
                ]
             }
        ]
    },
     'pure-sky': {
        name: 'Pure sky',
        image: 'images/pure_sky.webp',
        cost: '2120 Gold',
        effects: [
            { text: 'Physical Damage +100', type: 'physical-dmg'},
            { text: 'Cooldown Reduction +10%', type: 'positive'},
            { text: 'Max Health +500', type: 'positive'},
             {
                parts: [
                    { text: 'Skills deal ', type: 'neutral'},
                    { text: '15 to 30% ', type: 'debuff'},
                    { text: 'of slow to the first enemy hero hit and ', type: 'neutral'},
                    { text: 'lower the damage received by that enemy in 20% ', type: 'debuff'},
                    { text: 'for 3 seconds. <br> (8 second cooldown)', type: 'neutral'}
                ]
             },
             {
                parts: [
                    { text: 'Active ability: Grants ', type: 'neutral'},
                    { text: '35% of damage reduction ', type: 'positive'},
                    { text: 'for 3 seconds <br> (90 second cooldown)', type: 'neutral'}
                ]
             }
        ]
    },
     'sun-chaser': {
        name: 'Sunchaser',
        image: 'images/sun_chaser.webp',
        cost: '2050 Gold',
        effects: [
            { text: 'Attack Speed +25%', type: 'positive'},
            { text: 'Crit Chance +10%', type: 'physical-dmg'},
            { text: 'Movement Speed +5%', type: 'positive'},
             {
                parts: [
                    { text: 'Damage from basic attacks +50 <br> (doubled on ranged heroes)', type: 'neutral'}
                ]
             },
             {
                parts: [
                    { text: 'Active ability: Increases the ', type: 'neutral'},
                    { text: 'range of the basic attack in 150 ', type: 'positive'},
                    { text: 'and the ', type: 'neutral'},
                    { text: 'movement speed by 20% ', type: 'positive'},
                    { text: 'for 5 seconds <br> (60 second cooldown)', type: 'neutral'}
                ]
             }
        ]
    },
    'sky-dome': {
        name: 'Sky dome',
        image: 'images/sky_dome.webp',
        cost: '3370 Gold',
        effects: [
            { text: 'Physical Damage +100', type: 'physical-dmg'},
            { text: 'Cooldown Reduction +10%', type: 'positive'},
            { text: 'Max Health +500', type: 'positive'},
             {
                parts: [
                    { text: 'Skills deal ', type: 'neutral'},
                    { text: '15 to 30% ', type: 'debuff'},
                    { text: 'of slow to the first enemy hero hit and ', type: 'neutral'},
                    { text: 'lower the damage received by that enemy in 20% ', type: 'debuff'},
                    { text: 'for 3 seconds. <br> (8 second cooldown)', type: 'neutral'}
                ]
             },
             {
                parts: [
                    { text: 'Active ability: Cleanses all crownd control effects. Grants ', type: 'neutral'},
                    { text: '40% of damage reduction ', type: 'positive'},
                    { text: 'and increasing ', type: 'neutral'},
                    { text: 'movement speed by 30%, ', type: 'positive'},
                    { text: 'ignoring terrain ', type: 'physical-def'},
                    { text: 'for 3 seconds. ', type: 'neutral'},
                    { text: 'Defeating an enemy hero will reset the duration of the effect. <br> (90 second cooldown)', type: 'neutral'}
                ]
             }
        ]
    },
    'sage-sanctuary': {
        name: "Sage's Sanctuary",
        image: 'images/sage_sanctuary.webp',
        cost: '2100 Gold',
        effects: [
            { text: 'Physical Defense +140', type: 'physical-def'},
            { text: 'Magical Defense +140', type: 'magical-def'},
             {
                parts: [
                    { text: 'Ressurects ', type: 'physical-def'},              
                    { text: 'the bearer 2 seconds after they were defeated and restores between ', type: 'neutral'},
                    { text: '2100 to 3500 of health. ', type: 'positive'},
                    { text: 'This effect can only be triggered two times per match <br> (150 second cooldown) ', type: 'neutral'}
                ]
             }
        ]
    },
    'destiny': {
        name: 'Destiny',
        image: 'images/destiny.webp',
        cost: '1900 Gold',
        effects: [
            { text: 'Physical Damage +60', type: 'physical-dmg'},
            { text: 'Cooldown Reduction +5%', type: 'positive'},
             {
                parts: [
                    { text: 'When receiving lethal damage, instead of dying immediately, gains the effect ', type: 'neutral'},
                    { text: 'Invincible ', type: 'physical-def'},
                    { text: 'and ', type: 'neutral'},
                    { text: '30% of increased movement speed ', type: 'positive'},
                    { text: 'for 1 seconds. (0.5 seconds for ranged heroes) <br> (120 second cooldown)', type: 'neutral'}
                ]
             },
        ]
    },   
}

const tooltip = document.querySelector('.tooltip');

document.querySelectorAll('.item-link').forEach((link) => {
    link.addEventListener('mouseover', showTooltip);
    link.addEventListener('mouseout', hideTooltip);
    // Remove the mousemove event listener since we don't want it to follow mouse it was kinda a dumb idea anyway lol, might adjust for it to show it at the bottom if he viewport blocks it though
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