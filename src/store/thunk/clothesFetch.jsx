import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const FetchClothes = createAsyncThunk('clothes/fetch',async()=>{
    const response = await axios.get('https://fakestoreapi.com/products')
    console.log(response.data)
})

export {FetchClothes};