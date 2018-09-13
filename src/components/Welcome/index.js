import React,{ Component } from 'react';
import { Popconfirm,Button,FormControl } from 'tinper-bee';
import Pagination from 'bee-pagination';
import 'bee-pagination/build/Pagination.css'
import './index.less';
import { FormattedMessage, defineMessages,injectIntl } from 'react-intl';

const locales = defineMessages({
    welcome: {
        id: 'Demo.welcome',
        defaultMessage: '欢迎使用',
    },
    showTime: {
        id: 'Demo.showTime',
        defaultMessage: '本页面来自演示组件',
    },
    value: {
        id: 'Demo.value',
        defaultMessage: '请输入内容',
    },

});

class Welcome extends Component{
  constructor(props) {
      super(props);
      this.state = {
        activePage:1
      }

 }

  handleSelect(eventKey) {
    console.log(event);
      this.setState({
        activePage: eventKey
      });
  }

  dataNumSelect = (index,value) =>{
      console.log(index,value);

  }

render(){
    const content = 'Do you like tinper-bee UI Components Library？';
    const {formatMessage} = this.props.intl;
    return (
        <div>
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">
                <FormattedMessage  {...locales.welcome}/>
              </h3>
            </div>
            <div className="panel-body">
              <FormattedMessage  {...locales.showTime}/>
              
              <FormControl placeholder={formatMessage(locales.value)} />

              <Pagination
                first
                last
                prev
                next
                maxButtons={5}
                boundaryLinks
                activePage={this.state.activePage}
                onSelect={this.handleSelect.bind(this)}
                onDataNumSelect={this.dataNumSelect}
                showJump={true}
                total={100}
                dataNum={2}
              />

            </div>
          </div>
        </div>
    )
  }
}

export default injectIntl(Welcome);