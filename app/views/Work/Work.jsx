import React from 'react';

import Base from '../../Base';
import s from './work.sss';


export default class Work extends Base {
    constructor(props) {
        super(props);

        this.color = "#c4dce6";
    }
    
    render() {
        return (
            <main className={'main '} ref={(i) => this.main = i}>
                <h1 className={s.heading}>Work</h1>
                <div className="">
                    <p>Coming soon!</p>
                </div>
            </main>
        )
    }
}
