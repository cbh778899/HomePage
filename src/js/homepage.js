const languagePack = {
    "Chinese": {
        "searchbar_placeholder": "开始搜索",
        "my_favourites": "我的收藏",
        "my_hidden_favourites": "我的隐藏收藏",
        "add_favourite": "添加一个收藏",
        "ask_site_name": "网站名称",
        "ask_site_link": "网址",
        "submit": "提交",
        "confirm": "确定",
        "cancel": "取消",
        "reset_default_bookmark": "恢复默认书签",
        "remove_all_bookmarks": "删除所有书签",
        "set_default_engine_baidu": "设置百度为默认搜索引擎",
        "set_default_engine_google": "设置谷歌为默认搜索引擎",
        "set_default_engine_bing": "设置必应为默认搜索引擎",
        "reset_all_settings": "全部恢复默认设置",
        "read_user_manual": "阅读用户手册",
        "author_homepage": "前往作者首页",
        "search_use_baidu": "使用百度搜索",
        "search_use_google": "使用谷歌搜索",
        "search_use_bing": "使用必应搜索",
        "ask_input": "请输入任何你想要搜索的内容！",
        "add_new_favourite_success": "成功添加新收藏！",
        "ask_fill_all_contents": "请填写网站名和网址！",
        "remove_favourite_success": "已移除该收藏",
        "ask_confirm_delete_favourite": "你确定要删除该收藏吗？",
        "change_language_chinese": "切换为中文",
        "change_language_english": "Switch language to English",
        "save_settings": "导出设置",
        "load_settings": "导入设置"
    },
    "English": {
        "searchbar_placeholder": "Search for something",
        "my_favourites": "My Favourites",
        "my_hidden_favourites": "My Hidden Favourites",
        "add_favourite": "Add Favourite",
        "ask_site_name": "Site Name",
        "ask_site_link": "Site Link",
        "submit": "Submit",
        "confirm": "Confirm",
        "cancel": "Cancel",
        "reset_default_bookmark": "Reset default bookmark",
        "remove_all_bookmarks": "Remove all bookmarks",
        "set_default_engine_baidu": "Set default search engine to Baidu",
        "set_default_engine_google": "Set default search engine to Google",
        "set_default_engine_bing": "Set default search engine to Bing",
        "reset_all_settings": "Reset all settings",
        "read_user_manual": "Read user manual",
        "author_homepage": "Go to author homepage",
        "search_use_baidu": "Search using Baidu",
        "search_use_google": "Search using Google",
        "search_use_bing": "Search using Bing",
        "ask_input": "Type anything you want to search!",
        "add_new_favourite_success": "Added new favourite!",
        "ask_fill_all_contents": "Please fill both site name and link!",
        "remove_favourite_success": "Removed favourite",
        "ask_confirm_delete_favourite": "Are you sure you want to remove this bookmark?",
        "change_language_chinese": "切换为中文",
        "change_language_english": "Switch language to English",
        "save_settings": "Save Settings",
        "load_settings": "Load Settings"
    }
};

getText = (text) => {
    var language_pack = localStorage.getItem("language_pack");
    if(!language_pack) {
        localStorage.setItem("language_pack", "Chinese");
        language_pack = "Chinese";
    }
    
    return languagePack[language_pack][text];
}

setLanguage = (language) => {
    localStorage.setItem("language_pack", language);
    location.reload();
}

const favouritePage = [
    // 0
    "<h1>"+getText("my_favourites")+"</h1>" +
    "<div class='Favourites'>",

    // 1
        "<a href='javascript:void(0);' class='SignleBlock AddNew' onclick='newFavouriteAlert()' title='"+getText("add_favourite")+"'>" +
            "<img src='src/pics/plus.svg' />" +
        "</a>" +
    "</div>",
    
    // 2
    "<h1>"+getText("my_hidden_favourites")+"</h1>" +
    "<div class='Favourites'>",

    // 3
        "<a href='javascript:void(0);' class='SignleBlock AddNew' onclick='newFavouriteAlert(true)' title='"+getText("add_favourite")+"'>" +
            "<img src='src/pics/plus.svg' />" +
        "</a>" +
    "</div>",
];

const addNewFavourite = [
    // 0
    "<label>"+getText("ask_site_name")+"</label><br>" +
    "<input type='text' id='site_name'><br>" +
    "<label>"+getText("ask_site_link")+"</label><br>" +
    "<input type='text' id='site_link'><br>",
    // 1
    "<button onclick='favouriteSubmit()'>"+getText("submit")+"</button>",
    // 2
    "<button onclick='favouriteSubmit(true)'>"+getText("submit")+"</button>",
    // 3
    "<button onclick='hideAlertWindow()'>"+getText("cancel")+"</button>"
];

var static_setting_menu;

loadSettingMenu = () => {
    static_setting_menu =

    "<button onclick="+'"'+"resetFavourite('reset')"+'"'+">"+getText("reset_default_bookmark")+"</button>" +
    "<button onclick="+'"'+"resetFavourite('remove')"+'"'+">"+getText("remove_all_bookmarks")+"</button>" +
    "<hr>" +
    "<button onclick="+'"'+"setDefaultEngine('Baidu')"+'"'+">"+getText("set_default_engine_baidu")+"</button>" +
    "<button onclick="+'"'+"setDefaultEngine('Google')"+'"'+">"+getText("set_default_engine_google")+"</button>" +
    "<button onclick="+'"'+"setDefaultEngine('Bing')"+'"'+">"+getText("set_default_engine_bing")+"</button>" +
    "<hr>" +
    "<button onclick="+'"'+"setLanguage('Chinese')"+'"'+">"+getText("change_language_chinese")+"</button>" +
    "<button onclick="+'"'+"setLanguage('English')"+'"'+">"+getText("change_language_english")+"</button>" +
    "<hr>" +
    "<button onclick="+'"'+"SLSetting('save')"+'"'+">"+getText("save_settings")+"</button>" +
    "<button onclick="+'"'+"SLSetting('load')"+'"'+">"+getText("load_settings")+"</button>" +
    "<hr>" +
    "<button onclick='resetAll()'>"+getText("reset_all_settings")+"</button>" +
    "<button onclick='userManual()'>"+getText("read_user_manual")+"</button>" +
    "<button onclick='authorHomePage()'>"+getText("author_homepage")+"</button>";
}
const static_user_manual =
    "<div class='Part'>" +
        "<h1>用户手册</h1>" +
        "<hr>" +
        "<h3>&bull; 搜索功能: </h3>" +
        "<p>在屏幕中间的搜索栏中输入关键字进行搜索。</p>" +
        "<p>使用搜索栏下面的三个单选按钮可以切换搜索引擎。</p>" +
        "<p>可切换的搜索引擎从左往右分别为：百度，谷歌，必应。</p>" +
        "<p>把光标悬浮在单选按钮上可查看其对应的搜索引擎。</p>" +
        "<hr>" +
        "<h3>&bull; 我的最爱 / 书签页： </h3>" +
        "<p>点击右上角的书签按钮可以打开书签页。</p>" +
        "<p>点击一个书签可以在新建标签页中自动跳转至对应网页。</p>" +
        "<p>右键点击一个书签可以删除书签。</p>" +
        "<p>拖动书签可以改变书签位置。</p>" +
        "<p>点击书签栏最后一个带 + 号的按钮可以添加新书签。</p>" +
        "<hr>" +
        "<h3>&bull; 设置： </h3>" +
        "<p>点击右上角的书签按钮可以打开设置。</p>" +
        "<p>请发掘各种各样的设置吧！</p>" +
        "<hr>" +
        "<h3>&bull; 全局 </h3>" +
        "<p>在页面的任意地方点击鼠标右键可以打开书签页。</p>" +
        "<p>用W和S键同样可以开关书签页。</p>" +
        "<p>若想更改背景图片，请将新图片放入src/pics/，并将其更名为background.png。</p>" +
        "<hr>" +
        "<h3>&bull; 工具栏 </h3>" +
        "<p>在主界面按D可以打开工具栏，按A可以关闭工具栏。</p>" +
        "<p>工具栏的工具（以后会有更新）：</p>" +
        "<p>&nbsp;&nbsp;&bull; 计算器</p>" +
        "<hr>" +
        "<h3>&bull; 导入 / 导出设置 </h3>" +
        "<p>导出设置将会下载 homepage.setting 文件， 请保存好此文件。<br>当你导入设置时，选择该文件即可自动导入。</p>" +
        "<hr>" +
        "<h3>&bull; 隐藏功能 </h3>" +
        "<p>在书签页点击A和D，说不定会有意外发现…?</p>" +
        "<hr>" +
        "<p>&bull; 左键单击任意位置退出此页</p>" +
    "</div>" +
    "<div class='Part Right'>" +
        "<h1>User Manual</h1>" +
        "<hr>" +
        "<h3>&bull; Search: </h3>" +
        "<p>Search keyword in the text bar at the middle of your screen.</p>" +
        "<p>You can choose to change search engine by click the radio button under text bar.</p>" +
        "<p>Radio buttons represent Baidu, Google and bing from left to right.</p>" +
        "<p>Place your cursor on radio buttons can see which search engine they represents.</p>" +
        "<hr>" +
        "<h3>&bull; Favourite / Bookmarks: </h3>" +
        "<p>Click bookmark button on the top-right corner to display Favourites</p>" +
        "<p>Click a favourite can guid you to that website in a new blank page.</p>" +
        "<p>Right-click on a favourite can delete that favourite.</p>" +
        "<p>Drag a favourite can change the order of it.</p>" +
        "<p>Click favourite block at the end of favourites with + sign can add a new favourite.</p>" +
        "<hr>" +
        "<h3>&bull; Settings: </h3>" +
        "<p>Click setting button on the top-right corner to display settings.</p>" +
        "<p>There are various settings to explore.</p>" +
        "<hr>" +
        "<h3>&bull; Global: </h3>" +
        "<p>Right click on anypart of this website can display your favourites.</p>" +
        "<p>Press W and S can also open/close favourite page.</p>" +
        "<p>If you want to change background image, please place the new image at src/pics/<br>and change its name to background.png.</p>" +
        "<hr>" +
        "<h3>&bull; Tools page </h3>" +
        "<p>Press D on the main page can open tools, and press A to close it.</p>" +
        "<p>Tools in page (There will be updates in the future):</p>" +
        "<p>&nbsp;&nbsp;&bull; Calculator</p>" +
        "<hr>" +
        "<h3>&bull; Save / Load settings </h3>" +
        "<p>When save settings, a file called homepage.setting will be downloaded.</p>" +
        "<p>Please keep this file safely and when you want to load setting, just select this file</p>" +
        "<p>And settings will be loaded automatically.</p>" +
        "<hr>" +
        "<h3>&bull; Hidden function </h3>" +
        "<p>There might be some surprise when click A and D at favourite page…?</p>" +
        "<hr>" +
        "<p>&bull; Left-click anywhere to left this page.</p>" +
    "</div>";

var occupied = false;

searchSubmit = (event) => {
    event.preventDefault();

    const kwrds = document.getElementById("SearchBar");
    if(kwrds.value) {
        const engine = document.querySelector("input[name='SearchEngine']:checked").value;
        
        const search = document.createElement("a");
        search.target = "_blank";
        const search_value = kwrds.value;

        switch(engine) {
            case "baidu": search.href = "https://www.baidu.com/s?wd=" + search_value.replaceAll(' ', '%20') ; break;
            case "google": search.href = "https://www.google.com/search?q=" + search_value.replaceAll(' ', '+'); break;
            case "bing": search.href = "https://www.bing.com/search?q=" + search_value.replaceAll(' ', '+'); break;
            default:;
        }

        document.body.appendChild(search);
        search.click();
        search.remove();
        kwrds.value = "";
    } else
        popupAlert(getText("ask_input"));
}

favouriteSubmit = (hidden = false) => {

    const site_name = document.getElementById("site_name").value;
    var site_link = document.getElementById("site_link").value;

    if(site_name && site_link) {
        var favourites = JSON.parse((hidden ? localStorage.getItem("hidden_favourites") : localStorage.getItem("favourites")));

        if(!/^((http)|(https):\/\/)/.test(site_link))
            site_link = "https://"+site_link;

        if(favourites) {
            var existed = false;
            for(var i = 0; i < favourites.length; i++) {
                f = JSON.parse(favourites[i]);

                if(f.name === site_name && f.site === site_link) {
                    existed = true;
                    break;
                }
            }
            if(!existed)
                favourites.push(JSON.stringify({name: site_name, site: site_link }));
        } else
            favourites = [JSON.stringify({name: site_name, site: site_link })];

        localStorage.setItem((hidden ? "hidden_favourites" : "favourites"), JSON.stringify(favourites));
        hideAlertWindow();
        popupAlert(getText("add_new_favourite_success"));
        redrawFavouritePage();

    } else
        popupAlert(getText("ask_fill_all_contents"));
}

removeFavouritSubmit = (index) => {
    const hidden_favourites = document.getElementById("HiddenPage");
    var favourites = JSON.parse((hidden_favourites ? localStorage.getItem("hidden_favourites") : localStorage.getItem("favourites")));
    favourites.splice(index, 1);
    localStorage.setItem((hidden_favourites ? "hidden_favourites" : "favourites"), JSON.stringify(favourites));
    hideAlertWindow();
    popupAlert(getText("remove_favourite_success"));
    redrawFavouritePage();
}

loadTime = () => {
    const display_time = document.getElementById("Time");

    const time = new Date();
    display_time.innerHTML = (time.getHours() < 10 ? "0"+time.getHours() : time.getHours() )
                             + " : " +
                             (time.getMinutes() < 10 ? "0"+time.getMinutes() : time.getMinutes() )

    setTimeout(loadTime, 1000);
}

blockInputActionListener = async (event) => {
    const k = event.key;
    if(k === 'd' || k === 'D' || k === 'w' || k === 'W') {
        operateGlobalEventListener("remove");
        toolPageDeined = true;
        await new Promise((s) => {setTimeout(s, 1)});
        operateGlobalEventListener("add");
        toolPageDeined = false;
    }
}   

loadContent = () => {

    loadSettingMenu();

    const content = document.getElementById("content");
    var default_search_engine;
    if(localStorage.getItem("default_search_engine")) {
        default_search_engine = localStorage.getItem("default_search_engine");
    } else {
        localStorage.setItem("default_search_engine", "Google");
        default_search_engine = "Google";
    }

    content.innerHTML = 
        "<h1 class='Time' id='Time'></h1>" +
        "<form class='SearchForm' onsubmit='searchSubmit(event)'>" +
            "<input type='text' class='SearchBar' id='SearchBar' placeholder='"+getText('searchbar_placeholder')+"' autocomplete='off'><br>" +
            "<input type='radio' "+ (default_search_engine === "Baidu" ? "checked" : "") +" value='baidu' name='SearchEngine' title='"+getText("search_use_baidu")+"'>" +
            "<input type='radio' "+ (default_search_engine === "Google" ? "checked" : "") +" value='google' name='SearchEngine' title='"+getText("search_use_google")+"'>" +
            "<input type='radio' "+ (default_search_engine === "Bing" ? "checked" : "") +" value='bing' name='SearchEngine' title='"+getText("search_use_bing")+"'>" +
        "</form>";

    document.getElementById("SearchBar").addEventListener("keypress", blockInputActionListener);

    loadTime();
}

resetAll = () => {
    localStorage.clear();
    loadContent();
    redrawFavouritePage();
    generateSettingMenu();
}

setDefaultEngine = (engine) => {
    localStorage.setItem("default_search_engine", engine);
    loadContent();
    generateSettingMenu();
}

resetFavourite = (action) => {
    if(action === "reset") {
        localStorage.removeItem('favourites');
    } else if(action === "remove") {
        localStorage.setItem('favourites', '[]');
    }

    redrawFavouritePage();
    generateSettingMenu();
}

authorHomePage = () => {
    generateSettingMenu();
    const link = document.createElement("a");
    link.href = "https://github.com/cbh778899";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    line.remove();
}

generateFavouritePage = (hidden = false) => {

    var favourites = JSON.parse((hidden ? localStorage.getItem("hidden_favourites") : localStorage.getItem("favourites")));
    var page = (hidden ? favouritePage[2] : favouritePage[0]);

    if(favourites) {
        
        for(var i = 0; i < favourites.length; i++) {
            f = JSON.parse(favourites[i]);

            page += 
            "<a href='" + f.site + "' class='SignleBlock' target='_blank' title='" + f.site + "'>" +
                ( hidden ? "<div class='HiddenBlockCover'></div>" : "<div class='BlockCover'></div>") +
                "<img src='" + f.site + "/favicon.ico'>" +
                "<p>" + f.name + "</p>" +
            "</a>";
        }

        page += (hidden ? favouritePage[3] : favouritePage[1]);
        
        return page;

    } else {
        if(hidden) {
            page += favouritePage[3];
            return page;
        } else {
            favourites = [
                {site: "https://www.baidu.com", name: "百度"},
                {site: "https://www.google.com", name: "谷歌"},
                {site: "https://www.bilibili.com", name: "哔哩哔哩"},
                {site: "https://www.youtube.com", name: "Youtube"},
                {site: "https://fanyi.baidu.com", name: "百度翻译"},
                {site: "https://translate.google.com", name: "谷歌翻译"}
            ];

            var fav_arr = [];
            favourites.forEach((f) => {
                fav_arr.push(JSON.stringify(f));
            });
            localStorage.setItem("favourites", JSON.stringify(fav_arr));
            return generateFavouritePage();
        }
    }
}

generateSettingMenu = async () => {
    if(document.getElementById("SettingMenu")) {
        const setting_menu = document.getElementById("SettingMenu");
        setting_menu.style.top = "-5vh";
        setting_menu.style.transform = "scaleY(0.1)";

        await new Promise((s) => {setTimeout(s, 1000)});
        setting_menu.remove();
    } else {
        const setting_menu = document.createElement("div");
        setting_menu.className = "SettingMenu";
        setting_menu.id = "SettingMenu";
        setting_menu.innerHTML = static_setting_menu;
        document.body.appendChild(setting_menu);

        await new Promise((s) => {setTimeout(s, 1)});

        setting_menu.style.top = "5vh";
        setting_menu.style.transform = "none";
    }
}

showHiddenFavourites = async (event) => {
    operateGlobalEventListener('remove');
    if(event.key === 'a' || event.key === 'A') {
        const page = document.getElementById("FavouritePage");
        const hidden_page = document.createElement("div");
        hidden_page.id = "HiddenPage";
        hidden_page.classList.add("FavouritePage", "Hidden");
        hidden_page.innerHTML = generateFavouritePage(true);
        document.getElementById("side_pages").appendChild(hidden_page);
        document.body.removeEventListener("keypress", showHiddenFavourites);
        document.body.addEventListener("keypress", removeHiddenFavourites);
        addFavouritesEventListeners(true);
        
        await new Promise((s) => {setTimeout(s, 1)});
        page.style.opacity = '0';
        hidden_page.style.transform = 'none';
    }
}

removeHiddenFavourites = async (event) => {
    if(event.key === 'd' || event.key === 'D') {
        operateGlobalEventListener('add');
        const page = document.getElementById("FavouritePage");
        const hidden_page = document.getElementById("HiddenPage");
        document.body.addEventListener("keypress", showHiddenFavourites);
        document.body.removeEventListener("keypress", removeHiddenFavourites);

        page.style.opacity = '1';
        hidden_page.style.transform = 'translateX(100vw)';
        await new Promise((s) => {setTimeout(s, 1000)});
        hidden_page.remove();
    }
}

addFavouritesEventListeners = (hidden = false) => {
    const blocks = document.querySelectorAll((hidden ? '.HiddenBlockCover' : '.BlockCover'));
    var dragItem = null, endItem = null;

    blocks.forEach((elem, index) => {
        // right click listener
        elem.addEventListener('contextmenu', event=> {
            event.preventDefault();
            removeFavouritAlert(index);
            // stop hide favourite page for 1ms
            occupied = true;
            setTimeout(()=>{ occupied = false; }, 1)
        });

        // drag to switch order
        elem.parentElement.addEventListener("dragstart", event=>{
            dragItem = index;
        })

        elem.addEventListener("dragover", event=>{
            event.preventDefault();
        })

        elem.addEventListener("dragenter", event=>{
            elem.parentElement.classList.add("Over");
            endItem = index;
        })

        elem.addEventListener("dragleave", event=>{
            elem.parentElement.classList.remove("Over");
            endItem = null;
        })

        elem.addEventListener("drop", event=>{
            elem.parentElement.classList.remove("Over");

            var favourites = JSON.parse(localStorage.getItem("favourites"));
            favourites.splice(endItem, 0, favourites.splice(dragItem, 1));
            localStorage.setItem("favourites", JSON.stringify(favourites));
            redrawFavouritePage();
        })
    });
}

redrawFavouritePage = () => {
    const page = document.getElementById("FavouritePage");
    const hidden_page = document.getElementById("HiddenPage");
    if(page) {
        if(hidden_page) {
            hidden_page.innerHTML = generateFavouritePage(true);
            hidden_page.style.transform = "none";
        } else {
            page.innerHTML = generateFavouritePage();
            page.style.transform = "none";
        }
        addFavouritesEventListeners(hidden_page ? true : false);
    }
}

switchPage = async () => {
    if(document.getElementById("FavouritePage")) {
        const page = document.getElementById("FavouritePage");
        page.style.transform="translateY(100vh)";
        document.getElementById("content").className = "Show";

        document.body.removeEventListener("keypress", showHiddenFavourites);

        await new Promise((s) => {setTimeout(s, 1000)});
        page.remove();
        toolPageDeined = false;
    }
        
    else {
        const favourite_page = document.createElement("div");
        favourite_page.className = "FavouritePage";
        favourite_page.id = "FavouritePage";
        favourite_page.innerHTML = generateFavouritePage();

        document.getElementById("side_pages").appendChild(favourite_page);
        addFavouritesEventListeners();
        document.body.addEventListener("keypress", showHiddenFavourites);

        await new Promise((s) => {setTimeout(s, 1)});

        document.getElementById("content").className = "Hide";
        favourite_page.style.transform = "none";
        toolPageDeined = true;
    }
}

popupAlert = async (content) => {
    const alert_window = document.createElement("div");
    alert_window.className = "PopupAlert";
    alert_window.innerHTML = content;
    document.body.appendChild(alert_window);

    await new Promise((s)=>setTimeout(s, 100));

    alert_window.style.bottom = "55vh";
    
    setTimeout(() => alert_window.remove(), 3000);
}

hideAlertWindow = async () => {

    if(!document.getElementById("HiddenPage")) {
        operateGlobalEventListener('add');
        document.body.addEventListener("keypress", showHiddenFavourites);
    }

    const cover = document.getElementById("Cover");
    cover.className = "Hide";
    await new Promise((s)=>setTimeout(s, 1000));
    cover.remove();
}

AlertWindow = async (innerHTML) => {

    operateGlobalEventListener('remove');
    document.body.removeEventListener("keypress", showHiddenFavourites);

    const cover = document.createElement("div");
    cover.className = 'Cover';
    cover.id = "Cover";

    const window = document.createElement("div");
    window.className = "BlockAlert";
    window.innerHTML = innerHTML;
    
    cover.appendChild(window);
    document.body.appendChild(cover);

    await new Promise((s) => {setTimeout(s, 1)});

    window.style.transform = "scale(1)";

}

newFavouriteAlert = (hidden = false) => {
    if(hidden)
        AlertWindow(addNewFavourite[0]+addNewFavourite[2]+addNewFavourite[3]);
    else
        AlertWindow(addNewFavourite[0]+addNewFavourite[1]+addNewFavourite[3]);
}

removeFavouritAlert = (index) => {
    AlertWindow(getText("ask_confirm_delete_favourite")+"<br>"+
                "<button onclick='removeFavouritSubmit("+index+")'>"+getText("confirm")+"</button>"+
                "<button onclick='hideAlertWindow()'>"+getText("cancel")+"</button>");
}

closeUserManual = async (cover, manual) => {
    operateGlobalEventListener('add');
    toolPageDeined = false;
    manual.style.transform = "scale(0.1)";
    await new Promise((s)=>{setTimeout(s, 1000)});
    manual.remove();
    cover.remove();
}

userManual = async () => {

    operateGlobalEventListener('remove');
    toolPageDeined = true;
    generateSettingMenu();

    const cover = document.createElement("div");
    cover.className = "Cover";

    const manual = document.createElement("div");
    manual.id = "UserManual";
    manual.className = "UserManual";
    manual.innerHTML = static_user_manual;

    cover.appendChild(manual);
    document.body.appendChild(cover);

    await new Promise((s)=>{setTimeout(s, 1)});

    manual.style.transform = "none";

    cover.addEventListener('click', () => closeUserManual(cover, manual));
}

SLSetting = (action) => {
    if(action === "save") {
        const settings = {
            language_pack: localStorage.getItem("language_pack"),
            favourites: localStorage.getItem("favourites"),
            hidden_favourites: localStorage.getItem("hidden_favourites"),
            default_search_engine: localStorage.getItem("default_search_engine")
        };

        const setting_str = JSON.stringify(settings);

        const download = document.createElement("a");
        download.href = "data:text/plain;charset=utf-8,"+setting_str;
        download.download = "homepage.setting";

        document.body.appendChild(download);
        download.click();
        download.remove();

    } else if(action === "load") {

        handleSettingFile = (event) => {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.readAsText(file);
            reader.onload = () => {
                const result = JSON.parse(reader.result);
                localStorage.setItem("language_pack", result.language_pack);
                localStorage.setItem("favourites", result.favourites);
                localStorage.setItem("hidden_favourites", result.hidden_favourites);
                localStorage.setItem("default_search_engine", result.default_search_engine);
                location.reload();
            }
        };

        const get_setting = document.createElement("input");
        get_setting.type = "file";
        get_setting.accept = ".setting";
        get_setting.onchange = handleSettingFile;
        document.body.appendChild(get_setting);
        get_setting.click();
        get_setting.remove();
    }
}

globalRightClick = () => {
    if(!occupied)
        switchPage();
}

globalKeyPress = (event) => {
    if(!occupied &&
        (event.key === 'W' ||
        event.key === 'w' &&
        this.document.getElementById("FavouritePage") === null) ||
        (event.key === 'S' ||
        event.key === 's' &&
        this.document.getElementById("FavouritePage")))

        switchPage();
}

operateGlobalEventListener = (action) => {

    if(action === 'add') {
        document.body.addEventListener("contextmenu", globalRightClick);
        document.body.addEventListener("keypress", globalKeyPress);
    } else if(action === 'remove') {
        document.body.removeEventListener("contextmenu", globalRightClick);
        document.body.removeEventListener("keypress", globalKeyPress);
    }
}



var toolPageDeined = false;

showToolPage = async (event) => {
    if((event.key === 'a' || event.key === 'A') && toolPageDeined) {
        var tool_page = document.getElementById("ToolPage");
        if(tool_page) {
            toolPageDeined = false;
            tool_page.style.transform = 'translateX(-100vw)';
            document.getElementById("content").className = "Show";
            await new Promise((s)=>{setTimeout(s, 1000)});
            tool_page.remove();
            operateGlobalEventListener('add');
        }
    }
    else if((event.key === 'd' || event.key === 'D') && !toolPageDeined) {
        operateGlobalEventListener('remove');
        toolPageDeined = true;
        const toolPage = document.createElement("div");
        toolPage.id = 'ToolPage';
        toolPage.classList.add("FavouritePage", "ToolPage");
        document.getElementById("side_pages").appendChild(toolPage);
        new Calculator();

        await new Promise((s)=>{setTimeout(s, 1)});
        document.getElementById("content").className = "Hide";
        toolPage.style.transform = 'none';
    }
}

window.onload = () => {
    loadContent();
    document.body.addEventListener("contextmenu", (event)=>{event.preventDefault()});
    operateGlobalEventListener('add');
    document.body.addEventListener("keypress", showToolPage);
};