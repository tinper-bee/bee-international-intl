import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'tinper-bee';
import Welcome from 'components/Welcome';
import './index.less';
import Locale  from 'bee-locale';
import { IntlProvider } from 'react-intl';
import zh from '../../local/zh_CN';    
import en from '../../local/en_US';
import classnames from 'classnames';


const languages = [
    {
      langName:'中文',
      langCode:'zh_CN'
    },
    {
      langName:'English',
      langCode:'en_US'
    },
]

class Intl extends Component {
  constructor(props){
    super(props);
    this.state={
      langCode:'en_US',
      lang:{
        ...en
      }
    }
  }
  chooseLocale=(langCode)=>{
      switch(langCode){
          case 'zh_CN':
          this.setState({
            langCode,
            lang:{...zh}
          })
          break;
          case 'en_US':
            this.setState({
              langCode,
              lang:{...en}
            })
          break;
      }
      
  }
  render() {
      const self = this;
      let { tinperLocale,locale,messages } = this.state.lang;
      return (
          <Locale locale={tinperLocale}>
              <IntlProvider key={locale} locale={locale} messages={messages}>
                  <div>
                    {
                      languages.map((item,index)=>{
                            return (
                              <Button shape="border" key={index} colors="primary"
                                className={classnames({'lang-btn':true,'active':this.state.langCode==item.langCode})}
                                onClick={()=>self.chooseLocale(item.langCode)}
                              >
                                  {item.langName}
                              </Button>
                            )
                      })
                    }
                    <Welcome/>
                  </div>
              </IntlProvider>
          </Locale>
      )
  }
}

export default Intl;