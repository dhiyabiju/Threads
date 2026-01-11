// script.js - Basic interactivity for Second Story clothing swap website

/**
 * Handle swap button clicks
 * @param {string} itemName - The name of the item being swapped
 */
function handleSwap(itemName, event) {
    event.preventDefault();

    const confirmed = confirm(
        `Are you sure you want to swap for "${itemName}"?\n\nRemember: This is a one-time swap with no returns.`
    );

    if (confirmed) {
        alert(
            `🎉 Swap request submitted for "${itemName}"!\n\nYou'll receive a confirmation email within 24 hours.`
        );

        const button = event.target;
        button.textContent = 'Swap Requested';
        button.disabled = true;
        button.style.backgroundColor = '#6b705c';
        button.style.cursor = 'not-allowed';
    }
}

/**
 * Handle upcycle button clicks (for cards)
 * @param {string} itemName - The name of the item being upcycled
 */
function handleUpcycle(itemName, event) {
    event.preventDefault();

    const confirmed = confirm(
        `Ready to upcycle "${itemName}"?\n\nOur artisans will transform this garment into a unique piece.`
    );

    if (confirmed) {
        alert(
            `🎨 Upcycling request submitted for "${itemName}"!\n\nOur team will contact you within 24 hours.`
        );

        const button = event.target;
        button.textContent = 'Upcycling Started';
        button.disabled = true;
        button.style.backgroundColor = '#6b705c';
        button.style.cursor = 'not-allowed';
    }
}

/**
 * HERO SECTION UPCYCLE BUTTON REDIRECT
 * This fixes the issue you reported
 */
function handleHeroUpcycle(event) {
    event.preventDefault();
    window.location.href = 'upcycle.html';
}

/**
 * Add smooth scrolling & hover effects
 */
document.addEventListener('DOMContentLoaded', function () {
    // Active nav link
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('.nav-center a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Card hover effects
    document.querySelectorAll('.swap-card, .upcycle-card').forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        });
    });

    // Attach hero upcycle redirect
    const heroUpcycleBtn = document.querySelector('.hero .upcycle-btn');
    if (heroUpcycleBtn) {
        heroUpcycleBtn.addEventListener('click', handleHeroUpcycle);
    }
});

/**
 * Loading animation (disabled for hero redirect)
 */
function addButtonLoading(button) {
    const originalText = button.textContent;
    button.textContent = 'Processing...';
    button.disabled = true;

    setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
    }, 2000);
}

// Apply loading animation ONLY to card buttons
document.addEventListener('click', function (event) {
    if (
        (event.target.classList.contains('swap-btn') ||
            event.target.classList.contains('upcycle-btn')) &&
        !event.target.closest('.hero') &&
        !event.target.disabled
    ) {
        addButtonLoading(event.target);
    }
});
