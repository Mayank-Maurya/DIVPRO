console.log("this is ready");
function getstring(output)
{
let div=document.createElement('div');
div.innerHTML=output;
return div.firstElementChild;
}

let headerbox=document.getElementById('headersbox');
let mainUrl = "https://competitive-coding-api.herokuapp.com/api" ;


let CODECHEF=document.getElementById('CODECHEF');
let LEETCODE=document.getElementById('LEETCODE');
let GITHUB=document.getElementById('GITHUB');
let CODEFORCES=document.getElementById('CODEFORCES');
let name=document.getElementById('name');
let Logout=document.getElementById('logoutData');
let editDetail=document.getElementById('editData');


$(window).on('load', function() {
    let baseurl = "http://localhost:5001/user?username=";
    const pg = document.URL;
    let name = pg.split("=")

    let mainUrl = `${baseurl}${name[1]}`;
    console.log(mainUrl)
    fetch(mainUrl).then(data=>{
        console.log(data);
        return data.json()    
    }).then(res=>{
        console.log(res)
        $('#name').text(res.UserName);
        GITHUB.value = res.GithubHandle;
        LEETCODE.value = res.LeetcodeHandle;
        CODEFORCES.value = res.CodeForcesHandle;
        CODECHEF.value = res.CodeChefHandle;
    })
});




   
// let submit=document.getElementById('submit');
// submit.addEventListener('click',()=>{

//     document.getElementById('json-renderer').value="Please wait....";
//     let url=document.getElementById('url').value;    
//     const proxyurl = "https://cors-anywhere.herokuapp.com/";

//     fetch(proxyurl+url).then(data=>{
//         // this convert into json facts 
//         return data.json()    
//     })
//     .then(res=>{
//         // console.log(res)
//         $('#json-renderer').jsonViewer(res, {
//         // collapsed:true,
//         withQuotes:false,
//         // withLinks:false,
//         rootCollapsable:false
//         });   
//     })
// })




CODECHEF.addEventListener('click',()=>{
  console.log("Codechef is clicked")
    document.getElementById('json-renderer').value="Please wait....";
    let url=CODECHEF.value;    
    const proxyurl = ""; 
    let baseurl = `${mainUrl}/codechef/${url}`;

    fetch(proxyurl+baseurl).then(data=>{
        // this convert into json facts 
        return data.json()    
    })
    .then(res=>{
        // console.log(res)
        $('#json-renderer').jsonViewer(res, {
        // collapsed:true,
        withQuotes:false,
        // withLinks:false,
        rootCollapsable:false
        });   
    })
})



LEETCODE.addEventListener('click',()=>{
  console.log("LEETCODE is clicked")
    document.getElementById('json-renderer').value="Please wait....";
    let url=LEETCODE.value;    
    const proxyurl = "";

    let baseurl = `${mainUrl}/leetcode/${url}`;

    fetch(proxyurl+baseurl).then(data=>{
        // this convert into json facts 
        return data.json()    
    })
    .then(res=>{
        // console.log(res)
        $('#json-renderer').jsonViewer(res, {
        // collapsed:true,
        withQuotes:false,
        // withLinks:false,
        rootCollapsable:false
        });   
    })
})



CODEFORCES.addEventListener('click',()=>{
  console.log("CODEFORCES is clicked")
    document.getElementById('json-renderer').value="Please wait....";
    let url=CODEFORCES.value;    
    const proxyurl = "";

    let baseurl = `${mainUrl}/codeforces/${url}`;

    fetch(proxyurl+baseurl).then(data=>{
        // this convert into json facts 
        return data.json()    
    })
    .then(res=>{
        // console.log(res)
        $('#json-renderer').jsonViewer(res, {
        // collapsed:true,
        withQuotes:false,
        // withLinks:false,
        rootCollapsable:false
        });   
    })
})



GITHUB.addEventListener('click',()=>{
  console.log("GITHUB is clicked")
    document.getElementById('json-renderer').value="Please wait....";
    let url=GITHUB.value;    
    const proxyurl = "";

    let baseurl = `https://api.github.com/users/${url}`;

    fetch(proxyurl+baseurl).then(data=>{
        // this convert into json facts 
        return data.json()    
    })
    .then(res=>{
        // console.log(res)
        $('#json-renderer').jsonViewer(res, {
        // collapsed:true,
        withQuotes:false,
        // withLinks:false,
        rootCollapsable:false
        });   
    })
})

Logout.addEventListener('click',()=>{
    let baseurl = "http://localhost:5001/logout";
    fetch(baseurl).then(data=>{
        window.location.href = "LoginSignup.html";
    })
})

editDetail.addEventListener('click',()=>{
    window.location.href = "UserDetaills.html";
})

