(function () {
  const labs = [
    {
      id: 'na',
      abbr: 'Na',
      name: 'Sodium',
      range: '100–180 mmol/L',
      low: '<120',
      high: '>158',
      lowCauses: [
        'Excess water retention', 'CHF', 'Chronic kidney disease', 'Liver cirrhosis',
        'Pancreatitis', 'Thyroid disease', 'Adrenal insufficiency', 'Antidepressants', 'NSAIDs'
      ],
      highCauses: [
        'Dehydration / fluid loss (vomiting, heat, poor intake, fever)', 'Diabetes',
        'Kidney disease', 'Cushing syndrome', 'Diuretics', 'High sodium intake'
      ],
      treatment: 'Assess volume status. Hypovolemic → isotonic crystalloid. Hypervolemic (CHF) → fluid restriction; consider cautious diuresis if indicated. Supportive care, cardiac monitoring, rapid transport. Severe symptomatic hyponatremia (seizures) → airway protection and supportive care.'
    },
    {
      id: 'k',
      abbr: 'K',
      name: 'Potassium',
      range: '2.0–9.0 mmol/L',
      low: '<2.8',
      high: '>6.2',
      lowCauses: [
        'Non-potassium-sparing diuretics', 'Antibiotics', 'Insulin', 'Corticosteroids',
        'Albuterol', 'Vomiting', 'CKD', 'Primary aldosteronism', 'Cushing’s syndrome'
      ],
      highCauses: [
        'CKD / AKI / ESRD', 'ACE inhibitors', 'ARBs', 'Beta-blockers',
        'Potassium-sparing diuretics', 'Potassium supplements', 'Addison’s disease',
        'IDDM', 'Burns', 'Crush injury', 'Hemolysis'
      ],
      treatment: 'HYPERKALEMIA (priority): 12-lead ECG + continuous monitoring. If ECG changes or high clinical suspicion (missed dialysis, crush, known ESRD): Calcium Chloride (membrane stabilization), high-dose Albuterol nebulized, Sodium Bicarbonate. Treat underlying cause (fluids in crush). Rapid transport; early facility notification. HYPOKALEMIA: Supportive care and arrhythmia monitoring. Field potassium replacement not available.'
    },
    {
      id: 'cl',
      abbr: 'Cl',
      name: 'Chloride',
      range: '65–140 mmol/L',
      low: '<75',
      high: '>176',
      lowCauses: [
        'Fluid loss', 'CKD', 'Post-hypercapnia', 'CHF', 'Chronic respiratory acidosis',
        'SIADH', 'Metabolic alkalosis', 'Thiazides', 'Corticosteroids'
      ],
      highCauses: [
        'Dehydration', 'Excess salt intake', 'CKD / ESRD', 'Metabolic acidosis (sepsis/shock)',
        'Bicarbonate loss', 'Diuretics'
      ],
      treatment: 'Treat the underlying volume or acid-base disorder. Dehydration → isotonic crystalloid. Metabolic acidosis → consider Sodium Bicarbonate when indicated. Support ventilation as needed.'
    },
    {
      id: 'tco2',
      abbr: 'TCO₂',
      name: 'Bicarbonate (Total CO₂)',
      range: '3–140 mg/dL',
      low: '<11',
      high: '>40',
      lowCauses: [
        'Metabolic acidosis (CKD, DKA, diarrhea, lactic acidosis)', 'Respiratory alkalosis'
      ],
      highCauses: [
        'Acute respiratory (pneumonia, asthma, OD)', 'COPD', 'Airway obstruction'
      ],
      treatment: 'Low TCO₂ / metabolic acidosis → support ABCs, treat cause, consider Sodium Bicarbonate if indicated. High TCO₂ / respiratory acidosis → improve ventilation (BVM, CPAP/BiPAP, advanced airway). Avoid routine bicarbonate in cardiac arrest without specific indication.'
    },
    {
      id: 'ag',
      abbr: 'AG',
      name: 'Anion Gap',
      range: '(–10)–(+90) mmol/L',
      low: '<3',
      high: '>13',
      formula: 'Na – (Cl + HCO₃)',
      lowCauses: ['Low albumin (rare)'],
      highCauses: [
        'Ketoacidosis', 'CKD', 'Hypoxia / shock / sepsis / heart failure',
        'Methanol', 'Ethylene glycol', 'ASA overdose'
      ],
      treatment: 'High anion-gap metabolic acidosis → treat the cause (fluids, oxygen, ventilation). Consider Sodium Bicarbonate in selected severe acidemia with instability. 12-lead and continuous monitoring. Specific toxic-alcohol antidotes are not carried.'
    },
    {
      id: 'ica',
      abbr: 'iCa',
      name: 'Ionized Calcium',
      range: '0.25–2.50 mmol/L',
      low: 'Treat clinically',
      high: 'Treat clinically',
      lowCauses: [
        'Hypoparathyroidism', 'Vitamin D deficiency', 'CKD', 'Hypomagnesemia',
        'High phosphate', 'Massive transfusion', 'Shock', 'Sepsis'
      ],
      highCauses: [
        'Hyperparathyroidism', 'Cancer', 'Excess vitamin D', 'Thiazides',
        'Lithium', 'CKD', 'Prolonged immobility'
      ],
      treatment: 'Symptomatic hypocalcemia or concurrent hyperkalemia → Calcium Chloride. Hypercalcemia → supportive care and fluids if dehydrated; definitive treatment is hospital-based.'
    },
    {
      id: 'glu',
      abbr: 'Glu',
      name: 'Glucose',
      range: '20–700 mg/dL',
      low: '<50',
      high: '>500',
      lowCauses: [
        'Hypoglycemia', 'IDDM / NIDDM', 'Rare endocrine causes',
        'Severe liver or kidney disease'
      ],
      highCauses: [
        'DKA', 'HHS (HHNK)', 'Cushing’s syndrome', 'Pancreatic disease',
        'Medications', 'Acute trauma', 'Severe infection'
      ],
      treatment: 'HYPOGLYCEMIA: Conscious + able to swallow → Oral Glucose. Altered → Dextrose (D50/D25). No IV → Glucagon. Consider Thiamine before dextrose if chronic alcohol use suspected. HYPERGLYCEMIA / suspected DKA or HHS: Isotonic fluid resuscitation (if not fluid-overloaded). 12-lead ECG and continuous monitoring (watch potassium). Insulin is not carried. Rapid transport and early hospital notification.'
    },
    {
      id: 'bun',
      abbr: 'BUN',
      name: 'Blood Urea Nitrogen',
      range: '3–140 mg/dL',
      low: '—',
      high: '>104',
      lowCauses: ['None typical'],
      highCauses: [
        'Prerenal: dehydration, heart failure, major blood loss, high protein diet',
        'Renal: AKI, CKD, drug-induced kidney injury',
        'Post-renal: kidney stones, enlarged prostate, tumor',
        'Other: severe burns'
      ],
      treatment: 'Correct volume status with isotonic crystalloid when prerenal dehydration is likely. Support blood pressure and perfusion. No specific medication for elevated BUN.'
    },
    {
      id: 'crea',
      abbr: 'Crea',
      name: 'Creatinine',
      range: '0.2–20 mg/dL',
      low: '—',
      high: '>7.4',
      lowCauses: ['None typical'],
      highCauses: ['Kidney infection', 'Kidney stone', 'Kidney failure'],
      note: 'BUN/Crea Ratio: Normal 10–20:1. High ratio → extrarenal cause (dehydration, GI bleed, reduced renal flow). Low/normal ratio with elevated Cr → intrinsic kidney disease. Both high → renal impairment ± dehydration.',
      treatment: 'Same approach as BUN: volume resuscitation when appropriate, avoid further renal injury, rapid transport (especially for potential dialysis patients).'
    },
    {
      id: 'hct',
      abbr: 'Hct',
      name: 'Hematocrit',
      range: '15–75% PCV',
      low: '<24.0',
      high: '>60.0',
      lowCauses: [
        'Anemia', 'Vitamin B12 deficiency', 'Blood loss',
        'Reduced production (CKD or chronic inflammation)', 'Hemolysis', 'Hemodilution'
      ],
      highCauses: [
        'Lung disease', 'High altitude', 'Smoking', 'Genetic disorders',
        'Testosterone supplement', 'Chronic hypoxia'
      ],
      treatment: 'Low → oxygen, careful fluids, hemorrhage control, consider blood products if available and indicated. High → supportive care and oxygen if hypoxic.'
    },
    {
      id: 'hgb',
      abbr: 'Hgb',
      name: 'Hemoglobin',
      range: '5.1–25.5 g/dL',
      low: '<8.0',
      high: '>20.0',
      lowCauses: [
        'Anemia', 'Vitamin B12 deficiency', 'Blood loss',
        'Reduced production (CKD or chronic inflammation)', 'Hemolysis',
        'Hemodilution', 'Sickle cell anemia'
      ],
      highCauses: [
        'Hypoxia (COPD, pulmonary fibrosis)', 'Heart failure', 'Sleep apnea',
        'High altitude', 'Smoking', 'Kidney or liver CA', 'CKD',
        'Dehydration', 'Intense exercise', 'CO exposure'
      ],
      treatment: 'Same approach as Hct. High suspicion for carbon monoxide → high-flow oxygen; consider destination with hyperbaric capability if severe.'
    },
    {
      id: 'trop',
      abbr: 'Trop',
      name: 'Troponin',
      range: '2.9–800 ng/L',
      low: '—',
      high: '>21',
      lowCauses: ['None'],
      highCauses: [
        'ACS', 'Heart failure', 'Myocarditis or pericarditis', 'Arrhythmias',
        'AAA', 'PE', 'Respiratory failure', 'CKD', 'Stroke', 'Drug toxicity'
      ],
      treatment: 'Treat as possible ACS: Aspirin, Nitroglycerin (if BP allows), 12-lead ECG → early STEMI activation if criteria met, Oxygen only if hypoxic or in respiratory distress, Heparin if STEMI pathway allows, pain management with Fentanyl or Morphine. Rapid transport to appropriate facility (PCI-capable preferred for STEMI).'
    }
  ];

  // DOM refs
  const homeView = document.getElementById('home-view');
  const detailView = document.getElementById('detail-view');
  const searchResults = document.getElementById('search-results');
  const searchInput = document.getElementById('search-input');
  const backBtn = document.getElementById('back-btn');
  const offlineBadge = document.getElementById('offline-badge');
  const tileGrid = document.getElementById('tile-grid');

  // Build home tiles
  function buildTiles() {
    tileGrid.innerHTML = '';
    // Special tiles first
    const specials = [
      { id: 'critical', abbr: '⚠️', name: 'Critical Values', special: true },
      { id: 'buncrea', abbr: 'BUN/Cr', name: 'Ratio Note', special: true }
    ];
    specials.forEach(s => {
      const t = document.createElement('div');
      t.className = 'tile special';
      t.innerHTML = `<div class="abbr">${s.abbr}</div><div class="name">${s.name}</div>`;
      t.addEventListener('click', () => showSpecial(s.id));
      tileGrid.appendChild(t);
    });
    labs.forEach(lab => {
      const t = document.createElement('div');
      t.className = 'tile';
      t.innerHTML = `<div class="abbr">${lab.abbr}</div><div class="name">${lab.name}</div>`;
      t.addEventListener('click', () => showDetail(lab.id));
      tileGrid.appendChild(t);
    });
  }

  function showHome() {
    homeView.classList.remove('hide');
    detailView.classList.add('hide');
    searchResults.classList.remove('show');
    backBtn.classList.remove('show');
    searchInput.value = '';
    history.replaceState({}, '', location.pathname);
  }

  function showDetail(id) {
    const lab = labs.find(l => l.id === id);
    if (!lab) return;

    let html = `
      <div class="detail">
        <h2>${lab.abbr}</h2>
        <div class="full-name">${lab.name}</div>

        <div class="card">
          <h3>Ranges</h3>
          <div class="range-row">
            <div class="range-item">
              <div class="label">Readable Range</div>
              <div class="value normal">${lab.range}</div>
            </div>
            <div class="range-item">
              <div class="label">Critical Low</div>
              <div class="value low">${lab.low}</div>
            </div>
            <div class="range-item">
              <div class="label">Critical High</div>
              <div class="value high">${lab.high}</div>
            </div>
          </div>
          ${lab.formula ? `<div class="note">Formula: ${lab.formula}</div>` : ''}
        </div>

        <div class="card">
          <h3>Low Causes</h3>
          <ul>${lab.lowCauses.map(c => `<li>${c}</li>`).join('')}</ul>
        </div>

        <div class="card">
          <h3>High Causes</h3>
          <ul>${lab.highCauses.map(c => `<li>${c}</li>`).join('')}</ul>
        </div>
    `;
    if (lab.note) {
      html += `<div class="card"><h3>Note</h3><p>${lab.note}</p></div>`;
    }
    html += `
        <div class="card treatment">
          <h3>Possible EMS Treatment</h3>
          <p>${lab.treatment}</p>
        </div>
      </div>
    `;

    detailView.innerHTML = html;
    homeView.classList.add('hide');
    detailView.classList.remove('hide');
    searchResults.classList.remove('show');
    backBtn.classList.add('show');
    history.replaceState({ id }, '', '#' + id);
    window.scrollTo(0, 0);
  }

  function showSpecial(id) {
    let html = '';
    if (id === 'critical') {
      html = `
        <div class="detail">
          <h2>Critical Values</h2>
          <div class="full-name">Quick reference cutoffs</div>
          <div class="card">
            <table style="width:100%;border-collapse:collapse;font-size:0.95rem;">
              <thead>
                <tr style="text-align:left;color:var(--text-muted);">
                  <th style="padding:6px 4px;">Analyte</th>
                  <th style="padding:6px 4px;">Low</th>
                  <th style="padding:6px 4px;">High</th>
                </tr>
              </thead>
              <tbody>
                ${labs.map(l => `
                  <tr style="border-top:1px solid var(--border);">
                    <td style="padding:8px 4px;font-weight:600;color:var(--accent);">${l.abbr}</td>
                    <td style="padding:8px 4px;color:var(--danger);">${l.low}</td>
                    <td style="padding:8px 4px;color:var(--warning);">${l.high}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;
    } else if (id === 'buncrea') {
      html = `
        <div class="detail">
          <h2>BUN / Creatinine Ratio</h2>
          <div class="card">
            <p><strong>Normal ratio:</strong> 10–20 : 1</p>
            <ul>
              <li><strong>High ratio</strong> → extrarenal cause (dehydration, high protein intake, GI bleed, or reduced renal blood flow)</li>
              <li><strong>Low to normal ratio with elevated creatinine</strong> → intrinsic kidney disease</li>
              <li><strong>Both high</strong> → renal impairment without (or in addition to) dehydration</li>
            </ul>
          </div>
          <div class="card treatment">
            <h3>Possible EMS Treatment</h3>
            <p>Correct volume status with isotonic crystalloid when prerenal dehydration is likely. Support perfusion. Rapid transport for potential dialysis candidates.</p>
          </div>
        </div>
      `;
    }
    detailView.innerHTML = html;
    homeView.classList.add('hide');
    detailView.classList.remove('hide');
    searchResults.classList.remove('show');
    backBtn.classList.add('show');
    history.replaceState({ id }, '', '#' + id);
    window.scrollTo(0, 0);
  }

  // Search
  function doSearch(q) {
    q = (q || '').trim().toLowerCase();
    if (!q) {
      searchResults.classList.remove('show');
      homeView.classList.remove('hide');
      detailView.classList.add('hide');
      return;
    }
    const hits = [];
    labs.forEach(lab => {
      const blob = [
        lab.abbr, lab.name, lab.range, lab.low, lab.high,
        ...(lab.lowCauses || []), ...(lab.highCauses || []),
        lab.treatment || '', lab.note || '', lab.formula || ''
      ].join(' ').toLowerCase();
      if (blob.includes(q)) {
        hits.push({
          id: lab.id,
          title: `${lab.abbr} – ${lab.name}`,
          snippet: lab.treatment ? lab.treatment.slice(0, 120) + '…' : lab.highCauses.slice(0, 2).join(', ')
        });
      }
    });
    // also match specials
    if ('critical values cutoff'.includes(q) || q.includes('critical')) {
      hits.unshift({ id: 'critical', title: 'Critical Values', snippet: 'Quick reference cutoffs for all analytes' });
    }
    if ('bun crea creatinine ratio'.includes(q) || q.includes('ratio')) {
      hits.unshift({ id: 'buncrea', title: 'BUN / Creatinine Ratio', snippet: 'Normal 10–20:1 interpretation' });
    }

    if (hits.length === 0) {
      searchResults.innerHTML = '<p style="color:var(--text-muted);padding:20px;text-align:center;">No matches found.</p>';
    } else {
      searchResults.innerHTML = hits.map(h => `
        <div class="search-hit" data-id="${h.id}">
          <div class="title">${highlight(h.title, q)}</div>
          <div class="snippet">${highlight(h.snippet, q)}</div>
        </div>
      `).join('');
      searchResults.querySelectorAll('.search-hit').forEach(el => {
        el.addEventListener('click', () => {
          const id = el.dataset.id;
          if (id === 'critical' || id === 'buncrea') showSpecial(id);
          else showDetail(id);
          searchInput.value = '';
        });
      });
    }
    searchResults.classList.add('show');
    homeView.classList.add('hide');
    detailView.classList.add('hide');
    backBtn.classList.add('show');
  }

  function highlight(text, q) {
    if (!q) return text;
    const re = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
    return text.replace(re, '<mark>$1</mark>');
  }

  // Events
  backBtn.addEventListener('click', showHome);
  let searchTimer;
  searchInput.addEventListener('input', () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => doSearch(searchInput.value), 160);
  });

  window.addEventListener('hashchange', () => {
    const id = location.hash.slice(1);
    if (!id) showHome();
    else if (id === 'critical' || id === 'buncrea') showSpecial(id);
    else showDetail(id);
  });

  function updateOnline() {
    offlineBadge.classList.toggle('show', !navigator.onLine);
  }
  window.addEventListener('online', updateOnline);
  window.addEventListener('offline', updateOnline);
  updateOnline();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }

  // Init
  buildTiles();
  if (location.hash) {
    const id = location.hash.slice(1);
    if (id === 'critical' || id === 'buncrea') showSpecial(id);
    else showDetail(id);
  }
})();
