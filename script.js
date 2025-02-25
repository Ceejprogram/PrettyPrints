document.addEventListener("DOMContentLoaded", function () {
  const fadeInSections = document.querySelectorAll(".fade-in-on-scroll");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Stop observing after animation
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% visible
    }
  );

  fadeInSections.forEach((section) => observer.observe(section));
});

document.addEventListener('DOMContentLoaded', function() {
    // Typewriter for the h1
    var typedHeading = new Typed('#typed-heading', {
        strings: ["All-in-One Printing and Design Services"],
        typeSpeed: 50,    // Typing speed (100ms per character)
        startDelay: 1000,  // 1-second delay before h1 starts
        showCursor: false, // No blinking cursor
        loop: false,       // Runs only once
        onComplete: function(self) {
            // Start the p typewriter after h1 finishes
            var typedText = new Typed('#typed', {
                strings: ["Creative Solutions for All Your Printing Needs"],
                typeSpeed: 20,    // Typing speed (100ms per character)
                startDelay: 0,     // No additional delay after h1
                showCursor: false, // No blinking cursor
                loop: false        // Runs only once
            });
        }
    });
}); 