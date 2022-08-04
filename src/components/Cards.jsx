import React from 'react'

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
  import { useSelector, useDispatch } from 'react-redux'
import { AddProduct } from '../Redux/productSlice'
function Cards(props) {
    const product = useSelector((state) => state)
    const count=useSelector((state)=>state.product.count)
    const dispatch = useDispatch()
    const add=(a,b,c,d)=>{
        dispatch(AddProduct(
            {
                title:a,
                p:b,
                price:c,
                img:d,
            }
            ));
           
    }
    
  return (
    <>
        <Card className="w-56 m-4 h-80">
                    <CardHeader color="blue" className="relative h-36">
                        <img
                            src={`${props.img}`}
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
                            <button onClick={()=>add(props.title, props.p , props.price , props.img)} className='bg-orange-500 text-white font-bold rounded-md m-2 p-1 mr-2'>اضافة الى السلة</button>
                        </Typography>
                    </CardFooter>
                </Card>

                
    </>
  )
}

export default Cards