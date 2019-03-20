!function() {
    window.addEventListener('message', function(e) {
        if (e.origin.split('://')[1] !== 'wuddrum.github.io') return;
        document.getElementById('NewsWidget').style.height = e.data + 'px';
    });
}();
