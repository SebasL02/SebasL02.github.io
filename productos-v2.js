/* productos-v2.js — Tabs visuales de categoría con imagen */

/* ── Datos por categoría ── */
const CAT_DATA = {
  hierbas: {
    img:   'Portada_cat1.jpeg',
    count: '171 productos',
    descKey: 'catphoto.c1.desc',
  },
  blends: {
    img:   'Portada_cat2.jpeg',
    count: '13 blends',
    descKey: 'catphoto.c2.desc',
  },
  especias: {
    img:   'Portada_cat3.jpeg',
    count: '37 productos',
    descKey: 'catphoto.c3.desc',
  },
  extractos: {
    img:   'Portada_cat4.jpeg',
    count: '40 extractos',
    descKey: 'catphoto.c4.desc',
  },
  frutas: {
    img:   'Portada_cat5.jpeg',
    count: '12 productos',
    descKey: 'catphoto.c5.desc',
  },
  organicos: {
    img:   'Portada_cat6.jpeg',
    count: '4 productos',
    descKey: 'catphoto.c6.desc',
  },
  otros: {
    img:   'Portada_cat7.jpeg',
    count: '19 productos',
    descKey: 'catphoto.c7.desc',
  },
};

const catTabs    = document.querySelectorAll('.cat-tab');
const panelWrap  = document.getElementById('catPanelImg');
const panelPhoto = document.getElementById('catPanelPhoto');
const panelTitle = document.getElementById('catPanelTitle');
const panelDesc  = document.getElementById('catPanelDesc');
const panelCount = document.getElementById('catPanelCount');

/* Category label map — keyed by data-i18n key */
const CAT_LABEL_KEYS = {
  hierbas:   'cat.herbs',
  blends:    'cat.blends',
  especias:  'cat.spices',
  extractos: 'cat.extracts',
  frutas:    'cat.fruits',
  organicos: 'cat.organic',
  otros:     'cat.others',
};

function getLangText(key) {
  /* Access the LANGS object from i18n.js */
  try {
    const lang = localStorage.getItem('gg_lang') || 'es';
    return (typeof LANGS !== 'undefined' && LANGS[lang] && LANGS[lang][key]) || key;
  } catch { return key; }
}

function showCatPanel(cat) {
  const data = CAT_DATA[cat];
  if (!data) {
    panelWrap.setAttribute('hidden', '');
    return;
  }

  /* Update image with fade */
  panelPhoto.style.opacity = '0';
  setTimeout(() => {
    panelPhoto.src = data.img;
    panelPhoto.alt = getLangText(CAT_LABEL_KEYS[cat]);
    /* Reset animation */
    panelPhoto.style.animation = 'none';
    panelPhoto.offsetHeight; // reflow
    panelPhoto.style.animation = 'panelZoom 8s ease forwards';
    panelPhoto.style.opacity = '1';
  }, 180);

  panelTitle.textContent = getLangText(CAT_LABEL_KEYS[cat]);
  panelDesc.textContent  = getLangText(data.descKey);
  panelCount.textContent = data.count;

  panelWrap.removeAttribute('hidden');
}

function hideCatPanel() {
  panelWrap.setAttribute('hidden', '');
}

/* ── Tab click ── */
catTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const cat = tab.dataset.cat;

    /* Update tab active state */
    catTabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');

    /* Show/hide panel */
    if (cat === 'all') {
      hideCatPanel();
    } else {
      showCatPanel(cat);
    }

    /* Sync filter bar buttons */
    document.querySelectorAll('.fc-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.cat === cat);
    });

    /* Trigger the existing filter render (from productos.js) */
    activeCat = cat;
    render();

    /* Scroll to filter bar */
    setTimeout(() => {
      document.getElementById('filterBar')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  });
});

/* ── Sync filter bar → tabs ── */
document.querySelectorAll('.fc-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const cat = btn.dataset.cat;
    catTabs.forEach(t => {
      const match = t.dataset.cat === cat;
      t.classList.toggle('active', match);
      t.setAttribute('aria-selected', String(match));
    });
    if (cat === 'all') hideCatPanel();
    else showCatPanel(cat);
  });
});

/* ── Re-translate panel on lang change ── */
document.addEventListener('DOMContentLoaded', () => {
  /* Wait for i18n to apply, then observe lang changes */
  const activeCatTab = document.querySelector('.cat-tab.active');
  const cat = activeCatTab?.dataset.cat;
  if (cat && cat !== 'all') showCatPanel(cat);
});

/* Re-render panel titles when language changes */
const origApply = window._i18nApply;
document.addEventListener('i18nApplied', () => {
  const activeTab = document.querySelector('.cat-tab.active');
  const cat = activeTab?.dataset.cat;
  if (cat && cat !== 'all') {
    panelTitle.textContent = getLangText(CAT_LABEL_KEYS[cat]);
    panelDesc.textContent  = getLangText(CAT_DATA[cat]?.descKey || '');
  }
});
