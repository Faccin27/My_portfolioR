document.addEventListener("DOMContentLoaded", function () {
    const Portfolio = [
        {
            id: 1,
            titulo: 'Keylogger',
            descricao: 'This script logs keystrokes and mouse clicks, associates them with the active window, and sends the data to a Discord webhook. Events are captured in real-time and transmitted every 5 seconds.',
            imagem: 'assets/sc4.jpg',
            link: 'https://github.com/Faccin27/keylogger-KeystrokeToDiscord',
            videoId: 'j8fXIvwU_mo'
        },
        {
            id: 2,
            titulo: 'Music App',
            descricao: 'A website and music player app integrating Spotify and YouTube Music APIs. Play, download songs, create, export, and import playlists—offering a more advanced and flexible experience than Spotify.',
            imagem: 'assets/sc5.png',
            link: 'https://github.com/Faccin27/Music_App',
            videoId: 'j8fXIvwU_mo'
        },
        {
            id: 3,
            titulo: 'News Portals',
            descricao: 'A complete news portal showcasing events, jobs, news, and partners. It features different access permissions for logged-in users, administrators, and guests.',
            imagem: 'assets/sc6.png',
            link: 'https://github.com/Faccin27/Portal_Noticias',
            videoId: 'j8fXIvwU_mo'
        },
        {
            id: 4,
            titulo: 'Online Forum',
            descricao: 'An online forum for flashcard posts where users can create, edit, delete, like, and comment on content. Administrators can oversee all activities directly from the forum.',
            imagem: 'assets/sc8.png',
            link: 'https://github.com/Faccin27/online_forum_dashboard',
            videoId: 'j8fXIvwU_mo'
        },
        {
            id: 5,
            titulo: 'Image Gallery',
            descricao: 'An image gallery developed in one hour featuring a grid layout, with functions for liking,commenting, and logging in. This project, proposed by SAEP, earned first place based one valuation.',
            imagem: 'assets/sc9.png',
            link: 'https://github.com/Faccin27/image_gallery',
            videoId: 'j8fXIvwU_mo'
        },
        {
            id: 6,
            titulo: 'Games Forum API',
            descricao: ' Developed a REST API for a gaming social network, focusing on user interactions, achievement sharing, game participation, and messaging. Utilizes the MVC pattern.',
            imagem: 'assets/sc7.png',
            link: 'https://github.com/Faccin27/API_REDE_SOCIAL_GAMES',
            videoId: 'j8fXIvwU_mo'
        }
    ];

    const portfolioContainer = document.querySelector('.portfo-items');
    Portfolio.forEach(project => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.innerHTML = `
            <img src="${project.imagem}" alt="${project.titulo}">
            <div class="info">
              <h4>${project.titulo}</h4>
              <p>${project.descricao}</p>
              <a href="${project.link}">View in GitHub <i class='bx bx-link-external'></i></a>
            </div>
          `;
        itemDiv.addEventListener('click', () => {
            openModal(project);
        });
        portfolioContainer.appendChild(itemDiv);
    });

    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalVideo = document.getElementById('modalVideo');
    const closeModal = document.querySelector('.close');

    function openModal(project) {
        modalTitle.textContent = project.titulo;
        modalDescription.textContent = project.descricao;
        modalVideo.src = `https://www.youtube.com/embed/${project.videoId}`;
        modal.style.display = 'block';
    }

    closeModal.onclick = function () {
        modal.style.display = 'none';
        modalVideo.src = "";
    }

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            modalVideo.src = "";
        }
    }
});

var listItems = document.querySelectorAll("#part li");
listItems.forEach(function (item) {
    item.addEventListener("click", function (event) {
        event.preventDefault();
        var target = event.currentTarget.querySelector("a").getAttribute("href");
        var section = document.querySelector(target);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    });
});

var portfolioLinks = document.querySelectorAll(".portfo-items a");
portfolioLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        var target = event.currentTarget.getAttribute("href");
        var section = document.querySelector(target);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    });
});
