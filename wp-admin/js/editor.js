jQuery(document).ready(function(b){var a=wpCookies.getHash("TinyMCE_content_size");if(getUserSetting("editor")=="html"){if(a){b("#content").css("height",a.ch-15+"px")}}else{if(typeof tinyMCE!="object"){b("#content").css("color","#000")}else{b("#quicktags").hide()}}});var switchEditors={mode:"",I:function(a){return document.getElementById(a)},_wp_Nop:function(b){var c,a;b=b.replace(/<(pre|script)[^>]*>[\s\S]+?<\/\1>/g,function(d){d=d.replace(/<br ?\/?>[\r\n]*/g,"<wp_temp>");return d.replace(/<\/?p( [^>]*)?>[\r\n]*/g,"<wp_temp>")});b=b.replace(/<p>[\s\u00a0]*<\/p>/g,"<wp_empty_p>");c="blockquote|ul|ol|li|table|thead|tbody|tfoot|tr|th|td|div|h[1-6]|p";b=b.replace(new RegExp("\\s*</("+c+")>\\s*","g"),"</$1>\n");b=b.replace(new RegExp("\\s*<(("+c+")[^>]*)>","g"),"\n<$1>");b=b.replace(/(<p [^>]+>.*?)<\/p>/g,"$1</p#>");b=b.replace(/<div([^>]*)>\s*<p>/gi,"<div$1>\n\n");b=b.replace(/\s*<p>/gi,"");b=b.replace(/\s*<\/p>\s*/gi,"\n\n");b=b.replace(/\n[\s\u00a0]+\n/g,"\n\n");b=b.replace(/\s*<br ?\/?>\s*/gi,"\n");b=b.replace(/\s*<div/g,"\n<div");b=b.replace(/<\/div>\s*/g,"</div>\n");b=b.replace(/\s*\[caption([^\[]+)\[\/caption\]\s*/gi,"\n\n[caption$1[/caption]\n\n");b=b.replace(/caption\]\n\n+\[caption/g,"caption]\n\n[caption");a="blockquote|ul|ol|li|table|thead|tfoot|tr|th|td|h[1-6]|pre";b=b.replace(new RegExp("\\s*<(("+a+") ?[^>]*)\\s*>","g"),"\n<$1>");b=b.replace(new RegExp("\\s*</("+a+")>\\s*","g"),"</$1>\n");b=b.replace(/<li([^>]*)>/g,"\t<li$1>");if(b.indexOf("<object")!=-1){b=b.replace(/<object[\s\S]+?<\/object>/g,function(d){return d.replace(/[\r\n]+/g,"")})}b=b.replace(/<\/p#>/g,"</p>\n");b=b.replace(/\s*(<p [^>]+>[\s\S]*?<\/p>)/g,"\n$1");b=b.replace(/^\s+/,"");b=b.replace(/[\s\u00a0]+$/,"");b=b.replace(/<wp_temp>/g,"\n");b=b.replace(/<wp_empty_p>\s*/g,"<p>&nbsp;</p>\n\n");return b},go:function(i,g){i=i||"content";g=g||this.mode||"";var b,h=this.I("quicktags"),c=this.I("edButtonHTML"),d=this.I("edButtonPreview"),a=this.I(i);try{b=tinyMCE.get(i)}catch(f){b=false}if("tinymce"==g){if(b&&!b.isHidden()){return false}setUserSetting("editor","tinymce");this.mode="html";d.className="active";c.className="";edCloseAllTags();h.style.display="none";a.style.color="#FFF";a.value=this.wpautop(a.value);try{if(b){b.show()}else{tinyMCE.execCommand("mceAddControl",false,i)}}catch(f){}a.style.color="#000"}else{setUserSetting("editor","html");a.style.color="#000";this.mode="tinymce";c.className="active";d.className="";if(b&&!b.isHidden()){a.style.height=b.getContentAreaContainer().offsetHeight+24+"px";b.hide()}h.style.display="block"}return false},_wp_Autop:function(a){var b="table|thead|tfoot|caption|col|colgroup|tbody|tr|td|th|div|dl|dd|dt|ul|ol|li|pre|select|form|blockquote|address|math|p|h[1-6]";if(a.indexOf("<object")!=-1){a=a.replace(/<object[\s\S]+?<\/object>/g,function(c){return c.replace(/[\r\n]+/g,"")})}a=a.replace(/<[^<>]+>/g,function(c){return c.replace(/[\r\n]+/g," ")});a=a+"\n\n";a=a.replace(/<br \/>\s*<br \/>/gi,"\n\n");a=a.replace(new RegExp("(<(?:"+b+")[^>]*>)","gi"),"\n$1");a=a.replace(new RegExp("(</(?:"+b+")>)","gi"),"$1\n\n");a=a.replace(/\r\n|\r/g,"\n");a=a.replace(/\n\s*\n+/g,"\n\n");a=a.replace(/([\s\S]+?)\n\n/g,"<p>$1</p>\n");a=a.replace(/<p>\s*?<\/p>/gi,"");a=a.replace(new RegExp("<p>\\s*(</?(?:"+b+")[^>]*>)\\s*</p>","gi"),"$1");a=a.replace(/<p>(<li.+?)<\/p>/gi,"$1");a=a.replace(/<p>\s*<blockquote([^>]*)>/gi,"<blockquote$1><p>");a=a.replace(/<\/blockquote>\s*<\/p>/gi,"</p></blockquote>");a=a.replace(new RegExp("<p>\\s*(</?(?:"+b+")[^>]*>)","gi"),"$1");a=a.replace(new RegExp("(</?(?:"+b+")[^>]*>)\\s*</p>","gi"),"$1");a=a.replace(/\s*\n/gi,"<br />\n");a=a.replace(new RegExp("(</?(?:"+b+")[^>]*>)\\s*<br />","gi"),"$1");a=a.replace(/<br \/>(\s*<\/?(?:p|li|div|dl|dd|dt|th|pre|td|ul|ol)>)/gi,"$1");a=a.replace(/(?:<p>|<br ?\/?>)*\s*\[caption([^\[]+)\[\/caption\]\s*(?:<\/p>|<br ?\/?>)*/gi,"[caption$1[/caption]");a=a.replace(/<(pre|script)[^>]*>[\s\S]+?<\/\1>/g,function(c){c=c.replace(/<br ?\/?>[\r\n]*/g,"\n");return c.replace(/<\/?p( [^>]*)?>[\r\n]*/g,"\n")});return a},pre_wpautop:function(b){var a=this,c={o:a,data:b,unfiltered:b};jQuery("body").trigger("beforePreWpautop",[c]);c.data=a._wp_Nop(c.data);jQuery("body").trigger("afterPreWpautop",[c]);return c.data},wpautop:function(b){var a=this,c={o:a,data:b,unfiltered:b};jQuery("body").trigger("beforeWpautop",[c]);c.data=a._wp_Autop(c.data);jQuery("body").trigger("afterWpautop",[c]);return c.data}};