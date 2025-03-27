// ==UserScript==
// @name            World Economics Enhanced
// @name:fr         World Economics Amélioré
// @name:pt         World Economics Melhorado
// @namespace       Altansar
// @version         1.0
// @description     Enhance your experience at World Economics.
// @description:fr  Améliorez votre expérience sur World Economics.
// @description:pt  Melhorar a sua experiência no World Economics.
// @author          Altansar
// @match           *://*.worldeconomics.com/*
// @icon            https://i.ibb.co/g51Dp45/favicon.png
// @grant           GM_addStyle
// @grant           GM_xmlhttpRequest
// @grant           GM_setValue
// @grant           GM_getValue
// @grant           GM_deleteValue
// @grant           GM_notification
// @grant           GM_addElement
// @run-at          document-idle
// @homepageURL     https://github.com/Altansar69/World-Economics-Enhanced
// @updateURL       https://raw.githubusercontent.com/Altansar69/World-Economics-Enhanced/master/cs-rin-ru-enhanced-mod.user.js
// @downloadURL     https://raw.githubusercontent.com/Altansar69/World-Economics-Enhanced/master/cs-rin-ru-enhanced-mod.user.js
// ==/UserScript==

(function(){
    RemoveRestrictionPopup();
    CopyDataButton();
})();

function CopyDataButton()
{
    if(document.querySelectorAll(".tableData tbody .trRegular").length != 0)
    {
        const button = document.createElement("button");
        button.textContent = "Copier les données";
        button.style.position = "fixed";
        button.style.bottom = "20px";
        button.style.right = "20px";
        button.style.padding = "10px 15px";
        button.style.backgroundColor = "#007bff";
        button.style.color = "white";
        button.style.border = "none";
        button.style.borderRadius = "5px";
        button.style.cursor = "pointer";
        document.body.appendChild(button);

        button.addEventListener("click", () => {
            const rows = document.querySelectorAll(".tableData tbody .trRegular");
            let textToCopy = "";

            rows.forEach(row => {
                const cells = row.querySelectorAll("[class^='tb']");
                const rowData = Array.from(cells).map(cell => cell.textContent.trim()).join(" ");
                textToCopy += rowData + "\n";
            });

            navigator.clipboard.writeText(textToCopy).then(() => {
                alert("Text successfully copied!");
            }).catch(err => {
                console.error("Copy error :", err);
            });
        });
    }
}

function RemoveRestrictionPopup()
{
    if(document.getElementById("scrollable") !== null )
    {
        document.getElementById("scrollable").remove();
    }
    document.body.style.overflow = "auto";
}
