let parent = React.createElement("div",       //React element is object
    { id: "parent" },
    [React.createElement("div", { id: "chiid" },
        [React.createElement("h1", {}, "I Am H1 Tag"),
        React.createElement("h2", {}, "I Am H2 Tag"),
    ]),
    React.createElement("div", { id: "chiid2" },
        [React.createElement("h1", {}, "I Am H1 Tag"),
        React.createElement("h2", {}, "I Am H2 Tag"),
    ]),
]);

const add = ReactDOM.createRoot(document.getElementById("root"));
add.render(parent);

console.log(parent);

//JSX


// const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello World from React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// console.log(heading);


