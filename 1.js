//作业1
//get

const xhr1 = new XMLHttpRequest()
xhr1.open("GET", "http://39.107.142.107:3000/mock/25/getText", true)
xhr1.send()
xhr1.onreadystatechange = function () {
    if (xhr1.readyState === 4) {
        if (xhr1.status === 200) {
            console.log(JSON.parse(xhr1.responseText))
            console.log('请求成功')
        } else {
            console.log('请求失败')
        }
    }
}
//post
let msg = {
    "name": 'lovia'
}
const xhr2 = new XMLHttpRequest()
xhr2.open("POST", "http://39.107.142.107:3000/mock/25/testPost", true)
xhr2.setRequestHeader('Content-type', 'application/json')
xhr2.send(JSON.stringify(msg))
xhr2.onreadystatechange = function () {
    if (xhr2.readyState === 4) {
        if (xhr2.status === 200) {
            console.log(JSON.parse(xhr2.responseText))
            console.log('请求成功')
        } else {
            console.log('请求失败')
        }
    }
}

//作业2
//get
fetch("http://39.107.142.107:3000/mock/25/getText")
.then(response => response.json()).then(console.log)
//post
fetch("http://39.107.142.107:3000/mock/25/testPost", {
    body: JSON.stringify(msg), 
    credentials: 'same-origin',
    headers: {
        'content-type': 'application/json'
    },
    method: 'POST',
})
.then(response => response.json()).then(console.log)

//作业3
//get
const getJSON = function (url, head1,head2, type, body) {
    const promise = new Promise(function (resolve, reject) {
            const handler = function () {
               

                if (this.readyState !== 4) {
                    return;
                }
                if (this.status === 200) {
                    resolve(this.response);
                } else {
                    reject(new Error(this.statusText))
                }
            }
            const client = new XMLHttpRequest()
            
            if (type === 'GET') {
                client.open(type, url)
                client.setRequestHeader(head1,head2)
                client.onreadystatechange = handler
                client.responseType = "json";
                client.send()
            }

            if (type === 'POST') {
                client.open(type, url)
                client.setRequestHeader(head1,head2)
                client.onreadystatechange = handler
                client.send(JSON.stringify(body))
            }});
    return promise;
}
getJSON("http://39.107.142.107:3000/mock/25/getText","Content-Type", "application/x-www-form-urlencoded", 'GET', )
    .then((resolve) => {
        console.log(resolve)
    })
    .catch((reject) => {
        console.log(reject)
    })
getJSON("http://39.107.142.107:3000/mock/25/testPost",'Content-Type','application/json', 'POST', msg)
    .then((resolve) => {
        console.log(resolve)
    })
    .catch((reject) => {
        console.log(reject)
    })
