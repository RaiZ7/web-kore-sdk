(function(KoreSDK){

    var KoreSDK=KoreSDK||{};

    var botOptionsWiz = {};
    botOptionsWiz.logLevel = 'debug';
    botOptionsWiz.koreAPIUrl = "https://bots.kore.ai";

    botOptionsWiz.JWTUrl = "http://localhost:3000/";
    botOptionsWiz.userIdentity = 'zuby.rao@csdental.com';// Provide users email id here
    botOptionsWiz.botInfo = { name: "Meddie app", "_id": "st-208008dc-9418-5233-bf9c-696371412b58" }; // bot name is case sensitive
    botOptionsWiz.clientId = "st-208008dc-9418-5233-bf9c-696371412b58";
    botOptionsWiz.clientSecret = "WoSK8wYcEd0wX5/CXid0LdlhPqnTIyLGKWPc1TKqxr4=";

    var widgetsConfig = {
        botOptions: botOptionsWiz
    };
    
    KoreSDK.widgetsConfig=widgetsConfig
})(window.KoreSDK);
