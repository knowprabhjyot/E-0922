
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCount, incrementCount } from '../../actions/counterAction';

export default function Count() {

    const dispatch = useDispatch();
    const count = useSelector(state => state.count.count);
 
    return (
        <div>
            <button onClick={() => dispatch(incrementCount())}>
                Incrment
            </button>
                {count}
            <button  onClick={() => dispatch(decrementCount())}>
                Decrement
            </button>
        </div>
    )
}
