import Header from "./components/Header";
import Footer from "./components/Footer";
export default function MyExamProject(){

  const myPage ="Ratthanun Term Project";
    const myName ="Ratthanun Rukkarn";
    const myStudID ="026730491008-1";
    const myExamProject =[
    {
    tpId: 1,
    tpTitle: "Colleen",
    tpDescription: "Colleen Shop",
    tpLogo: "/images/colorPencil.png",
    tpPrice: 199,
    tpWebsite: "https://www.colleenpencil.co.th/",
    tpTop10: true
    },
    {
    tpId: 2,
    tpTitle: "Pen and Pencil Shop",
    tpDescription: "Studying Shop",
    tpLogo: "/images/pen.png",
    tpPrice: 200,
    tpWebsite: "https://www.b2s.co.th/en/" ,
    tpTop10: false
    }
];

    const examProj = myExamProject.map((tpObj, index) =>
    <div className="grid grid-cols-5 mx-auto border-gray-300">
    <div className="w-32 p-1">
    <img src={tpObj.tpLogo} className="w-full rounded-full" title={tpObj.tpDescription+" ID: " +tpObj.tpId} />
    </div>
    <div className="p-4 col-span-3 mb-auto">
    <h2 className="text-lg font-semibold text-gray-800">{tpObj.tpDescription}</h2>
    <p className="text-gray-600 text-sm mt-2">{tpObj.tpTitle}</p>
    </div>
    <div className="p-4 mb-auto">
    <a href={tpObj.tpWebsite} className="bg-indigo-600 text-white rounded-sm hover:bg-indigo-700 px-10 py-2">Preview</a>
    </div>
    </div>
    );
    return (
        <>
      <Header title={myPage}/>  
      <p className="text-xl m-3 text-center">
        Name: {myName} Student ID: ({myStudID})
      </p>
      <div className="w-1/2 grid mx-auto h-100 overflow-auto rounded-2x1 border border-gray-300">
      {examProj}
      </div>
      <div className="ps-5 pe-5 pt-3 pb-3 bg-red-600 rounded w-16 flex justify-center mt-5">
        <a href="/">Back</a>
        </div>
      <Footer title="2025 Ratthanun Rukkarn. All Right Reserved." />
        </>
    );
}