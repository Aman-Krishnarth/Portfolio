function Skill({skill,percentage}) {   

    console.log("SKILL COMPONENT")
    
    return (
        <>

            <div className=" flex justify-between w-[93%] m-auto ml-4 mb-2 mt-4">
                <span className=" font-bold text-base text-[#e77272]">{skill}</span>
                <span className=" font-bold text-base text-[white]">{percentage}%</span>
            </div>
            <div className="h-2 w-[90%] bg-[white] ml-auto mr-auto mb-4">
                <div className={`h-2 w-[${percentage}%] bg-green-600`}></div>
            </div>
            
        </>
    );
}

export default Skill;