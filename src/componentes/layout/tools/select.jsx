import React from 'react'
import styles from '../style/styleSelect.module.scss'
import TextField from './textfield'

class Select extends React.Component {
    state = {
        isOpen: false
    }

    render() {
        const {
            options,
            value,
            onChange,
            onBlur,
            placeholder
        } = this.props
        const {
            isOpen
        } = this.state

        return (
            <div className={styles.option}>
                <TextField 
                    placeholder={placeholder}
                    type="Text"
                    value={value}
                    onChange = {() => {}}
                    onClick={() => this.setState({isOpen: !isOpen})}
                />
                { isOpen &&
                    <ul className={styles.optionList}>
                        {options.map( option => 
                            <li className={styles.optionListItem}
                                key={option.value}
                                onClick={(e) => {
                                    onChange(option.value)
                                    onBlur(e)
                                    this.setState({ isOpen: false })
                                }}>
                                {option.label}
                            </li>
                        )}
                    </ul>
                }
            </div>
        )
    }
}

export default Select