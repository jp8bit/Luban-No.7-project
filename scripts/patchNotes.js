// Patch data
const patchData = {
  'march-2024': {
    type: 'nerf',
    version: 'Season 4 - June 2024',
    changes: [
      { skill: 'Passive - Suppresive Fire', type: 'nerf', desc: "Base damage reduced from 7% of target's max health to 6% of target's max health" },
      { skill: 'Ultimate - Aerial Support', type: 'nerf', desc: 'Cooldown increased from 30 seconds to 35 seconds' }
    ],
    comment: 'These changes aim to balance Luban\'s early game laning potential.'
  },
  'august-2024': {
    type: 'adjustment',
    version: 'Season 6 - August 2024',
    changes: [
      { skill: 'Passive - Suppresive Fire', type: 'adjustment', desc: "From Physical damage equivalent to 6% of target's max health, to Physical damage equivalent to 60-120 (+4.5% of target's max health, +1% for every 100 extra physical attack)" },
    ],
    comment: 'Reduced Luban\'s damage against tankier foes, but increased his threat to enemy carry and squishies'
  },
  'september-2024': {
    type: 'nerf',
    version: 'Season 6 - September 2024',
    changes: [
      { skill: 'Passive - Suppresive Fire', type: 'nerf', desc: 'Damage to heroes from 60-120 to 50-100 of physical damage' },
    ],
    comment: 'Time to reduce the rhythm Luban is havin over other marksman.'
  }
};

// Patch switching functionality
document.querySelectorAll('.patch-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    // Remove active class from all buttons
    document.querySelectorAll('.patch-btn').forEach(b => b.classList.remove('active'));
    // Add active class to clicked button
    this.classList.add('active');
    
    const patchId = this.getAttribute('data-patch');
    showPatch(patchId);
  });
});

function showPatch(patchId) {
  const patch = patchData[patchId];
  const patchDetails = document.querySelector('.patch-details');
  
  const changesHTML = patch.changes.map(change => `
    <div class="change-item">
      <span class="change-skill">${change.skill}</span>
      <span class="change-desc ${change.type}">${change.desc}</span>
    </div>
  `).join('');
  
  patchDetails.innerHTML = `
    <div class="patch-version ${patch.type}">
      <div class="patch-badge">${patch.type.toUpperCase()}</div>
      <h3>${patch.version}</h3>
      <div class="changes">
        ${changesHTML}
      </div>
      <p class="patch-comment">${patch.comment}</p>
    </div>
  `;
}

// Initialize with first patch
showPatch('june-2024');