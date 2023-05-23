import { NavLink } from '@mantine/core';
import { Link } from "react-router-dom"
import styles from './linkComponent.module.css'

interface LinkComponentProps {
    item: { link: string; label: string },
    active: boolean;
    onHandleClick(link: string): void
}

function LinkComponent({ item, active, onHandleClick }: LinkComponentProps) {
    return (
        <Link onClick={() => onHandleClick(item.link)} className={`${styles.link} ${active && styles.active}`} key={item.label} to={item.link}>
            <NavLink
                key={item.label}
                label={item.label}
            />
        </Link>
    )
}
export { LinkComponent };