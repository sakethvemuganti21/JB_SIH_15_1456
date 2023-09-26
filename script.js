var speechRecognition = window.webkitSpeechRecognition
var lang = document.getElementById("lang-select")
var recognition = new speechRecognition()
var textbox = $("#textbox")
var output = document.getElementById("output")
var instructions = $("#instructions")
var content =''
recognition.continuous = true
//recognition 19s started
recognition.onstart = function() {
    instructions.text("Voice Recognition is on")
}
recognition.onspeechend = function() {
    instructions.text("no Activity")
}
recognition.onerror = function () {
    instructions.text("Try Again")
}
recognition.onresult = function (event) {
    var current = event.resultIndex;
    var transcript = event.results[current][0].transcript
    content += transcript
    output.innerText = content
}
$("#start-btn").click(function (event) {
    if(content.length) {
        content +=''
    }
    recognition.lang = lang.value
    recognition.start()
})
