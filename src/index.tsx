
import * as ReactDOM from 'react-dom'
import * as $ from 'jquery';
import * as bootstrap from 'bootstrap';
import {Menu, MarkdownMenuItem} from './components/menu'
import * as React from 'react';


let menus = [
    new MarkdownMenuItem("Test", "./test.md")
];
ReactDOM.render(
<Menu list={menus}></Menu>,document.getElementById('menu'))