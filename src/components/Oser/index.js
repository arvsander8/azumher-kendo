//Dependencies
import React, {Component} from 'react';

import { PanelBar, PanelBarItem} from '@progress/kendo-react-layout';
class Oser extends Component{
        render(){
            return(
                <div>
                    <p>PanelBar</p>
                     <PanelBar dir="rtl">
                       <PanelBarItem title="Invasion Games">
                         <PanelBarItem title="Hockey"></PanelBarItem>
                         <PanelBarItem title="Soccer"></PanelBarItem>
                         <PanelBarItem title="Rugby"></PanelBarItem>
                       </PanelBarItem>
                       <PanelBarItem title="Net & Court Games" expanded="false">
                         <PanelBarItem title="Badminton"></PanelBarItem>
                         <PanelBarItem title="Squash"></PanelBarItem>
                         <PanelBarItem title="Tennis" selected={true}></PanelBarItem>
                         <PanelBarItem title="Table Tennis"></PanelBarItem>
                         <PanelBarItem title="Volleyball"></PanelBarItem>
                       </PanelBarItem>
                       <PanelBarItem title="Target Games">
                         <PanelBarItem title="Golf"></PanelBarItem>
                         <PanelBarItem title="Lawn bowls"></PanelBarItem>
                         <PanelBarItem title="Tenpin bowling"></PanelBarItem>
                       </PanelBarItem>
                     </PanelBar>
           
        
                </div>
            );
        }
}
 export default Oser;