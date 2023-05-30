import "./App.css";

// const App=()=>{
//   const Button=()=>{
//     return <button>Click Me</button>
//   }
//   return (
//     <main className="container">
//       <Button />

//     </main>
//   )
// }
const Button = ({ children }) => {
  return <button>{children}</button>;
};
const Layout = () => {
  return (
    <main>
      <Button>Click Me</Button>
    </main>
  )
};
const App = () => {
  return (
    <main className="container">
      <Layout />
    </main>
  );
};
export default App;
