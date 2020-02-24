import React from 'react'
import { Consumer } from '@alist/react'
import { createVirtualBox } from '@formily/antd'
import { Button } from 'antd'

const Clear = (props) => {
    const { render, children, ...others } = props
    return <Consumer>
        {({ clear }) => {
            if (typeof render === 'function') {
                return render(clear)
            }
            return <Button {...others} onClick={() => {
                clear()
            }}>
                {children}
            </Button>
        }}
    </Consumer>
}

createVirtualBox('clear', Clear)

export default Clear;