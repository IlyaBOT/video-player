HFS.onEvent('afterEntryName', ({ entry }) =>
    /\.(mp4|mov|wmv)$/.test(entry.n) &&
        `<button class='play-button' onclick='videoplay("${entry.n}")' />`)

function videoplay(name = '') {
    const root = document.getElementById('video-player')
    root.style.display = name ? 'flex' : ''
    const video = root.querySelector('video')
    video.src = name
    if (name) video.play()
    else video.pause()
    root.querySelector('#player-title').innerText = name
}

HFS.onEvent('afterMenuBar', () => `
    <div id='video-player'>
        <video class="video-element" controls></video>
        <div>
            <span id='player-title' class='track-title'></span>
            <button onclick="videoplay()">✕</button>
        </div>
    </div>
`)
