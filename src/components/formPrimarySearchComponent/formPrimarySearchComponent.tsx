import { useForm } from '@mantine/form';
import { Input, Button, Flex } from '@mantine/core';
import styles from './formPrimarySearchComponent.module.css';



function FormPrimarySearchComponent() {

    const form = useForm({
        initialValues: {
            search: '',
        },
    });

    return (
        <form className={styles.form} onSubmit={form.onSubmit((values) => console.log(values))}>
            <Flex className={styles.search} >
                <Input
                    className={styles.inputSearch}
                    placeholder="Введите название вакансии"
                    /* eslint-disable-next-line react/jsx-props-no-spreading */
                    {...form.getInputProps('search')}
                />

                <Button className={styles.submitBtn} type="submit">Поиск</Button>
            </Flex>
        </form>
    )
}

export { FormPrimarySearchComponent }