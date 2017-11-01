const cloudrail = require("cloudrail-si");
cloudrail.Settings.setKey("[CloudRail License Key]");

// let cs = new cloudrail.services.Box(redirectReceiver, "[clientIdentifier]", "[clientSecret]", "[redirectUri]", "[state]");
// let cs = new cloudrail.services.OneDrive(redirectReceiver, "[clientIdentifier]", "[clientSecret]", "[redirectUri]", "[state]");
// let cs = new cloudrail.services.OneDriveBusiness(redirectReceiver, "[clientIdentifier]", "[clientSecret]", "[redirectUri]", "[state]");
// let cs = new cloudrail.services.GoogleDrive(redirectReceiver, "[clientIdentifier]", "[clientSecret]", "[redirectUri]", "[state]");
let cs = new cloudrail.services.Dropbox(redirectReceiver, "[clientIdentifier]", "[clientSecret]", "[redirectUri]", "[state]");

cs.createFolder("/TestFolder", (err) => { // <---
    if (err) throw err;
    let fileStream = fs.createReadStream("UserData.csv");
    let size = fs.statSync("UserData.csv").size;
    cs.upload("/TestFolder/Data.csv", fileStream, size, false, (err) => { // <---
        if (err) throw err;
        console.log("Upload successfully finished");
    });
});
