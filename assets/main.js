
        // =========================================================================
        // BASE DE DATOS DE PELÍCULAS (PEGA AQUÍ TUS IMÁGENES Y LINKS DE DRIVE)
        // =========================================================================
        const peliculas = [
            // --- SAGA EL CONJURO (1 al 6 del universo cinematográfico) ---
            {
                titulo: "El Conjuro (2013)",
                etiqueta: "Parte 1",
                categoria: "conjuro",
                anio: "2013 • Terror • HD",
                // Cambia esta imagen por la portada que descargues en tu PC o una URL
                imagen: "https://play-lh.googleusercontent.com/prrHuprrxwfsBzJR5S17n0RMtg9wVioFqrXFJT9D_xVcssh66jBERx0gU3qH-oum33-3gg4cWvgf0CNi2ow",
                // Pega aquí tu link de Google Drive de El Conjuro 1
                driveUrl: "https://drive.google.com/file/d/19LtRDLdv-ZaV7S1FFLCNNU9WqZLjbVy4/view?usp=sharing",
                destacado: true,
                descripcion: "Los investigadores paranormales Ed y Lorraine Warren acuden a ayudar a una familia aterrorizada por una presencia oscura en una granja aislada."
            },
            {
                titulo: "El Conjuro 2: El Caso Enfield",
                etiqueta: "Parte 2",
                categoria: "conjuro",
                anio: "2016 • Terror • Full HD",
                imagen: "https://image.tmdb.org/t/p/original/AtwMXjMs7zDrTAM8L6SnaF5Qqzl.jpg",
                // Pega aquí tu link de Google Drive de El Conjuro 2
                driveUrl: "https://drive.google.com/file/d/1ME1vhE_iSYmE4Mc4EJLGTFBAWbrnayqJ/view?usp=sharing"
            },
            {
                titulo: "El Conjuro 3: El Diablo me Obligó a Hacerlo",
                etiqueta: "Parte 3",
                categoria: "conjuro",
                anio: "2021 • Terror • Full HD",
                imagen: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/5ed8a825-101d-4438-8153-f6d5c9b405f9/6b296408b2561dffca113d566b8c5cd7bfec158f.jpg?host=wbd-images.prod-vod.h264.io&partner=beamcom",
                // Pega aquí tu link de Google Drive de El Conjuro 3
                driveUrl: "https://drive.google.com/file/d/14LsRpgrcP3oMhUex7n9vB7GUjxEpltfB/view?usp=sharing"
            },
            {
                titulo: "El Conjuro 4: Últimos Ritos",
                etiqueta: "Parte 4",
                categoria: "conjuro",
                anio: "2025 • Terror • 4K",
                imagen: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/e62d3010-ffd6-45ef-b8e7-4eed314f375c/4a64e826-be60-11f0-b0b0-12dde730098f?host=wbd-images.prod-vod.h264.io&partner=beamcom",
                // Pega aquí tu link de Google Drive de El Conjuro 4
                driveUrl: "https://drive.google.com/file/d/TU_ID_CONJURO_4/view"
            },
            {
                titulo: "La Monja (Universo El Conjuro)",
                etiqueta: "Entrega 5",
                categoria: "conjuro",
                anio: "2018 • Terror • HD",
                imagen: "https://es.web.img2.acsta.net/pictures/18/08/14/15/35/4396669.jpg",
                // Pega aquí tu link de Google Drive de La Monja / 5ta película
                driveUrl: ""
            },
            {
                titulo: "Annabelle Vuelve a Casa",
                etiqueta: "Entrega 6",
                categoria: "conjuro",
                anio: "2019 • Terror • HD",
                imagen: "https://m.media-amazon.com/images/S/pv-target-images/84acdb04fedf5cb042e358ec9d1bcc20128477f34a0ef7c822bd70eff2870dcf.jpg",
                // Pega aquí tu link de Google Drive de Annabelle / 6ta película
                driveUrl: ""
            },

            // --- TENDENCIAS ---
            {
                titulo: "Noches de Neón",
                categoria: "tendencias",
                anio: "2025 • 4K",
                imagen: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80",
                driveUrl: ""
            },
            {
                titulo: "Abismo Espacial",
                categoria: "tendencias",
                anio: "2026 • Full HD",
                imagen: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
                driveUrl: ""
            },
            {
                titulo: "Spider-Man: Un nuevo día",
                etiqueta: "Nueva película",
                categoria: "tendencias",
                anio: "Próximo estreno • Acción",
                imagen: "https://image.tmdb.org/t/p/w342//fBFjaDWfNslvrs6bJjknmG27wOS.jpg",
                driveUrl: ""
            },
            {
                titulo: "Titanic",
                etiqueta: "Romance",
                categoria: "tendencias",
                anio: "1997 • Romance • HD",
                imagen: "https://image.tmdb.org/t/p/w342//VMOt5scbGmBKDvkfHjZN6Ki54i.jpg",
                driveUrl: ""
            },

            // --- SERIES ---
            {
                titulo: "La musa de la Sección E",
                etiqueta: "Serie • 2 temporadas",
                categoria: "series",
                anio: "Drama • 34 capítulos",
                imagen: "https://1.vikiplatform.com/c/41267c/d32d024d4c.jpg?x=b",
                temporadas: {
                    1: Array.from({ length: 16 }, (_, i) => ({
                        titulo: `Capítulo ${i + 1}`,
                        driveUrl: ""
                    })),
                    2: Array.from({ length: 18 }, (_, i) => ({
                        titulo: `Capítulo ${i + 1}`,
                        driveUrl: ""
                    }))
                }
            },

            // --- ACCIÓN ---
            {
                titulo: "Velocidad Extrema",
                categoria: "accion",
                anio: "2026 • 4K",
                imagen: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
                driveUrl: ""
            },
            {
                titulo: "Cumbre Helada",
                categoria: "accion",
                anio: "2025 • Full HD",
                imagen: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
                driveUrl: ""
            }
        ];

        // =========================================================================
        // FUNCIÓN AUTOMÁTICA PARA CONVERTIR LINK DE GOOGLE DRIVE A REPRODUCTOR
        // =========================================================================
        function convertirLinkDrive(url) {
            const regex = /(?:\/d\/|id=)([a-zA-Z0-9_-]+)/;
            const match = url.match(regex);
            if (match && match[1]) {
                return `https://drive.google.com/file/d/${match[1]}/preview`;
            }
            return url;
        }

        // Elementos del DOM
        const modal = document.getElementById('videoModal');
        const drivePlayer = document.getElementById('drivePlayer');
        const playerWrapper = document.querySelector('.player-wrapper');
        const episodePanel = document.getElementById('episodePanel');
        const unavailableModal = document.getElementById('videoUnavailableModal');
        const unavailableMessage = document.getElementById('videoUnavailableMessage');
        const closeUnavailableNotice = document.getElementById('closeUnavailableNotice');

        function mostrarAvisoVideoNoDisponible(mensaje) {
            unavailableMessage.textContent = mensaje || "Estamos preparando este video. Estará disponible próximamente.";
            unavailableModal.hidden = false;
            closeUnavailableNotice.focus();
        }

        function cerrarAvisoVideoNoDisponible() {
            unavailableModal.hidden = true;
        }

        closeUnavailableNotice.addEventListener('click', cerrarAvisoVideoNoDisponible);
        unavailableModal.addEventListener('click', (event) => {
            if (event.target === unavailableModal) {
                cerrarAvisoVideoNoDisponible();
            }
        });
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && !unavailableModal.hidden) {
                cerrarAvisoVideoNoDisponible();
            }
        });

        // Abrir reproductor
        function abrirVideo(pelicula) {
            playerWrapper.classList.remove('series-player');
            episodePanel.hidden = true;
            episodePanel.innerHTML = "";

            if (!pelicula.driveUrl) {
                mostrarAvisoVideoNoDisponible("Estamos preparando esta película. Estará disponible próximamente.");
                return;
            }

            drivePlayer.src = convertirLinkDrive(pelicula.driveUrl);
            modal.classList.add('active');
        }

        function mostrarTemporada(serie, numeroTemporada) {
            const episodios = serie.temporadas[numeroTemporada];
            const seasonTabs = episodePanel.querySelectorAll('.season-tab');
            seasonTabs.forEach((tab, index) => {
                tab.classList.toggle('active', index + 1 === numeroTemporada);
            });

            const episodeList = episodePanel.querySelector('.episode-list');
            episodeList.innerHTML = episodios.map((episodio, index) => `
                <button class="episode-button" type="button" data-episode="${index}">
                    ${index + 1}
                </button>
            `).join("");

            episodeList.querySelectorAll('.episode-button').forEach((button, index) => {
                button.addEventListener('click', () => {
                    episodeList.querySelectorAll('.episode-button').forEach(item => item.classList.remove('active'));
                    button.classList.add('active');

                    const episodio = episodios[index];
                    if (!episodio.driveUrl) {
                        mostrarAvisoVideoNoDisponible(`Estamos preparando ${episodio.titulo} de la temporada ${numeroTemporada}. Estará disponible próximamente.`);
                        drivePlayer.src = "";
                        return;
                    }
                    drivePlayer.src = convertirLinkDrive(episodio.driveUrl);
                });
            });
        }

        function abrirSerie(serie) {
            drivePlayer.src = "";
            playerWrapper.classList.add('series-player');
            episodePanel.hidden = false;
            episodePanel.innerHTML = `
                <div class="episode-header">
                    <button class="back-button" type="button" aria-label="Regresar al catálogo">← Regresar</button>
                    <h3>${serie.titulo}</h3>
                </div>
                <div class="season-tabs">
                    <button class="season-tab active" type="button" data-season="1">Temporada 1</button>
                    <button class="season-tab" type="button" data-season="2">Temporada 2</button>
                </div>
                <div class="episode-list"></div>
            `;

            episodePanel.querySelector('.back-button').addEventListener('click', cerrarVideo);

            episodePanel.querySelectorAll('.season-tab').forEach(tab => {
                tab.addEventListener('click', () => {
                    mostrarTemporada(serie, Number(tab.dataset.season));
                });
            });

            mostrarTemporada(serie, 1);
            modal.classList.add('active');
        }

        // Cerrar al hacer clic fuera de la ventana del reproductor
        function cerrarVideo() {
            modal.classList.remove('active');
            drivePlayer.src = "";
            playerWrapper.classList.remove('series-player');
            episodePanel.hidden = true;
            episodePanel.innerHTML = "";
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                cerrarVideo();
            }
        });

        // Renderizar tarjetas en pantalla
        function cargarCatalogo() {
            const rowConjuro = document.getElementById('rowConjuro');
            const rowTendencias = document.getElementById('rowTendencias');
            const rowSeries = document.getElementById('rowSeries');
            const rowAccion = document.getElementById('rowAccion');

            peliculas.forEach(peli => {
                // Configurar Banner Principal
                if (peli.destacado) {
                    document.getElementById('heroBanner').style.backgroundImage = `url('${peli.imagen}')`;
                    document.getElementById('heroTitle').textContent = peli.titulo;
                    document.getElementById('heroDesc').textContent = peli.descripcion;
                    document.getElementById('heroPlayBtn').onclick = () => abrirVideo(peli);
                }

                // Crear tarjeta HTML
                const card = document.createElement('div');
                card.className = 'movie-card';
                card.innerHTML = `
                    <div class="card-bg-fallback"><span>${peli.titulo}</span></div>
                    ${peli.etiqueta ? `<div class="card-number">${peli.etiqueta}</div>` : ''}
                    <img src="${peli.imagen}" alt="${peli.titulo}" loading="lazy" onerror="this.style.display='none'">
                    <div class="card-overlay">
                        <div class="card-play-icon">▶</div>
                        <div class="card-title">${peli.titulo}</div>
                        <div class="card-meta">${peli.anio}</div>
                    </div>
                `;
                card.onclick = () => peli.temporadas ? abrirSerie(peli) : abrirVideo(peli);

                if (peli.categoria === 'conjuro') {
                    rowConjuro.appendChild(card);
                } else if (peli.categoria === 'tendencias') {
                    rowTendencias.appendChild(card);
                } else if (peli.categoria === 'series') {
                    rowSeries.appendChild(card);
                } else {
                    rowAccion.appendChild(card);
                }
            });
        }

        // Efecto transparente -> oscuro en la barra superior
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });

        // Iniciar aplicación
        cargarCatalogo();
    