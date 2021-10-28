var modal = document.getElementById("myModal");

modal.innerHTML = `
      <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Oh wow, you want to buy a painting?</h2>
        <p>That's great! I haven't added the shopping functionality to the website yet, so please get in touch via the <a href="./index.html#contact">contact form</a>, and I'll get back to you as soon as I can.</p>
      </div>
      `;

var buyButton = document.getElementsByTagName("button")[0];

var span = document.getElementsByClassName("close")[0];

buyButton.onclick = () => {
  modal.style.display = "block";
}

span.onclick = () => {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
