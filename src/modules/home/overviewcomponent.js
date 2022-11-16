import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin:10px;
font-family: 'Poppins', sans-serif;
width:100%;
`;

const BalanceBox = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
font-size:18px;
font-weight:bold;
width:100%;
`;
const AddTransaction = styled.button`
background:#000;
color:#fff;
padding:5px 10px;
border-radius:4px;
font-weight:bold;
font-size:15px;
cursor:pointer;
`;

const AddTransactionContainer = styled.div`
display:flex;
flex-direction:column;
border:solid 1px #e6e8e9;
gap:10px;
padding:10px 12px;
margin:20px;
width:100%;
& input{
    outline:none;
    padding:10px 12px;
    border-radius:4px;
    border:solid 1px #e6e8e9;
}
`;
const RadioBox = styled.div`
display:flex;
flex-direction:row;
width:100%;
align-items:center;
& input{
    width:unset;
    margin:0 10px;
}
`;
const AddTransactionView = (props) => {
    const [amount, setAmount] = useState();
    const [desc, setDesc] = useState();
    const [type, setType] = useState("EXPENSE");

    const addTransaction = () => {
        props.addTransaction({ amount:Number(amount), desc, type, id:Date.now(), });
        console.log();
        props.addTransactionClick();
    }
    return (
        <AddTransactionContainer>
            <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <input typr="text" placeholder="Description" value={desc} onChange={(e) => setDesc(e.target.value)} />
            <RadioBox>
                <input type="radio" id="expense" name="type" value="EXPENSE" checked={type === "EXPENSE"}
                    onChange={(e) => setType(e.target.value)} />
                <label htmlFor="expense">Expense</label>
                <input type="radio" id="income" name="type" value="INCOME" checked={type === "INCOME"}
                    onChange={(e) => setType(e.target.value)} />
                <label htmlFor="income">Income</label>
            </RadioBox>
            <AddTransaction onClick={() => { addTransaction() }}>Add Transaction</AddTransaction>
        </AddTransactionContainer>
    )
}

const ExpenseContainer = styled.div`
    display:flex;
    flex-direction:row;
    gap:12px;
    margin:20px;
`;
const ExpenseBox = styled.div`
    display:flex;
    flex-direction:column;
    border-radius:4px;
    padding:15px 20px;
    border:solid 1px #e6e8e9;
    width:135px;
    font-size:14px;
    & span{
        font-weight:bold;
        font-size:20px;
        color:${(props) => (props.isIncome? "green": "red")};
    }
`;

const OverviewComponent = (props) => {
    const [isAddTxnVisible, setIsAddTxnVisible] = useState(false);
    return (<Container>
        <BalanceBox>
            Balance: ${props.income - props.expense}
            <AddTransaction onClick={() => setIsAddTxnVisible(!isAddTxnVisible)}>
                {isAddTxnVisible ? "Cancel" : "ADD"}
            </AddTransaction>
        </BalanceBox>
        {isAddTxnVisible && <AddTransactionView  addTransactionClick={() => {
            console.log("setIsAddTxnVisible",isAddTxnVisible);
            setIsAddTxnVisible(!isAddTxnVisible)
        }} addTransaction={props.addTransaction} />}

        <ExpenseContainer>
            <ExpenseBox isIncome={false}>
                Expense<span>${props.expense}</span>
            </ExpenseBox>
            <ExpenseBox isIncome={true}>
                Income<span>${props.income}</span>
            </ExpenseBox>
        </ExpenseContainer>
    </Container>
    );
};

export default OverviewComponent;