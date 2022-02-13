const footer = document.getElementsByTagName('footer')[0];
const year = new Date().getFullYear();
footer.innerHTML = `

  <p>&#169; Robert Bradley 2022 | <a href="./termsandconditions.html" target="_blank">Terms & Conditions</a> | <a href="./privacy.html" target="_blank">Privacy Policy</a></p>

`;
