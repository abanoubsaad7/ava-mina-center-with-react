import MainNav from "./components/main_and_side_Bar/mainNav";

function App() {
  return (
    <div className="App">
      <MainNav />
      <div className="row container" style={{ direction: "rtl" }}>
        <div className="col-lg-5">
          <h1>مركز الكورسات المتخصصة</h1>
          <br />
          <br />
          <center>
            <button className="btn btn-lg btn-warning">تواصل معنا</button>
          </center>
        </div>
        <div className="col-lg-6">
          <img src="/img/logo.jpeg" alt="..." width={"100%"} height={"450px"}/>
        </div>
      </div>
    </div>
  );
}

export default App;
