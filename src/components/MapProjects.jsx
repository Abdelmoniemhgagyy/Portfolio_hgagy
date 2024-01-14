
function MapProjects({projects}) {
  return (
      <> 
      <h3 className="p-4 mt-5 text-2xl text-blue-700  uppercase">Projects :</h3>
      <div className="flex flex-wrap">
       {projects.map((item)=> 
          <div className="ml-[50px]  leading-[1.8] min-w-[400px]" key={item.id}>
              <div className="flex ">
                  <i className="fa-solid fa-caret-right mr-2 mt-1"></i>
                   <a href={item.url_live} target="_blank" className="max-w-[90%] cursor-pointer" rel="noreferrer">{item.title}</a>
              </div>
  
          </div>
        )}
      </div>
       <hr  className='mx-auto w-[50%] p-0  my-6 border border-1 border-gray-500 rounded-full'/>
      </>

  )
}

export default MapProjects