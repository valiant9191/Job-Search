import { Input, Box, NumberInput, Title, Group, Text, Button } from '@mantine/core';
import { Form, useForm } from '@mantine/form';
import { IconChevronDown, IconX } from '@tabler/icons-react';

import styles from './searchFilterComponent.module.css'

function SearchFilterComponent() {
    const form = useForm({
        initialValues: {
            search: '',
        },
    });
    return (
        <Form className={styles.container} form={form}>
            <Group className={styles.textGroupMain}>
                <Title order={2}>Фильтры</Title>
                <Text className={styles.textReset} c="dimmed" ta="center">
                    Сбросить все
                    <IconX size={14} stroke={1.5} />
                </Text>
            </Group>
            <Box className={styles.filters}>
                <Box className={styles.filterItem}>
                    <Title order={4}>Отрасль</Title>
                    <Input component="select" rightSection={<IconChevronDown size={14} stroke={1.5} />}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </Input>
                </Box>
                <Box>
                    <Title order={4}>Оклад</Title>
                    <NumberInput
                        placeholder="От"
                        mt="md"
                        min={0}
                        /* eslint-disable-next-line react/jsx-props-no-spreading */
                        {...form.getInputProps('salaryFrom')}
                    />
                    <NumberInput
                        placeholder="До"
                        mt="md"
                        min={0}
                        /* eslint-disable-next-line react/jsx-props-no-spreading */
                        {...form.getInputProps('salaryUpTo')}
                    />
                </Box>
            </Box>
            <Button className={styles.submitBtn} type="submit">Применить</Button>
        </Form>
    )
}
export { SearchFilterComponent };