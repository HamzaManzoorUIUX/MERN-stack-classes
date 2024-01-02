import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const MainContent = () => {
    const {state}=useContext(GlobalContext)
    console.log('apiData',state);
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>title</th>
                        <th>image</th>
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
                                <button type='button' className='bg-primary px-3'>
                                -
                                </button>
                                <input type="text" value={1} className='border border-2 text-center' />
                                <button type='button' className='bg-primary px-3'>
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