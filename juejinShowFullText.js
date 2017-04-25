// ==UserScript==
// @name         掘金文章免登录展开全文
// @namespace    haseeer@gmail.com
// @version      0.1.1
// @description  掘金文章免登录自动展开全文
// @author       shilx
// @match        https://juejin.im/post/*
// ==/UserScript==

(function() {
    'use strict';
    var timeid;
    function checkBlock(){
        timeid=setTimeout(function(){
            console.log(timeid);
            if (document.querySelector(".show-full")===null){
                checkBlock();
            }else{
                clearTimeout(timeid);
                document.querySelector(".show-full").remove();
                document.querySelector(".show-full-block").remove();
                document.querySelector(".post-content-container").style.maxHeight="";
            }
        },300);
    }
    checkBlock();
})();
