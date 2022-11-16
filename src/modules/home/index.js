import React, { useEffect, useState } from "react";
import styled from "styled-components";
import OverviewComponent from "./overviewcomponent";
import TransactionComponent from "./transactionComponent";

const Container = styled.div`
display:flex;
flex-direction:column;
text-align:center;
margin:30px 0 10px;
font-family: 'Poppins', sans-serif;
width:360px;
`;

const HomeComponent = (props) => {
    const [transactions, updateTransaction] = useState([]);
    const [expense, updateExpense] = useState(0);
    const [income, updateIncome] = useState(0);

    const calculateBalance = () => {
        let exp = 0;
        let inc = 0;
        transactions.forEach(payload => {
            if (payload.type === 'EXPENSE') {
                exp = exp + payload.amount
                console.log("c", payload.amount);
            } else {
                inc = inc + payload.amount
            }
        })
        updateExpense(exp);
        updateIncome(inc);
    };

    useEffect(() => calculateBalance(), [transactions]);
    const addTransaction = (payload) => {
        console.log(payload);
        const transactionArray = [...transactions];
        transactionArray.push(payload);
        updateTransaction(transactionArray);
        calculateBalance()
    };
    return <Container>
        <OverviewComponent expense={expense} income={income} addTransaction={addTransaction} />

        <TransactionComponent transactions={transactions} />
    </Container>;
};

export default HomeComponent;