Array.from(document.getElementsByClassName(level1)).forEach(
    function(e, i, a) {
        const html = '<div class="level"></div>'
        e.innerHTML = html
    }
)