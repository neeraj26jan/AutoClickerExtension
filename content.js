// Create a custom cursor element
var customCursor = document.createElement('div');
customCursor.style.position = 'absolute';
customCursor.style.width = '20px';
customCursor.style.height = '20px';
customCursor.style.backgroundImage = 'url("chrome-extension://' + chrome.runtime.id + '/cursor.png")';
customCursor.style.backgroundSize = 'contain';
customCursor.style.backgroundRepeat = 'no-repeat';
customCursor.style.pointerEvents = 'none';
customCursor.style.zIndex = '9999';
document.body.appendChild(customCursor);
document.body.style.cursor = 'none';

// Variables to track the cursor's position and scrolling
var cursorX = 0, cursorY = 0;

// Function to simulate realistic mouse movement and click
function simulateRealisticMouseMovementAndClick() {
    // Get all the links on the page
    var links = document.querySelectorAll('a');

    if (links.length === 0) {
        console.log('No link found on the page.');
        return;
    }

    // Choose a random links
    var randomLink = links[Math.floor(Math.random() * links.length)];

    // Get the position of the link
    var rect = randomLink.getBoundingClientRect();
    var targetX = rect.left + window.scrollX + (rect.width / 2);
    var targetY = rect.top + window.scrollY + (rect.height / 2);

    // Function to move the custom cursor realistically towards the target
    function moveCursorRealistically(x, y, targetX, targetY, step) {
        // Calculate the distance to the target
        var dx = targetX - x;
        var dy = targetY - y;
        var distance = Math.sqrt(dx * dx + dy * dy);

        // Check if the target is reached
        if (distance < step) {
            // Move directly to the taret and simulate a click
            customCursor.style.left = targetX + 'px';
            customCursor.style.top = targetY + 'px';

            // Dispatch the click event
            var clickEvent = new MouseEvent('click', {
                view: window,
                bubbles: true,
                cancelable: true,
                clientX: targetX,
                clientY: targetY
            });
            randomLink.dispatchEvent(clickEvent);
            console.log('Clicked on:'+ randomLink.href);
            return;
        }

        //Calculate the next position with some randomness
        var angle = Math.atan2(dy, dx);
        var randomOffsetX = (Math.random() - 0.5) * step;
        var randomOffsetY = (Math.random() - 0.5) * step;
        var nextX = Math.round(x + Math.cos(angle) * step + randomOffsetX);
        var nextY = Math.round(y + Math.sin(angle) * step + randomOffsetY);

        // Move the custom cursor to the next position
        customCursor.style.left = nextX + 'px';
        customCursor.style.top = nextY + 'px';

        // Manually scroll the page if the cursor moves out of the viewport
        if (nextY < 0 || nextY > window.innerHeight || nextX < 0 || nextX > window.innerWidth) {
            window.scrollBy(nextX - window.innerWidth / 2, nextY - window.innerHeight / 2);
        }

        // Continue the movement
        requestAnimationFrame(function() {
            moveCursorRealistically(nextX, nextY, targetX, targetY, step);
        });
    }

    // Start the realistic mouse movement with an initial delay
    var initialX = Math.random() * window.innerWidth;
    var initialY = Math.random() * window.innerHeight;
    var step = 8; //Step size for movement
    customCursor.style.left = initialX + 'px';
    customCursor.style.top = initialY + 'px';
    cursorX = initialX;
    cursorY = initialY;
    moveCursorRealistically(cursorX, cursorY, targetX, targetY, step);
}

// Execute the function after a delay
setTimeout(simulateRealisticMouseMovementAndClick, 5000);

// Update cursor position on scroll
window.addEventListener('scroll', function() {
    customCursor.style.left = cursorX + 'px';
    customCursor.style.top = cursorY + 'px';
});