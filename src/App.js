import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="bg-[#AE67FE]">
      <div className="h-screen w-screen flex justify-center items-center flex-col">
        <h1 className="text-4xl font-bold text-white">User Profile Section</h1>
        <div className="bg-white rounded-lg">
          <img width="600px" src="Images/abc.png" alt="pic" />
          <div className="flex flex-row">
            <img
              src="Images/user.png"
              width={80}
              className="rounded-full  bg-white mt-[-50px] ml-[20px]"
              alt="pic"
            />
            <div className=" bg-green-400 rounded-full p-1 h-fit w-fit border-2 border-white ml-[-10px]"></div>
          </div>
          <h1 className="font-bold text-2xl px-[30px]">Rafia Khurshid</h1>
          <h1 className="text-zinc-500 px-[30px]">
            {" "}
            7000 followers - 700 following
          </h1>
          <p className=" px-[30px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Minima ad dolor alias doloremque nobis et, ab aspernatur sed{" "}
            <br /> voluptatibus eum dolorum ratione ipsam porro error laboriosam
          </p>
          <div className=" border border-b border-black mt-[10px] "></div>
          <div className="flex flex-row items-center gap-2 mt-[10px] mb-[10px] ">
           <a href=""><img src="Images/fb.png" width={50}/></a> 
           <a href=""><img src="Images/linkdin.png" width={40}/></a>
           <a href=""><img src="Images/twitter.png" width={40}/></a> 
           <a href=""><img src="Images/youtube.png" width={40}/></a> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
