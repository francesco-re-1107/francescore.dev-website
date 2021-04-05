var tw = new Typewriter('#console', {
  autoStart: true,
  loop: false,
  cursor: "&block;"
});

tw.pasteString("Last login: " + moment().format('ddd MMM Do YYYY h:mm:ss') + "<br><br>> ")
    .pauseFor(500)
    .typeString('cat <strong>greetings.txt<strong>')
    .pauseFor(1000)
    .callFunction(
        function(){
            document.getElementById("console")
                    .getElementsByTagName("span")[0]
                    .innerHTML += "<br><br>Hi👋<br>My name is <strong>Francesco&nbsp;Re</strong><br>I’m an italian developer and student<br><br>> ";
        })
    .start();
