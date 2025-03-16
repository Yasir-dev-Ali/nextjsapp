interface Iprops {
    params: {
        dyparams: string[];
    };
    searchParams: {
        data: string;
    };

    

}


export  default function Payment(props: Iprops) {
        
    return(
        <>
        <div  className="flex justify-center    pl-20 flex-col align-center h-screen bg-gray-800 text-white">
            <h1>Zong</h1>
            {props.params.dyparams.map((item,index)=>{
                return <p key={index}>{item}</p>
            })} 
        </div>
        </>
    )
       
}