import Header from "./components/Header";
import Footer from "./components/Footer";
import { myTermProject } from "./data/ExamProject";
import { useEffect, useState } from "react";
import { ExamProject } from "./components/ExamProject";
export default function MyTermProject(){

  const [stuff, setStuff] = useState({
    stuffTitle: "Web Programming",
    stuffDesc: "พัฒนาด้วย React & Tailwind CSS",
    stuffPrice: 199,
    stuffAuthor: "Beritokai",
    stuffCover: "/images/book.png"
  });
  const [nextId, setNextId] = useState(1); 
  const [stuffs, setStuffs] = useState([]);
  const [stuffId, setStuffId] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(stuffs.length);
  },[stuffs.length]);

    const myPage ="Ratthanun Term Project";
    const myName ="Ratthanun Rukkarn";
    const myStudID ="026730491008-1";

    const addStuff = (e) => {
      setStuff([
        ...stuffs,
        {
          id: nextId,
          stuffTitle: stuff.stuffTitle,
          stuffPrice: stuff.stuffPrice,
          stuffAuthor: stuff.stuffAuthor,
          stuffCover: stuff.stuffCover
        }
      ]);
      setNextId(nextId+1);
    }

    const deleteStuff = (stuffId) => {
      setBooks(
      stuffs.filter((stfTmp, index) =>
        stfTmp.id !== stuffId
        )
      );
    }
    const editStuff = (stuffId) => {
      const stuffTmp = stuffs.filter(bTmp =>
        stfTmp.id === stuffId
      )
      setStuff(stuffTmp[0]);
      setStuffId(stuffId);
    } 

    function StuffDashboard(){
    return (
      <div className="lg:w-1/4 md:w-1/2 sm:w-full grid grid-cols-1 m-4">
        <div className="md:col-span-1 bg-white rounded-lg shadow-md p-4 grid grid-cols-2 text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-16">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </div>
          <div>
            <span className="sr-only">Info</span>
            <div className="text-center">
              <span className="text-7xl">{count}</span>
            </div>
            <div className="text-center">
              Number of Stuffs
            </div>
          </div>
        </div>
      </div>
    );
  }
  
    const stuffItems = stuffs.map((stfObj, index) =>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
           <a href="#">
             <img className="rounded-t-lg" src={stfObj.stuffCover} title={stfObj.stuffTitle} />
           </a>
           <div className="p-5">
             <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{stfObj.stuffTitle}</h5>
             </a>
             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{stfObj.stuffDesc}</p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800" onClick={(e)=>editStuff(stfObj.id)}>
              [E] Edit
              </a>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={(e)=>deleteStuff(stfObj.id)}>
              [D] Delete
              </a>
            </div>
          </div>
    );

    const handleTitleChange = (e) => {
      setStuff({
        ...stuff,
        stuffTitle: e.target.value
      });
    }
    const handleDescChange = (e) => {
      setStuff({
        ...stuff,
        stuffDesc: e.target.value
      });
    }
    const handlePriceChange = (e) => {
      setStuff({
        ...stuff,
        stuffPrice: e.target.value
      });
    }
    const handleAuthorChange = (e) => {
      setStuff({
        ...stuff,
        stuffAuthor: e.target.value
      });
    }
    const handleCoverChange = (e) => {
      setStuff({
        ...stuff,
        stuffCover: e.target.value
      });
    }

    const resetForm = (e) => {
      setStuff({
        stuffTitle: "", stuffDesc: "", stuffCover: "", stuffPrice: 0.0, stuffAuthor: ""
      });
    }
   
    const updateStuff = () => {
      alert("Update:"+stuffId);
      const stuffTmp = stuffs.map(bTmp =>
        stfTmp.id === stuffId ?
        {
        ...stfTmp,
          id: nextId,
          stuffTitle: stuff.stuffTitle,
          stuffPrice: stuff.stuffPrice,
          stuffAuthor: stuff.stuffAuthor,
          stuffCover: stuff.stuffCover
        }
      :
      stfTmp
      );
      setStuffs(stuffTmp);
      resetForm(e);
      setStuffId(0);
    }

    return (
        <>
      <Header title={myPage}/>  
      <p className="text-xl m-3 text-center text-gray-500">
        --<br />
        Name: {myName}<br />
        Student ID: ({myStudID})<br />
        --
      </p>
      <div className="mx-auto flex justify-center">
        <StuffDashboard />
      </div>
      <div className="flex justify-center w-1/2 grid mx-auto h-100 overflow-auto rounded-2x1 border border-gray-300">
      <form className="max-w-sm mx-auto">
           เพิ่มหนังสือใหม่
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อหนังสือ</label>
            <input
              value={stuff.stuffTitle}
              onChange={handleTitleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">อธิบาย</label>
            <input
              value={stuff.stuffDesc}
              onChange={handleDescChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ราคา</label>
            <input
              value={stuff.stuffPrice}
              onChange={handlePriceChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เขียนโดย</label>
            <input
              value={stuff.stuffAuthor}
              onChange={handleAuthorChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">หน้าปกหนังสือ</label>
            <input
              value={stuff.stuffCover}
              onChange={handleCoverChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
           <div className="mb-5">
            { stuffId !== 0 ?
             <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={updateStuff}>
              [U] Update stuff
              </button>
              :
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={addStuff}>
              Add New stuff
              </button>
              }
              <button type="button" className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800" onClick={resetForm}>
              Clear
              </button>
           </div>
        </form>
      </div>
      <div>...
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
           <a href="#">
             <img className="rounded-t-lg" src={stuff.stuffCover} title={stuff.stuffTitle} />
           </a>
           <div className="p-5">
             <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {stuff.stuffTitle} ({stuff.stuffPrice} THB)
                </h5>
             </a>
             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {stuff.stuffDesc}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              ผู้แต่ง (Author): {stuff.stuffAuthor}
              </p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto grid overflow-hide">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 flex">
          {stuffItems}
        </div>
      </div>

      <h3 className="w-1/2 mx-auto rounded-2xl flex justify-center">
      จำนวน {ExamProject.length} รายการ
      </h3>
      <div className="ps-5 pe-5 pt-3 pb-3 bg-red-600 rounded w-16 flex justify-center mt-5">
        <a href="/">Back</a>
        </div>
      <Footer title="2025 Ratthanun Rukkarn. All Right Reserved." />
        </>
    );
}