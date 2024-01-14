
function MapLeftSide({items}) {
  return (
    <div className="my-4" >
    {items.map((item)=> (
        <div className="px-4 my-2" key={item.id}>
          <a href={item.link} target={`_blank`} className='flex space-x-3 items-center text-gray-200 font-[500]  whitespace-nowrap' >
              {/*item.icon only for contact array */}
             {item.icon && <i className={`${item.icon} text-xl`}></i>}
             {/*item.id = number of the skills  */}
             <div className="flex space-x-1">
             {!item.icon && <span>{item.id} - </span>} <p> {item.title}</p>
             </div>
          </a>
        </div>
      ))}
</div>
  )
}

export default MapLeftSide