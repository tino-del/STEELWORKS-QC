   /* ===================================================================
   NATIONAL FOODS — STEELWORK SITE QC DASHBOARD
   All data below is SAMPLE data for August 2026 — replace the arrays
   in DATA with your real monthly figures. Every table and chart on
   the page is made from this object, so editing it is all you
   need to do to refresh the dashboard for a new month haikona kubata zvausimga zive .
   =================================================================== */

const DATA = {

  period: "October 2026",

  // ---------------- 1. Raw material intake & grading ----------------
  maize: {
    totalTonnes: 3180,
    gradedAcceptablePct: 91.4,
    rows: [
      { batch:"MZ-0812", supplier:"Mashonaland Grain Co-op", tonnes:420, grade:"Grade 1", moisture:12.1, foreignMatter:0.6, broken:1.8, aflatoxin:3.2, protein:9.4, testWeight:76.2, satisfaction:4.6, notes:"—" },
      { batch:"MZ-0815", supplier:"Chegutu Farmers Trust",   tonnes:365, grade:"Grade 1", moisture:12.8, foreignMatter:0.9, broken:2.4, aflatoxin:4.1, protein:9.1, testWeight:75.4, satisfaction:4.3, notes:"—" },
      { batch:"MZ-0819", supplier:"Kadoma Agro Suppliers",   tonnes:298, grade:"Grade 2", moisture:13.9, foreignMatter:1.7, broken:4.2, aflatoxin:6.8, protein:8.7, testWeight:73.1, satisfaction:3.4, notes:"Miller flagged higher broken-kernel %" },
      { batch:"MZ-0822", supplier:"Mashonaland Grain Co-op", tonnes:410, grade:"Grade 1", moisture:12.3, foreignMatter:0.7, broken:2.0, aflatoxin:2.9, protein:9.5, testWeight:76.0, satisfaction:4.7, notes:"—" },
      { batch:"MZ-0827", supplier:"Gokwe Smallholder Assoc.",tonnes:220, grade:"Grade 3", moisture:15.2, foreignMatter:2.6, broken:6.1, aflatoxin:9.4, protein:8.2, testWeight:70.8, satisfaction:2.8, notes:"Delayed drying — dispute raised on grade" },
      { batch:"MZ-0830", supplier:"Chegutu Farmers Trust",   tonnes:352, grade:"Grade 1", moisture:12.5, foreignMatter:0.8, broken:2.1, aflatoxin:3.6, protein:9.3, testWeight:75.8, satisfaction:4.5, notes:"—" },
      { batch:"MZ-0833", supplier:"Kadoma Agro Suppliers",   tonnes:180, grade:"Rejected",moisture:17.4, foreignMatter:4.8, broken:9.7, aflatoxin:14.1, protein:7.6, testWeight:67.9, satisfaction:1.5, notes:"Rejected — aflatoxin above threshold" },
    ],
    sorghum: [
      { batch:"SG-0409", color:"Red Sorghum",       grade:"Grade 1", moisture:12.4, purity:97.8, colorScore:8.9, tonnes:64 },
      { batch:"SG-0413", color:"White/Light Red",   grade:"Grade 1", moisture:12.0, purity:98.1, colorScore:9.1, tonnes:52 },
      { batch:"SG-0421", color:"Red Sorghum",       grade:"Grade 2", moisture:13.6, purity:95.0, colorScore:7.8, tonnes:38 },
    ],
  },

  // ---------------- 2. Production quality checks ----------------
  production: [
    { product:"Roller Meal (Better Buy)", batch:"BB-RM-2208", date:"2026-08-05", pack:"10kg", weightResult:"Pass (10.04kg avg)", sampled:40, moisture:"Pass", granulation:"Pass", color:"Pass", taste:"Pass", foreign:"Pass", nutrition:"Pass", status:"Pass" },
    { product:"Roller Meal (Better Buy)", batch:"BB-RM-2214", date:"2026-08-12", pack:"5kg",  weightResult:"Pass (5.01kg avg)",  sampled:40, moisture:"Pass", granulation:"Fail — coarse", color:"Pass", taste:"Pass", foreign:"Pass", nutrition:"Pass", status:"Fail" },
    { product:"Grits",                    batch:"GR-1105",    date:"2026-08-07", pack:"2kg",  weightResult:"Pass (2.00kg avg)",  sampled:30, moisture:"Pass", granulation:"Pass", color:"Pass", taste:"Pass", foreign:"Pass", nutrition:"Pass", status:"Pass" },
    { product:"Grits",                    batch:"GR-1112",    date:"2026-08-19", pack:"5kg",  weightResult:"Fail (4.86kg avg)",  sampled:30, moisture:"Pass", granulation:"Pass", color:"Pass", taste:"Pass", foreign:"Pass", nutrition:"Pass", status:"Fail" },
    { product:"Pearlenta",                batch:"PL-0733",    date:"2026-08-09", pack:"2kg",  weightResult:"Pass (2.02kg avg)",  sampled:25, moisture:"Pass", granulation:"Pass", color:"Pass", taste:"Pass", foreign:"Pass", nutrition:"Pass", status:"Pass" },
    { product:"Pearlenta",                batch:"PL-0741",    date:"2026-08-23", pack:"1kg",  weightResult:"Pass (1.01kg avg)",  sampled:25, moisture:"Fail — 14.2%", granulation:"Pass", color:"Pass", taste:"Pass", foreign:"Pass", nutrition:"Pass", status:"Fail" },
    { product:"Multi Grain",              batch:"MG-0288",    date:"2026-08-14", pack:"2kg",  weightResult:"Pass (2.01kg avg)",  sampled:25, moisture:"Pass", granulation:"Pass", color:"Pass", taste:"Pass", foreign:"Pass", nutrition:"Pass", status:"Pass" },
    { product:"Multi Grain",              batch:"MG-0296",    date:"2026-08-26", pack:"5kg",  weightResult:"Pass (5.03kg avg)",  sampled:25, moisture:"Pass", granulation:"Pass", color:"Pass", taste:"Pass", foreign:"Pass", nutrition:"Pass", status:"Pass" },
  ],
   

  // ---------------- 3. Dispatch quality checks ----------------
  dispatch: [
    { truck:"AGX 4471", product:"Roller Meal (Better Buy)", batch:"BB-RM-2208", mfg:"2026-08-05", dispatch:"2026-08-08", shelfLeft:"172 days", compliance:"Pass", buyer:"OK Zimbabwe — Harare DC", officer:"T. Moyo" },
    { truck:"AGX 5502", product:"Grits",                    batch:"GR-1105",    mfg:"2026-08-07", dispatch:"2026-08-11", shelfLeft:"165 days", compliance:"Pass", buyer:"TM Pick n Pay — Bulawayo", officer:"T. Moyo" },
    { truck:"AGX 6019", product:"Pearlenta",                batch:"PL-0733",    mfg:"2026-08-09", dispatch:"2026-08-13", shelfLeft:"178 days", compliance:"Pass", buyer:"Spar Distribution Centre", officer:"N. Chuma" },
    { truck:"AGX 6220", product:"Multi Grain",              batch:"MG-0288",    mfg:"2026-08-14", dispatch:"2026-08-17", shelfLeft:"169 days", compliance:"Pass", buyer:"OK Zimbabwe — Mutare",  officer:"T. Moyo" },
    { truck:"AGX 7183", product:"Roller Meal (Better Buy)", batch:"BB-RM-2214", mfg:"2026-08-12", dispatch:"2026-08-18", shelfLeft:"—",       compliance:"Held — granulation fail", buyer:"—", officer:"N. Chuma" },
  ],
   dispatch-summary :{products: ["H/F Pearl", "Pearl", "B/B", "R/S", "Multi grain"],
                      shelflife: {"H/F Pearl":{green: 1, amber:1, red:1},
                                "Pearl" :{green: 1, amber:1, red:1},
                                "B/B": {green: 1, amber:1, red:1},
                                 "R/S":{green: 1, amber:1, red:1},
                                 "Multi grain": {green: 1, amber:1, red:1},}}
      

  // ---------------- 4. Market returns ----------------
  returns: [
    { product:"Roller Meal (Better Buy)", batch:"BB-RM-2107", reason:"Damaged packaging", qty:"340 kg", assessment:"Fit for Reuse (rebag)", disposal:"—", impact:"$210" },
    { product:"Grits",                    batch:"GR-1043",    reason:"Quality defect — off odor", qty:"180 kg", assessment:"Not Fit for Production", disposal:"Animal feed", impact:"$140" },
    { product:"Pearlenta",                batch:"PL-0699",    reason:"Expired on shelf",  qty:"95 kg",  assessment:"Not Fit for Production", disposal:"Incineration", impact:"$85" },
    { product:"Multi Grain",              batch:"MG-0251",    reason:"Damaged packaging", qty:"120 kg", assessment:"Fit for Reuse (rebag)", disposal:"—", impact:"$70" },
    { product:"Roller Meal (Better Buy)", batch:"BB-RM-2179", reason:"Quality defect — moisture", qty:"260 kg", assessment:"Not Fit for Production", disposal:"Landfill", impact:"$160" },
  ],
  returnReasons: { "Damaged packaging": 460, "Quality defect": 440, "Expired": 95 },

  // ---------------- 5. Competitor benchmarking ----------------
  competitors: [
    { brand:"Oceans",     type:"Roller Meal", pack:"10kg", moisture:12.6, weightAcc:"+0.6%", color:"Pass", granulation:"Slightly coarser", rating:"Below National Foods Standard", notes:"Coarser granulation vs Better Buy" },
    { brand:"Sative",     type:"Roller Meal", pack:"10kg", moisture:12.1, weightAcc:"-0.2%", color:"Pass", granulation:"Comparable",       rating:"On Par",                        notes:"Similar sieve profile, slightly lighter color" },
    { brand:"Ever Gold",  type:"Roller Meal", pack:"5kg",  moisture:13.4, weightAcc:"+1.1%", color:"Pass", granulation:"Finer",             rating:"Better",                         notes:"Finer granulation, higher price per kg" },
    { brand:"Oceans",     type:"Grits",       pack:"2kg",  moisture:12.9, weightAcc:"+0.4%", color:"Pass", granulation:"Comparable",        rating:"On Par",                         notes:"—" },
  ],

  // ---------------- 6. Monthly summary numbers ----------------
  summary: {
    maizeReceived: 10,
    maizeGradedPct: 91.4,
    batchPassRates: { "Roller Meal":83, "Grits":83, "Pearlenta":83, "Multi Grain":100 },
    millerSatisfactionAvg: 4.0,
    dispatchChecked: 5,
    dispatchCompliant: 4,
    returnsTotalKg: 995,
    returnsFitPct: 44,
    topIssues: [
      "Roller Meal batch BB-RM-2214 failed granulation spec (coarse) — held from dispatch",
      "Kadoma Agro Suppliers consignment MZ-0833 rejected on aflatoxin — supplier's second flag this quarter",
      "Pearlenta batch PL-0741 failed moisture spec at 14.2%, above 13.5% ceiling",
    ],
  },

  // ---------------- 7. Recommendations tracker ----------------
  recommendations: [
    { issue:"Roller Meal granulation drifting coarse on high-throughput days", rootCause:"Hammer mill screen wear not on fixed replacement schedule", action:"Move screen replacement to a 3-week fixed interval instead of run-to-failure", owner:"Milling — S. Ndlovu", due:"2026-09-12", status:"open" },
    { issue:"Kadoma Agro Suppliers — repeat aflatoxin flags", rootCause:"Farm-level drying/storage practices, not detected until intake", action:"Request pre-delivery moisture/aflatoxin self-certification from supplier; increase intake sampling rate for this supplier to 100%", owner:"QC Intake — T. Moyo", due:"2026-09-05", status:"progress" },
    { issue:"Pearlenta moisture creeping toward spec ceiling in humid weeks", rootCause:"Drying stage not adjusted for ambient humidity swings", action:"Add a humidity-linked drying-time adjustment to the SOP", owner:"Production — N. Chuma", due:"2026-08-29", status:"progress" },
    { issue:"Weight variance on Grits 5kg packs trending low", rootCause:"Packing line scale drift between calibration cycles", action:"Shorten packing scale calibration interval from monthly to bi-weekly", owner:"QC Lab", due:"2026-08-22", status:"closed" },
    { issue:"Packaging damage driving return volume", rootCause:"Pallet stacking height on Roller Meal 10kg exceeding recommended limit", action:"Cap pallet stacking height and retrain forklift operators", owner:"Warehouse — Site Ops", due:"2026-09-01", status:"open" },
  ],

  // ---------------- 8. Team, equipment & suppliers ----------------
  activityLog: {
    inspections: 86,
    samplesCollected: 214,
    testsPerformed: 512,
  },
  equipment: [
    { item:"Moisture meter — DICKEY-john GAC2500", lastCal:"2026-07-14", nextDue:"2026-10-14", status:"good" },
    { item:"Packing line scale — Bay 1",            lastCal:"2026-08-01", nextDue:"2026-08-15", status:"bad" },
    { item:"Packing line scale — Bay 2",            lastCal:"2026-08-10", nextDue:"2026-08-24", status:"warn" },
    { item:"Aflatoxin ELISA reader",                lastCal:"2026-06-30", nextDue:"2026-09-30", status:"good" },
    { item:"Sieve shaker — sieve analysis rig",      lastCal:"2026-07-22", nextDue:"2026-10-22", status:"good" },
    { item:"Lab reference balance",                 lastCal:"2026-08-05", nextDue:"2026-11-05", status:"good" },
  ],
  suppliers: [
    { name:"Mashonaland Grain Co-op",   consignments:3, avgGrade:"Grade 1", consistency:92 },
    { name:"Chegutu Farmers Trust",     consignments:2, avgGrade:"Grade 1", consistency:88 },
    { name:"Kadoma Agro Suppliers",     consignments:3, avgGrade:"Grade 2/3", consistency:41 },
    { name:"Gokwe Smallholder Assoc.",  consignments:1, avgGrade:"Grade 3", consistency:52 },
  ],
  ncr: { total:6, byProduct:{ "Roller Meal":2, "Grits":1, "Pearlenta":2, "Multi Grain":0, "Intake":1 } },

  // trend series used across charts
  trend: {
    months: ["Mar","Apr","May","Jun","Jul","Aug"],
    passRate: [88, 90, 85, 92, 87, 91],
    millerSatisfaction: [3.6, 3.8, 3.5, 4.1, 3.9, 4.0],
  },
};

/* ===================================================================
   RENDER HELPERS
   =================================================================== */

const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

function badge(text, tone){
  return `<span class="badge ${tone}">${text}</span>`;
}
function toPercentBands (bands) {const total = bands.green +bands.amber +bands.red ;
                                 return {green: +(bands.green/total*100).toFixed(1),
                                         amber: +(bands.amber/total*100).toFixed(1),
                                         red: +(bands.red/total*100).toFixed(1), };
}
function statusTone(status){
  const s = String(status).toLowerCase();
  if (s.includes("pass") || s === "good" || s === "closed") return "good";
  if (s.includes("fail") || s === "bad" || s === "open" || s.includes("held") || s.includes("not fit") || s.includes("rejected")) return "bad";
  return "warn";
}

function renderIntake(){
  const tbody = $("#tbl-maize tbody");
  tbody.innerHTML = DATA.maize.rows.map(r => `
    <tr>
      <td class="num">${r.batch}</td>
      <td class="wrap">${r.supplier}</td>
      <td class="num">${r.tonnes}</td>
      <td>${badge(r.grade, r.grade.startsWith("Grade 1") ? "good" : r.grade.startsWith("Grade 2") ? "warn" : "bad")}</td>
      <td class="num">${r.moisture}%</td>
      <td class="num">${r.foreignMatter}%</td>
      <td class="num">${r.broken}%</td>
      <td class="num">${r.aflatoxin} ppb</td>
      <td class="num">${r.protein}%</td>
      <td class="num">${r.testWeight}</td>
      <td>
        <div class="bar-cell">
          <div class="bar-track"><div class="bar-fill" style="width:${r.satisfaction/5*100}%"></div></div>
          <span class="bar-num">${r.satisfaction.toFixed(1)}</span>
        </div>
      </td>
      <td class="wrap">${r.notes}</td>
    </tr>
  `).join("");

  const stbody = $("#tbl-sorghum tbody");
  stbody.innerHTML = DATA.maize.sorghum.map(r => `
    <tr>
      <td class="num">${r.batch}</td>
      <td>${r.color}</td>
      <td>${badge(r.grade, r.grade === "Grade 1" ? "good" : "warn")}</td>
      <td class="num">${r.moisture}%</td>
      <td class="num">${r.purity}%</td>
      <td class="num">${r.colorScore}/10</td>
      <td class="num">${r.tonnes} t</td>
    </tr>
  `).join("");

  $("#kpi-maize-received .kpi-value").innerHTML = `${DATA.maize.totalTonnes}<span class="unit">t</span>`;
  $("#kpi-maize-graded .kpi-value").textContent = `${DATA.maize.gradedAcceptablePct}%`;
  const rejected = DATA.maize.rows.filter(r => r.grade === "Rejected").length;
  $("#kpi-maize-rejected .kpi-value").textContent = rejected;
  const avgSat = (DATA.maize.rows.reduce((a,r)=>a+r.satisfaction,0) / DATA.maize.rows.length).toFixed(1);
  $("#kpi-maize-satisfaction .kpi-value").textContent = avgSat;

  // grade distribution pie
  const gradeCounts = {};
  DATA.maize.rows.forEach(r => { gradeCounts[r.grade] = (gradeCounts[r.grade]||0) + r.tonnes; });
  new Chart($("#chart-grade-dist"), {
    type: "doughnut",
    data: {
      labels: Object.keys(gradeCounts),
      datasets: [{
        data: Object.values(gradeCounts),
        backgroundColor: ["#4a9b6e","#e0a530","#d0524a","#5b7a8c"],
        borderColor: "#1c2027",
        borderWidth: 2,
      }]
    },
    options: chartOpts({ legendPos:"bottom" })
  });
}

function renderProduction(){
  const tbody = $("#tbl-production tbody");
  tbody.innerHTML = DATA.production.map(r => `
    <tr>
      <td class="wrap">${r.product}</td>
      <td class="num">${r.batch}</td>
      <td class="num">${r.date}</td>
      <td>${r.pack}</td>
      <td class="wrap">${r.weightResult}</td>
      <td class="num">${r.sampled}</td>
      <td>${badge(r.moisture, statusTone(r.moisture))}</td>
      <td>${badge(r.granulation, statusTone(r.granulation))}</td>
      <td>${badge(r.color, statusTone(r.color))}</td>
      <td>${badge(r.taste, statusTone(r.taste))}</td>
      <td>${badge(r.foreign, statusTone(r.foreign))}</td>
      <td>${badge(r.status, statusTone(r.status))}</td>
    </tr>
  `).join("");

  const total = DATA.production.length;
  const passed = DATA.production.filter(r => r.status === "Pass").length;
  $("#kpi-prod-pass .kpi-value").textContent = `${Math.round(passed/total*100)}%`;
  $("#kpi-prod-batches .kpi-value").textContent = total;
  $("#kpi-prod-fail .kpi-value").textContent = total - passed;

  new Chart($("#chart-pass-trend"), {
    type: "line",
    data: {
      labels: DATA.trend.months,
      datasets: [{
        label: "Batch pass rate %",
        data: DATA.trend.passRate,
        borderColor: "#e8b13c",
        backgroundColor: "rgba(232,177,60,0.12)",
        tension: 0.35,
        fill: true,
        pointBackgroundColor: "#e8b13c",
        pointRadius: 3,
      }]
    },
    options: chartOpts({ yMin:70, yMax:100, legendPos:false })
  });
}

function renderDispatch(){
  const tbody = $("#tbl-dispatch tbody");
  tbody.innerHTML = DATA.dispatch.map(r => `
    <tr>
      <td class="num">${r.truck}</td>
      <td class="wrap">${r.product}</td>
      <td class="num">${r.batch}</td>
      <td class="num">${r.mfg}</td>
      <td class="num">${r.dispatch}</td>
      <td class="num">${r.shelfLeft}</td>
      <td>${badge(r.compliance, statusTone(r.compliance))}</td>
      <td class="wrap">${r.buyer}</td>
      <td>${r.officer}</td>
    </tr>
  `).join("");

  const total = DATA.dispatch.length;
  const compliant = DATA.dispatch.filter(r => r.compliance === "Pass").length;
  const products= Dat.dispatchSummary.products; const pct=product.map(=>toPercentBands(DATA.dipatchSUmmary.shelfLife[p]));
   new Chart($("#chart-dispatch-traffic-light"),
             {type:"bar",data:
             {labels:product,datasets:
                [label: "Green (>80 days)"data; pct.map (p=>p.amber), backgroundcolor:"#d0a530"}
}

function renderReturns(){
  const tbody = $("#tbl-returns tbody");
  tbody.innerHTML = DATA.returns.map(r => `
    <tr>
      <td class="wrap">${r.product}</td>
      <td class="num">${r.batch}</td>
      <td class="wrap">${r.reason}</td>
      <td class="num">${r.qty}</td>
      <td>${badge(r.assessment, statusTone(r.assessment))}</td>
      <td>${r.disposal}</td>
      <td class="num">${r.impact}</td>
    </tr>
  `).join("");

  const totalKg = DATA.summary.returnsTotalKg;
  $("#kpi-returns-total .kpi-value").innerHTML = `${totalKg}<span class="unit">kg</span>`;
  $("#kpi-returns-fit .kpi-value").textContent = `${DATA.summary.returnsFitPct}%`;
  const worst = Object.entries(DATA.returnReasons).sort((a,b)=>b[1]-a[1])[0];
  $("#kpi-returns-top .kpi-value").textContent = worst[0];

  new Chart($("#chart-return-reasons"), {
    type: "bar",
    data: {
      labels: Object.keys(DATA.returnReasons),
      datasets: [{
        label: "kg returned",
        data: Object.values(DATA.returnReasons),
        backgroundColor: ["#d0524a","#e0a530","#5b7a8c"],
        borderRadius: 3,
      }]
    },
    options: chartOpts({ legendPos:false })
  });
}

function renderCompetitors(){
  const tbody = $("#tbl-competitors tbody");
  tbody.innerHTML = DATA.competitors.map(r => `
    <tr>
      <td>${r.brand}</td>
      <td>${r.type}</td>
      <td>${r.pack}</td>
      <td class="num">${r.moisture}%</td>
      <td class="num">${r.weightAcc}</td>
      <td>${badge(r.color, statusTone(r.color))}</td>
      <td class="wrap">${r.granulation}</td>
      <td>${badge(r.rating, r.rating === "Better" ? "bad" : r.rating === "On Par" ? "warn" : "good")}</td>
      <td class="wrap">${r.notes}</td>
    </tr>
  `).join("");

  new Chart($("#chart-competitor-radar"), {
    type: "radar",
    data: {
      labels: ["Moisture control","Weight accuracy","Color","Granulation fineness","Value per kg"],
      datasets: [
        {
          label: "Better Buy",
          data: [9,9,8.5,7.5,8.5],
          borderColor: "#e8b13c",
          backgroundColor: "rgba(232,177,60,0.18)",
          pointBackgroundColor: "#e8b13c",
        },
        {
          label: "Competitor avg",
          data: [7.5,7,8,7,7],
          borderColor: "#5b7a8c",
          backgroundColor: "rgba(91,122,140,0.16)",
          pointBackgroundColor: "#5b7a8c",
        },
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      scales: {
        r: {
          min: 0, max: 10,
          grid: { color: "#2c313a" },
          angleLines: { color: "#2c313a" },
          pointLabels: { color: "#9aa2ac", font: { size: 10.5, family: "IBM Plex Mono" } },
          ticks: { display:false, backdropColor: "transparent" },
        }
      },
      plugins: { legend: { position:"bottom", labels:{ color:"#9aa2ac", font:{ family:"IBM Plex Sans", size:11 } } } }
    }
  });
}

function renderSummary(){
  const s = DATA.summary;
  $("#kpi-sum-maize .kpi-value").innerHTML = `${s.maizeGradedPct}%`;
  $("#kpi-sum-satisfaction .kpi-value").textContent = s.millerSatisfactionAvg.toFixed(1);
  $("#kpi-sum-dispatch .kpi-value").textContent = `${s.dispatchCompliant}/${s.dispatchChecked}`;
  $("#kpi-sum-returns .kpi-value").textContent = `${s.returnsFitPct}%`;

  const tbody = $("#tbl-batch-pass tbody");
  tbody.innerHTML = Object.entries(s.batchPassRates).map(([product,pct]) => `
    <tr>
      <td>${product}</td>
      <td>
        <div class="bar-cell">
          <div class="bar-track"><div class="bar-fill" style="width:${pct}%; background:${pct===100?'var(--good)':pct>=80?'var(--gold)':'var(--bad)'}"></div></div>
          <span class="bar-num">${pct}%</span>
        </div>
      </td>
    </tr>
  `).join("");

  const list = $("#list-top-issues");
  list.innerHTML = s.topIssues.map(t => `<li>${t}</li>`).join("");

  new Chart($("#chart-satisfaction-trend"), {
    type: "line",
    data: {
      labels: DATA.trend.months,
      datasets: [{
        label: "Miller satisfaction (1–5)",
        data: DATA.trend.millerSatisfaction,
        borderColor: "#5b7a8c",
        backgroundColor: "rgba(91,122,140,0.14)",
        tension: 0.35, fill: true,
        pointBackgroundColor: "#5b7a8c",
        pointRadius: 3,
      }]
    },
    options: chartOpts({ yMin:3, yMax:5, legendPos:false })
  });
}

function renderRecommendations(){
  const groups = { open:[], progress:[], closed:[] };
  DATA.recommendations.forEach(r => groups[r.status].push(r));

  const cardHtml = r => `
    <div class="rec-card">
      <div class="rc-title">${r.issue}</div>
      <div class="rc-meta">
        <b>Root cause</b> ${r.rootCause}<br>
        <b>Action</b> ${r.action}<br>
        <b>Owner</b> ${r.owner} &nbsp;·&nbsp; <b>Due</b> ${r.due}
      </div>
    </div>`;

  $("#rec-open").innerHTML = groups.open.map(cardHtml).join("") || '<div class="rc-meta">Nothing open.</div>';
  $("#rec-progress").innerHTML = groups.progress.map(cardHtml).join("") || '<div class="rc-meta">Nothing in progress.</div>';
  $("#rec-closed").innerHTML = groups.closed.map(cardHtml).join("") || '<div class="rc-meta">Nothing closed yet.</div>';

  $("#rec-open-count").textContent = groups.open.length;
  $("#rec-progress-count").textContent = groups.progress.length;
  $("#rec-closed-count").textContent = groups.closed.length;
}

function renderTeamEquip(){
  $("#kpi-act-inspections .kpi-value").textContent = DATA.activityLog.inspections;
  $("#kpi-act-samples .kpi-value").textContent = DATA.activityLog.samplesCollected;
  $("#kpi-act-tests .kpi-value").textContent = DATA.activityLog.testsPerformed;
  $("#kpi-act-ncr .kpi-value").textContent = DATA.ncr.total;

  const etbody = $("#tbl-equipment tbody");
  etbody.innerHTML = DATA.equipment.map(e => `
    <tr>
      <td class="wrap">${e.item}</td>
      <td class="num">${e.lastCal}</td>
      <td class="num">${e.nextDue}</td>
      <td>${badge(e.status === "good" ? "Current" : e.status === "warn" ? "Due soon" : "Overdue", e.status)}</td>
    </tr>
  `).join("");

  const stbody = $("#tbl-suppliers tbody");
  stbody.innerHTML = DATA.suppliers.map(s => `
    <tr>
      <td class="wrap">${s.name}</td>
      <td class="num">${s.consignments}</td>
      <td>${s.avgGrade}</td>
      <td>
        <div class="bar-cell">
          <div class="bar-track"><div class="bar-fill" style="width:${s.consistency}%; background:${s.consistency>=80?'var(--good)':s.consistency>=55?'var(--warn)':'var(--bad)'}"></div></div>
          <span class="bar-num">${s.consistency}%</span>
        </div>
      </td>
    </tr>
  `).join("");

  const ntbody = $("#tbl-ncr tbody");
  ntbody.innerHTML = Object.entries(DATA.ncr.byProduct).map(([product,count]) => `
    <tr><td>${product}</td><td class="num">${count}</td></tr>
  `).join("");
}

function chartOpts({ yMin, yMax, legendPos } = {}){
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: legendPos === false ? { display:false } : { position: legendPos || "bottom", labels:{ color:"#9aa2ac", font:{ family:"IBM Plex Sans", size:11 }, boxWidth:10, padding:14 } },
      tooltip: { backgroundColor:"#232830", borderColor:"#2c313a", borderWidth:1, titleFont:{family:"IBM Plex Mono"}, bodyFont:{family:"IBM Plex Mono"} },
    },
    scales: (yMin !== undefined) ? {
      x: { ticks:{ color:"#9aa2ac", font:{family:"IBM Plex Mono", size:10.5} }, grid:{ color:"#23272f" } },
      y: { min:yMin, max:yMax, ticks:{ color:"#9aa2ac", font:{family:"IBM Plex Mono", size:10.5} }, grid:{ color:"#23272f" } }
    } : undefined,
  };
}

/* ===================================================================
   NAV / TAB SWITCHING
   =================================================================== */

function initNav(){
  const items = $$(".nav-item");
  items.forEach(btn => {
    btn.addEventListener("click", () => {
      items.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const target = btn.dataset.target;
      $$(".section").forEach(sec => sec.classList.remove("active"));
      $(`#${target}`).classList.add("active");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  renderIntake();
  renderProduction();
  renderDispatch();
  renderReturns();
  renderCompetitors();
  renderSummary();
  renderRecommendations();
  renderTeamEquip();
});
