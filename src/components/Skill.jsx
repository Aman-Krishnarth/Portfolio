function Skill({skill,percentage}) {   
    
    return (
        <>

            <div className=" flex justify-between w-[93%] m-auto ml-4 mb-2 mt-4">
                <span className=" font-bold text-base">{skill}</span>
                <span className=" font-bold text-base">{percentage}%</span>
            </div>
            <div className="h-2 w-[90%] bg-[white] ml-4 mb-4">
                <div className={`h-2 w-[${percentage}%] bg-blue-600`}></div>
            </div>
            
        </>
    );
}

export default Skill;