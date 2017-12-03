import React from 'react';

import Base from '../../Base';
import s from './home.sss';


export default class Home extends Base {
    constructor(props) {
        super(props);

        this.color = "#B7DBC2";
    }
    
    render() {
        return (
            <main className={'main ' + s.main} ref={(i) => this.main = i}>
                <div className={s.content}>
                    <h2 className={s.greeting}>Hello!</h2>
                    <h1 className={s.bio}>I'm a web developer.</h1>
                    </div>
                <a href="mailto:anton.furuholm@gmail.com" className={s.email}>anton.furuholm@gmail.com</a>
            </main>
        )
    }
}
