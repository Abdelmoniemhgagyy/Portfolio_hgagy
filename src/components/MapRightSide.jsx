
function MapRightSide({data,title}) {
  return (
      
    <div>
     <h3 className="p-4 mt-5 text-2xl text-blue-700  uppercase">{title} :</h3>
      {data.map((item)=> 
         <div className="ml-[50px]  leading-[1.8]" key={item.id}>
             <div className="flex ">
                 <i className="fa-solid fa-caret-right mr-2 mt-1"></i>
                  <p className="max-w-[90%]">{item.title}</p>
             </div>

         </div>
       )}
      <hr  className='mx-auto w-[50%] p-0  my-6 border border-1 border-gray-500 rounded-full'/>
</div>
  )
}

export default MapRightSide