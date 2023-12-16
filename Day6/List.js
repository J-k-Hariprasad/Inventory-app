export default function List()
{
    const animals=["elephant","tiger","lion","bee","smash","killerBean"]
    const result=animals.map((ani,index)=><li key={index}>{index} => {ani}</li>)
    return(
        <div style={{backgroundColor:"royalblue'"}}>
            <ul type="none">
                {result}
            </ul>
        </div>
    )
}