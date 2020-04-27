import React, { Component,createRef } from 'react'
import { Row, Col, Card,Button } from 'antd'
import {withRouter} from 'react-router-dom'
import {getArticleAmount} from '../../requests'
import './dashboard.less'

import echarts from 'echarts'
// const overViewColors = []
const style1={backgroundColor: '#29B6F6'}
const style2={backgroundColor: '#AD1457'}
const style3={backgroundColor: '#FB8C00'}
const style4={backgroundColor: '#43A047'}

@withRouter
class Dashboard extends Component {
    constructor(){
        super()
        this.articleAmount=createRef()
    }

    initArticleChart=()=>{
        this.articleChart = echarts.init(this.articleAmount.current)
        getArticleAmount()
            .then(resp=>{
                // console.log(resp)
                const option = {
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: resp.amount.map(item=>item.month)
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: resp.amount.map(item=>item.value),
                        type: 'line',
                        areaStyle: {}
                    }]
                }
                // 使用刚指定的配置项和数据显示图表。
                this.articleChart.setOption(option)
            })
        
        
        
    }


    componentDidMount(){
        this.articleChart=echarts.init(this.articleAmount.current)
        this.initArticleChart()
    }

    render() {
        return (
            <>
            <Card 
                title="概要"
                bordered={false}
                extra={<Button onClick={this.props.history.goBack}>取消</Button>}  
            >
                <Row gutter={16}>
                    <Col className="qf-gutter-row" span={6}>
                        <div className="qf-gutter-box" style={style1}>col-6</div>
                    </Col>
                    <Col className="qf-gutter-row" span={6}>
                        <div className="qf-gutter-box" style={style2}>col-6</div>
                    </Col>
                    <Col className="qf-gutter-row" span={6}>
                        <div className="qf-gutter-box" style={style3}>col-6</div>
                    </Col>
                    <Col className="qf-gutter-box" span={6}>
                        <div className="qf-gutter-box" style={style4}>col-6</div>
                    </Col>
                </Row>

            </Card>

            <Card 
            title="最近浏览量"
            bordered={false}
            >
                <div  ref={this.articleAmount} style={{height:'400px'}} />
            </Card>
            </>
        )
    }
}


export default  Dashboard
