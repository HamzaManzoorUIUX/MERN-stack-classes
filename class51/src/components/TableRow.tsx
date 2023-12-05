import React ,{FC} from 'react';

const TableRow:FC<{data:any,indexVal:number,getValue:(e:any)=>void}> = ({data,indexVal,getValue}) => {
    
    return (
        <tr>
              <td>{indexVal+1}</td>
<td>
  <button type='button' onClick={()=>getValue(indexVal)}>
    click me
  </button>
</td>
<td>
  {data["first_name"]}
</td>
<td>
  {data["last_name"]}
</td>
<td>
  {data["company_name"]}
</td>
<td>
  {data["address"]}
</td>
<td>
  {data["city"]}
</td>
<td>
  {data["county"]}
</td>
<td>
  {data["state"]}
</td>
<td>
  {data["zip"]}
</td>

            </tr>
    );
};

export default TableRow;