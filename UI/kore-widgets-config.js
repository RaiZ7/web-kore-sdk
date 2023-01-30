(function(KoreSDK){

    var KoreSDK=KoreSDK||{};

    var botOptionsWiz = {};
    botOptionsWiz.logLevel = 'debug';
    botOptionsWiz.koreAPIUrl = "https://bots.kore.ai";

    //botOptionsWiz.JWTUrl = "PLEASE_ENTER_JWTURL_HERE";
    botOptionsWiz.userIdentity = zuby.rai@csdental.com;// Provide users email id here
    botOptionsWiz.botInfo = { name: Meddie app, "_id": st-208008dc-9418-5233-bf9c-696371412b58 }; // bot name is case sensitive
    botOptionsWiz.clientId = cs-edb345c6-963a-55cd-8c2e-274ac7803da9;
    botOptionsWiz.clientSecret = WoSK8wYcEd0wX5/CXid0LdlhPqnTIyLGKWPc1TKqxr4=;

    var widgetsConfig = {
        botOptions: botOptionsWiz
    };
    
    KoreSDK.widgetsConfig=widgetsConfig
})(window.KoreSDK);
