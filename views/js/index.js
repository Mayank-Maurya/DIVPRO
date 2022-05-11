console.log("this is ready");
$(window).on('load', function() {
    console.log("website is reloaded")
});
function getstring(output)
{
let div=document.createElement('div');
div.innerHTML=output;
return div.firstElementChild;
}

let headerbox=document.getElementById('headersbox');
let mainUrl = "https://competitive-coding-api.herokuapp.com/api" ;
   
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



let CODECHEF=document.getElementById('CODECHEF');
CODECHEF.addEventListener('click',()=>{
  console.log("Codechef is clicked")
    document.getElementById('json-renderer').value="Please wait....";
    let url=document.getElementById('url').value;    
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


let LEETCODE=document.getElementById('LEETCODE');
LEETCODE.addEventListener('click',()=>{
  console.log("LEETCODE is clicked")
    document.getElementById('json-renderer').value="Please wait....";
    let url=document.getElementById('url').value;    
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



let CODEFORCES=document.getElementById('CODEFORCES');
CODEFORCES.addEventListener('click',()=>{
  console.log("CODEFORCES is clicked")
    document.getElementById('json-renderer').value="Please wait....";
    let url=document.getElementById('url').value;    
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



let GITHUB=document.getElementById('GITHUB');
GITHUB.addEventListener('click',()=>{
  console.log("GITHUB is clicked")
    document.getElementById('json-renderer').value="Please wait....";
    let url=document.getElementById('url').value;    
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



