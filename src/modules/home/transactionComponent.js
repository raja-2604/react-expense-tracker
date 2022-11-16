import styled from "styled-components";
import React, { useEffect, useState } from "react";

const Container=styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
font-size:18px;
width:100%;
gap:10px;
font-weight:bold;
& input{
    padding:10px 12px;
    border-radius:12px;
    background:#e6e8e9;
    border:solid 1px #e6e8e9;
    outline:none;
    width:100%;
    font-size:16px;
}
`;
const Cell = styled.div`
display:flex;
flex-direction:row;
padding:10px 15px;
font-size:16px;
border-radius:2px;
align-items:center;
font-weight:normal;
justify-content:space-between;
border:solid 1px #e6e8e9;
border-right:solid 4px ${(props) => (props.isExpense? "red": "green")}; 
width:100%;
`;
const TransactionCell = (props) => {

    return(
    <Cell isExpense={props.payload?.type==="EXPENSE"}>
        <span>{props.payload.desc}</span>
        <span>${props.payload.amount}</span>
    </Cell>
        )

}

const TransactionComponent = (props) => {
    const [searchdText, updateSearchText] = useState("");
    const [filteredTransaction, undeteTXn] = useState(props.transactions);

    const filterData= () =>{ 
        if(!searchdText || !searchdText.trim().length){
            undeteTXn(props.transactions);
            return;
        }
        let txn=[...props.transactions];
        txn=txn.filter((payload)=> payload.desc.toLowerCase().inludes(searchdText.toLowerCase().trim()) );
        undeteTXn(txn)
    };
    useEffect(()=> filterData(searchdText), [props.transactions]);
    return(<Container>Transaction
<input placeholder="Search" value={searchdText} onChange={(e)=> {updateSearchText(e.target.value); filterData(e.target.value)}} />
        {filteredTransaction?.length? filteredTransaction.map((payload)=>(<TransactionCell payload={payload}/>)) :""}
    </Container>);
};

export default TransactionComponent;