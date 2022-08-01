import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
  import { useDispatch } from 'react-redux'
  import { RemoveProduct } from '../Redux/productSlice'
function ReqCard(props) {
    const dispatch = useDispatch()
    const remove=(pop)=>{
        dispatch(RemoveProduct(pop));
    }
 
    return (

    <div>
        <>
        <Card className="w-56 m-4 h-80">
                    <CardHeader color="blue" className="relative h-36">
                        <img
                            src={props.img}
                            alt=""
                            className="h-full w-full"
                        />
                    </CardHeader>
                    <CardBody className="text-start p-2">
                        <Typography variant="h5" className=" font-bold">
                                {props.title}
                        </Typography>
                        <Typography >
                            {props.p}
                        </Typography>
                    </CardBody>
                    <CardFooter divider className="flex items-center justify-between p-2 ">
                        <Typography variant="h5"> {props.price}$</Typography>
                        <Typography variant="h5" color="gray" className="flex gap-1">
                            <button onClick={()=>remove(props.title)} className='bg-red-500 text-white font-bold rounded-md m-2 p-1 mr-2'>حذف</button>
                        </Typography>
                    </CardFooter>
                </Card>

                
    </>
    </div>
  )
}

export default ReqCard