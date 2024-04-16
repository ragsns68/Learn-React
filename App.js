/**
 * React rendering with single children tag
 * <div id="root">
 * <h1 id="heading" xyz="abc">Hello World From React !</h1>
 * </div>
 * 
 */


const heading=React.createElement("h1",{id:"heading",xyz:"abc"},"Hello World From React !")
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)
