import {render} from 'react-dom'
import * as $ from 'jquery';
import * as React from 'react';
import * as markdown from 'markdown-it';


let md = new markdown();
// MenuItem interface
abstract class MenuItem {
    title : string; // menu title
    active : boolean;
    abstract click () :void
}
class MarkdownMenuItem extends MenuItem {
    mdFile : string // mark down file
    constructor(t : string, f : string) {
        super()
        this.title = t;
        this.mdFile = f;
    }
    click() {
        $.ajax(this.mdFile)
        .done((data)=>{
            $('#content').html(md.render(data));
        });
    }
}
interface MenuProperty {
    list : MenuItem[]
}
export class Menu extends React.Component<MenuProperty,{}> {
    constructor(props : MenuProperty){
        super(props);
    }
    render() {
        var self = this;
        const menuItems = this.props.list.map((l)=>{
            
            function clickEvents() {
                self.props.list.map((ll)=>{
                    ll.active = false;
                });
                l.active = true;
                l.click();
            }
            return <li className="nav-item">
                <a className={`nav-link ${l.active ? 'active' : ''}`} onClick={clickEvents}>{l.title}</a>
            </li>
        })
        return <ul className="nav">
            {menuItems}
        </ul>
    }
}