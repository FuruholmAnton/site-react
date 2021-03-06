import React from 'react';

import Base from '../../Base';
import s from './about.sss';


export default class About extends Base {
    constructor(props) {
        super(props);

        this.color = "#C2E8CD";
    }
    
    render() {
        return (
            <main className={'main '} ref={(i) => this.main = i}>
                <h1>About</h1>

                <div className={s.copy}>
                    <p>
                        I'm a Swedish web developer. I mainly work with HTML, CSS, JavaScript, PHP, WordPress, and React. 
                    </p>
                    
                    <p>
                        I work at <a href="//www.buildinamsterdam.com">Build in Amsterdam BV</a>, where we build mainly E-Commerce websites. We work in smaller teams, usually of 1-4 developers, in close collaboration with the designer/s.
                    </p>
                </div>
            </main>
        )
    }
}
