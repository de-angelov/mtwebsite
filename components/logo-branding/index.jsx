import  React from 'react';
import style from './style.scss';

const LogoBranding = () => (
<a className={style.container}>
    <img className={style.img} src="../static/logo@2x.png" alt="mt design logo"/>
    <h1 className={style.textContainer}>
        <span>Architecture</span>
        <span>Landscape Architecture</span>
        <span>Ecological Engineering</span>
    </h1>
</a>
)



export default LogoBranding;

