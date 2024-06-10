const darkmode = document.getElementById('darkmode')                                    /* get the button */

darkmode.addEventListener('click', () => { 
    var wasDarkMode = localStorage.getItem('darkmode') === '1';                         /* get the current darkmode setting */

    localStorage.setItem('darkmode', wasDarkMode ? '0' : '1');                          /* set darkmode to the opposite value */
      document.documentElement.classList[wasDarkMode ? 'remove' : 'add']('darkmode');   /* toggle the .darkmode css code */
    console.log('dark mode toggled');                                                   /* log the action */
});

function goBack () {
  history.go(-1);
}

function goForward () {
  history.go(1);
}