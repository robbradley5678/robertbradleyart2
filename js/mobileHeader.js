const mobileHeaderContainer = document.getElementById('mobileHeaderContainer');

mobileHeaderContainer.innerHTML =  `

  <div id="mobileHeader">
    <div id="hamburger">&#9776;</div>
    <a href="./index.html">
      <h1>Robert Bradley</h1>
      <h2>Fine Art</h2>
    </a>
  </div>
  <div id="mobileNav">
    <nav>
      <ul>
        <li><a href="./index.html">Gallery</a></li>
        <li><a href="./index.html#about">About</a></li>
        <li><a href="./index.html#contact">Contact</a></li>
        <li><a href="https://www.instagram.com/robbradleyart/" target="_blank">Instagram</a></li>
      </ul>
    </nav>
  </div>

`;
