const heroes = {
  'marco-polo': {
    name: 'Marco Polo',
    matchup: [
      { text: '50/50, kinda skill dependent', type: 'neutral-matchup'}
    ],
    explanation: `This matchup is oddly even and super playable despite being against Marco Polo. At levels 1-3 you should have the advantage, but do be more careful when reaching level 4, especially if he has purify. Trust me when I say that Marco with purify is more annoying than with stun, because if he has stun and he ults on you, you can simply S2 to knock him back, but if he has puri you can't do that, meaning you'll have to most likely waste flash. <br> <br> Also, some Marcos tend to clear small creeps before going to lane, and they can be especially cheeky and clear yours. <strong>You can heavily punish this</strong>. Fast clear first wave and go to the river to check if he is doing yours, if he is he should have just finished it. You are level two and he level one, so he mostly likely can't escape you, meaning you got a kill or wasted a stun/puri. <br> <br> Late game remember to keep your distance also, he can one tap you with ult. By the way, I highly recommend building <span class="item-link physical-def" data-item="ominous-premonition">Ominous Premonition</span>`
  },

  'arli': {
    name: 'Gongsun Li (Arli)',
    matchup: [
      { text: 'Unfavorable, super tough matchup', type: 'negative-matchup'}
    ],
    explanation: `This matchup sucks lol. Arli wins pretty much against any ADC and for Luban that is no different, as her S2 can take down both his S1 and S2. Fortunately though, she can't block his enhanced basic attack, so make sure to take advantage off that and try your best to not get on a 1 vs 1 situation since most of the time you will lose. She's your second ban priority, so you shouldn't find her much, but if that is the case, just pray your team is good lol
    `
  },

    'alessio': {
    name: 'Alessio',
    matchup: [
      { text: '50/50, kinda annoying but definitely winnable', type: 'neutral-matchup'}
    ],
    explanation: `The problem is mainly due to his S2, the smoke bomb he throws creates a mist that makes him invisible and pretty much immune to basic attacks. However, you should still be able to outdamage him if you combo correctly and not miss your skills. (Which is kinda hard, considering he flies so much) At late you should outvalue him so just play it safe.
    `
  },

    'agudo': {
    name: 'Agudo',
    matchup: [
      { text: 'Favorable, not too much a problem', type: 'positive-matchup'}
    ],
    explanation: `Recently, she has received another rework which now makes her suitable for the farm lane, and she can be a bit annoying. Fortunately, for Luban it isn't a problem. His enhanced basic attacks pierce and will kill the minions she spawns, and you always outdamage her, especially with <span class="item-link" data-item="boots-of-fortitude">Defense Boots</span> to mitigate he damage you will take. All in all, just a good matchup.
    `
  },

   'aoyin': {
    name: "Ao'yin (Loong)",
    matchup: [
      { text: 'Early game is favorable, but late game is tricky', type: 'neutral-matchup'}
    ],
    explanation: `At early your pretty much dominate with not much trouble, as you always out-trade Ao'yin, especially with <span class="item-link" data-item="boots-of-fortitude">Defense Boots</span>. (I know i glaze these but srsl they are great) In late the game is a bit more complicated, as he will most likely one shot you with his combo if you are not careful. That said, in teamfights you will provide way more just be careful not to feed him early, as the game will get really tough if he is ahead.
    `
  },

   'chano': {
    name: "Chano",
    matchup: [
      { text: 'Early game is favorable, but late game is super hard', type: 'neutral-matchup'}
    ],
    explanation: `Early this matchup is good. Once again you out-damage the enemy and his wolves will get killed by your pierce. <br> <br>
    However, this changes <strong>dramatically</strong> in late, as Chano has one of the strongest late games of any hero in general. Essentially, try to take the lead in early game and end it early. Trust me, you do not want to deal with a late game Chano.
    `
  },

   'consort-yu': {
    name: "Consort Yu ji",
    matchup: [
      { text: '50/50, but leaning more to Luban No.7', type: 'neutral-matchup'}
    ],
    explanation: `Idk, this matchup is just fine I guess. Her S2 can be a little annoying, but you should out-range her so just keeping pokingg and baiting out her S2 for big damage, and try to evade her S1 as much as possible. You do lose a 1v1 level four though so be mindful of that. At late you'll need to be a little careful, as she will do a lot of damage and her ult deals a <strong>90%</strong> slow, pretty much killing any squishy, but you will provide waaaaaay more in teamfights so thats good. Stay back at teamfights, only advance if she wasted her S2.
    `
  },

  'di-renjie': {
    name: "Di Renjie",
    matchup: [
      { text: '50/50, but leaning more towards Di Renjie', type: 'neutral-matchup'}
    ],
    explanation: `Di Renjie just has a better kit in general lol. As you may have read at the builds section, you <em>can</em> win against him at level one, but it's tough. You'll need to drag him to your minions and hit him as far away as you can not let his S1 get too much value. An
    `
  },
}

const generalThreats = {
  'general-threats': {
    name: 'General Threats to Avoid',
    threats: [
      {
        hero: 'Luna',
        image: 'otherHeroes/Luna-circle.webp',
        severity: 'high',
        reason: 'Disgusting amount of mobility and damage.'
      }
    ],

    explanation: `
    DON'T PICK LUBAN NO.7 INTO LUNA PLSSS. This matchup is actual hell, she can close in on you very fast and her dashes will cause you to miss your enhanced autos and S2. I strongly recommend to ban her to avoid that nonsense, as she is the only one here where the matchup feels like torture. If you somehow found yourself in this situation, try your best not feed her too much and try to bring the game to late game. At late game she is much more manageable, as you will start outhealing her damage, especially if you position yourself well and have bought <span data-item="succubus-cloak" class="item-link magical-def">Succubus Cloak</span>. (which is a must to buy btw, try to get it on your forth item).
    `
  }
} 

const matchupExplanation = document.querySelector('.matchup-explanation');

document.querySelectorAll('.matchup-link').forEach((link) => {
  link.addEventListener('click', function(event) {
    const heroId = event.currentTarget.getAttribute('data-hero');
    
    if (heroId === 'general-threats') {
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

function showGeneralThreats () {
  const threatsData = generalThreats['general-threats'];

  const threatsHTML = threatsData.threats.map(threat => `
    <div class="threat-item ${threat.severity}">
      <img src="${threat.image}" alt="${threat.hero}" class="threat-image">
      <div class="threat-info"
        <div class="threat-name">${threat.hero}</div>
        <div class="threat-reason">${threat.reason}</div>
    </div>    
    `
  ).join('');
  
  matchupExplanation.innerHTML = `
  <div class="threats-header"
    <div class="hero-name">${threatsData.name}
  </div>
  <div class="threats-list">
    ${threatsHTML}
  </div>
  <div class="explanation-text">${threatsData.explanation}</div> 
  `
}