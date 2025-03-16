interface Iprops {
    params: {
        SingleProduct: string;
    };
    searchParams: {
       name: string;
       id: string;  
       rating: string;
       price: string;
    };

}


export  default function SingleProduct(props: Iprops) {
        // const {name,id,rating,price} = props.searchParams;
        const {name,id,rating,price} = props.searchParams;
    return (
        <div  className="flex justify-center    pl-20 flex-col align-center h-screen bg-gray-800 text-white">
            <h1 className="pr-20">Single Product</h1><br />
            <h1 className="pr-20">Name: {name}</h1><br />
            <h1 className="pr-20">Id: {id}</h1><br />
            <h1 className="pr-20">Rating: {rating}</h1><br />
            <h1 className="pr-20">Price: {price}</h1><br />
        </div>
    );
}