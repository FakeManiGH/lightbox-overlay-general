<h1>LightBox Overlay 2 - LBO</h1>
<h3>Version 2.01 by FakeMani</h3>

<h2>Contents:</h2>

<ol>
    <li>What is LightBox Overlay (LBO)?</li>
    <li>How to setup LBO?</li>
    <li>User Manual.</li>
    <li>Using Download -function.</li>
    <li>Browser support.</li>
    <li>Known bugs.</li>
    <li>More information.</li>
</ol>

<hr>

<h4>1. What is LightBox Overlay?</h4>

LightBox Overlay (LBO) is an “App" for creating image viewing layer on any webpage that supports JavaScript. LBO is designed to work with image galleries and single images. It is an easy way to implement user friendly image browsing functionality on your web project.

<hr>

<h4>2. How to setup LBO?</h4>

<ol>
    <li>Setup LBO by downloading latest release of <b>lbo.css</b> and <b>lbo.js</b> files from GitHub.</li>
    <li>Place both files on your webserver in htdocs or specific folder where your website files are located. You can also create subfolder.</li>
    <li>Link both files to HTML document, where you wish to use lightbox Overlay for your images:<br>
        - Add link to <b>lbo.css</b> file anywhere in <b>HEAD</b> section of HTML document.<br>
        - Add link to <b>lbo.js</b> file anywhere in <b>HEAD</b> section of HTML document, with <b>defer -attribute</b>.</li>
    <li>To activate LBO in HTML, simply add <b>data-lbo</b> -attribute on any image element you wish to view in LBO.<br>
        - To create galleries with browsing, add same <b>data-lbo="gallery name"</b> -attribute value for multiple images.</li>
    <li>To add <b>TITLE</b> on image displayed in LBO, add <b>data-title="your title"</b> -attribute on your image element.</li>
    <li>Enjoy the overlay!</li>
</ol>

<hr>

<h4>3. User manual</h4>

<ul>
    <li>You can move <b>FORWARDS</b> and <b>BACKWARDS</b> inside LBO with buttons situated on the bottom of the overlay, or by swiping left or right on your mobile device.</li>
    <li>To close the overlay, push the close button on top-right corner of LBO, or swipe up on your mobile device. You can also use <b>ESC</b> or <b>BACKSPACE</b> on your keyboard.</li>
    <li>You can view images in fullscreen -mode by pressing the <b>FULLSCREEN</b> -button inside the overlay.</li>
</ul>

<hr>

<h4>4. Using download -function</h4>

You can allocate download function (button) for any image inside LBO, by adding <b>data-download="yes"</b> -attribute and value on your image element.

<hr>

<h4>5. Browser support</h4>

Lightbox Overlay has been tested on 6 most popular browsers in 2024 and works correctly on all of them.

<ul>
    <li>Microsoft Edge</li>
    <li>Mozilla Firefox (Web/Mobile)</li>
    <li>Google Chrome (Web/Mobile)</li>
    <li>Opera</li>
    <li>Safari (Web/Mobile)</li>
    <li>Samsung Internet (Mobile)</li>
</ul>

<hr>

<h4>6. More information</h4>

Visit project webpage: https://www.timoanjala.com/projects/lightbox.html

