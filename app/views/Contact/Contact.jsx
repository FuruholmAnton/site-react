import React from 'react';

import Base from '../../Base';
import s from './contact.sss';


export default class Contact extends Base {
    constructor(props) {
        super(props);

        this.color = "#B2DFDB";
    }

    render() {
        return (
            <main className={'main '} ref={(i) => this.main = i}>
                <h1>Contact</h1>

                <div className="">
                    <a href="mailto:anton.furuholm@gmail.com" className={s.email}>anton.furuholm@gmail.com</a>
                    <ul className={s.socialList}>
                        <li className={s.socialItem}>
                            <a href="https://github.com/FuruholmAnton">
                                <svg viewBox="0 0 16 16">
                                    <path d="M8 0C3.6 0 0 3.6 0 8c0 3.5 2.3 6.5 5.5 7.6.4 0 .5-.2.5-.4v-1.5c-2 .4-2.5-.5-2.7-1 0 0-.5-1-.8-1-.3-.2-.7-.6 0-.6.6 0 1 .7 1.2 1 .7 1 2 .8 2.4.6 0-.5.3-1 .6-1-1.8-.3-3.7-1-3.7-4 0-1 .2-1.6.7-2.2 0-.2-.3-1 0-2 0 0 .8-.3 2.3.7h4c1.5-1 2.2-.7 2.2-.7.5 1 .2 2 0 2 .6.7 1 1.4 1 2.3 0 3-2 3.7-3.7 4 .3.2.5.7.5 1.4v2.2c0 .2 0 .5.5.4A8 8 0 0 0 16 8c0-4.4-3.6-8-8-8z" />
                                </svg>
                            </a>
                        </li>
                        <li className={s.socialItem}>
                            <a href="https://www.linkedin.com/in/furuholm/">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm-2 16H8v-6h2v6zM9 9c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm8 7h-2v-3c0-1.7-2-1.6-2 0v3h-2v-6h2v1c1-1.5 4-1.6 4 1.6V16z" />
                                </svg>
                            </a>
                        </li>
                        <li className={s.socialItem}>
                            <a href="https://www.instagram.com/antonfuruholm/">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M14.8 6.3H9.2c-2 0-2.8 1-3 3v5.5c.2 2 1 2.8 3 3h5.6c2-.2 2.8-1 3-3V12 9.2c-.2-2-1-2.8-3-3zM12 15.6c-2 0-3.6-1.6-3.6-3.6S10 8.4 12 8.4s3.6 1.6 3.6 3.6-1.6 3.6-3.6 3.6zM15.7 9c-.4 0-.8-.3-.8-.7 0-.5.3-1 .7-1 .5 0 1 .5 1 1 0 .4-.5.8-1 .8zm-1.4 3c0 1.3-1 2.3-2.3 2.3s-2.3-1-2.3-2.3c0-1.3 1-2.3 2.3-2.3s2.3 1 2.3 2.3zM12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm7 15c-.2 2.4-1.6 3.8-4 4H9c-2.4-.2-3.8-1.6-4-4v-3-3c.2-2.4 1.6-3.8 4-4h6c2.4.2 3.8 1.6 4 4v6z" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </main>
        )
    }
}
