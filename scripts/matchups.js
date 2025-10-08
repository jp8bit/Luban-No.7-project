const heroes = {
  'marco-polo': {
    name: 'Marco Polo',
    matchup: [
      { text: '50/50, kinda skill dependent', type: 'neutral-matchup'}
    ],
    explanation: 'This matchup is oddly even and super playable despite being against Marco Polo.'
  },
}

const generalThreats = {
  'general-threats': {
    name: 'General Threats to Avoid',
    threats: [
      {
        hero: 'Luna',
        image: ''
      }
    ]
  }
} 

const matchupExplanation = document.querySelector('.matchup-explanation');

document.querySelectorAll('.matchup-link').forEach((link) => {
  link.addEventListener('click', function(event) {
    const heroId = event.currentTarget.getAttribute('data-hero');
    
    if (heroId === 'general_threats') {
      showGeneralThreats();
    } else {
      showHeroExplanation(heroId);
    }
  });
});

function showHeroExplanation (heroId) {
  const heroData = heroes[heroId];

  if (!heroData) return; 
  
  const matchupHTML = heroData.matchup.map(
   matchup => `
    <div class="matchup-summary ${matchup.type}">${matchup.text}</div>
   `
  ).join('');

  matchupExplanation.innerHTML = `
  <div class="matchup-header">
    <div class="hero-name">${heroData.name}</div>
    ${matchupHTML}
  </div>
  <div class="explanation-text">${heroData.explanation}</div>
  `
}