 export default function Logo(){
return (
    <>
    <h1 className="text-2xl text-neutral-50 text-center bg-red-600">Logo</h1>
    <div className="p-10 bg-yellow-100 rounded">
        <img src="/images/colorPencil.png" className="rounded-full w-32 shadow-lg border-4 border-neutral-50 mx-auto"/>
        <h2 className="text-xl text-center text-red-900">Basic School Supplies</h2>
        <p className="text-center border-1 rounded w-1/2 mx-auto p-5">- Book -</p>
        <p className="text-center">- Pencil -</p>
        <p className="text-center">- Pen -</p>
        <p className="text-center">- Notebook -</p>
        <p className="text-center">- Color Case -</p>
        <p className="text-center">- Pencil and Pen Case -</p> 
   </div>

    </>
    );
 }