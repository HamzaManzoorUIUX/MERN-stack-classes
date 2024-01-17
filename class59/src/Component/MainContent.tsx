import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const MainContent = () => {
    const {state,changeCounter}=useContext(GlobalContext)
    
    return (
        <div>
            <table className='w-full'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>title</th>
                        <th>image</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state?.products?.map((obj,index)=><tr key={"tr"+index}>
                            <th>
                                {index+1}
                            </th>
                            <td>
                                {obj.title}
                            </td>
                            <td>
                                <img src={obj.thumbnail} alt="" />
                            </td>
                            <td>
                                <div className='flex'>
                                <button type='button' className='bg-primary px-3' onClick={()=>changeCounter(obj.id,"-")}>
                                -
                                </button>
                                <input type="text" value={obj.counter} className='border border-2 text-center' />
                                <button type='button' className='bg-primary px-3' onClick={()=>changeCounter(obj.id,"+")}>
                                +
                                </button>
                                </div>
                            </td>
                            </tr>)
                    }
                    
                </tbody>
            </table>
        </div>
    );
};

export default MainContent;