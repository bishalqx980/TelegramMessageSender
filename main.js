
// Onload
function load() {
    alert("still many work have to do...")
    var year = new Date().getFullYear();
    document.getElementById("year").innerHTML = year;
    var bot_api = localStorage.getItem("bot_api")
    var chat_id = localStorage.getItem("chat_id")
    var user_id = localStorage.getItem("user_id")
    document.getElementById("bot_api").value = bot_api;
    document.getElementById("chat_id").value = chat_id;
    document.getElementById("user_id").value = user_id;
}
// localStorage
function save_value() {
    var bot_api = document.getElementById("bot_api").value;
    var chat_id = document.getElementById("chat_id").value;
    var user_id = document.getElementById("user_id").value;        
    localStorage.setItem("bot_api", bot_api)
    localStorage.setItem("chat_id", chat_id)
    localStorage.setItem("user_id", user_id)
    document.getElementById("server_response").innerHTML = "<b>Value Saved Successfully!</b>"
}
function show_advance_option() {
    var get_div = document.getElementById("group_btn")
    var get_btn = document.getElementById("advance_option_btn")
    if (get_div.style.display == "none") {
        get_div.style.display = ""
        get_btn.innerHTML = "Hide Advance Option's"
    }else {
        get_div.style.display = "none"
        get_btn.innerHTML = "Show Advance Option's"
    }
}
// Special Method's
function get_chatinfo() {
    var bot_api = document.getElementById("bot_api").value;
    var chat_id = document.getElementById("chat_id").value;
    var url = `https://api.telegram.org/bot${bot_api}/getChat?chat_id=${chat_id}`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    api.onload = function() {
        var api_res = api.status;
        var server_response = document.getElementById("server_response");
        var server_update_response = document.getElementById("server_update_response");
        if (api_res == 200) {
            var json = api.response;
            var data = JSON.parse(json);
            var output_data = {};
            for (var key in data) {
                output_data[key] = data[key];
            }
            var output_json = JSON.stringify(output_data);
            server_update_response.innerHTML = output_json 
            server_update_response.scrollTop = server_update_response.scrollHeight;
            server_response.innerHTML = "<b>Info Generated!</b>"
        }else {
            server_response.innerHTML = "<b>Error »</b><br>" + api_res + api.response
        }
    }
}
function get_admin() {
    var bot_api = document.getElementById("bot_api").value;
    var chat_id = document.getElementById("chat_id").value;
    var url = `https://api.telegram.org/bot${bot_api}/getChatAdministrators?chat_id=${chat_id}`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    api.onload = function() {
        var api_res = api.status;
        var server_response = document.getElementById("server_response");
        var server_update_response = document.getElementById("server_update_response");
        if (api_res == 200) {
            var json = api.response;
            var data = JSON.parse(json);
            var output_data = {};
            for (var key in data) {
                output_data[key] = data[key];
            }
            var output_json = JSON.stringify(output_data);
            server_update_response.innerHTML = output_json 
            server_update_response.scrollTop = server_update_response.scrollHeight;
            server_response.innerHTML = "<b>Group/Channel Admin list Generated!</b>"
        }else {
            server_response.innerHTML = "<b>Error »</b><br>" + api_res + api.response
        }
    }
}
function get_member() {
    var bot_api = document.getElementById("bot_api").value;
    var chat_id = document.getElementById("chat_id").value;
    var url = `https://api.telegram.org/bot${bot_api}/getChatMemberCount?chat_id=${chat_id}`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    api.onload = function() {
        var api_res = api.status;
        var server_response = document.getElementById("server_response");
        var server_update_response = document.getElementById("server_update_response");
        if (api_res == 200) {
            var json = api.response;
            var data = JSON.parse(json);
            var output_data = {};
            for (var key in data) {
                output_data[key] = data[key];
            }
            var output_json = JSON.stringify(output_data);
            server_update_response.innerHTML = output_json 
            server_update_response.scrollTop = server_update_response.scrollHeight;
            server_response.innerHTML = "<b>Group/Channel Members [number] Generated!</b>"
        }else {
            server_response.innerHTML = "<b>Error »</b><br>" + api_res + api.response
        }
    }
}
function get_memberinfo() {
    var bot_api = document.getElementById("bot_api").value;
    var chat_id = document.getElementById("chat_id").value;
    var user_id = document.getElementById("user_id").value;
    var url = `https://api.telegram.org/bot${bot_api}/getChatMember?chat_id=${chat_id}&user_id=${user_id}`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    api.onload = function() {
        var api_res = api.status;
        var server_response = document.getElementById("server_response");
        var server_update_response = document.getElementById("server_update_response");
        if (api_res == 200) {
            var json = api.response;
            var data = JSON.parse(json);
            var output_data = {};
            for (var key in data) {
                output_data[key] = data[key];
            }
            var output_json = JSON.stringify(output_data);
            server_update_response.innerHTML = output_json 
            server_update_response.scrollTop = server_update_response.scrollHeight;
            server_response.innerHTML = "<b>Group/Channel Specific Member Info Generated!</b>"
        }else {
            server_response.innerHTML = "<b>Error »</b><br>" + api_res + api.response
        }
    }
}
function leave_chat() {
    var check = prompt("⚠ Type 'LEAVE' then click 'OK' if you really want to leave the Group/Channel!\n\nElse Cancel this!")
    if (check == "LEAVE") {
        leave_chat_confirm()
        alert("Group/Channel Left Succesfully!")
    }else {
        alert("You typed Wrong Word or you canceled this!")
    }
}
function leave_chat_confirm() {
    var bot_api = document.getElementById("bot_api").value;
    var chat_id = document.getElementById("chat_id").value;
    var url = `https://api.telegram.org/bot${bot_api}/leaveChat?chat_id=${chat_id}`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    api.onload = function() {
        var api_res = api.status;
        var server_response = document.getElementById("server_response");
        var server_update_response = document.getElementById("server_update_response");
        if (api_res == 200) {
            var json = api.response;
            var data = JSON.parse(json);
            var output_data = {};
            for (var key in data) {
                output_data[key] = data[key];
            }
            var output_json = JSON.stringify(output_data);
            server_update_response.innerHTML = output_json 
            server_update_response.scrollTop = server_update_response.scrollHeight;
            server_response.innerHTML = "<b>Group/Channel Left Succesfully!</b>"
        }else {
            server_response.innerHTML = "<b>Error »</b><br>" + api_res + api.response
        }
    }
}
// sendMessage
function sendmsg() {
    var bot_api = document.getElementById("bot_api").value;
    var chat_id = document.getElementById("chat_id").value;
    var message = document.getElementById("message").value;
    var url = `https://api.telegram.org/bot${bot_api}/sendMessage?chat_id=${chat_id}&parse_mode=HTML&text=${message}`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    api.onload = function() {
        var api_res = api.status;
        var server_response = document.getElementById("server_response");
        if (api_res == 200) {
            server_response.innerHTML = "<b>Message Sent!</b>"
        }else {
            server_response.innerHTML = "<b>Message not Sent! »</b><br>" + api_res + api.response
        }
    }
}
// Check_message_length
function check_length() {
    var textarea = document.getElementById("message");
    var server_response = document.getElementById("server_response")
    if (textarea.value.length > 1800) {
        server_response.innerHTML = "Error » Inputed text is: " + textarea.value.length + " | Max_length: 1800"
    }else {
        server_response.innerHTML = "Inputed text is: " + textarea.value.length
    }
}
// sendPhoto
function sendphoto() {
    var bot_api = document.getElementById("bot_api").value;
    var chat_id = document.getElementById("chat_id").value;
    var message = document.getElementById("message").value;
    var url = `https://api.telegram.org/bot${bot_api}/sendPhoto?chat_id=${chat_id}&parse_mode=HTML&photo=${message}`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    api.onload = function() {
        var api_res = api.status;
        var server_response = document.getElementById("server_response");
        if (api_res == 200) {
            server_response.innerHTML = "<b>Photo Sent!</b>"
        }else {
            server_response.innerHTML = "<b>Photo not Sent! »</b><br>" + api_res + api.response
        }
    }
}    
// getUpdates
function get_update() {
    var bot_api = document.getElementById("bot_api").value;
    var url = `https://api.telegram.org/bot${bot_api}/getUpdates`;
    
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    api.onload = function() {
        var api_res = api.status;
        var server_update_response = document.getElementById("server_update_response");
        if (api_res == 200) {
            var json = api.response;
            var data = JSON.parse(json);
            var output_data = {};
            for (var key in data) {
                output_data[key] = data[key];
            }
            var output_json = JSON.stringify(output_data);
            server_update_response.innerHTML = output_json 
            server_update_response.scrollTop = server_update_response.scrollHeight;
        }else {
            server_update_response.innerHTML = "<b>Error »</b><br>" + api_res + api.response
        }
    }
}
// font button
function bold_font() {
    document.getElementById("message").value += "<b>YOUR_TEXT_HERE</b>"
}
function italic_font() {
    document.getElementById("message").value += "<i>YOUR_TEXT_HERE</i>"
}
function underline_font() {
    document.getElementById("message").value += "<u>YOUR_TEXT_HERE</u>"
}
function strikethrough_font() {
    document.getElementById("message").value += "<s>YOUR_TEXT_HERE</s>"
}
function monospace_font() {
    document.getElementById("message").value += "<pre>YOUR_TEXT_HERE</pre>"
}
function spoiler_font() {
    document.getElementById("message").value += "<tg-spoiler>YOUR_TEXT_HERE</tg-spoiler>"
}
function createlink_font() {
    document.getElementById("message").value += "<a href='http://www.example.com/'>YOUR_TEXT_HERE</a>"
}