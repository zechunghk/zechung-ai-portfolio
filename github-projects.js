'use strict';

// Curated from the owner's GitHub READMEs and source files on 2026-11-15.
// Public repository links are exposed; private repositories retain summary-only presentation.
const githubProjects = [
  {
    id:'packer', number:'08', kind:'operations', scope:'營運管理', title:'I.Crystal 包貨與零售台',
    summary:'把網店訂單、包貨進度、運單與零售統計，接成同一套營運工具。',
    tech:'JavaScript · Express', repo:'TheI_order_packer', public:false,
    tags:['訂單匯入','出貨追蹤','營運統計'],
    steps:['訂單匯入','包貨跟進','出貨回顧'],
    caseStudy:{
      category:'08 / GitHub 延伸 · 營運管理', title:'I.Crystal 包貨與零售台',
      subtitle:'從訂單進來，到包好寄出，讓每一步有狀態可跟進。', status:'營運系統 · 私人程式庫',
      sections:[
        ['要處理的事','網店出貨涉及訂單整理、客人分組、包貨、運單與後台統計，需要把不同階段接起來。'],
        ['實作內容','匯入 Shopline Excel 訂單、分組及排序、追蹤包貨與運單狀態，並提供每日、月結和零售相關頁面。'],
        ['GitHub 裡的依據','README、包貨前台、後台統計頁面，以及訂單處理與客人分組模組，都有相應實作檔案。'],
        ['作品重點','把多人使用的營運流程做成可追蹤的介面。展示的是系統功能，不包含真實客戶、訂單或銷售數據。']
      ],
      limit:'功能摘要依據程式庫內容整理；本次未重新驗收正式營運服務。',
      evidence:['README.md','lib/order-disposition.js','lib/packer-customers.js','public/admin-monthly.html']
    }
  },
  {
    id:'schedule', number:'09', kind:'operations', scope:'營運管理', title:'排班與預約月曆',
    summary:'把值班、直播、內容安排與課程預約，整理成可共用的日曆。',
    tech:'JavaScript · Node.js', repo:'TheI_schedule', public:false,
    tags:['多日曆','員工可用時間','課程預約'],steps:['收集時間','安排日程','發布值班表'],
    caseStudy:{
      category:'09 / GitHub 延伸 · 營運管理',title:'排班與預約月曆',
      subtitle:'讓團隊安排、員工可用時間與客戶預約有一個共同入口。',status:'日曆系統 · 私人程式庫',
      sections:[
        ['要處理的事','值班表、內容日程與客戶預約有不同的操作需要，但又會互相影響。'],
        ['實作內容','多類型日曆、員工可用時間收集、值班表與海報輸出，另有課程時段、名額及待確認預約流程。'],
        ['GitHub 裡的依據','日曆與值班表頁面、課程預約模組、IG 日程模組，以及和包貨台整合的文件均已收錄。'],
        ['作品重點','把收集、編排與發布分成清楚步驟，方便不同角色查看需要的日程資訊。']
      ],
      limit:'作品集只展示流程摘要，不包含員工值班內容、可用時間連結或客戶預約紀錄。',
      evidence:['README.md','course-booking.js','public/schedule.html','public/poster-roster-render.js']
    }
  },
  {
    id:'marketing',number:'10',kind:'operations',scope:'營運管理',title:'IG 查詢與行銷工作台',
    summary:'由客人查詢、任務跟進，延伸到內容紀錄、品牌素材與團隊工作頁面。',
    tech:'Python · Flask',repo:'ig-dm-monitor',public:false,
    tags:['查詢分類','任務跟進','內容與品牌'],steps:['接收查詢','分類跟進','整理工作'],
    caseStudy:{
      category:'10 / GitHub 延伸 · 營運管理',title:'IG 查詢與行銷工作台',
      subtitle:'以 Instagram 訊息為起點，逐步擴展成團隊使用的模組化工作台。',status:'工作台實作 · 私人程式庫',
      sections:[
        ['要處理的事','客人查詢、內容安排、會議及品牌素材分散在不同地方，需要一個能逐步擴展的整理工具。'],
        ['實作內容','DM 接收與分類、任務和會議紀錄、直播銷售頁面、YouTube 管理、品牌指引、Creative Library 與任務交接模組。'],
        ['GitHub 裡的依據','README 與 Flask 主程式可見多個已註冊模組，包括 tasks、meeting、brand_guide、creative_library 和 task_handoff。'],
        ['與其他作品的關係','這是行銷工作的基礎工作台；本作品集的 AR-I 與社群週報則分別展示視覺創作和分析成果。兩者以不同層次介紹。']
      ],
      limit:'只介紹工作台結構與功能；私人 DM、內部管理網址及營運資料未展示。',
      evidence:['README.md','ig_dm_project/webhook_server.py']
    }
  },
  {
    id:'subtitle',number:'11',kind:'content',scope:'內容製作',title:'粵語字幕製作流程',
    summary:'由音訊辨識到術語修正，為粵語 Podcast 整理可校對的字幕。',
    tech:'Python · Whisper · Web UI',repo:'TheI-Subtitle',public:false,
    tags:['粵語辨識','同音字修正','字幕預覽'],steps:['音訊辨識','字詞校正','字幕預覽'],
    caseStudy:{
      category:'11 / GitHub 延伸 · 內容製作',title:'粵語字幕製作流程',
      subtitle:'把辨識、詞彙修正和字幕預覽，接成可重複使用的製作流程。',status:'字幕工具 · 私人程式庫',
      sections:[
        ['要處理的事','粵語 Podcast 有口語表達、同音字與星座術語，直接使用語音辨識結果仍需要後續校對。'],
        ['實作內容','以 faster-whisper 處理語音辨識，加入術語字典及 LLM 字幕修正，並有上傳、進度顯示和 SRT 預覽介面。'],
        ['AI 如何參與','語音模型負責轉錄；字幕修正模組支援 MiniMax 或 OpenAI。這是有 AI 參與處理的內容工具。'],
        ['GitHub 裡的依據','pipeline、transcribe、correct 模組和 SrtPreview 等介面檔案已收錄，可對照完整處理流程。']
      ],
      limit:'字幕品質仍取決於錄音與內容，這裡不聲稱達到某個辨識準確率；正式使用前需要校對。',
      evidence:['README.md','src/pipeline.py','src/correct.py','web/src/components/SrtPreview.tsx']
    }
  },
  {
    id:'shorts',number:'12',kind:'content',scope:'內容製作',title:'長片轉 Shorts 工具',
    summary:'根據 SRT 字幕分析星座段落，再把橫向長片批量製成直向短片。',
    tech:'Python · FFmpeg · SRT',repo:'horoscope-shorts',public:true,
    tags:['字幕分段','直向裁切','批量輸出'],steps:['分析字幕','檢查段落','輸出短片'],
    caseStudy:{
      category:'12 / GitHub 延伸 · 內容製作',title:'長片轉 Shorts 工具',
      subtitle:'把一集長內容中的不同段落，整理成方便再編輯的短片輸出。',status:'製作腳本 · 公開原始碼',
      sections:[
        ['要處理的事','一集 Podcast 包含不同星座段落，逐條手動找時間、裁切比例和輸出，會重複很多操作。'],
        ['實作內容','掃描 SRT 關鍵字、產生片段時間表與 Premiere marker 參考資料，再用 FFmpeg 輸出 9:16 影片。'],
        ['GitHub 裡的依據','README 提供 analyze 和 render 流程；src/main.py、srt_parser.py、short_clips.py 與 render.py 分別處理分析及輸出。'],
        ['作品重點','這個工具以字幕規則進行分段。先查看分析結果，再決定輸出哪些片段，並可調整人物裁切位置。']
      ],
      limit:'目前介紹的是程式庫中的製作流程，並不代表短片已上傳或取得任何觀看成效。',
      evidence:['README.md','src/main.py','src/srt_parser.py','src/render.py']
    }
  },
  {
    id:'chem',number:'13',kind:'operations',scope:'工作紀錄',title:'實驗室工作紀錄平台',
    summary:'以空間和房間作入口，串連服務、設備、檢查與物資紀錄。',
    tech:'TypeScript · React',repo:'chem-duty-hub',public:false,
    tags:['房間管理','設備與檢查','服務紀錄'],steps:['選擇房間','記錄工作','查看跟進'],
    caseStudy:{
      category:'13 / GitHub 延伸 · 工作紀錄',title:'實驗室工作紀錄平台',
      subtitle:'讓不同房間與設備的工作紀錄，有一個按空間瀏覽的入口。',status:'管理工具 · 私人程式庫',
      sections:[
        ['要處理的事','服務、設備使用、檢查、物資與房間資料需要互相對照，單靠零散表格不容易查看完整脈絡。'],
        ['實作內容','可點選房間的平面圖入口、服務紀錄、設備使用、化學品與物資搜尋，以及房間環境和檢查相關頁面。'],
        ['GitHub 裡的依據','README 與 React 路由可對照 FloorPlan、RoomManagement、ServiceLog、Inventory 和多種檢查頁面。'],
        ['作品重點','以實際工作位置整理資訊，讓紀錄與後續處理有脈絡可查。作品集不重製內部平面圖或工作資料。']
      ],
      limit:'此處只介紹軟件功能，不對實驗室操作、安全程序或合規結果作出認證。',
      evidence:['README.md','src/App.tsx','src/components/EquipmentLogsPanel.tsx','src/components/RoomClimatePanel.tsx']
    }
  },
  {
    id:'procurement',number:'14',kind:'operations',scope:'工作流程',title:'SAP 採購填表助手',
    summary:'把報價單整理成可審核的草稿，再輔助填入 SAP Fiori 表單。',
    tech:'TypeScript · 瀏覽器擴充',repo:'sap-proc-helper',public:false,
    tags:['報價抽取','欄位覆核','輔助填表'],steps:['抽取報價','人工覆核','輔助填寫'],
    caseStudy:{
      category:'14 / GitHub 延伸 · 工作流程',title:'SAP 採購填表助手',
      subtitle:'由一份報價單，到結構化草稿，再到採購表單的輔助輸入。',status:'擴充工具實作 · 私人程式庫',
      sections:[
        ['要處理的事','報價文件中的供應商、品項與金額，需要轉成採購系統欄位，過程涉及重複輸入與核對。'],
        ['實作內容','讀取 PDF、圖片或文字報價，編輯草稿行項目，匯出 CSV／TSV，並提供請購、採購與供應商發票的表單 adapter。'],
        ['AI 如何參與','提供本機規則抽取與可選的 OpenAI Vision 路徑。抽取後先保留為可編輯草稿，再由使用者核對。'],
        ['GitHub 裡的依據','抽取模組、側欄介面、Fiori adapter 與測試檔案已收錄。這裡展示工具設計與程式實作。']
      ],
      limit:'最後儲存與提交由使用者在 SAP 親自操作。本次未驗證它與任何特定機構正式環境的相容性。',
      evidence:['README.md','src/extract/index.ts','src/sidepanel/main.ts','src/adapters/create-po.ts']
    }
  },
  {
    id:'market-lab',number:'15',kind:'data',scope:'資料實驗',title:'市場觀察與策略實驗室',
    summary:'用公開市場資料整理觀察名單，並保留紙上策略的決策與模擬紀錄。',
    tech:'Python · 資料處理 · 圖表',repo:'rsi-crypto-watchlist',public:false,
    tags:['行情篩選','紙上模擬','研究紀錄'],steps:['收集行情','規則篩選','記錄實驗'],
    caseStudy:{
      category:'15 / GitHub 延伸 · 資料實驗',title:'市場觀察與策略實驗室',
      subtitle:'把觀察條件、模擬決策與歷史結果放在一起，方便檢查一個規則如何運作。',status:'研究工具 · 紙上模擬展示範圍',
      sections:[
        ['要處理的事','市場資料更新頻密，需要以固定條件整理資訊，並記錄策略在不同時間實際作了哪些判斷。'],
        ['實作內容','公開行情篩選、不同時間尺度的觀察頁、共用資金紙上模擬、歷史紀錄與策略檢視相關模組。'],
        ['GitHub 裡的依據','README、intraday_filter、paper_portfolio、paper_lab 和 paper_daily_review 等實作檔案記錄了研究流程。'],
        ['作品重點','作為資料工程與實驗管理作品，重點是可追蹤的條件、狀態及紀錄。這個介紹不呈現私人持倉或交易帳戶。']
      ],
      limit:'紙上結果不等於實際交易結果；此作品集不提供買賣建議，也不宣稱策略有盈利優勢。',
      evidence:['README.md','intraday_filter.py','paper_portfolio.py','paper_daily_review.py']
    }
  },
  {
    id:'crypto-digest',number:'16',kind:'data',scope:'資料工具',title:'市場日報與 Telegram 工具',
    summary:'把市場行情整理成每日文字摘要，並透過 Telegram 接收查詢。',
    tech:'Python · Binance 資料 · Telegram',repo:'ze-crypto-daily',public:true,
    tags:['資料擷取','文字日報','訊息查詢'],steps:['整理行情','組合日報','訊息介面'],
    caseStudy:{
      category:'16 / GitHub 延伸 · 資料工具',title:'市場日報與 Telegram 工具',
      subtitle:'用文字介面串連公開資料、摘要產生與按需查詢。',status:'程式工具 · 公開原始碼',
      sections:[
        ['要處理的事','想快速查看不同市場資料時，不一定每次都需要打開圖表；簡潔的文字摘要也是一種介面。'],
        ['實作內容','擷取 Binance 行情、整理趨勢與觀察名單、格式化每日日報，並處理 Telegram 幣種及日內／波段查詢。'],
        ['GitHub 裡的依據','main.py 組合資料與報告，report.py 處理文字格式，telegram_handler.py 分流指令及查詢。'],
        ['作品重點','展示資料處理如何接到日常使用的通訊介面。這次只核對程式碼，沒有啟動機械人或發送訊息。']
      ],
      limit:'此處展示資訊整理與訊息工具，不提供投資建議、報酬承諾或即時市場判斷。',
      evidence:['main.py','report.py','telegram_handler.py']
    }
  },
  {
    id:'travel',number:'17',kind:'life',scope:'生活工具',title:'東京與箱根行程工具',
    summary:'用手機查看「現在／下一步」，把交通、替代行程與食記放在手邊。',
    tech:'JavaScript · Node.js',repo:'tokyo-trip-2026',public:false,
    tags:['手機行程','地圖導航','食記紀錄'],steps:['查看當下','前往下一站','留下旅程紀錄'],
    caseStudy:{
      category:'17 / GitHub 延伸 · 生活工具',title:'東京與箱根行程工具',
      subtitle:'把一份旅行計劃，做成旅途中可以隨手使用的網站。',status:'個人行程工具 · 私人程式庫',
      sections:[
        ['要處理的事','旅途中最常需要知道的，是現在去甚麼地方、下一站怎樣走，以及臨時改變時有甚麼替代選擇。'],
        ['實作內容','以東京時區顯示當下與下一步，提供交通及地圖連結、附近替代方案、飲食資訊與食記功能。'],
        ['GitHub 裡的依據','README 與前端 app、alternatives、dining 等程式檔案，可對照行程與記錄功能。'],
        ['作品重點','由個人需要出發，把靜態行程變成適合手機操作的工具。這裡不公開實際預訂、同行者或私人旅程照片。']
      ],
      limit:'此處介紹既有軟件作品，不提供目前有效的交通、景點時間或旅行建議。',
      evidence:['README.md','public/js/app.js','public/js/alternatives.js','public/js/dining.js']
    }
  }
];
