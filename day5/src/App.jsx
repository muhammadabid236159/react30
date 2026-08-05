function Button() {
  let heading = "Welcome to React Events";

  // Normal Function
  function sayHello() {
    alert("Hello Abid");
  }

  // Normal Function
  function welcome() {
    alert("Welcome to React");
  }

  // Arrow Function
  const goodbye = () => {
    alert("See you Tomorrow");
  };

  function hello(name){
    alert( `welcome ${name}`)
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{heading}</h1>

      <button onClick={sayHello}>
        Hello
      </button>

      <br /><br />

      <button onClick={welcome}>
        Welcome
      </button>

      <br /><br />

      <button onClick={goodbye}>
        Good Bye
      </button>
      <br /><br />
      <button onClick={()=>hello("abid")}>HI</button>
    </div>
  );
}

export default Button;