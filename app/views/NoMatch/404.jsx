import React from 'react';

import Base from '../../Base';
import s from './404.sss';

export default class NoMatch extends Base {
    constructor(props) {
        super(props);

        this.color = "#333";
    }

    render() {
        return (
            <main className={'main ' + s.main } ref={(i) => this.main = i}>
                <div className={s.content}><span>404</span></div>
            </main>
        )
    }
}
