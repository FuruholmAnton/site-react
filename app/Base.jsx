import React from 'react';
import {TweenLite, Power2, TimelineLite} from "gsap";

export default class Base extends React.Component {
    constructor(props) {
        super(props);

        this.color = "#ccc";
    }

    componentDidMount() {
        document.body.style.setProperty("--background-main", this.color);

        setTimeout(() => {
            TweenLite.to(this.main, 1, {opacity: 1});
        }, 600);
    }
}