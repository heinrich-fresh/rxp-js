
export interface Realex{
    setHppUrl(url:string):void;
    lightbox:Lightbox;
    embedded:Embedded;
    init(idOfLightboxButton:string, merchantUrl:string, serverSdkJson:Object):InitReturn;
    redirect:Redirect;
    _internal:any;
}
interface Embedded{
    init(idOfLightboxButton:string,idOfIframe:string, merchantUrl:string, serverSdkJson:Object):void;
}
interface Redirect{
    init(idOfLightboxButton:string, merchantUrl:string, serverSdkJson:Object):void; 
}
interface Lightbox{
    init(idOfLightboxButton:string, merchantUrl:string, serverSdkJson:Object):void;
}

interface InitReturn{
    lightbox():void;
    close():void;
    setToken():void;
}