const GUARDIANES = [
  {
    "id": "polaris",
    "nombre": "Polaris",
    "material": "Plástico",
    "icono": "assets/Iconos_EcoCycle/01_Polaris_Plastico.png",
    "avatar": "assets/personajes/polaris-icono.jpeg",
    "imagen": "assets/personajes/polaris.jpeg",
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
    "icono": "assets/Iconos_EcoCycle/02_Tetrax_Carton.png",
    "avatar": "assets/personajes/tetrax-icono.jpeg",
    "imagen": "assets/personajes/tetrax.jpeg",
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
    "icono": "assets/Iconos_EcoCycle/03_Paperyus_Papel.png",
    "avatar": "assets/personajes/paperyus-icono.jpeg",
    "imagen": "assets/personajes/paperyus.jpeg",
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
    "icono": "assets/Iconos_EcoCycle/04_Ferrax_Metales_y_Latas.png",
    "avatar": "assets/personajes/ferrax-icono.jpeg",
    "imagen": "assets/personajes/ferrax.jpeg",
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
    "icono": "assets/Iconos_EcoCycle/05_Voltaje_Pilas_y_Baterias.png",
    "avatar": "assets/personajes/voltaje-icono.jpeg",
    "imagen": "assets/personajes/voltaje.jpeg",
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
    "icono": "assets/Iconos_EcoCycle/06_Flurosil_Vidrio.png",
    "avatar": "assets/personajes/flurosil-icono.jpeg",
    "imagen": "assets/personajes/flurosil.jpeg",
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
document.addEventListener('DOMContentLoaded', () => {
 const list=document.getElementById('characters-list'); if(!list) return;
 const profile=document.getElementById('character-profile');
 const pagination=document.querySelector('.character-pagination');
 const position=document.getElementById('character-position');
 const tabs=[...document.querySelectorAll('.learning-tab')];
 let selected=0, tab='reciclar', transitionTimer;
 const safeText=(id,value)=>{document.getElementById(id).textContent=value;};
 const showPanel=()=>{let data=GUARDIANES[selected]; const panel=document.getElementById('learning-panel');panel.replaceChildren();panel.setAttribute('aria-labelledby','tab-'+tab);const ul=document.createElement('ul');data[tab].forEach(value=>{const li=document.createElement('li');li.textContent=value;ul.append(li)});panel.append(ul);};
 const update=(animate=false)=>{let p=GUARDIANES[selected];if(animate){profile.classList.add('is-changing');window.clearTimeout(transitionTimer);transitionTimer=window.setTimeout(()=>profile.classList.remove('is-changing'),260)}safeText('character-name',p.nombre.toUpperCase());safeText('character-role','HÉROE DE '+p.material.toUpperCase());safeText('character-material',p.material.toUpperCase());safeText('character-quote','“'+p.frase+'”');safeText('character-description',p.descripcion);let image=document.getElementById('character-image');image.src=p.imagen;image.alt=p.nombre+', guardián de '+p.material;let icon=document.getElementById('character-material-icon');icon.src=p.icono;icon.alt='Icono oficial de '+p.material;list.querySelectorAll('.guardian-card').forEach((button,i)=>{button.classList.toggle('selected',i===selected);button.setAttribute('aria-pressed',String(i===selected))});pagination?.querySelectorAll('button').forEach((button,i)=>{button.classList.toggle('selected',i===selected);button.setAttribute('aria-pressed',String(i===selected))});if(position)position.textContent=(selected+1)+' de '+GUARDIANES.length;showPanel();};
 const selectGuardian=(index,scroll=true)=>{selected=(index+GUARDIANES.length)%GUARDIANES.length;update(true);if(scroll&&window.matchMedia('(max-width: 1100px)').matches){list.querySelectorAll('.guardian-card')[selected].scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'nearest',inline:'center'})}};
 GUARDIANES.forEach((p,i)=>{const button=document.createElement('button');button.type='button';button.className='guardian-card';button.setAttribute('aria-label',p.nombre+', '+p.material);button.setAttribute('aria-pressed','false');const avatar=document.createElement('img');avatar.src=p.avatar;avatar.alt='';avatar.loading='lazy';const copy=document.createElement('span');copy.className='guardian-copy';const name=document.createElement('strong');name.textContent=p.nombre.toUpperCase();const material=document.createElement('span');material.textContent=p.material;copy.append(name,material);const icon=document.createElement('img');icon.className='guardian-material-icon';icon.src=p.icono;icon.alt='';icon.loading='lazy';button.append(avatar,copy,icon);button.addEventListener('click',()=>selectGuardian(i,false));list.append(button);if(pagination){const dot=document.createElement('button');dot.type='button';dot.className='character-dot';dot.setAttribute('aria-label','Mostrar '+p.nombre);dot.setAttribute('aria-pressed','false');dot.addEventListener('click',()=>selectGuardian(i));pagination.append(dot)}});
 document.querySelector('[data-character-prev]')?.addEventListener('click',()=>selectGuardian(selected-1));
 document.querySelector('[data-character-next]')?.addEventListener('click',()=>selectGuardian(selected+1));
 tabs.forEach((button,index)=>{button.addEventListener('click',()=>{tab=button.dataset.tab;tabs.forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-selected',String(b===button))});showPanel()});button.addEventListener('keydown',(event)=>{let next=index;if(event.key==='ArrowRight')next=(index+1)%tabs.length;else if(event.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=tabs.length-1;else return;event.preventDefault();tabs[next].focus();tabs[next].click()})});update();
});
