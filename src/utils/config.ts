export interface Config {
    editorArea: boolean;
    previewArea: boolean;
    themeArea: boolean;
}

let GlobalConfig = {
    editorArea: true,
    previewArea: true,
    themeArea: false,
};

export function setConfig(config: Config) {
    GlobalConfig = {...config};
    localStorage.setItem("config", JSON.stringify(GlobalConfig));
}

export function getConfig() {
    let config = localStorage.getItem("config");
    // @ts-ignore
    config ? (GlobalConfig = JSON.parse(config)) : "";
    return GlobalConfig;
}
