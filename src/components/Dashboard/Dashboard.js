import React from 'react';
import { Funnel, FunnelChart, LabelList, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            name: 'Page A',
            price: 4000,
            taxPrice: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            price: 3000,
            taxPrice: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            price: 2000,
            taxPrice: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            price: 2780,
            taxPrice: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            price: 1890,
            taxPrice: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            price: 2390,
            taxPrice: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            price: 3490,
            taxPrice: 4300,
            amt: 2100,
        },
    ];
    return (
        <LineChart width={730} height={250} data={data}>
            <Line dataKey={"price"}></Line>
            <Line dataKey={"taxtPrice"}></Line>
            <Line dataKey={"amt"}></Line>
            <XAxis dataKey={"name"}></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
        </LineChart>


    );
};

export default Dashboard;

{/* <FunnelChart width={730} height={250}>
<Funnel
    dataKey="price"
    data={data}
    isAnimationActive
>
    <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
</Funnel>
<Funnel
    dataKey="taxPrice"
    data={data}
    isAnimationActive
>
    <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
</Funnel>
<Funnel
    dataKey="amt"
    data={data}
    isAnimationActive
>
    <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
</Funnel>
<XAxis dataKey={"name"} />
<YAxis />
<Tooltip />
</FunnelChart> */}