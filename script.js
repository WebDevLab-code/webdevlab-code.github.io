
const reqURL = "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent("https://www.youtube.com/feeds/videos.xml?playlist_id=PL17U_TIZ5QD-o3TiUcUpGkkS_o5b9mC5W");
const mnpvcontainer = document.querySelector('.mnpvcontainer');
fetch(reqURL)
.then(blob => blob.json())
.then(data => {
    data.items.forEach(d => {
        let mnp = document.createElement('iframe');
        mnp.setAttribute('frameborder','0');
        mnp.setAttribute('allowfullscreen','allowfullscreen');
        mnp.setAttribute("src", "https://youtube.com/embed/" + d.link.substr(d.link.indexOf("=") + 1) + "?controls=0");
        mnpvcontainer.appendChild(mnp);
    });
});

const navToggle = document.querySelector('.nav-toggle');
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('nav-open');
    document.querySelector('.socialmedia').classList.toggle('active');
});