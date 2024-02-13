const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const utils = require('./utils')

var test_id;
var lab_name;
const sendRequest = async (tipo, data, path = "run/") => {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest()
        var url = process.env.TU_SERVER + path
        var token = Buffer.from(process.env.TU_USERNAME + ':' + process.env.TU_PASSWORD).toString('base64')
        xhr.open(tipo.toUpperCase(), url, true)
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.setRequestHeader('Accept', 'application/json')
        xhr.setRequestHeader('Authorization', 'Basic ' + token)
        xhr.onload = function () {
            if (xhr.status === 200 || xhr.status === 201) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(new Error(`Error: ${xhr.error + '(' + xhr.status + ')'}`));
            }
        };
        xhr.send(data)
    });
}

const TestStatus = async (scenario) => {
    var data = JSON.stringify({
        test_id: test_id,
        status: scenario.result.status.toLowerCase(),
        lab_name: lab_name
    })
    var json = await sendRequest("POST", data)
    console.log(json.summary + " con status " + json.status + " actualizado en lab: " + lab_name);
}

const getTestId = async (scenario) => {
    let json = await sendRequest("get", "", "run/?suite_name=Regresion&summary=" + scenario.pickle.name)
    test_id = await json.objects[0].automation_id;
    console.log(await test_id);

}
const crateLab = async () => {
    var data = JSON.stringify({
        name: utils.getDate2(),
        branch_id: "zb245kx7i6nxidraeqreuzyuslloqukd"
    })
    let json = await sendRequest("POST", data, "lab/")
    lab_name = await json.full_name
    console.log(await "Se creo el lab: "+ lab_name);
}

module.exports = {
    TestStatus,
    getTestId,
    crateLab,
}
