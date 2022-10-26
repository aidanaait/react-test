import React, { Component, useState } from 'react';
import {FaStar} from 'react-icons/fa'
import {createArray} from '../services/createArray'
import Star from './star';
//sfc

const StarRating = ({totalStars=5, selectedStars, onRate=f=>f}) => {
    return(<div style={{padding: '10px'}}>
       { createArray(totalStars).map((star,index)=> 
        <Star 
        key={index}
        selected = {selectedStars>index}
        onSelect = {()=>onRate(index+1)}
        />)}
        <p>{selectedStars} of {totalStars}</p>
        </div>
    )
}
 
export default StarRating;