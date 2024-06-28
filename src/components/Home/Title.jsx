const Titie = (  {titileName,vAll} ) => {

    return (
        <>
            <span className="font-bold text-[20px] text-Metropolis">{titileName}</span>
            <div className="flex items-center gap-[5px]">
                <span className="font-bold text-[#FC6011] text-[13px] text-Metropolis">{vAll}</span>
            </div>
        </>
    )
}
export default Titie