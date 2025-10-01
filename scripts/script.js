   // JavaScript for tooltip functionality
    document.addEventListener('DOMContentLoaded', function() {
      // Get all tooltip elements
      const tooltips = document.querySelectorAll('.item-tooltip');
      
      // Function to position tooltip to avoid going off-screen
      function positionTooltip(tooltip, content) {
        // Get viewport dimensions
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        // Get tooltip dimensions
        const tooltipRect = tooltip.getBoundingClientRect();
        const contentRect = content.getBoundingClientRect();
        
        // Calculate potential positions
        const topPosition = tooltipRect.top - contentRect.height - 10;
        const bottomPosition = tooltipRect.bottom + 10;
        const leftPosition = tooltipRect.left + (tooltipRect.width / 2) - (contentRect.width / 2);
        
        // Check if tooltip would go off the top of the screen
        if (topPosition < 0) {
          content.style.bottom = 'auto';
          content.style.top = `${bottomPosition}px`;
          content.style.transform = 'translateX(-50%)';
          // Change arrow position
          content.classList.add('tooltip-bottom');
        } else {
          content.style.top = 'auto';
          content.style.bottom = `${viewportHeight - topPosition}px`;
          content.style.transform = 'translateX(-50%)';
          content.classList.remove('tooltip-bottom');
        }
        
        // Check if tooltip would go off the left of the screen
        if (leftPosition < 0) {
          content.style.left = '0';
          content.style.transform = 'none';
        } 
        // Check if tooltip would go off the right of the screen
        else if (leftPosition + contentRect.width > viewportWidth) {
          content.style.left = 'auto';
          content.style.right = '0';
          content.style.transform = 'none';
        } 
        // Center it normally
        else {
          content.style.left = `${leftPosition}px`;
          content.style.transform = 'none';
        }
      }
      
      // Add event listeners to each tooltip
      tooltips.forEach(tooltip => {
        const content = tooltip.querySelector('.tooltip-content');
        
        // Position tooltip on hover
        tooltip.addEventListener('mouseenter', function() {
          positionTooltip(tooltip, content);
        });
        
        // Reposition on window resize
        window.addEventListener('resize', function() {
          if (content.style.visibility === 'visible') {
            positionTooltip(tooltip, content);
          }
        });
      });
      
      // Optional: Add CSS for bottom-positioned tooltips
      const style = document.createElement('style');
      style.textContent = `
        .tooltip-bottom::after {
          top: auto;
          bottom: 100%;
          border-color: transparent transparent #4cc9f0 transparent;
        }
      `;
      document.head.appendChild(style);
    });