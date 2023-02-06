let PF = [
    {Question:`Which one is a pointer?`,options:[`double a;`,`string apple;`,`Book brother;`,`string *p;`],answer:`string *p;`},
    {Question:`Which one is a double pointer?`,options:[`int *a;`,`double **b;`,`float weight;`,`string *work;`],answer:`double **b;`},
    {Question:`Which one is int variable?`,options:[`float blockNo;`,`int b;`,`Human wasif;`,`string *s;`],answer:`int b;`},
    {Question:`Which one is class object?`,options:[`int counter;`,`float b;`,`Animal c;`,`string name;`],answer:`Animal c;`},
    {Question:`Which one is a not pointer?`,options:[`int **length;`,`double **b;`,`Animal c;`,`string ****s;`],answer:`Animal c;`}
]

let WEB = [
    {Question:`What is HTML?`,options:[`HTML describes the structure of a webpage`,`HTML is the standard markup language mainly used to create web pages`,`HTML consists of a set of elements that helps the browser how to view the content`,`All of the mentioned`],answer:`All of the mentioned`},
    {Question:`Who is the father of HTML?`,options:[`Rasmus Lerdorf`,`Tim Berners-Lee`,`Brendan Eich`,`Sergey Brin`],answer:`Tim Berners-Lee`},
    {Question:`Which of the following is used to read an HTML page and render it?`,options:[`Web server`,`Web network`,`Web browser`,`Web matrix`],answer:`Web browser`},

    {Question:`What is DOM in HTML?`,options:[`Language dependent application programming`,`Hierarchy of objects in ASP.NET`,`Application programming interface`,`Convention for representing and interacting with objects in html documents`],answer:`Convention for representing and interacting with objects in html documents`},
    {Question:`Which of the following tag is used for inserting the largest heading in HTML?`,options:[`head`,`<h1>`,`<h6>`,`heading`],answer:`<h1>`},
    {Question:`Which element is used to get highlighted text in HTML5?`,options:[`<u>`,`<mark>`,`<highlight>`,`<b>`],answer:`<mark>`},

    {Question:`Which of the following is not the element associated with the HTML table layout?`,options:[`alignment`,`color`,`size`,`spanning`],answer:`color`},
    {Question:`Which element is used for or styling HTML5 layout?`,options:[`CSS`,`jQuery`,`JavaScript`,`PHP`],answer:`CSS`},
    {Question:`HTML is a subset of ___________`,options:[`SGMT`,`SGML`,`SGME`,`XHTML`],answer:`SGML`} ,

    {Question:`Among the following, which is the HTML paragraph tag?`,options:[`<p>`,`<pre>`,`<hr>`,`<a>`],answer:`<p>`},
    {Question:`In HTML, which attribute is used to create a link that opens in a new window tab?`,options:[`src=”_blank”`,`alt=”_blank”`,`target=”_self”`,`target=”_blank”`],answer:`target=”_blank”`} 

]

let DSA = [
    {Question:`Prefix notation is alsow known as`,options:[`Reverse Polish Notation`,`Reverse Notation`,`Polish Reverse Notation`,`Polish Notation`],answer:`Polish Notation`},
    {Question:`Queue data structure works on`,options:[`LIFO`,`FIFO`,`FILO`,`none of the above`],answer:`FIFO`},
    {Question:`Which of the following is an example of dynamic programming approach?`,options:[`Fibonacci Series`,`Tower of Hanoi`,`Dijkstra Shortest Path`,`All of the above`],answer:`All of the above`},
    {Question:`Which of the following has search effeciency of Ο(1)`,options:[`Tree`,`Heap`,`Hash Table`,`Linked-List`],answer:`Hash Table`}
]

quizes = {"PF":PF,"WEB":WEB,"DSA":DSA}



// async function getJSON(filename)
// {
//    const json_url = filename+".json";
//    const response = await fetch(json_url);
//    const obj = await response.json();
//    return obj
// }
function render(event){
    // console.log("rendering quiz")
    id = event.target.id
    // questions = getJSON(id)
    // console.log(questions)
    questions=quizes[id]
    localStorage.setItem("Question",JSON.stringify(questions));
    localStorage.setItem("Quiz",JSON.stringify(id));
}

function setQuizes(){
    let quizeDiv = document.getElementById("quizes")
    for (const key in quizes) {
        // console.log(`${key}: ${user[key]}`);
        a = document.createElement("a")
        a.className = "item";
        a.id = key ;
        a.onclick = render;
        a.href = "Quiz.html"
        a.textContent = key
        quizeDiv.appendChild(a)
    }
}

setQuizes()





// let myJSON = `{
//     "name": "Hassan",
//     "age":21,
//     "male":true,
//     "score":86.74,
//     "salary":50000,
//     "lisence":null,
//     "shopItems": ["Food","clothes","groceries"],
//     "myObj": {
//         "semester": "6th",
//         "CGPA": 3.74,
//         "subjects": ["ead","AOA",
//         {
//             "cpp":"OOP",
//             "java":"dsa"
//         }]
//     }
// }`; //JSON string declared.

// const obj = JSON.parse(myJSON);      //JSON -> JS OBJECT
// const jstr = JSON.stringify(obj);    //JS OBJECT -> JSON str

// console.log("JSON STRING:");
// console.log(jstr);
// console.log("JS OBJECT:");
// console.log(obj);

// console.log(obj.name);
// //console.log(obj["name"]);   //same as above.

// console.log(obj.shopItems[2]);
// //console.log(obj["shopItems"][2]);   //same as above.

// console.log(obj.myObj.CGPA);
// //console.log(obj["myObj"]["CGPA"]);   //same as above.

// console.log(obj.myObj.subjects[2].java);
// //console.log(obj["myObj"]["subjects"][2]["java"]);  //same as above.



// Following code will work only on http or https url just for protection to use .json file.
// go and see it here  (http://jscode.unaux.com/code/5)JSON/read.html)


// -----------------following code can be used to get data from .json file-------------------
// const json_url = "first.json";
// async function getJSON()
// {
//    const response = await fetch(json_url);
//    const obj = await response.json();
//    return obj
//    console.log("It's an "+typeof obj);            //it's already in js object form so no need to parse.

//    //let obj = JSON.parse(data);      //JSON -> JS OBJECT

//    console.log(obj); 

//    console.log(obj.name);
//    //console.log(obj["name"]);   //same as above.

//    console.log(obj.shopItems[2]);
//    //console.log(obj["shopItems"][2]);   //same as above.

//    console.log(obj.myObj.CGPA);
//    //console.log(obj["myObj"]["CGPA"]);   //same as above.

//    console.log(obj.myObj.subjects[2].java);
//    //console.log(obj["myObj"]["subjects"][2]["java"]);  //same as above.
// } 

// getJSON().catch(error=>{             //calling and error handling.
//    console.log("error is :");
//    console.error(error);
// });


// following code can be used to get data as well.

// fetch("first.json")
// .then(response => response.json())
// .then(data=>{
//     console.log(data);
// }).catch(error=>{            // error handling.
//     console.log("error is :");
//     console.error(error);
// });
    
