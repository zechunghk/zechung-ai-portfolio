'use strict';

const cases = {
  zefnba: {
    category: '01 / 網站與工具', title: 'ZefNBA 籃球管理',
    subtitle: '把選秀、球季數據與每週回顧，整理成一個自己會使用的工具。', status: '網站工具 · 實際介面',
    media: '<img src="assets/zefnba-screen.jpg" width="1280" height="720" alt="ZefNBA 實際網站的球季監察介面"><p class="case-caption">實際網站截圖，擷取於 2026 年 11 月 15 日。畫面中的數據屬當時快照。</p>',
    sections: [
      ['起點', '玩 Fantasy NBA 時，需要在不同頁面之間查看球員、陣容、傷病與聯賽數據。我想把這些資訊整理到一起，方便每天查看和比較。'],
      ['做出了甚麼', '一個涵蓋選秀規劃、球季監察、每日 NBA 數據、對賽分析和每週戰報的網站，並有 Chrome 同步工具協助收集 Yahoo 頁面上的資料。'],
      ['AI 如何參與', '運用 AI 協助編寫網站、整理資料邏輯、查找問題，以及把複雜的比較結果寫成可閱讀的分析內容。'],
      ['我的取捨', '由自己的使用情境決定功能，持續調整畫面與評分說明。資料的日期、來源和缺漏需要看得見，才知道一個結論可以信到哪一步。']
    ],
    limit: '這是資訊整理與比較工具。網站不代替使用者向 Yahoo 提交球員交易；可用球員與最新資料仍需回到來源核對。',
    link: 'https://zefnba.up.railway.app/', linkText: '開啟 ZefNBA 網站'
  },
  ari: {
    category: '02 / 視覺與設計', title: 'AR-I 角色世界',
    subtitle: '從一個造型方向，逐步探索角色比例、服裝細節與立體化。', status: '靜態設計與 3D 渲染研究',
    media: '<div class="case-gallery"><figure><img src="assets/ari-character.jpg" width="765" height="1300" alt="AR-I 融合版 v0.5 全身設計"><figcaption>融合版 v0.5：以原有角色為基礎的靜態設計迭代。</figcaption></figure><figure><img src="assets/ari-3d-study.jpg" width="850" height="1000" alt="AR-I 立體模型的數碼渲染"><figcaption>v15 立體與列印研究：數碼渲染，並非實物照片。</figcaption></figure></div>',
    sections: [
      ['起點', '希望角色在不同作品中保留自己的辨識度，同時嘗試更合適的身形比例、帽形、髮型與裝飾細節。'],
      ['做出了甚麼', '多個角色視覺版本、全身靜態稿與比較圖，並進一步製作 3D 模型及列印研究檔案。這裡展示其中的平面與立體成果。'],
      ['AI 如何參與', '協助產生及修改視覺草稿、比較造型方向，並透過程式與建模流程探索角色的立體呈現。'],
      ['我的取捨', '選擇要保留的角色特徵，逐輪檢查比例、服裝符號與細節。版本比較讓每次修改更具體，也避免把一次生成當作完成。']
    ],
    limit: '這裡的平面圖是靜態作品，不代表已套用到 Live2D 工程。3D 圖為渲染研究，未以此宣稱實物已成功列印。',
    link: 'assets/ari-character.jpg', linkText: '放大角色設計'
  },
  planet: {
    category: '03 / 影音創作', title: 'I-Planet 小星球故事',
    subtitle: 'EP01《佢唔係偷懶》：用一段小誤會，練習把角色與世界變成故事。', status: '59 秒動畫試作 · 10 個鏡頭',
    media: '<video id="case-video" controls playsinline preload="metadata" poster="assets/i-planet-scene.jpg" width="1280" height="720" aria-label="I-Planet 第一集動畫試作"><source src="assets/i-planet-trial.mp4" type="video/mp4">你的瀏覽器不支援影片播放。<a href="assets/i-planet-trial.mp4">下載影片</a></video><p class="case-caption">MiniMax H3 影片試作，2026 年 10 月。以分鏡圖生成鏡頭，再組合成 59 秒短片；配樂與音效為暫定版本。影片沒有對白。</p><details><summary>查看早期八格故事分鏡</summary><img src="assets/i-planet-storyboard.jpg" loading="lazy" alt="八格鉛筆分鏡：回家、誤會掃地機偷懶、幻想、伙伴提醒、檢查、發現襪子、取出襪子、和解。這是較早期的另一套角色版本。"><p class="case-caption">早期概念分鏡；與後來的小星球影片版本在角色及鏡頭上有差異。</p></details>',
    sections: [
      ['起點', 'AR-I 以為停下來的掃地機在偷懶，伙伴卻引導她看清真正原因。希望用生活中的誤會，寫出一個溫柔、容易理解的小故事。'],
      ['做出了甚麼', '由故事構思、鉛筆分鏡與場景圖，延伸成 10 個影片鏡頭，再剪輯成一段可播放的短片。'],
      ['AI 如何參與', '協助視覺分鏡與場景探索，利用 MiniMax H3 將首幀圖轉成影片，並配合程式整理鏡頭、時長與聲音。'],
      ['我的取捨', '選擇角色表演、鏡頭次序與小星球的呈現方式。故事是否看得明、角色是否一致，比單一畫面是否漂亮更重要。']
    ],
    limit: '這是創作試驗，仍有角色一致性、動作與轉場可改善之處。分鏡中的簡化角色不取代正式角色設計。',
    link: 'assets/i-planet-trial.mp4', linkText: '獨立開啟試作影片'
  },
  whatsapp: {
    category: '04 / 自動化與工作流程', title: 'WhatsApp 工作助手',
    subtitle: '把訊息中的需求，接成一個可以整理、覆核和跟進的工作流程。', status: '持續開發與使用驗收',
    media: '<div class="case-diagram"><div><small>輸入</small><strong>訊息需求</strong></div><span aria-hidden="true">→</span><div><small>處理</small><strong>整理與草稿</strong></div><span aria-hidden="true">→</span><div><small>確認</small><strong>下一步行動</strong></div></div><p class="case-caption">簡化流程示意。此作品集不包含實際群組對話、聯絡資料或私人管理畫面。</p>',
    sections: [
      ['起點', '團隊工作的需求經常藏在日常對話中：一段設計想法、一項要跟進的事情，或一個需要整理的日程。希望減少反覆搬運內容。'],
      ['做出了甚麼', '一套串連訊息處理、AI 草稿、工作佇列、覆核及狀態查看的系統，並逐步探索日曆與設計工作流程。'],
      ['AI 如何參與', '協助理解需求、產生草稿及分析內容。程式負責記錄工作版本、處理狀態與控制哪些動作可以執行。'],
      ['我的取捨', '反覆調整自然對話與確認流程。尤其是會產生新內容或外部動作的工作，需要清楚知道正在處理哪個版本、由誰確認。']
    ],
    limit: '這是一個持續調整的工作系統。測試通過不等於所有真實對話與送達行為都已完成驗收；此處展示項目方向與已實作的流程。'
  },
  workout: {
    category: '05 / 網站與個人工具', title: '運動與訓練紀錄',
    subtitle: '把分散的運動資料，整理成可以長期回顧的個人工具。', status: '個人工具 · 私人訓練日誌',
    media: '<div class="case-diagram workout-diagram"><div><small>收集</small><strong>匯入紀錄</strong></div><span aria-hidden="true">→</span><div><small>整理</small><strong>回顧趨勢</strong></div><span aria-hidden="true">→</span><div><small>跟進</small><strong>訓練日誌</strong></div></div><p class="case-caption">功能結構示意；封面柱狀圖為視覺示意，不代表實際運動或健康數據。</p>',
    sections: [
      ['起點', '運動紀錄分散在不同匯出檔與手動筆記之中。我想更方便回顧跑步、籃球和訓練的累積，而不必每次重新整理。'],
      ['做出了甚麼', '支援 Apple Health 與 Zewatch 匯出資料、手動記錄、趨勢圖表和訓練規劃的網站，並加入私人日誌與跨裝置同步。'],
      ['AI 如何參與', '協助撰寫資料匯入、介面與同步邏輯，整理訓練頁面內容，並處理重複紀錄及不同裝置更新的衝突。'],
      ['我的取捨', '讓工具配合自己的記錄習慣，同時保留資料來源及手動選擇。先把觀察記清楚，再決定如何調整訓練。']
    ],
    limit: '作品集只介紹功能與製作過程，不展示個人健康紀錄。規劃功能也不等於醫療建議或比賽成績保證。'
  },
  report: {
    category: '06 / 資料與內容分析', title: 'I.Crystal 社群週報',
    subtitle: '把數字、圖片與文字放在一起看，整理成可以討論的下一步。', status: '內部試行報告 · 2026 年 11 月',
    media: '<div class="case-diagram report-diagram"><div><small>觀察</small><strong>內容表現</strong></div><span aria-hidden="true">→</span><div><small>理解</small><strong>證據與限制</strong></div><span aria-hidden="true">→</span><div><small>討論</small><strong>行動建議</strong></div></div><p class="case-caption">展示報告結構；內部營運數字與完整原報告未收錄於此作品集。</p>',
    sections: [
      ['起點', '社群平台有很多數字，但一份有用的報告還要說清楚：看到了甚麼、可能代表甚麼，以及團隊下一步可以試甚麼。'],
      ['做出了甚麼', '一份繁體中文社群週報，結合平台表現、圖文觀察、比較口徑、資料缺漏與可執行建議，並整理成可閱讀的 PDF。'],
      ['AI 如何參與', '協助整合已保存的資料、核對比較方式、觀察內容呈現，並組織分析文字與報告版面。'],
      ['我的取捨', '把分析連到實際的內容與營運問題。觸及、互動、查詢和成交需要分開理解；資料不足時，就清楚留下不確定之處。']
    ],
    limit: '此項目為週報試行。報告中的分析與建議不代表已執行，也不把觀察到的表現當成 AI 帶來的成效證明。'
  }
};

cases.sound = {
  category: '07 / 聲音與音樂', title: '動物風格 Jingle Bells',
  subtitle: '用熟悉的旋律，探索兩種想像中的角色音色。', status: '可試聽成品 · 熊貓與長頸鹿',
  media: '<div class="case-audio-grid"><figure><figcaption>熊貓版 <span>02:00</span></figcaption><audio controls preload="none" src="assets/panda-jingle-bells.mp3" aria-label="項目詳解：熊貓版 Jingle Bells"></audio></figure><figure><figcaption>長頸鹿版 <span>02:00</span></figcaption><audio controls preload="none" src="assets/giraffe-jingle-bells.mp3" aria-label="項目詳解：長頸鹿版 Jingle Bells"></audio></figure></div><p class="case-caption">兩款均為想像的合成角色音色，並非真實動物錄音。旋律取自傳統公版歌曲《Jingle Bells》。</p>',
  sections: [['起點', '如果把熟悉的旋律交給不同的動物角色，聽起來會有甚麼不同？我想用聲音合成與程式，做出柔和、輕快而又容易比較的版本。']],
  limit: '此處展示熊貓與長頸鹿兩款合成版本，沒有清晰歌詞。其他聲音版本的素材來源與授權說明見公開程式庫。',
  repository: { name: 'animal-jingle-bells-preview-20261110', public: true },
  link: 'https://github.com/zechunghk/animal-jingle-bells-preview-20261110', linkText: '查看完整聲音實驗'
};

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

githubProjects.forEach((project) => {
  const study = project.caseStudy;
  study.repository = { name: project.repo, public: project.public };
  study.media = '<div class="case-diagram repo-diagram">' + project.steps.map((step, index) => '<div><small>0' + (index + 1) + '</small><strong>' + escapeHtml(step) + '</strong></div>').join('<span aria-hidden="true">→</span>') + '</div><p class="case-caption">功能流程示意；依據 GitHub 說明與程式實作整理，不是正式系統截圖。</p>';
  if (project.public) {
    study.link = 'https://github.com/zechunghk/' + project.repo;
    study.linkText = '在 GitHub 查看原始碼';
  }
  cases[project.id] = study;
});

const caseOrder = Object.keys(projectDetails).filter((id) => Object.hasOwn(cases, id));

document.querySelector('#repo-grid').innerHTML = githubProjects.map((project) => {
  const access = project.public ? '<span class="repo-access is-public">公開原始碼</span>' : '<span class="repo-access">私人專案摘要</span>';
  const tags = project.tags.map((tag) => '<span>' + escapeHtml(tag) + '</span>').join('');
  const code = project.public ? '<a class="repo-code-link" href="https://github.com/zechunghk/' + escapeHtml(project.repo) + '" target="_blank" rel="noopener noreferrer" aria-label="在 GitHub 查看' + escapeHtml(project.title) + '原始碼">原始碼 ↗</a>' : '';
  return '<article class="repo-card" data-repo-kind="' + escapeHtml(project.kind) + '"><span class="repo-number">' + project.number + '</span><div class="repo-card-body"><div class="repo-topline"><span>' + escapeHtml(project.scope) + '</span>' + access + '</div><h3><button data-project="' + project.id + '">' + escapeHtml(project.title) + '</button></h3><p class="repo-summary">' + escapeHtml(project.summary) + '</p><div class="repo-tags">' + tags + '</div><div class="repo-bottom"><span class="repo-tech">' + escapeHtml(project.tech) + '</span><button data-project="' + project.id + '" aria-label="查看' + escapeHtml(project.title) + '項目介紹">項目介紹 ↗</button></div><div class="repo-source"><code>' + escapeHtml(project.repo) + '</code>' + code + '</div></div></article>';
}).join('');

document.querySelectorAll('[data-repo-filter]').forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.repoFilter;
    let count = 0;
    document.querySelectorAll('[data-repo-filter]').forEach((item) => {
      item.classList.toggle('active', item === button);
      item.setAttribute('aria-pressed', String(item === button));
    });
    document.querySelectorAll('[data-repo-kind]').forEach((card) => {
      const visible = filter === 'all' || card.dataset.repoKind === filter;
      card.hidden = !visible;
      if (visible) count++;
    });
    document.querySelector('#repo-filter-count').textContent = '顯示 ' + count + ' 個項目';
  });
});

const dialog = document.querySelector('#project-dialog');
const dialogContent = document.querySelector('#dialog-content');
const audio = document.querySelector('#audio-player');
let lastTrigger = null;

function renderCaseNavigation(id) {
  const index = caseOrder.indexOf(id);
  const previous = caseOrder[index - 1];
  const next = caseOrder[index + 1];
  const button = (target, direction, label) => target
    ? '<button class="case-nav-button ' + direction + '" data-project="' + target + '" aria-label="' + label + '：' + escapeHtml(cases[target].title) + '"><small>' + label + '</small><span>' + escapeHtml(cases[target].title) + '</span></button>'
    : '<span class="case-nav-end">' + (direction === 'previous' ? '第一個項目' : '最後一個項目') + '</span>';
  return '<nav class="case-navigation" aria-label="瀏覽其他項目"><div class="case-position">' + String(index + 1).padStart(2, '0') + ' / ' + caseOrder.length + ' 個項目</div><div class="case-nav-grid">' + button(previous, 'previous', '← 上一個項目') + button(next, 'next', '下一個項目 →') + '</div></nav>';
}

function renderCaseDetail(item, detail, id) {
  const features = detail.features.map(([title, text]) => '<article><h4>' + escapeHtml(title) + '</h4><p>' + escapeHtml(text) + '</p></article>').join('');
  const workflow = detail.workflow.map(([title, text], index) => '<li><span class="case-step-number">0' + (index + 1) + '</span><div><h4>' + escapeHtml(title) + '</h4><p>' + escapeHtml(text) + '</p></div></li>').join('');
  const evidence = (item.evidence || detail.evidence || []).map((file) => '<li>' + escapeHtml(file) + '</li>').join('');
  const stack = detail.stack.map((name) => '<span>' + escapeHtml(name) + '</span>').join('');
  const repository = item.repository ? '<p class="case-repository"><strong>程式庫</strong> ' + escapeHtml(item.repository.name) + ' · ' + (item.repository.public ? '公開原始碼' : '私人專案摘要') + '</p>' : '';
  const link = item.link ? '<a class="case-link" href="' + escapeHtml(item.link) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(item.linkText) + '<span aria-hidden="true">↗</span></a>' : '';
  const media = ['zefnba', 'ari', 'planet', 'sound'].includes(id) ? '<div class="case-media">' + item.media + '</div>' : '';
  return '<div class="case-header"><p class="case-kicker">項目詳解</p><h2 id="dialog-title">' + escapeHtml(item.title) + '</h2><p>' + escapeHtml(item.subtitle) + '</p><span class="case-status">' + escapeHtml(item.status) + '</span><dl class="case-facts"><div><dt>使用情境</dt><dd>' + escapeHtml(detail.audience) + '</dd></div><div><dt>作品形式</dt><dd>' + escapeHtml(detail.format) + '</dd></div></dl></div>' + media +
    '<div class="case-reading"><section class="case-origin"><h3>為甚麼做這個作品</h3><p>' + escapeHtml(item.sections[0][1]) + '</p></section>' +
    '<section class="case-detail-section"><h3>' + escapeHtml(detail.featureHeading || '主要功能') + '</h3><div class="case-features">' + features + '</div></section>' +
    '<section class="case-detail-section"><h3>由輸入到成果</h3><ol class="case-workflow">' + workflow + '</ol></section>' +
    '<section class="case-example"><p class="case-kicker">' + escapeHtml(detail.example.label) + '</p><h3>' + escapeHtml(detail.example.title) + '</h3><p>' + escapeHtml(detail.example.input) + '</p><p>' + escapeHtml(detail.example.output) + '</p></section>' +
    '<section class="case-detail-section"><h3>AI 與我的分工</h3><div class="case-collaboration"><div><span class="case-role">AI 協助 · ' + escapeHtml(detail.aiMode) + '</span><p>' + escapeHtml(detail.ai) + '</p></div><div><span class="case-role">我負責</span><p>' + escapeHtml(detail.human) + '</p></div></div></section>' +
    '<section class="case-result"><h3>目前成果</h3><p>' + escapeHtml(detail.outcome) + '</p></section>' +
    '<details class="case-technical"><summary>技術、資料來源與展示範圍</summary><div class="case-tech-tags">' + stack + '</div><p>' + escapeHtml(item.limit) + '</p>' + repository + '<h4>內容依據</h4><ul>' + evidence + '</ul><p class="case-source-note">依據項目文件、程式實作及既有作品整理（2026 年 11 月）。情境示例用於解釋流程；不代表真實個案或實際成效。功能介紹不等同本次重新驗收原服務。</p></details>' + link + '</div>' + renderCaseNavigation(id);
}

function openProject(id, trigger) {
  if (!caseOrder.includes(id)) return;
  const item = cases[id];
  if (trigger) lastTrigger = trigger;
  else if (!dialog.open) lastTrigger = document.querySelector('[data-project="' + id + '"]');
  audio.pause();
  dialog.querySelectorAll('video, audio').forEach((media) => media.pause());
  document.querySelector('#dialog-type').textContent = item.category;
  dialogContent.innerHTML = renderCaseDetail(item, projectDetails[id], id);
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add('modal-open');
  document.querySelector('.dialog-close').focus({preventScroll:true});
  if (location.hash !== '#project-' + id) history.replaceState(null, '', '#project-' + id);
}

document.addEventListener('click', (event) => {
  const button = event.target.closest?.('[data-project]');
  if (button) openProject(button.dataset.project, button.closest('#project-dialog') ? null : button);
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
dialog.addEventListener('close', () => {
  dialog.querySelectorAll('video, audio').forEach((media) => media.pause());
  document.body.classList.remove('modal-open');
  const section = lastTrigger?.closest('#sound-lab') ? '#sound-lab' : lastTrigger?.closest('#github-work') ? '#github-work' : '#work';
  if (location.hash.startsWith('#project-')) history.replaceState(null, '', section);
  if (lastTrigger && !lastTrigger.closest('[hidden]')) lastTrigger.focus({preventScroll:true});
});
dialog.addEventListener('play', (event) => {
  dialog.querySelectorAll('video, audio').forEach((media) => {
    if (media !== event.target) media.pause();
  });
}, true);

const cards = [...document.querySelectorAll('.project-card')];
document.querySelectorAll('[data-filter]').forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach((item) => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    let count = 0;
    cards.forEach((card) => {
      const visible = filter === 'all' || card.dataset.category === filter;
      card.hidden = !visible;
      if (visible) count++;
    });
    document.querySelector('.project-grid').classList.toggle('filtered', filter !== 'all');
    document.querySelector('#filter-count').textContent = '顯示 ' + count + ' 個項目';
  });
});

const wave = document.querySelector('.waveform');
const heights = [22,34,48,30,59,45,69,85,62,43,77,95,56,72,91,100,74,55,84,65,46,78,93,57,38,65,48,77,59,39,62,86,54,31,44,24,35,21,30,17];
heights.forEach((height, index) => {
  const bar = document.createElement('span');
  bar.style.setProperty('--h', height + '%');
  bar.style.setProperty('--delay', (-index * 73) + 'ms');
  wave.appendChild(bar);
});
const tracks = {
  panda: { title:'熊貓的 Jingle Bells', label:'熊貓版', src:'assets/panda-jingle-bells.mp3' },
  giraffe: { title:'長頸鹿的 Jingle Bells', label:'長頸鹿版', src:'assets/giraffe-jingle-bells.mp3' }
};
document.querySelectorAll('[data-track]').forEach((button) => {
  button.addEventListener('click', () => {
    if (button.getAttribute('aria-pressed') === 'true') return;
    const track = tracks[button.dataset.track];
    audio.pause();
    audio.src = track.src;
    audio.load();
    audio.setAttribute('aria-label', track.label + ' Jingle Bells 音樂播放器');
    document.querySelector('#track-title').textContent = track.title;
    const download = document.querySelector('#audio-download');
    download.href = track.src;
    download.setAttribute('aria-label', '下載' + track.label + ' MP3');
    document.querySelectorAll('[data-track]').forEach((item) => {
      item.classList.toggle('active', item === button);
      item.setAttribute('aria-pressed', String(item === button));
    });
    document.querySelector('#audio-status').textContent = '已選擇' + track.label + '，按播放即可試聽。';
  });
});
['play','pause','ended'].forEach((name) => audio.addEventListener(name, () => {
  document.querySelector('.sound-player').classList.toggle('playing', !audio.paused && !audio.ended);
}));
audio.addEventListener('error', () => {
  document.querySelector('#audio-status').classList.remove('sr-only');
  document.querySelector('#audio-status').textContent = '暫時未能播放，可使用 MP3 連結下載收聽。';
});

function handleHash() {
  if (location.hash.startsWith('#project-')) openProject(location.hash.slice(9));
  else if (dialog.open) dialog.close();
}
window.addEventListener('hashchange', handleHash);
handleHash();
