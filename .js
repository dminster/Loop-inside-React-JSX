Think of it like you're just calling JavaScript functions. You can't use a for loop where the arguments to a function call would go:

return tbody(
    for (var i = 0; i < numrows; i++) {
        ObjectRow()
    } 
)
See how the function tbody is being passed a for loop as an argument – leading to a syntax error.

But you can make an array, and then pass that in as an argument:

var rows = [];
for (var i = 0; i < numrows; i++) {
    rows.push(ObjectRow());
}
return tbody(rows);
You can use basically the same structure when working with JSX:

var rows = [];
for (var i = 0; i < numrows; i++) {
    // note: we add a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    rows.push(<ObjectRow key={i} />);
}
return <tbody>{rows}</tbody>;
Incidentally, my JavaScript example is almost exactly what that example of JSX transforms into. Play around with Babel REPL to get a feel for how JSX works.
