import { useDispatch, useSelector } from 'react-redux';
import { fetchAPI } from '../reducer/ReducerProvider';
import { Fragment, useEffect } from 'react';

const Component1 = () => {
    let user= useSelector((prev)=>prev.user)
    let dispatch = useDispatch()
    useEffect(()=>{
            dispatch(fetchAPI())
    },[])
    console.log(user);
    
  return (
    <div>
      { user && user.map((v)=>{
        return <Fragment key={v.id}>
            <p>
            {v.name}
        </p>
        </Fragment>
     })}
    </div>
  )
}

export default Component1