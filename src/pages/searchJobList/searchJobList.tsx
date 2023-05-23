import { useForm } from '@mantine/form';
import { Input, Button, Flex, Box, Container } from '@mantine/core';

import { VacancyShortComponent } from "components/vacancyShortComponent";
import styles from './searcJobList.module.css'


function SearchJobList() {
    const form = useForm({
        initialValues: {
            search: '',
        },
    });

    return (
        <Container className={styles.container} >
            <Box w='50%' p='2rem' mx="auto" mt='1.2rem'>
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
            </Box>
            <div>
                <ul>
                    <li><VacancyShortComponent /></li>
                    <li><VacancyShortComponent /></li>
                    <li><VacancyShortComponent /></li>
                </ul>
            </div>
        </Container >
    )
}
export { SearchJobList };