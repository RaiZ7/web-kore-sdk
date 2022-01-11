

import {
    chatConfig,
    chatWindow,
    widgetsConfig,
    KoreWidgetSDK

} from '../../../dist/kore-web-sdk.esm.browser.js';

const wizSelector = {
    menu: ".kr-wiz-menu-chat",
    content: ".kr-wiz-content-chat"
}
let wSdk = new KoreWidgetSDK(widgetsConfig);

chatConfig.widgetSDKInstace=wSdk;
let chatWindowInstance = new chatWindow(chatConfig);


chatWindowInstance.getJWT(chatConfig.botOptions).then(function(res){
    chatWindowInstance.setJWT(res.jwt);
    chatWindowInstance.show();

    wSdk.setJWT(res.jwt);
    wSdk.show(widgetsConfig, wizSelector);

},function(errRes){

});


           