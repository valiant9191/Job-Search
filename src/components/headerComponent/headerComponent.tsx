import { useState } from 'react';
import { Header, Group, } from '@mantine/core';
import { LinkComponent } from 'components/headerComponent/linkComponent';
import { ReactComponent as Logo } from '../../assets/logo_main.svg';
import styles from './headerComponent.module.css';


interface HeaderResponsiveProps {
    links: { link: string; label: string }[];
}


function HeaderComponent({ links }: HeaderResponsiveProps) {
    const [active, setActive] = useState(links[0].link);

    const handleMenuClick = (path: string) => setActive(path);

    const items = links.map((item) => (
        <LinkComponent key={item.label} onHandleClick={handleMenuClick} item={item} active={active === item.link} />
    ));

    return (
        <Header height={84} classNames={{ root: styles.header }}>
            <Group position="center" noWrap>
                <Logo />
                <h1>Jobored</h1>
            </Group>
            <Group position="center">
                {items}
            </Group>
        </Header>
    )
}

export { HeaderComponent }