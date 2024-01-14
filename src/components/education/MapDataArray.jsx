function MapDateArray({data,title}) {
  return (
    <>
        
            <div className={`${title}`} data-aos="fade-right" >
            <h3>{title}</h3>
            {data.map((item,i)=> (
            <>
            <p data-aos="fade-right" key={i}>{item.title}</p>
            </>
        ))}
        </div>
    </>
  )
}

export default MapDateArray