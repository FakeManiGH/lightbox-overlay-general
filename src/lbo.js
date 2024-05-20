
// LBO NAVIGATION ICONS
// Close icon
const lboDownloadIcon = 
`<svg width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m125,0C55.96,0,0,55.96,0,125s55.96,125,125,125,125-55.96,125-125S194.04,0,125,0Zm75,166.02v30H50v-55h30v25h45l-25-25-25-25h35V46.02h30v70h35l-25,25-25,25h45v-25h30v25Z"/>
</svg>`;

// Download icon
const lboCloseIcon =
`<svg width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m125,0C55.96,0,0,55.96,0,125s55.96,125,125,125,125-55.96,125-125S194.04,0,125,0Zm78.84,180.51l-23.33,23.34-55.5-55.51-55.5,55.51-23.33-23.34,55.5-55.51-55.5-55.51,23.33-23.34,55.5,55.51,55.5-55.51,23.33,23.34-55.5,55.51,55.5,55.51Z"/>
</svg>`;

// Previous icon
const lboPrevIcon = 
`<svg width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m125,0C55.96,0,0,55.96,0,125s55.96,125,125,125,125-55.96,125-125S194.04,0,125,0Zm45,127.05v75l-62.5-37.5-62.5-37.5,62.5-37.5,62.5-37.5v75Z"/>
</svg>`;

// Next icon
const lboNextIcon = 
`<svg width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m125,0C55.96,0,0,55.96,0,125s55.96,125,125,125,125-55.96,125-125S194.04,0,125,0Zm17.5,162.5l-62.5,37.5V50l62.5,37.5,62.5,37.5-62.5,37.5Z"/>
</svg>`;

// Fullscreen icon
const lboFullScreenIcon =
`<svg class="lightbox-download-icon" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m125,0C55.96,0,0,55.96,0,125s55.96,125,125,125,125-55.96,125-125S194.04,0,125,0Zm80,134.29v70.71s-70.71,0-70.71,0l24.76-24.76-34.04-34.04-34.05,34.05,24.75,24.75H45s0-70.71,0-70.71l24.75,24.75,34.05-34.05-34.04-34.04-24.76,24.76V45h70.71s-24.74,24.74-24.74,24.74l34.04,34.04,34.03-34.03-24.75-24.75h70.71v70.71s-24.75-24.75-24.75-24.75l-34.03,34.03,34.04,34.04,24.74-24.74Z"/>
</svg>`;



// HANDLE LBO IMAGES
// Function to handle images with data-lbo attribute
function handleLboImages(images) {
    images.forEach(image => {
        image.style.cursor = 'pointer';
        image.addEventListener('click', () => {
            createLightbox(image);
        });
    });
}

// Finds all images with the data-lbo attribute and calls the handleLboImages function
const lboImages = document.querySelectorAll('img[data-lbo]');

// Handle images that are already in the DOM
handleLboImages(lboImages);

// Listen for new images added to the DOM
const LBOobserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) {
                // Checks if the new node is an image
                if (node.tagName === 'IMG' && node.hasAttribute('data-lbo')) {
                    handleLboImages([node]);
                }
                // Checks if the new node contains images
                const images = node.querySelectorAll('img[data-lbo]');
                handleLboImages(images);
            }
        });
    });
});

// Observes the body for changes
LBOobserver.observe(document.body, {
    childList: true,
    subtree: true
});


// LIGHTBOX FUNCTIONALITY
// Function to create the lightbox
function createLightbox(image) {

    // Disable scrolling on the body
    document.body.style.overflow = 'hidden';

    // Get the image src, data-lbo, alt and title
    const src = image.src;
    const alt = image.alt;
    const title = image.getAttribute('data-title');
    const download = image.getAttribute('data-download');

    const lboValue = image.getAttribute('data-lbo');

    // Get array of images with same data-lbo value
    const lboGallery = Array.from(document.querySelectorAll(`img[data-lbo="${lboValue}"]`));

    // Add a property to your lightbox element to keep track of the current index
    const currentIndex = lboGallery.indexOf(image);

    // CREATE THE LIGHTBOX
    const lbo = document.createElement('div');
    lbo.classList.add('lbo');
    lbo.innerHTML = `
            <div class="lbo-topnav">
                <p class="lbo-txt lbo-title">${title}</p>
                <nav class="lbo-usernav">
                    <button title="Fullscreen" class="lbo-icon lbo-fullscreen">${lboFullScreenIcon}</button>
                    <button title="Download this image" class="lbo-icon lbo-download">${lboDownloadIcon}</button>
                    <button title="Close LBO" class="lbo-icon lbo-close">${lboCloseIcon}</button>
                </nav>
            </div>
            <img class="lbo-img fadeIn" src="${src}" alt="${alt}">
            <div class="lbo-bottomnav">
                <button title="Previous image in gallery" class="lbo-icon lbo-prev">${lboPrevIcon}</button>
                <p class="lbo-txt lbo-index">${currentIndex + 1} of ${lboGallery.length}</p>
                <button title="Next image in gallery" class="lbo-icon lbo-next">${lboNextIcon}</button>
            </div>
        `;
    document.body.appendChild(lbo);

    // Remove the fadeIn class from image after 500ms
    setTimeout(() => {
        document.querySelector('.lbo-img').classList.remove('fadeIn');
    }, 500);

    // DOWNLOAD BUTTON
    const lboDownload = document.querySelector('.lbo-download');
    
    // If download attribute is set to "yes" then show the download button
    if (download === 'yes') {
        lboDownload.style.display = 'flex';
        lboDownload.addEventListener('click', () => {
            const a = document.createElement('a');
            a.href = src;
            a.download = '';
            a.click();
        });
    } else {
        lboDownload.style.display = 'none';
    }

    // CLOSING THE LIGHTBOX
    // Close the lightbox when clicking on the close button
    const lboClose = document.querySelector('.lbo-close');
    lboClose.addEventListener('click', () => {
        closeLightbox();
    });

    // FULLSCREEN BUTTON
    const lboFullScreen = document.querySelector('.lbo-fullscreen');
    lboFullScreen.addEventListener('click', () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            lbo.requestFullscreen();
        }
    });

    // NAVIGATION
    // Hide Bottom Navigation if there is only one image in the gallery
    if (lboGallery.length === 1) {
        document.querySelector('.lbo-bottomnav').style.display = 'none';
    }

    // KEYBOARD NAVIGATION
    
    // Adds tabindex to the lightbox
    lbo.setAttribute('tabindex', '0');
    // Focuses on the lightbox when it's opened
    lbo.focus();

    // Adds event listeners to the lightbox
    lbo.addEventListener('keydown', (e) => {

        // Close the lightbox when pressing the Escape or Backspace key
        if (e.key === 'Escape' || e.key === 'Backspace') {
            closeLightbox();
        }

        // Move to the next image when pressing the Right Arrow key
        if (e.key === 'ArrowRight') {
            nextImage();
        }

        // Move to the previous image when pressing the Left Arrow key
        if (e.key === 'ArrowLeft') {
            prevImage();
        }
    });
    

    // MOUSE NAVIGATION
    // Adds event listeners to "Previous" button
    const lboPrev = document.querySelector('.lbo-prev');
    lboPrev.addEventListener('click', () => {
        prevImage();
    });

    // Adds event listeners to "Next" button
    const lboNext = document.querySelector('.lbo-next');
    lboNext.addEventListener('click', () => {
        nextImage();
    });

    // SWIPE NAVIGATION
    // Adds swipe functionality to the lightbox (for mobile devices)
    let startX;
    let endX;
    let startY;
    let endY;

    lbo.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });

    lbo.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        endY = e.changedTouches[0].clientY;

        // Swipe left to next image
        if (startX - endX > 50) {
            nextImage();
        }

        // Swipe right to previous image
        if (endX - startX > 50) {
            prevImage();
        }

        // Swipe up to close the lightbox
        if (startY - endY > 50) {
            closeLightbox();
        }
    });



    // FUNCTIONS FOR NAVIGATION
    // Function to close the lightbox
    function closeLightbox() { 
        if (lbo) {
            document.body.style.overflow = 'auto';
            lbo.remove()
        }
    }

    // NEXT IMAGE
    // Function to move into next image
    function nextImage() {
        if (currentIndex < lboGallery.length - 1) {
            let nextIndex = currentIndex + 1;
            closeLightbox();
            createLightbox(lboGallery[nextIndex]);
        } else {
            document.querySelector('.lbo-img').classList.add('end-shake');
            setTimeout(()=> {
                document.querySelector('.lbo-img').classList.remove('end-shake');
            } ,300);
        }
    }

    // PREVIOUS IMAGE
    // Function to move into previous image
    function prevImage() {
        if (currentIndex > 0) {
            let prevIndex = currentIndex - 1;
            closeLightbox();
            createLightbox(lboGallery[prevIndex]);
        } else {
            document.querySelector('.lbo-img').classList.add('end-shake');
            setTimeout(()=> {
                document.querySelector('.lbo-img').classList.remove('end-shake');
            } ,300);
        }
    }
}