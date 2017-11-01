const cloudrail = require("cloudrail-si");
cloudrail.Settings.setKey("[Login to see your license key]");

let service;

const box = new cloudrail.services.Box(
    cloudrail.RedirectReceivers.getLocalAuthenticator(8082),
    "[Box Client Identifier]",
    "[Box Client Secret]",
    "http://localhost:8082/auth",
    "someState"
);

const dropbox = new cloudrail.services.Dropbox(
    cloudrail.RedirectReceivers.getLocalAuthenticator(8082),
    "[Dropbox Client Identifier]",
    "[Dropbox Client Secret]",
    "http://localhost:8082/auth",
    "someState"
);

// 'selection' is a String representing e.g. a user's service choice
switch(selection) {
    case "box": service = box; break;
    case "dropbox": service = dropbox; break;
}

service.download(
    "/myFolder/myFile.png",
    (error, result) => {
        // Check for potential error and use the result
    }
);
