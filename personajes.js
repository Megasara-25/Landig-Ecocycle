const GUARDIANES = [
  {
    "id": "polaris",
    "nombre": "Polaris",
    "material": "Plástico",
    "videoId": "AXpnghigdkU",
    "videoTitle": "Aprende a identificar y reciclar plásticos",
    "icono": "assets/Iconos_EcoCycle/01_Polaris_Plastico.png",
    "avatar": "assets/personajes/polaris-icono.jpeg",
    "imagen": "assets/personajes/polaris.png",
    "descripcion": "Transforma residuos plásticos en nuevas oportunidades.",
    "frase": "Doy una segunda vida a lo que parece desechable.",
    "reciclar": [
      "Botellas PET limpias",
      "Envases plásticos aceptados por el reciclador",
      "Tapas plásticas separadas"
    ],
    "preparar": [
      "Vacía los envases",
      "Enjuágalos cuando sea necesario",
      "Sécalos y comprímelos si es posible"
    ],
    "evitar": [
      "Envases con residuos peligrosos",
      "Plásticos sucios de grasa o comida",
      "Mezclar plásticos no aceptados"
    ],
    "entregar": [
      "Consulta un punto de recolección que acepte este tipo de plástico",
      "Confirma las condiciones con el reciclador antes de llevarlo"
    ]
  },
  {
    "id": "tetrax",
    "nombre": "Tetrax",
    "material": "Cartón",
    "videoId": "dUKOHLl-vHg",
    "videoTitle": "Aprende a reciclar y aprovechar el cartón",
    "icono": "assets/Iconos_EcoCycle/02_Tetrax_Carton.png",
    "avatar": "assets/personajes/tetrax-icono.jpeg",
    "imagen": "assets/personajes/tetrax.png",
    "descripcion": "Protege los recursos dando nueva vida al cartón.",
    "frase": "Cada caja puede tener otra historia.",
    "reciclar": [
      "Cajas de cartón",
      "Empaques corrugados",
      "Cartón sin restos de comida"
    ],
    "preparar": [
      "Retira restos de alimentos",
      "Dobla y aplana las cajas",
      "Conserva el material seco"
    ],
    "evitar": [
      "Cartón húmedo",
      "Cajas contaminadas con grasa",
      "Cartón mezclado con basura"
    ],
    "entregar": [
      "Llévalo a recicladores o centros que reciban cartón"
    ]
  },
  {
    "id": "paperyus",
    "nombre": "Paperyus",
    "material": "Papel",
    "videoId": "F9w85cYCnkM",
    "videoTitle": "Aprende a separar y reciclar papel",
    "icono": "assets/Iconos_EcoCycle/03_Paperyus_Papel.png",
    "avatar": "assets/personajes/paperyus-icono.jpeg",
    "imagen": "assets/personajes/paperyus.png",
    "descripcion": "Convierte las hojas usadas en nuevas posibilidades.",
    "frase": "Las ideas también se pueden reciclar.",
    "reciclar": [
      "Hojas de oficina",
      "Cuadernos sin componentes plásticos",
      "Periódicos y revistas"
    ],
    "preparar": [
      "Separa el papel del resto de residuos",
      "Evita mojarlo",
      "Retira elementos ajenos cuando sea posible"
    ],
    "evitar": [
      "Papel sanitario usado",
      "Papel con grasa",
      "Papel plastificado no aceptado"
    ],
    "entregar": [
      "Consulta centros y recicladores que reciban papel seco"
    ]
  },
  {
    "id": "ferrax",
    "nombre": "Ferrax",
    "material": "Metales y latas",
    "videoId": "OJHAUWLSi_E",
    "videoTitle": "Aprende a reciclar latas y residuos metálicos",
    "icono": "assets/Iconos_EcoCycle/04_Ferrax_Metales_y_Latas.png",
    "avatar": "assets/personajes/ferrax-icono.jpeg",
    "imagen": "assets/personajes/ferrax.png",
    "descripcion": "Recupera metales para reducir la necesidad de nuevas materias primas.",
    "frase": "La fuerza está en recuperar lo que usamos.",
    "reciclar": [
      "Latas de bebidas",
      "Latas de conservas limpias",
      "Otros metales admitidos en el centro"
    ],
    "preparar": [
      "Vacía y limpia las latas",
      "Evita bordes cortantes",
      "Separa según las indicaciones del punto"
    ],
    "evitar": [
      "Envases con químicos",
      "Recipientes presurizados sin tratamiento",
      "Objetos punzantes expuestos"
    ],
    "entregar": [
      "Acude a centros que acepten metales y latas"
    ]
  },
  {
    "id": "voltaje",
    "nombre": "Voltaje",
    "material": "Pilas y baterías",
    "videoId": "pDnRzqEFSMs",
    "videoTitle": "Aprende a disponer correctamente las pilas y baterías",
    "icono": "assets/Iconos_EcoCycle/05_Voltaje_Pilas_y_Baterias.png",
    "avatar": "assets/personajes/voltaje-icono.jpeg",
    "imagen": "assets/personajes/voltaje.png",
    "descripcion": "Ayuda a evitar que las pilas terminen contaminando el ambiente.",
    "frase": "La energía también necesita un destino responsable.",
    "reciclar": [
      "Pilas domésticas usadas aceptadas por programas posconsumo",
      "Baterías pequeñas según condiciones del gestor"
    ],
    "preparar": [
      "Guárdalas en un lugar seco",
      "Protege terminales cuando corresponda",
      "Consulta condiciones para baterías dañadas"
    ],
    "evitar": [
      "Arrojarlas a la basura común",
      "Abrir, perforar o aplastar baterías",
      "Mezclarlas con residuos aprovechables"
    ],
    "entregar": [
      "Usa contenedores autorizados o programas posconsumo",
      "No las dejes en centros que no reciban residuos peligrosos"
    ]
  },
  {
    "id": "flurosil",
    "nombre": "Flurosil",
    "material": "Vidrio",
    "videoId": "zof_Kw9aW8I",
    "videoTitle": "Aprende a separar y reciclar vidrio",
    "icono": "assets/Iconos_EcoCycle/06_Flurosil_Vidrio.png",
    "avatar": "assets/personajes/flurosil-icono.jpeg",
    "imagen": "assets/personajes/flurosil.png",
    "descripcion": "Protege el entorno recuperando envases de vidrio.",
    "frase": "Una nueva forma para un material que perdura.",
    "reciclar": [
      "Botellas de vidrio",
      "Frascos de alimentos limpios",
      "Envases de vidrio admitidos"
    ],
    "preparar": [
      "Vacía los envases",
      "Enjuaga y seca",
      "Entrega los vidrios rotos solo si el gestor los acepta y de forma segura"
    ],
    "evitar": [
      "Bombillos y fluorescentes",
      "Espejos y cerámicas mezclados",
      "Vidrios rotos sin protección"
    ],
    "entregar": [
      "Consulta centros que reciban envases de vidrio",
      "Los bombillos requieren recolección diferenciada"
    ]
  }
];
window.ECOCYCLE_GUARDIANS = GUARDIANES;

document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('characters-list');
    if (!list) return;

    const profile = document.getElementById('character-profile');
    const pagination = document.querySelector('.character-pagination');
    const position = document.getElementById('character-position');
    const tabs = [...document.querySelectorAll('.learning-tab')];
    const videoThumbnail = document.getElementById('video-thumbnail');
    const videoStatus = document.getElementById('video-status');
    const videoButton = document.querySelector('[data-video-play]');
    const videoModal = document.getElementById('video-modal');
    const videoModalDialog = videoModal?.querySelector('.video-modal-dialog');
    const videoModalTitle = document.getElementById('video-modal-title');
    const videoModalStatus = document.getElementById('video-modal-status');
    const videoPlayerHost = document.getElementById('video-player');
    const videoCloseButton = document.querySelector('[data-video-close]');
    let selected = 0;
    let tab = 'reciclar';
    let transitionTimer;
    let player;
    let playerApiPromise;
    let activeVideoTrigger;
    let previousBodyOverflow = '';
    let playerRequest = 0;

    const safeText = (id, value) => {
        const element = document.getElementById(id);
        if (element) element.textContent = value;
    };

    const showPanel = () => {
        const panel = document.getElementById('learning-panel');
        const guardian = GUARDIANES[selected];
        if (!panel) return;

        panel.replaceChildren();
        panel.setAttribute('aria-labelledby', 'tab-' + tab);
        const listItems = document.createElement('ul');
        guardian[tab].forEach((value) => {
            const item = document.createElement('li');
            item.textContent = value;
            listItems.append(item);
        });
        panel.append(listItems);

        const heading = document.querySelector('.learning-heading');
        if (heading) heading.textContent = 'Aprende a reciclar ' + guardian.material.toLowerCase();
    };

    const updateVideo = (guardian) => {
        if (!videoThumbnail || !videoStatus || !videoButton) return;

        const title = 'Aprende a reciclar con ' + guardian.nombre;
        videoThumbnail.src = 'https://i.ytimg.com/vi/' + guardian.videoId + '/hqdefault.jpg';
        videoThumbnail.alt = 'Miniatura de ' + guardian.videoTitle;
        videoButton.setAttribute('aria-label', 'Ver video: ' + title);
        safeText('video-heading', title);
        videoStatus.textContent = 'Video disponible';
    };

    const setPlayerError = (message) => {
        if (!videoModalStatus) return;
        videoModalStatus.textContent = message;
        videoModalStatus.hidden = false;
    };

    const loadYouTubeApi = () => {
        if (window.YT?.Player) return Promise.resolve(window.YT);
        if (playerApiPromise) return playerApiPromise;

        playerApiPromise = new Promise((resolve, reject) => {
            const previousCallback = window.onYouTubeIframeAPIReady;
            const script = document.createElement('script');
            let timeout;
            const restoreCallback = () => {
                window.onYouTubeIframeAPIReady = previousCallback || undefined;
            };
            const fail = () => {
                window.clearTimeout(timeout);
                restoreCallback();
                playerApiPromise = null;
                reject(new Error('No se pudo cargar el reproductor de YouTube.'));
            };

            window.onYouTubeIframeAPIReady = () => {
                window.clearTimeout(timeout);
                restoreCallback();
                if (typeof previousCallback === 'function') previousCallback();
                resolve(window.YT);
            };

            script.src = 'https://www.youtube.com/iframe_api';
            script.async = true;
            script.onerror = fail;
            timeout = window.setTimeout(fail, 15000);
            document.head.append(script);
        });

        return playerApiPromise;
    };

    const closeVideoModal = (restoreFocus = true) => {
        if (!videoModal || videoModal.hidden) return;
        playerRequest += 1;
        if (player) {
            player.destroy();
            player = null;
        }
        videoPlayerHost?.replaceChildren();
        videoModal.hidden = true;
        document.body.style.overflow = previousBodyOverflow;

        const trigger = activeVideoTrigger;
        activeVideoTrigger = null;
        if (restoreFocus && trigger?.isConnected) trigger.focus();
    };

    const openVideoModal = async (guardian) => {
        if (!videoModal || !videoModalTitle || !videoPlayerHost || !videoModalStatus) return;
        const request = ++playerRequest;
        activeVideoTrigger = videoButton;
        previousBodyOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        videoModal.hidden = false;
        videoModalTitle.textContent = guardian.videoTitle + ' · ' + guardian.nombre;
        videoModalStatus.hidden = false;
        videoModalStatus.textContent = 'Cargando reproductor…';
        videoPlayerHost.replaceChildren();

        const iframe = document.createElement('iframe');
        const params = new URLSearchParams({
            autoplay: '1',
            controls: '1',
            enablejsapi: '1',
            playsinline: '1',
            rel: '0'
        });
        if (window.location.origin !== 'null') params.set('origin', window.location.origin);
        iframe.src = 'https://www.youtube-nocookie.com/embed/' + guardian.videoId + '?' + params;
        iframe.title = guardian.videoTitle + ' - ' + guardian.nombre;
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.allowFullscreen = true;
        iframe.referrerPolicy = 'strict-origin-when-cross-origin';
        videoPlayerHost.append(iframe);
        videoCloseButton?.focus();

        try {
            const youtube = await loadYouTubeApi();
            if (request !== playerRequest || videoModal.hidden) return;

            player = new youtube.Player(iframe, {
                events: {
                    onReady: (event) => {
                        if (request !== playerRequest || videoModal.hidden) return;
                        event.target.getIframe().title = guardian.videoTitle + ' - ' + guardian.nombre;
                        videoModalStatus.hidden = true;
                    },
                    onError: (event) => {
                        if (request !== playerRequest || videoModal.hidden) return;
                        const messages = {
                            2: 'YouTube rechazó el identificador del video.',
                            5: 'Este video no pudo reproducirse en el reproductor HTML5.',
                            100: 'El video no está disponible o es privado.',
                            101: 'Este video no permite reproducción incrustada.',
                            150: 'Este video no permite reproducción incrustada.',
                            153: 'YouTube no pudo verificar el origen de la solicitud.'
                        };
                        setPlayerError(messages[event.data] || 'No se pudo reproducir el video. Comprueba tu conexión e inténtalo de nuevo.');
                    }
                }
            });
        } catch (error) {
            if (request === playerRequest && !videoModal.hidden) {
                setPlayerError(error.message || 'No se pudo conectar con YouTube. Comprueba tu conexión e inténtalo de nuevo.');
            }
        }
    };

    const getModalFocusable = () => videoModal?.querySelectorAll(
        'button:not([disabled]), iframe, [href], [tabindex]:not([tabindex="-1"])'
    ) || [];

    videoCloseButton?.addEventListener('click', () => closeVideoModal());
    videoModal?.addEventListener('click', (event) => {
        if (event.target === videoModal) closeVideoModal();
    });
    videoModalDialog?.addEventListener('keydown', (event) => {
        if (event.key !== 'Tab') return;
        const focusable = getModalFocusable();
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
        }
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && videoModal && !videoModal.hidden) closeVideoModal();
    });
    document.addEventListener('focusin', (event) => {
        if (videoModal && !videoModal.hidden && !videoModal.contains(event.target)) {
            videoCloseButton?.focus();
        }
    });

    const update = (animate = false) => {
        const guardian = GUARDIANES[selected];
        if (animate && profile) {
            profile.classList.add('is-changing');
            window.clearTimeout(transitionTimer);
            transitionTimer = window.setTimeout(() => profile.classList.remove('is-changing'), 260);
        }

        safeText('character-name', guardian.nombre);
        safeText('character-role', 'GUARDIÁN DE ' + guardian.material.toUpperCase());
        safeText('character-material', guardian.material.toUpperCase());
        safeText('character-quote', '“' + guardian.frase + '”');
        safeText('character-description', guardian.descripcion);

        const image = document.getElementById('character-image');
        if (image) {
            image.src = guardian.imagen;
            image.alt = guardian.nombre + ', guardián de ' + guardian.material;
        }

        const icon = document.getElementById('character-material-icon');
        if (icon) {
            icon.src = guardian.icono;
            icon.alt = '';
        }

        list.querySelectorAll('.guardian-card').forEach((button, index) => {
            button.classList.toggle('selected', index === selected);
            button.setAttribute('aria-pressed', String(index === selected));
        });
        pagination?.querySelectorAll('button').forEach((button, index) => {
            button.classList.toggle('selected', index === selected);
            button.setAttribute('aria-pressed', String(index === selected));
        });

        if (position) position.textContent = (selected + 1) + ' de ' + GUARDIANES.length;
        updateVideo(guardian);
        showPanel();
    };

    const selectGuardian = (index, scroll = true) => {
        if (videoModal && !videoModal.hidden) closeVideoModal(false);
        selected = (index + GUARDIANES.length) % GUARDIANES.length;
        update(true);

        if (scroll) {
            const activeCard = list.querySelectorAll('.guardian-card')[selected];
            if (activeCard) {
                const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                list.scrollTo({
                    left: activeCard.offsetLeft - (list.clientWidth - activeCard.clientWidth) / 2,
                    behavior: reducedMotion ? 'auto' : 'smooth'
                });
            }
        }
    };

    GUARDIANES.forEach((guardian, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'guardian-card';
        button.setAttribute('aria-label', guardian.nombre + ', ' + guardian.material);
        button.setAttribute('aria-pressed', 'false');

        const avatar = document.createElement('img');
        avatar.src = guardian.avatar;
        avatar.alt = '';
        avatar.loading = 'lazy';

        const copy = document.createElement('span');
        copy.className = 'guardian-copy';
        const name = document.createElement('strong');
        name.textContent = guardian.nombre;
        const material = document.createElement('span');
        material.textContent = guardian.material;
        copy.append(name, material);

        const icon = document.createElement('img');
        icon.className = 'guardian-material-icon';
        icon.src = guardian.icono;
        icon.alt = '';
        icon.loading = 'lazy';

        button.append(avatar, copy, icon);
        button.addEventListener('click', () => selectGuardian(index));
        list.append(button);

        if (pagination) {
            const dot = document.createElement('button');
            dot.type = 'button';
            dot.className = 'character-dot';
            dot.setAttribute('aria-label', 'Mostrar ' + guardian.nombre);
            dot.setAttribute('aria-pressed', 'false');
            dot.addEventListener('click', () => selectGuardian(index));
            pagination.append(dot);
        }
    });

    document.querySelector('[data-character-prev]')?.addEventListener('click', () => selectGuardian(selected - 1));
    document.querySelector('[data-character-next]')?.addEventListener('click', () => selectGuardian(selected + 1));

    tabs.forEach((button, index) => {
        button.addEventListener('click', () => {
            tab = button.dataset.tab;
            tabs.forEach((item) => {
                item.classList.toggle('active', item === button);
                item.setAttribute('aria-selected', String(item === button));
            });
            showPanel();
        });

        button.addEventListener('keydown', (event) => {
            let next = index;
            if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
            else if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
            else if (event.key === 'Home') next = 0;
            else if (event.key === 'End') next = tabs.length - 1;
            else return;

            event.preventDefault();
            tabs[next].focus();
            tabs[next].click();
        });
    });

    videoButton?.addEventListener('click', () => {
        openVideoModal(GUARDIANES[selected]);
    });

    update();
});
