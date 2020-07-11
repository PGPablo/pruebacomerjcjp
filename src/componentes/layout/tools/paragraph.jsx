import React from 'react';
import styles from '../style/styleParagraph.module.scss';

const Paragraph = (props) => {
    const {
        texto,
        ...rest
    } = props;

    return (
        <textarea className={styles.input} {...rest} >
            {texto}
        </textarea>
    );
};

export default Paragraph;