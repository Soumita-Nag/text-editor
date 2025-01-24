var textarea = document.getElementById("text");
    function fun(e) {
        let x = e.value;
        textarea.style.fontSize = x + "px";
    }
    function bold() {
        if (textarea.style.fontWeight == "bold") {
            textarea.style.fontWeight = "normal"
        }
        else {
            textarea.style.fontWeight = "bold"
        }
    }
    function italic() {
        if (textarea.style.fontStyle == "italic") {
            textarea.style.fontStyle = "normal"
        }
        else {
            textarea.style.fontStyle = "italic"
        }
    }
    function underline() {
        if (textarea.style.textDecoration == "underline") {
            textarea.style.textDecoration = "none"
        }
        else {
            textarea.style.textDecoration = "underline"
        }
    }
    function strike() {
        if (textarea.style.textDecoration == "line-through") {
            textarea.style.textDecoration = "none"
        }
        else {
            textarea.style.textDecoration = "line-through"
        }
    }
    function col(e) {
        if (textarea.style.color == e) {
            textarea.style.fontStyle = "normal"
        }
        else {
            textarea.style.color = e
        }

    }
    function bg(e) {
        if (textarea.style.textShadow == "2px 2px "+e) {
            textarea.style.textShadow = "none"
        }
        else {
            textarea.style.textShadow = "2px 2px "+e
        }
    }
    function left() {
        textarea.style.textAlign = "left";
    }
    function middle() {
        textarea.style.textAlign = "center";
    }
    function right() {
        textarea.style.textAlign = "right";
    }
    function upper() {
        if (textarea.style.textTransform == "uppercase") {
            textarea.style.textTransform = "none"
        }
        else {
            textarea.style.textTransform = "uppercase"
        }
    }
    function lower() {
        if (textarea.style.textTransform == "lowercase") {
            textarea.style.textTransform = "none"
        }
        else {
            textarea.style.textTransform = "lowercase"
        }
    }
    function text_clear() {
        textarea.style.fontWeight = "normal";
        textarea.style.textDecoration = "none";
        textarea.style.fontStyle = "normal";
        textarea.style.textAlign = "left";
        textarea.style.textShadow = "none"
        textarea.value = "";
    }
    function remove_format() {
        textarea.style.color = "black";
        textarea.style.backgroundColor = "white";
        textarea.style.fontWeight = "normal";
        textarea.style.textDecoration = "none";
        textarea.style.fontStyle = "normal";
        textarea.style.textShadow = "none"
        textarea.style.textAlign = "left";
    }