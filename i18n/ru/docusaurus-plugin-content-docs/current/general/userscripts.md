---
title: Пользовательские скрипты
sidebar_position: 5
toc_max_heading_level: 4
---

Пользовательские скрипты (мы также называем их «‎расширениями»‎) — это, по сути, мини-программы, написанные на языке JavaScript. Они модифицируют или расширяют функциональность одного или нескольких сайтов. Многие пользователи AdGuard уже наверняка знакомы с такими расширениями, как Помощник AdGuard, Блокировщик всплывающей рекламы и AdGuard Extra.

:::note Supported apps

AdGuard может значительно расширять функциональность сайтов, работая как менеджер пользовательских скриптов. You can add your custom scripts or manage the existing ones in our three products: [AdGuard for Windows](/adguard-for-windows/overview), [AdGuard for Android](/adguard-for-android/overview), and [AdGuard for Mac](/adguard-for-mac/overview).

:::

## Рекомендуемые скрипты AdGuard

Эти пользовательские скрипты разработаны в AdGuard, и мы можем гарантировать, что они эффективны и безопасны. Помните: каждый раз, когда вы загружаете пользовательский скрипт из неизвестного источника, вы подвергаете себя риску, поскольку некоторые скрипты могут быть опасны для вашего компьютера. Старайтесь скачивать новые расширения только из проверенных источников, которым вы доверяете на 100%. Чуть позже мы приведём [несколько примеров](#more-userscripts) популярных сайтов.

### AdGuard Extra

An extension that blocks ads in difficult cases when the usual filter-based approach is not enough. AdGuard Extra comes pre-installed with all premium AdGuard versions, so you don't need to do anything to enable it. However, if you want to use it alongside AdGuard Browser Extension or any other ad blocker, you'll need to use an additional extension. Learn more about this userscript and how to install it on [GitHub](https://github.com/AdguardTeam/AdGuardExtra).

![AdGuard Extra](https://cdn.adtidy.org/content/kb/ad_blocker/general/adguard-extra.png)

### Блокировщик всплывающих окон

Он блокирует один из самых раздражающих типов рекламы — всплывающие окна. Learn more about this userscript, its key features, and how to install it on [GitHub](https://github.com/AdguardTeam/PopupBlocker).

![Блокировщик всплывающих окон](https://cdn.adtidy.org/content/kb/ad_blocker/general/popup-blocker-installation.png)

### AdGuard Assistant (legacy version)

Расширение, предназначенное для управления фильтрацией прямо со страницы браузера (ручная блокировка, занесение сайта в исключения и т. д.).

:::note

Это устаревшая версия Помощника и нет смысла использовать её на новых системах, потому что её давно заменил [Браузерный Помощник](https://adguard.com/adguard-assistant/overview.html). But the legacy Assistant might be of help if there is no Browser Assistant for your browser. If this is your case, your can learn how to install AdGuard Assistant on [GitHub](https://github.com/AdguardTeam/AdguardAssistant).

:::

### Отключить AMP

Скрипт, который предустановлен только в AdGuard для Android. Он отключает AMP (Accelerated Mobile Pages или «ускоренные мобильные страницы») на странице результатов поиска Google. Узнайте больше об этом пользовательском скрипте и о том, как его установить, [на GitHub](https://github.com/AdguardTeam/DisableAMP).

![Отключить AMP](https://cdn.adtidy.org/content/kb/ad_blocker/general/disable-amp-installation.png)

### microShield

Пользовательский скрипт для тех, кто посещает корейские и некоторые международные сайты. Пользовательский скрипт microShield блокирует рекламу Ad-Shield и антиблокировщики рекламы. Его исходный код доступен на [asdefuser](https://github.com/seia-soto/userscripts/tree/master/sources/asdefuser) и на [AdShield Defuser](https://github.com/seia-soto/adshield-defuser). This userscript can be installed in AdGuard CoreLibs-based apps, Violentmonkey, Tampermonkey, and [quoid/userscripts](https://github.com/quoid/userscripts). Узнайте больше о microShield и о том, как его установить, [на GitHub](https://github.com/AdguardTeam/DisableAMP).

## Где взять больше пользовательских скриптов{#more-userscripts}

По большей части пользовательские скрипты создаются любителями, поэтому, устанавливая тот или иной скрипт, нужно быть очень осторожными. Тем не менее существует великое множество интересных скриптов, которые действительно могут сделать использование некоторых сайтов более удобным.

Здесь мы опишем несколько популярных каталогов пользовательских скриптов.

### Stylish (userstyles.org)

[Userstyles.org](https://userstyles.org/) — это каталог пользовательских стилей, но при этом он позволяет выгружать их в виде скриптов. Таким образом, через AdGuard можно установить любой пользовательский стиль. Будьте осторожны, скачивая малопопулярный скрипт — он может нести угрозу.

### Greasy Fork

[Greasy Fork](https://greasyfork.org/) — каталог пользовательских скриптов от авторов Stylish. Однако, в отличие от userstyles.org, скрипты в этом каталоге проходят модерацию, так что доверие к ним намного выше.

### OpenUserJS.org

[OpenUserJS.org](https://openuserjs.org/) — каталог пользовательских скриптов с открытым кодом, написанный на nodeJS. В нём нет модерации, поэтому будьте внимательны к любым подозрительным скриптам.

### Сообщество

Если вы хотите персонализировать браузер при помощи пользовательских скриптов и у вас есть какие-либо вопросы на эту тему, задать их можно на любом из этих сайтов:

- [Stackoverflow](https://stackoverflow.com/questions/tagged/userscripts)
- [FreeNode](https://webchat.freenode.net/#greasemonkey)
- [Reddit](https://www.reddit.com/r/userscripts/)

## Разработка

### Запросить лицензию

Если вы разрабатываете свой пользовательский скрипт и хотите протестировать, как он работает с AdGuard, запросите бета-лицензию для приложения.

Для этого отправьте нам сообщение devteam@adguard.com со следующей информацией:

**Тема:** Запрос лицензии для автора пользовательского скрипта

**Текст письма:** Расскажите о пользовательском скрипте, над которым вы работаете.

Нажмите [сюда](mailto:devteam@adguard.com?Subject=Userscript%20author%20license%20request&Body=Hello%2C%0A%0AMy%20userscript%28s%29%3A%20LINK), чтобы отправить письмо.

### Совместимость

#### Блок метаданных

##### Поддерживаемые свойства

```text
@name
@namespace
@description
@version
@match
@include
@exclude
@grant
@connect
@require
@resource
@downloadURL
@updateURL
@supportURL
@homepageURL
@homepage
@website
@source
@run-at
@noframes
@icon
@iconURL
@defaulticon
@icon64
@icon64URL
```

##### Неподдерживаемые свойства

AdGuard проигнорирует эти свойства.

```text
@unwrap
```

#### Поддерживаемые функции GM

AdGuard поддерживает как старые функции GM\_, так и новый GM4 API, использующий объект GM.

##### Значения

:::note

Все перечисленные функции Greasemonkey устарели, но всё ещё поддерживаются.

:::

```text
GM.info / GM_info
GM.setValue / GM_setValue
GM.getValue / GM_getValue
GM.listValues / GM_listValues
GM.deleteValue / GM_deleteValue
GM.getResourceUrl / GM_getResourceURL
GM.setClipboard / GM_setClipboard
GM.xmlHttpRequest / GM_xmlhttpRequest
GM.openInTab / GM_openInTab
GM.notification
unsafeWindow
GM_getResourceText
GM_addStyle
GM_log
```

[Здесь](https://wiki.greasespot.net/GM.info) вы найдёте больше информации о Greasemonkey API.

### Пример

```javascript
// ==UserScript==
// @name Имя, которое показывается пользователю, если локаль английская или неизвестна
// @name:ru Имя, которое показывается пользователю, если локаль русская
// @description Описание, которое показывается пользователю, если локаль английская или неизвестна
// @description:ru Описание, которое показывается пользователю, если локаль русская
// @icon https://myhomepage.com/myuserscript.png
// @version 1.0.0.0
// @downloadURL https://dl.myhomepage.org/myuserscript.user.js
// @updateURL https://dl.myhomepage.org/myuserscript.meta.js
// @homepageURL https://myhomepage. com/myuserscript
// @include *
// @exclude *://website.com/*
// @resource https://myhomepage.com/myuserscript.css
// @require https://myhomepage. com/mylibrary.js
// @grant свойство: настройки
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_deleteValue
// @grant GM_listValues
// @grant GM_getResourceText
// @grant GM_getResourceURL
// @grant GM_addStyle
// @grant GM_log
// @grant GM_setClipboard
// @grant GM_xmlhttpRequest
// @grant unsafeWindow
// @grant GM_info
// @grant GM_openInTab
// @grant GM_registerMenuCommand
// @run-at document-start
// ==/UserScript==
! function(){(
    console.log("I am loaded!");
)}();
```
