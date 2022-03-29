var tw = new Typewriter('#console', {
  autoStart: true,
  loop: false,
  cursor: "&block;"
});

var lastLogin = new Date();

if (window.localStorage.lastLogin) {
    lastLogin = window.localStorage.lastLogin;
}

tw.pasteString("Last login: " + moment(lastLogin).format('ddd MMM Do YYYY H:mm:ss') + "<br><br>$ ")
    .pauseFor(500)
    .typeString('whoami')
    .pauseFor(1000)
    .callFunction(
        function(){
            document.getElementById("console")
                    .getElementsByTagName("span")[0]
                    .innerHTML += "<br><br>Hi👋<br>My name is <strong>Francesco&nbsp;Re</strong>.<br>I’m a developer and a student at <a href='https://www.polimi.it' target='_blank'>PoliMi</a>.<br><br>$ ";

            window.localStorage.lastLogin = new Date();
        })
    .start();
