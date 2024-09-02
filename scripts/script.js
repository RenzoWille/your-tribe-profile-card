const expandButton = document.querySelector('header button')
expandButton.addEventListener('click', expand) dit is de command voor de button om op te kunnen klikken

function expand () {
  document.body.classList.toggle('expand') dit is de command voor het visitekaartje om groter te worden na het klikken op de button
}
