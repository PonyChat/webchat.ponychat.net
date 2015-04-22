conf = qwebirc.config.load({
    "ui": {
        "fg_color": "000000",
        "fg_sec_color": "333333",
        "privacy": false,
        "nick_status": true,
        "flash_on_mention": false,
        "dedicated_msg_window": false,
        "bg_color": "ffffff",
        "dedicated_notice_window": false,
        "lastpos_line": true,
        "hide_joinparts": true,
        "simple_color": false,
        "beep_on_mention": true,
        "nick_click_query": false,
        "nick_colors": false
    },
    "atheme": {
        "sasl_type": "PLAIN",
        "nickserv_login": true,
        "chan_list_on_start": false,
        "chan_list": false,
        "chan_list_cloud_view": false
    },
    "frontend": {
        "chan_prompt": true,
        "initial_chans": "#ponychat",
        "prompt": true,
        "chan_autoconnect": true,
        "base_url": "",
        "dynamic_base_url": "",
        "app_title": "PonyChat Webchat",
        "initial_nick": "pony_....",
        "static_base_url": "",
        "network_name": "PonyChat",
        "connections": ["websocket", "flash"]
    },
    "flash": {
        // SERVER: Hostname (or IP address) of IRC server to connect to.
        "server": "irc.ipv4.ponychat.net",

        // PORT: Port of IRC server to connect to.
        "port": 6667,

        // XMLPORT: Port of IRC servers flash policy daemon
        "xmlport": 8430,
    },
    "websocket": {
        // URL: URL of IRC server to connect to.
        "url": "ws://irc.ponychat.net:6767/"
    }
});

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

conf.frontend.initial_chans = (function() {
        var list = getParameterByName("autojoin");
        if(list != "") {
                return list;
        }

        return "#ponychat";
})()
